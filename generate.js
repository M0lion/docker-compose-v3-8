const fs = require('fs');
const https = require('https');
const { compile } = require('json-schema-to-typescript');

// Documentation mapping for Docker Compose v3.8 properties
const DOCUMENTATION = {
	// Root level
	version: 'Compose file format version. Use "3.8" for Docker Swarm compatibility.',
	services: 'Services that make up your application. Each service runs in its own container.',
	networks: 'Networks to be created. Services can be connected to these networks.',
	volumes: 'Named volumes that can be reused across multiple services.',
	secrets: 'Sensitive data like passwords, SSH keys, etc. Only available in Swarm mode.',
	configs: 'Configuration files that can be used by services. Only available in Swarm mode.',

	// Service properties
	image: 'Docker image to use. Format: "name:tag" or "registry/name:tag"',
	build: 'Build configuration if you want to build the image instead of pulling it.',
	ports: 'Expose ports. Format: "HOST:CONTAINER" or just "CONTAINER" for random host port.',
	environment: 'Environment variables. Can be array format or object format.',
	volumes: 'Mount volumes. Format: "host_path:container_path" or "volume_name:container_path"',
	depends_on: 'Service dependencies. This service will start after dependencies.',
	networks: 'Networks this service is connected to.',
	deploy: 'Deployment configuration for Swarm mode. Only works with docker stack deploy, ignored by docker-compose up.',
	restart: 'Restart policy: "no", "always", "on-failure", "unless-stopped"',
	command: 'Override the default command. Can be string or array format.',
	entrypoint: 'Override the default entrypoint. Can be string or array format.',
	working_dir: 'Working directory inside the container.',
	user: 'User to run commands as. Can be username or UID.',
	hostname: 'Container hostname.',
	labels: 'Metadata labels for the container.',

	// Deploy properties (Swarm-specific)
	replicas: 'Number of service replicas to run in the swarm.',
	placement: 'Placement constraints and preferences for the service.',
	resources: 'Resource constraints (CPU, memory limits and reservations).',
	update_config: 'Configuration for rolling updates.',
	restart_policy: 'Restart policy for failed containers in the swarm.',
	mode: 'Service mode: "replicated" (default) or "global".',

	// Placement properties
	constraints: 'Node placement constraints. Example: ["node.role == manager", "node.labels.zone == east"]',
	preferences: 'Node placement preferences. Example: [{"spread": "node.labels.zone"}]',

	// Resources properties
	limits: 'Maximum resources the service can use.',
	reservations: 'Resources guaranteed to be available to the service.',
	cpus: 'CPU limit/reservation. Example: "0.5" for half a CPU core.',
	memory: 'Memory limit/reservation. Example: "512M", "1G".',

	// Network properties
	driver: 'Network driver to use (bridge, overlay, host, etc.).',
	driver_opts: 'Driver-specific options.',
	external: 'Use an existing network created outside of Compose.',

	// Volume properties
	name: 'Custom name for this volume/network/secret/config.',
	file: 'Path to file for secret/config content.',

	// Additional common properties
	stdin_open: 'Keep STDIN open even if not attached.',
	tty: 'Allocate a pseudo-TTY.',
	privileged: 'Give extended privileges to this container.',
	cap_add: 'Add container capabilities.',
	cap_drop: 'Drop container capabilities.',
	dns: 'Custom DNS servers.',
	dns_search: 'Custom DNS search domains.',
	tmpfs: 'Mount a temporary file system.',
	ulimits: 'Override the default ulimits for a container.',
	stop_signal: 'Signal to stop a container. Default is SIGTERM.',
	stop_grace_period: 'How long to wait when attempting to stop a container.',
	healthcheck: 'Health check configuration.',
	pid: 'PID mode to use.',
	ipc: 'IPC mode to use.',
};

async function downloadSchema() {
	const url = 'https://raw.githubusercontent.com/docker/cli/master/cli/compose/schema/data/config_schema_v3.8.json';

	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			let data = '';

			res.on('data', (chunk) => {
				data += chunk;
			});

			res.on('end', () => {
				try {
					const schema = JSON.parse(data);
					resolve(schema);
				} catch (error) {
					reject(new Error(`Failed to parse schema: ${error.message}`));
				}
			});
		}).on('error', (error) => {
			reject(new Error(`Failed to download schema: ${error.message}`));
		});
	});
}

