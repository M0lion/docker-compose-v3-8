/**
 * Docker Compose v3.8 Types with Documentation
 *
 * Compatible with Docker Swarm (docker stack deploy)
 * Generated with enhanced documentation for better IDE support.
 *
 * @see https://docs.docker.com/compose/compose-file/compose-file-v3/
 */

/**
 * Deployment configuration for Swarm mode. Only works with docker stack deploy, ignored by docker-compose up.
 */
export type DefinitionsDeployment = {
  /**
   * Service mode: "replicated" (default) or "global".
   */
  mode?: string;
  endpoint_mode?: string;
  /**
   * Number of service replicas to run in the swarm.
   */
  replicas?: number;
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  rollback_config?: {
    parallelism?: number;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number;
    order?: "start-first" | "stop-first";
  };
  /**
   * Configuration for rolling updates.
   */
  update_config?: {
    parallelism?: number;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number;
    order?: "start-first" | "stop-first";
  };
  /**
   * Resource constraints (CPU, memory limits and reservations).
   */
  resources?: {
    /**
     * Maximum resources the service can use.
     */
    limits?: {
      /**
       * CPU limit/reservation. Example: "0.5" for half a CPU core.
       */
      cpus?: string;
      /**
       * Memory limit/reservation. Example: "512M", "1G".
       */
      memory?: string;
    };
    /**
     * Resources guaranteed to be available to the service.
     */
    reservations?: {
      /**
       * CPU limit/reservation. Example: "0.5" for half a CPU core.
       */
      cpus?: string;
      /**
       * Memory limit/reservation. Example: "512M", "1G".
       */
      memory?: string;
      generic_resources?: DefinitionsGenericResources;
    };
  };
  /**
   * Restart policy for failed containers in the swarm.
   */
  restart_policy?: {
    condition?: string;
    delay?: string;
    max_attempts?: number;
    window?: string;
  };
  /**
   * Placement constraints and preferences for the service.
   */
  placement?: {
    /**
     * Node placement constraints. Example: ["node.role == manager", "node.labels.zone == east"]
     */
    constraints?: string[];
    /**
     * Node placement preferences. Example: [{"spread": "node.labels.zone"}]
     */
    preferences?: {
      spread?: string;
    }[];
    max_replicas_per_node?: number;
  };
} & ({
  /**
   * Service mode: "replicated" (default) or "global".
   */
  mode?: string;
  endpoint_mode?: string;
  /**
   * Number of service replicas to run in the swarm.
   */
  replicas?: number;
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  rollback_config?: {
    parallelism?: number;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number;
    order?: "start-first" | "stop-first";
  };
  /**
   * Configuration for rolling updates.
   */
  update_config?: {
    parallelism?: number;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number;
    order?: "start-first" | "stop-first";
  };
  /**
   * Resource constraints (CPU, memory limits and reservations).
   */
  resources?: {
    /**
     * Maximum resources the service can use.
     */
    limits?: {
      /**
       * CPU limit/reservation. Example: "0.5" for half a CPU core.
       */
      cpus?: string;
      /**
       * Memory limit/reservation. Example: "512M", "1G".
       */
      memory?: string;
    };
    /**
     * Resources guaranteed to be available to the service.
     */
    reservations?: {
      /**
       * CPU limit/reservation. Example: "0.5" for half a CPU core.
       */
      cpus?: string;
      /**
       * Memory limit/reservation. Example: "512M", "1G".
       */
      memory?: string;
      generic_resources?: DefinitionsGenericResources;
    };
  };
  /**
   * Restart policy for failed containers in the swarm.
   */
  restart_policy?: {
    condition?: string;
    delay?: string;
    max_attempts?: number;
    window?: string;
  };
  /**
   * Placement constraints and preferences for the service.
   */
  placement?: {
    /**
     * Node placement constraints. Example: ["node.role == manager", "node.labels.zone == east"]
     */
    constraints?: string[];
    /**
     * Node placement preferences. Example: [{"spread": "node.labels.zone"}]
     */
    preferences?: {
      spread?: string;
    }[];
    max_replicas_per_node?: number;
  };
} | null);
export type DefinitionsGenericResources = {
  discrete_resource_spec?: {
    kind?: string;
    value?: number;
  };
}[];
export type ListOrDict =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string | number | null;
    }
  | string[];
export type ListOfStrings = string[];
/**
 * Service dependencies. This service will start after dependencies.
 */
