# lmctfy - Let Me Contain That For You

## Note

We have been collaborating with @abstr_hyperlink over libcontainer and are in process of porting the core lmctfy concepts and abstractions to @abstr_hyperlink . We are not actively developing lmctfy further and have moved our efforts to libcontainer. In future, we hope to replace the core of lmctfy with libcontainer.

## Introduction

lmctfy (pronounced _l-m-c-t-fi_ , IPA: /ɛlɛmsitifаɪ/) is the open source version of @abstr_hyperlink ’s container stack, which provides Linux application containers. These containers allow for the isolation of resources used by multiple applications running on a single machine. This gives the applications the impression of running exclusively on a machine. The applications may be container-aware and thus be able to create and manage their own subcontainers.

The project aims to provide the container abstraction through a high-level API built around user intent. The containers created are themselves container-aware within the hierarchy and can be delegated to be managed by other user agents.

lmctfy was designed and implemented with specific use-cases and configurations in mind and may not work out of the box for all use-cases and configurations. We do aim to support more use-cases and configurations so please feel free to contribute patches or send e-mail to the mailing list so that we may incorporate these into the roadmap.

lmctfy is released as both a C++ library and a CLI.

## Current Status

lmctfy is currently stalled as we migrate the core concepts to libcontainer and build a standard container management library that can be used by many projects.

lmctfy is beta software and may change as it evolves. The latest release version is `@abstr_number . @abstr_number . @abstr_number`. It currently provides isolation for CPU, memory, and devices. It also allows for the creation of Virtual Hosts which are more heavily isolated containers giving the impression of running as an independent host. 

## Getting Started

This section describes building the CLI, running all unit tests, and initializing the machine. The CLI Commands section provides some examples of CLI operations and C++ Library describes the use of the underlying library.

### Dependencies

lmctfy depends on the following libraries and expects them to be available on the system: * @abstr_hyperlink * @abstr_hyperlink (version >= @abstr_number . @abstr_number . @abstr_number ) * @abstr_hyperlink * @abstr_hyperlink * glibc (version >= @abstr_number . @abstr_number )

Addtionally to build lmctfy you also need: * make * go compiler * g++ or clang version with C++ @abstr_number support (tested with g++- @abstr_number . @abstr_number and clang- @abstr_number . @abstr_number )

We've tested the setup on **Ubuntu @abstr_number . @abstr_number +**. We are happy to accept patches that add support for other setups.

### Building the CLI

To build the `lmctfy` CLI:

@abstr_code_section 

The CLI should now be available at: `bin/lmctfy/cli/lmctfy`

### Building the C++ Library

To build the lmctfy library:

@abstr_code_section 

The library should now be available at: `bin/liblmctfy.a`.

### Running Unit Tests

To build and run all unit tests:

@abstr_code_section 

### Initialization

lmctfy has been tested on **Ubuntu @abstr_number . @abstr_number +** and on the _*Ubuntu @abstr_number . @abstr_number *_ and _* @abstr_number . @abstr_number *_ kernels. lmctfy runs best when it owns all containers in a machine so it is not recommended to run lmctfy alongside @abstr_hyperlink or another container system (although given some configuration, it can be made to work).

In order to run lmctfy we must first initialize the machine. This only needs to happen once and is typically done when the machine first boots. If the cgroup hierarchies are already mounted, then an empty config is enough and lmctfy will auto-detect the existing mounts:

@abstr_code_section 

If the cgroup hierarchies are not mounted, those must be specified so that lmctfy can mount them. The current version of lmctfy needs the following cgroup hierarchies: `cpu`, `cpuset`, `cpuacct`, `memory`, and `freezer`. `cpu` and `cpuacct` are the only hierarchies that can be co-mounted, all other must be mounted individually. For details on configuration specifications take a look at `InitSpec` in lmctfy.proto. An example configuration mounting all of the hierarchies in `/sys/fs/cgroup`:

@abstr_code_section 

The machine should now be ready to use `lmctfy` for container operations.

## Container Names

Container names mimic filesystem paths closely since they express a hierarchy of containers (i.e.: containers can be inside other containers, these are called **subcontainers** or **child containers** ).

Allowable characters for container names are: * Alpha numeric (`[a-zA-Z @abstr_number - @abstr_number ]+`) * Underscores (`_`) * Dashes (`-`) * Periods (`.`)

