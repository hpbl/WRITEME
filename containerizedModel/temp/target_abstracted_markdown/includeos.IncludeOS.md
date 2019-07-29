#  @abstr_image 

**IncludeOS** is an includable, minimal @abstr_hyperlink operating system for C++ services running in the cloud and on real HW. Starting a program with `#include <os>` will literally include a tiny operating system into your service during link-time.

IncludeOS is free software, with "no warranties or restrictions of any kind".

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**Note:** _IncludeOS is under active development. The public API should not be considered stable._

##  Key features

  * **Extreme memory footprint** : A minimal bootable @abstr_number -bit web server, including operating system components and anything needed from the C/C++ standard libraries is currently @abstr_number . @abstr_number MB.
  * **KVM, VirtualBox and VMWare support** with full virtualization, using @abstr_hyperlink , available on most modern x @abstr_number CPUs. IncludeOS will run on any x @abstr_number hardware platform, even on a physical x @abstr_number computer, given appropriate drivers. Officially, we develop for- and test on @abstr_hyperlink , and VMWare @abstr_hyperlink / @abstr_hyperlink which means that you can run your IncludeOS service on Linux, Microsoft Windows and macOS, as well as on cloud providers such as @abstr_hyperlink , @abstr_hyperlink and VMWare @abstr_hyperlink .
  * **Instant boot:** IncludeOS on Qemu/kvm boots in about @abstr_number ms but IBM Research has also integrated IncludeOS with @abstr_hyperlink , providing boot times as low as @abstr_number milliseconds.
  * **Modern C++ support**
    * Full C++ @abstr_number / @abstr_number / @abstr_number language support with @abstr_hyperlink @abstr_number and later.
    * Standard C++ library (STL) @abstr_hyperlink from @abstr_hyperlink .
    * Exceptions and stack unwinding (currently using @abstr_hyperlink ).
    * _Note:_ Certain language features, such as threads and filestreams are currently missing backend support but is beeing worked on.
  * **Standard C library** using @abstr_hyperlink .
  * **Virtio and vmxnet @abstr_number Network drivers** with DMA. @abstr_hyperlink provides a highly efficient and widely supported I/O virtualization. vmxnet @abstr_number is the VMWare equivalent.
  * **A highly modular TCP/IP-stack**.



A longer list of features and limitations can be found on our @abstr_hyperlink .

## Contents

  * Getting started 
    * Dependencies
    * Hello world
    * Getting started developing packages
  * Managing dependencies
  * Building with IncludeOS in editable mode
  * Contributing to IncludeOS
  * C++ Guidelines
  * Security contact



##  Getting started

###  Dependencies

For building IncludeOS services you will need:

  * @abstr_hyperlink ( @abstr_number . @abstr_number . @abstr_number or newer)
  * cmake, make, nasm (x @abstr_number /x @abstr_number _ @abstr_number only)
  * clang, or alternatively gcc on linux. Prebuilt packages are available for clang @abstr_number . @abstr_number and gcc @abstr_number . @abstr_number .



To boot VMs locally with our tooling you will also need:

  * qemu
  * python @abstr_number packages: psutil, jsonschema



The following command will configure conan to use our build profiles and remote repositories. ( **Note:** this overwrites any existing conan configuration. Set `CONAN_USER_HOME` to create a separate conan home folder for testing.)

@abstr_code_section 

**Note:** If you prefer to set up conan manually the full configuration can be found in the @abstr_hyperlink repository. You can browse our prebuilt conan packages in @abstr_hyperlink . 

#### Ubuntu

@abstr_code_section 

#### macOS

If you have @abstr_hyperlink you can use our `brew tap` to install the dependencies.

@abstr_code_section 

#### Vagrant

If you want to use a Vagrant box to explore IncludeOS and contribute to IncludeOS development, you can read the getting started with Vagrant. See etc/vagrant.md

###  Hello World

First select an appropriate @abstr_hyperlink for the target you want to boot on. `conan profile list` will show the profiles available, including the ones installed in the previous step. When developing for the machine you're currently on, Linux users can typically use `clang- @abstr_number . @abstr_number -linux-x @abstr_number _ @abstr_number`, and MacOS users can use `clang- @abstr_number . @abstr_number -macos-x @abstr_number _ @abstr_number`. You can also make your own.

The following steps let you build and boot the IncludeOS hello world example.

