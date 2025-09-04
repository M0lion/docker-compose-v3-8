# Docker Compose v3.8 TypeScript Types

TypeScript definitions for Docker Compose v3.8 with comprehensive documentation for LSP hover support. Compatible with Docker Swarm `docker stack deploy`.

Almost all of this was generated with Claude Sonnet 4. I just wanted the types.

## Features

- ✅ **Complete TypeScript definitions** for Docker Compose v3.8 format
- ✅ **Rich JSDoc comments** for LSP hover documentation  
- ✅ **Docker Swarm compatible** - works with `docker stack deploy`
- ✅ **IDE support** - IntelliSense, auto-completion, and validation
- ✅ **Generated from official schema** - always up-to-date with Docker CLI

## Installation

```bash
npm install @molion/docker-compose-v3-8
# or
yarn add @molion/docker-compose-v3-8
# or  
pnpm add @molion/docker-compose-v3-8
```

## Usage

### Basic Usage

```typescript
import { DockerComposeV38 } from '@your-username/docker-compose-v3-8';

const composeFile: DockerComposeV38 = {
  version: '3.8',
  services: {
    web: {
      image: 'nginx:alpine',
      ports: ['80:80'],
      deploy: {
        replicas: 3,
        placement: {
          constraints: ['node.role == worker']
        },
        resources: {
          limits: {
            cpus: '0.5',
            memory: '512M'
          }
        }
      }
    },
    db: {
      image: 'postgres:13',
      environment: {
        POSTGRES_PASSWORD: 'secret'
      },
      volumes: ['db-data:/var/lib/postgresql/data'],
      deploy: {
        placement: {
          constraints: ['node.role == manager']
        }
      }
    }
  },
  volumes: {
    'db-data': {
      driver: 'local'
    }
  }
};
```

## IDE Support

When you hover over properties in your IDE, you'll see helpful documentation:

- **`deploy`**: "Deployment configuration for Swarm mode. Only works with docker stack deploy, ignored by docker-compose up."
- **`replicas`**: "Number of service replicas to run in the swarm."
- **`placement.constraints`**: "Node placement constraints. Example: ['node.role == manager', 'node.labels.zone == east']"

## Docker Swarm Compatibility

This package is specifically designed for Docker Compose v3.8, which is compatible with Docker Swarm's `docker stack deploy` command:

```bash
# Your compose file will work with:
docker stack deploy -c docker-compose.yml mystack

# Properties like 'deploy', 'secrets', 'configs' are Swarm-specific
# and only take effect when deploying via docker stack deploy
```

## Available Types

The package exports the following main types:

- `DockerComposeV38` - Root compose file interface
- `Service` - Service definition
- `Deploy` - Swarm deployment configuration  
- `Network` - Network definition
- `Volume` - Volume definition
- `Secret` - Secret definition (Swarm only)
- `Config` - Config definition (Swarm only)
- And many more specific types...

## Development

This package is generated from the official Docker CLI v3.8 schema with enhanced documentation.

To regenerate the types:

```bash
git clone https://github.com/m0lion/docker-compose-v3-8
cd docker-compose-v3-8
pnpm install
pnpm run build
```

## Why This Package?

The official Docker Compose v3.8 JSON schema lacks description fields, making standard type generation tools produce types without documentation. This package solves that by:

1. **Downloading** the official v3.8 schema from Docker CLI
2. **Enhancing** it with comprehensive documentation
3. **Generating** TypeScript types with JSDoc comments
4. **Providing** rich IDE hover information

## License

Unlicense

## Contributing

The types shouldn't change, so there should be no reason to update this, so I am not planning on maintaining it. Feel free to fork it.