async function generateEnhancedTypes() {
	try {
		console.log('📖 Downloading Docker Compose v3.8 schema...');
		const schema = await downloadSchema();
		console.log('✅ Schema downloaded successfully!');

		// Show some stats about the original schema
		const totalProps = countProperties(schema);
		const propsWithDesc = countPropertiesWithDescriptions(schema);
		console.log(`📊 Original schema: ${propsWithDesc}/${totalProps} properties have descriptions (${Math.round(propsWithDesc / totalProps * 100)}%)`);

		console.log('\n✨ Enhancing schema with documentation...');
		// Add descriptions recursively - THIS IS WHERE THE MAGIC HAPPENS
		const enhancedCount = addDocumentation(schema);
		console.log(`📝 Added ${enhancedCount} new descriptions to the schema`);

		console.log('\n🔧 Generating TypeScript types...');
		// Generate TypeScript from the enhanced schema
		const ts = await compile(schema, 'DockerComposeV38', {
			bannerComment: `/**
 * Docker Compose v3.8 Types with Documentation
 * 
 * Compatible with Docker Swarm (docker stack deploy)
 * Generated with enhanced documentation for better IDE support.
 * 
 * @see https://docs.docker.com/compose/compose-file/compose-file-v3/
 */`,
			style: {
				printWidth: 100,
				useTabs: false,
				tabWidth: 2,
			},
			additionalProperties: false,
			enableConstEnums: false,
			declareExternallyReferenced: true,
		});

		fs.writeFileSync('DockerCompose.d.ts', ts);
		console.log('✅ Enhanced TypeScript types generated!');
		console.log('📁 Output: DockerCompose.d.ts');
		console.log('\n🎯 You now have TypeScript types with hover documentation!');

	} catch (error) {
		console.error('❌ Error:', error.message);
		process.exit(1);
	}
}

// Count total properties in schema
function countProperties(obj, count = 0) {
	if (!obj || typeof obj !== 'object') return count;

	if (obj.properties) {
		count += Object.keys(obj.properties).length;
		Object.values(obj.properties).forEach(prop => {
			count = countProperties(prop, count);
		});
	}

	if (obj.definitions) {
		Object.values(obj.definitions).forEach(def => {
			count = countProperties(def, count);
		});
	}

	if (obj.items) {
		count = countProperties(obj.items, count);
	}

	if (obj.patternProperties) {
		Object.values(obj.patternProperties).forEach(prop => {
			count = countProperties(prop, count);
		});
	}

	return count;
}

// Count properties with existing descriptions
function countPropertiesWithDescriptions(obj, count = 0) {
	if (!obj || typeof obj !== 'object') return count;

	if (obj.properties) {
		Object.values(obj.properties).forEach(prop => {
			if (prop.description) count++;
			count = countPropertiesWithDescriptions(prop, count);
		});
	}

	if (obj.definitions) {
		Object.values(obj.definitions).forEach(def => {
			count = countPropertiesWithDescriptions(def, count);
		});
	}

	if (obj.items) {
		count = countPropertiesWithDescriptions(obj.items, count);
	}

	if (obj.patternProperties) {
		Object.values(obj.patternProperties).forEach(prop => {
			count = countPropertiesWithDescriptions(prop, count);
		});
	}

	return count;
}

// THIS IS WHERE THE ENRICHMENT HAPPENS
function addDocumentation(obj, path = '', addedCount = 0) {
	if (!obj || typeof obj !== 'object') return addedCount;

	// Process properties in JSON schema
	if (obj.properties) {
		Object.keys(obj.properties).forEach(key => {
			const fullPath = path ? `${path}.${key}` : key;
			const property = obj.properties[key];

			// Add description if we have documentation for this property
			if (DOCUMENTATION[key] && !property.description) {
				console.log(`📝 Adding documentation for: ${fullPath}`);
				property.description = DOCUMENTATION[key]; // <-- THE ACTUAL ENRICHMENT
				addedCount++;
			}

			// Recursively process nested objects
			addedCount = addDocumentation(property, fullPath, addedCount);
		});
	}

	// Process definitions (reusable schema components)
	if (obj.definitions) {
		Object.keys(obj.definitions).forEach(key => {
			console.log(`🔍 Processing definition: ${key}`);
			addedCount = addDocumentation(obj.definitions[key], `definitions.${key}`, addedCount);
		});
	}

	// Process array items
	if (obj.items) {
		addedCount = addDocumentation(obj.items, `${path}[]`, addedCount);
	}

	// Process patternProperties (common in Docker Compose schema)
	if (obj.patternProperties) {
		Object.keys(obj.patternProperties).forEach(pattern => {
			addedCount = addDocumentation(obj.patternProperties[pattern], `${path}.${pattern}`, addedCount);
		});
	}

	// Process additionalProperties
	if (obj.additionalProperties && typeof obj.additionalProperties === 'object') {
		addedCount = addDocumentation(obj.additionalProperties, `${path}.*`, addedCount);
	}

	return addedCount;
}

// Run the script
generateEnhancedTypes();