@abstr_code_section You can use the @abstr_hyperlink as a starting point for developing your own IncludeOS services. For more advanced examples see the @abstr_hyperlink or the integration tests (under ./IncludeOS/test/*/integration).

Once you're done `$ source deactivate.sh` will reset the environment to its previous state.

###  Getting started developing packages

If you are interested in editing/building our dependency packages on your own, you can checkout our repositories at @abstr_hyperlink . Some of our tools and libraries are listed below under Tools and Libraries. You can find the external dependency recipes at @abstr_hyperlink . Currently we build with `clang- @abstr_number` and `gcc- @abstr_number . @abstr_number . @abstr_number` compiler toolchains. It is expected that these are already installed on your system (see Dependencies for details).

##  Managing dependencies

Prebuilt conan packages are uploaded to our @abstr_hyperlink .

We upload to two channels:

  * `stable`: this channel has all the stable packages.
  * `latest`: this channel will have the latest packages in development/test phase (including stable releases).



**Note:** We only guarantee that the **latest @abstr_number packages** are kept in the `latest` channel. All `stable` packages will be kept in the stable channel unless proven unsafe. One suggested workaround is to copy packages into your own repository.

To set up our remote, we recommend following the steps listed in Dependencies.

### Search

If you want to check if a package exists you can search for it with `conan search`. To list all the available packages on our remote `includeos`, you can use:

@abstr_code_section 

This should list all the packages we have uploaded to the includeos repository.

To find all the stable versions uploaded for a particular package:

@abstr_code_section 

### Prebuilt profiles

The profiles we are using for development can be found in the @abstr_hyperlink repository under `conan_config/profiles/`.

The target profiles we have verified are the following:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



These profiles should have prebuilt packages available and are tested in CI. If you create a custom profile (or use a different profile provided by us) the dependencies may have to be rebuilt locally.

##  Building with IncludeOS in editable mode

If you are a kernel developer or are simple interested in fiddling with our kernel code, you can use the includeos-package in editable mode. When you rebuild the package will then automatically be updated so it can be used by other packages locally. This is useful when working with several interconnected components and you would like to test your changes across several libraries.

You can read more about how editable mode works in the @abstr_hyperlink .

Below we have written down a few steps to get you started with editable packages and IncludeOS.

**Note:** Currently this is an experimental feature on conan version @abstr_number . @abstr_number and they have mentioned that for future releases the feature is subject to breaking changes.

Start by cloning the IncludeOS source code and create a `build` folder. You have to edit `etc/layout.txt` in the source code to point to the `build` folder you created, by updating the `build_dir` variable.

The layout will look similar to the example below. You only have to update `build_dir`.

@abstr_code_section **Note:** in the non simple form it is possible to have multiple build folders from the same source which allows multiple architectures and configurations to be tested from the same source however the complexity increases

You should now be able to set the package in editable mode. The following command will add the package as editable based on the specified layout. We inspect the package to get the version, as this has to match exactly.

@abstr_code_section 

The package is now in **editable mode** and any dependencies of IncludeOS will pick this IncludeOS package from your local cache.

Here is an example on how it looks when its pulled into cache as editable:

@abstr_code_section 

We are now ready to build the package. Assuming the build-folder is called `build` under the includeos source directory the following is enough.

@abstr_code_section 

After making changes to the code you can rebuild the package with

@abstr_code_section 

Once you have made your changes and the code is **finalized** you should verify that the conan package still builds. Remove the editable and do a conan create on the package:

@abstr_code_section 

## Libraries and tools

We have moved the libraries and tools created by IncludeOS outside the includeos-repository. You can now find them all in their own repositories inside the IncludeOS organization.

To build the libraries and tools, see build instructions in each repository. Typically, the instructions will be in the form:

@abstr_code_section 

Below is a list of some of our Libraries/Tools:

  * @abstr_hyperlink - Vmbuild is an utility for building the IncludeOS virtual machines.

  * @abstr_hyperlink - Vmrunner is a utility developed for booting IncludeOS binanries.

  * @abstr_hyperlink - Mana is a web application framework which is used to build a IncludeOS webserver. We have an example named @abstr_hyperlink which demonstrates mana's potential.

  * @abstr_hyperlink - Microlb is a library written for building the IncludeOS load balancer. We have an example named @abstr_hyperlink which demonstrates our load balancer.

  * @abstr_hyperlink - Diskbuilder is a tool used for building disks for IncludeOS.

  * @abstr_hyperlink - NaCl is the configuration language tool we have tailored for IncludeOS to allow users to configure various network settings such as firewall rules, vlans, ip configurations etc.




##  Contributing to IncludeOS

IncludeOS is being developed on GitHub. Create your own fork, send us a pull request, and @abstr_hyperlink . Please read the @abstr_hyperlink .

##  C++ Guidelines

We want to adhere as much as possible to the @abstr_hyperlink . When you find code in IncludeOS which doesn't adhere, please let us know in the @abstr_hyperlink - or even better, fix it in your own fork and send us a @abstr_hyperlink .

##  Security contact

If you discover a security issue in IncludeOS please avoid the public issue tracker. Instead send an email to security@includeos.org. For more information and encryption please refer to the @abstr_hyperlink .