export type ListOfStrings1 = string[];
export type StringOrList = string | ListOfStrings;
/**
 * This interface was referenced by `PropertiesNetworks`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsNetwork = {
  /**
   * Custom name for this volume/network/secret/config.
   */
  name?: string;
  /**
   * Network driver to use (bridge, overlay, host, etc.).
   */
  driver?: string;
  /**
   * Driver-specific options.
   */
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  ipam?: {
    /**
     * Network driver to use (bridge, overlay, host, etc.).
     */
    driver?: string;
    config?: {
      subnet?: string;
    }[];
  };
  /**
   * Use an existing network created outside of Compose.
   */
  external?:
    | boolean
    | {
        /**
         * Custom name for this volume/network/secret/config.
         */
        name?: string;
      };
  internal?: boolean;
  attachable?: boolean;
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
} & Network;
export type Network = {
  /**
   * Custom name for this volume/network/secret/config.
   */
  name?: string;
  /**
   * Network driver to use (bridge, overlay, host, etc.).
   */
  driver?: string;
  /**
   * Driver-specific options.
   */
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  ipam?: {
    /**
     * Network driver to use (bridge, overlay, host, etc.).
     */
    driver?: string;
    config?: {
      subnet?: string;
    }[];
  };
  /**
   * Use an existing network created outside of Compose.
   */
  external?:
    | boolean
    | {
        /**
         * Custom name for this volume/network/secret/config.
         */
        name?: string;
      };
  internal?: boolean;
  attachable?: boolean;
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
} | null;
/**
 * This interface was referenced by `PropertiesVolumes`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsVolume = {
  /**
   * Custom name for this volume/network/secret/config.
   */
  name?: string;
  /**
   * Network driver to use (bridge, overlay, host, etc.).
   */
  driver?: string;
  /**
   * Driver-specific options.
   */
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  /**
   * Use an existing network created outside of Compose.
   */
  external?:
    | boolean
    | {
        /**
         * Custom name for this volume/network/secret/config.
         */
        name?: string;
      };
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
} & Volume;
export type Volume = {
  /**
   * Custom name for this volume/network/secret/config.
   */
  name?: string;
  /**
   * Network driver to use (bridge, overlay, host, etc.).
   */
  driver?: string;
  /**
   * Driver-specific options.
   */
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  /**
   * Use an existing network created outside of Compose.
   */
  external?:
    | boolean
    | {
        /**
         * Custom name for this volume/network/secret/config.
         */
        name?: string;
      };
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
} | null;