An absolute path is one that is defined from the root (`/`) container (i.e.: `/sys/subcont`). Container names can also be relative (i.e.: `subcont`). In general and unless otherwise specified, regular filesystem path rules apply.

### Examples:

@abstr_code_section 

## CLI Commands

### Create

To create a container run:

@abstr_code_section 

Please see lmctfy.proto for the full `ContainerSpec`.

Example (create a memory-only container with `@abstr_number MB` limit):

@abstr_code_section 

### Destroy

To destroy a container run:

@abstr_code_section 

### List

To list all containers in a machine, ask to recursively list from root:

@abstr_code_section 

You can also list only the current subcontainers:

@abstr_code_section 

### Run

To run a command inside a container run:

@abstr_code_section 

Examples:

@abstr_code_section 

### Other

Use `lmctfy help` to see the full command listing and documentation.

## C++ Library

The library is comprised of the `::containers::lmctfy::ContainerApi` factory which creates, gets, destroys, and detects `::containers::lmctfy::Container` objects that can be used to interact with individual containers. Full documentation for the lmctfy C++ library can be found in lmctfy.h. 

## Roadmap

The lmctfy project proposes a containers stack with two major layers we’ll call CL @abstr_number and CL @abstr_number . CL @abstr_number encompases the driver and enforcement of the containers policy set by CL @abstr_number . CL @abstr_number will create and maintain the container abstraction for higher layers. It should be the only layer that directly interacts with the kernel to manage containers. CL @abstr_number is what develops and sets container policy, it uses CL @abstr_number to enforce the policy and manage containers. For example: CL @abstr_number (a daemon) implements a policy that the amount of CPU and memory used by all of a machine’s containers must not exceed the amount of available CPU and memory (as opposed to overcommitting memory in the machine). To enforce that policy it uses CL @abstr_number (library/CLI) to create containers with memory limits that add up to the machine’s available memory. Alternate policies may involve overcommitting a machine’s resources by X% or creating levels of resources with different guarantees for quality of service.

The lmctfy project currently provides the CL @abstr_number component. The CL @abstr_number is not yet implemented.

### CL @abstr_number

Currently only provides robust CPU and memory isolation. In our roadmap we have support for the following: * _Disk IO Isolation:_ The specification is mostly complete, we’re missing the controller and resource handler. * _Network Isolation:_ The specification and cgroup implementation is up in the air. * _Support for Root File Systems:_ Specifying and building root file systems. * _Disk Images:_ Being able to import/export a container’s root file system image. * _Checkpoint Restore:_ Being able to checkpoint and restore containers on different machines.

### CL @abstr_number

The most basic CL @abstr_number would use a container policy that ensures the fair sharing of a machine’s resources without allowing overcommitment. We aim to eventually implement a CL @abstr_number that provides different levels of guaranteed quality of service. In this scheme some levels are given stronger quality of service than others. The following CL @abstr_number features are supported in our roadmap: * Monitoring and statistics support. * Admission control and feasibility checks. * Quality of Service guarantees and enforcement.

We have started work on CL @abstr_number under the @abstr_hyperlink project

## Kernel Support

lmctfy was originally designed and implemented around a custom kernel with a set of patches on top of a vanilla Linux kernel. As such, some features work best in conjunction with those kernel patches. However, lmctfy should work without them. It should detect available kernel support and adapt accordingly. We’ve tested lmctfy in vanilla **Ubuntu @abstr_number . @abstr_number __**and * @abstr_number . @abstr_number ** kernels. Please report any issues you find with other kernel versions.

Some of the relevant kernel patches: * _CPU latency:_ This adds the `cpu.lat` cgroup file to the cpu hierarchy. It bounds the CPU wakeup latency a cgroup can expect. * _CPU histogram accounting:_ This adds the `cpuacct.histogram` cgroup file to the cpuacct hierarchy. It provides various histograms of CPU scheduling behavior. * _OOM management:_ Series of patches to enforce priorities during out of memory conditions.

## Contributing

Interested in contributing to the project? Feel free to send a patch or take a look at our roadmap for ideas on areas of contribution. Follow Getting Started above and it should get you up and running. If not, let us know so we can help and improve the instructions. There is some documentation on the structure of lmctfy in the primer.

## Mailing List

The project mailing list is @abstr_hyperlink . The list will be used for announcements, discussions, and general support. You can @abstr_hyperlink .