export interface ConfigSchemaV38Json {
  /**
   * Compose file format version. Use "3.8" for Docker Swarm compatibility.
   */
  version: string;
  services?: PropertiesServices;
  networks?: PropertiesNetworks;
  volumes?: PropertiesVolumes;
  secrets?: PropertiesSecrets;
  configs?: PropertiesConfigs;
  /**
   * This interface was referenced by `ConfigSchemaV38Json`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Services that make up your application. Each service runs in its own container.
 */
export interface PropertiesServices {
  [k: string]: DefinitionsService;
}
/**
 * This interface was referenced by `PropertiesServices`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsService {
  deploy?: DefinitionsDeployment;
  /**
   * Build configuration if you want to build the image instead of pulling it.
   */
  build?:
    | string
    | {
        context?: string;
        dockerfile?: string;
        args?: ListOrDict;
        labels?: ListOrDict;
        cache_from?: ListOfStrings;
        network?: string;
        target?: string;
        shm_size?: number | string;
      };
  /**
   * Add container capabilities.
   */
  cap_add?: string[];
  /**
   * Drop container capabilities.
   */
  cap_drop?: string[];
  cgroup_parent?: string;
  /**
   * Override the default command. Can be string or array format.
   */
  command?: string | string[];
  /**
   * Configuration files that can be used by services. Only available in Swarm mode.
   */
  configs?: (
    | string
    | {
        source?: string;
        target?: string;
        uid?: string;
        gid?: string;
        mode?: number;
      }
  )[];
  container_name?: string;
  credential_spec?: {
    config?: string;
    /**
     * Path to file for secret/config content.
     */
    file?: string;
    registry?: string;
  };
  depends_on?: ListOfStrings1;
  devices?: string[];
  /**
   * Custom DNS servers.
   */
  dns?: string | ListOfStrings;
  /**
   * Custom DNS search domains.
   */
  dns_search?: string | ListOfStrings;
  domainname?: string;
  /**
   * Override the default entrypoint. Can be string or array format.
   */
  entrypoint?: string | string[];
  env_file?: StringOrList;
  /**
   * Environment variables. Can be array format or object format.
   */
  environment?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  expose?: (string | number)[];
  external_links?: string[];
  extra_hosts?: ListOrDict;
  healthcheck?: DefinitionsHealthcheck;
  /**
   * Container hostname.
   */
  hostname?: string;
  /**
   * Docker image to use. Format: "name:tag" or "registry/name:tag"
   */
  image?: string;
  init?: boolean;
  /**
   * IPC mode to use.
   */
  ipc?: string;
  isolation?: string;
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  links?: string[];
  logging?: {
    /**
     * Network driver to use (bridge, overlay, host, etc.).
     */
    driver?: string;
    options?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string | number | null;
    };
  };
  mac_address?: string;
  network_mode?: string;
  /**
   * Networks this service is connected to.
   */
  networks?:
    | ListOfStrings
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
         */
        [k: string]: {
          aliases?: ListOfStrings;
          ipv4_address?: string;
          ipv6_address?: string;
        } | null;
      };
  /**
   * PID mode to use.
   */
  pid?: string | null;
  /**
   * Expose ports. Format: "HOST:CONTAINER" or just "CONTAINER" for random host port.
   */
  ports?: (
    | number
    | string
    | {
        mode?: string;
        target?: number;
        published?: number;
        protocol?: string;
      }
  )[];
  /**
   * Give extended privileges to this container.
   */
  privileged?: boolean;
  read_only?: boolean;
  /**
   * Restart policy: "no", "always", "on-failure", "unless-stopped"
   */
  restart?: string;
  security_opt?: string[];
  shm_size?: number | string;
  /**
   * Sensitive data like passwords, SSH keys, etc. Only available in Swarm mode.
   */
  secrets?: (
    | string
    | {
        source?: string;
        target?: string;
        uid?: string;
        gid?: string;
        mode?: number;
      }
  )[];
  sysctls?: ListOrDict;
  /**
   * Keep STDIN open even if not attached.
   */
  stdin_open?: boolean;
  /**
   * How long to wait when attempting to stop a container.
   */
  stop_grace_period?: string;
  /**
   * Signal to stop a container. Default is SIGTERM.
   */
  stop_signal?: string;
  /**
   * Mount a temporary file system.
   */
  tmpfs?: string | ListOfStrings;
  /**
   * Allocate a pseudo-TTY.
   */
  tty?: boolean;
  /**
   * Override the default ulimits for a container.
   */
  ulimits?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-z]+$".
     */
    [k: string]:
      | number
      | {
          hard: number;
          soft: number;
        };
  };
  /**
   * User to run commands as. Can be username or UID.
   */
  user?: string;
  userns_mode?: string;
  /**
   * Mount volumes. Format: "host_path:container_path" or "volume_name:container_path"
   */
  volumes?: (
    | string
    | {
        type: string;
        source?: string;
        target?: string;
        read_only?: boolean;
        consistency?: string;
        bind?: {
          propagation?: string;
        };
        volume?: {
          nocopy?: boolean;
        };
        tmpfs?: {
          size?: number;
        };
      }
  )[];
  /**
   * Working directory inside the container.
   */
  working_dir?: string;
  /**
   * This interface was referenced by `DefinitionsService`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Health check configuration.
 */
export interface DefinitionsHealthcheck {
  disable?: boolean;
  interval?: string;
  retries?: number;
  test?: string | string[];
  timeout?: string;
  start_period?: string;
}
/**
 * Networks this service is connected to.
 */
export interface PropertiesNetworks {
  [k: string]: DefinitionsNetwork;
}
/**
 * Mount volumes. Format: "host_path:container_path" or "volume_name:container_path"
 */
export interface PropertiesVolumes {
  [k: string]: DefinitionsVolume;
}
/**
 * Sensitive data like passwords, SSH keys, etc. Only available in Swarm mode.
 */
export interface PropertiesSecrets {
  [k: string]: DefinitionsSecret;
}
/**
 * This interface was referenced by `PropertiesSecrets`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsSecret {
  /**
   * Custom name for this volume/network/secret/config.
   */
  name?: string;
  /**
   * Path to file for secret/config content.
   */
  file?: string;
  /**
   * Use an existing network created outside of Compose.
   */
  external?:
    | boolean
    | {
        /**
         * Custom name for this volume/network/secret/config.
         */
        name?: string;
      };
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  /**
   * Network driver to use (bridge, overlay, host, etc.).
   */
  driver?: string;
  /**
   * Driver-specific options.
   */
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  template_driver?: string;
  /**
   * This interface was referenced by `DefinitionsSecret`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Configuration files that can be used by services. Only available in Swarm mode.
 */
export interface PropertiesConfigs {
  [k: string]: DefinitionsConfig;
}
/**
 * This interface was referenced by `PropertiesConfigs`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsConfig {
  /**
   * Custom name for this volume/network/secret/config.
   */
  name?: string;
  /**
   * Path to file for secret/config content.
   */
  file?: string;
  /**
   * Use an existing network created outside of Compose.
   */
  external?:
    | boolean
    | {
        /**
         * Custom name for this volume/network/secret/config.
         */
        name?: string;
      };
  /**
   * Metadata labels for the container.
   */
  labels?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string | number | null;
      }
    | string[];
  template_driver?: string;
  /**
   * This interface was referenced by `DefinitionsConfig`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
