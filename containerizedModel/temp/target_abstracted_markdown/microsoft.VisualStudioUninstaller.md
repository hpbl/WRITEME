# Visual Studio Uninstaller

This executable is designed to clean up and delete Preview, RC and final releases of Visual Studio @abstr_number and Visual Studio @abstr_number . It is designed to be used as a final resort to clean up a system of remaining artifacts from a non-successful installation, instead of having to reimage the machine.

WARNING: running this application may stop earlier remaining installations of Visual Studio @abstr_number and earlier from working, because Visual Studio @abstr_number and below share MSI upgrade code with Visual Studio @abstr_number and above.

Download: https://github.com/Microsoft/VisualStudioUninstaller/releases

# How it works?

This app finds and uninstall every Preview/RC/RTM release of Visual Studio @abstr_number and @abstr_number . It will first execute uninstall command on the bundle, and then it will uninstall any stale MSIs. The application contains a master list of Bundle IDs and upgrade codes for every MSI ever chained in by Visual Studio @abstr_number - @abstr_number . It will not uninstall MSU or MSIs that marked as ReallyPermanent. 

# Status

Shipped

# Contributing and building this project

See CONTRIBUTING.md

# Goals/Vision/Scope

Our goal is to provide a way to thoroughly and reliably remove Visual Studio. This program first attempts to force uninstall Visual Studio from top down, and then remove any remaining MSIs and MSUs. This program will work on any BURN based Visual Studio; that means this program is only capable of removing Visual Studio @abstr_number - @abstr_number .

# Mailing list/contacts/forums

https://www.visualstudio.com/support/support-overview-vs 

# Usage

**How to debug Total Uninstaller remotely?**

IMPORTANT: Do not run this on your development machine without setting the `DoNotExecuteProcess` flag. This will prevent the application from uninstalling the very development environment you are working from. 

To get the most out of the debug experience, I recommend the following:

@abstr_number . Create a VM with Dev @abstr_number installed. @abstr_number . Start the @abstr_number -bit remote debugger with administrative privileges. @abstr_number . Copy the debug Bin directory to the VM. @abstr_number . Run the application with Administrative privileges. @abstr_number . Create a snapshot of the machine using Hyper-V. @abstr_number . Start a remote debugging session to your VM and attach. @abstr_number . Step through to your hearts delight. @abstr_number . If you find something you don’t like, restore the snapshot and recopy the Bin directory and go to step @abstr_number again.

**Using Total Uninstall:**

@abstr_number . Download and unzip the zip file to a folder. @abstr_number . Open cmd.exe with Administrative privileges @abstr_number . Execute Setup.ForcedUninstall.exe @abstr_number . Press Y and hit enter to run the application. @abstr_number . If the application ask to reboot the system, please reboot the system, and rerun this application again.

**Commands:**

@abstr_number . help or /help or /? : Print usage. @abstr_number . break : run the application and pause until the user hit any key. @abstr_number . noprocess : run the application but does not uninstall anything.

# Roadmap

@abstr_number . Periodically update of the Total Uninstaller to ensure the data used for uninstallation is up to date with the most recent Visual Studio releases.

# Open issues

Please file an issue request as necessary.

# Guidelines

These are general guidelines for source code within this solution:

## Native code

  * Parameters should be declared with SAL annotation.
  * Input string parameters should be declared as LPCWSTR.
  * Output string parameters should be declared as CStringW& references.
  * Class members should not be references or pointers, but be created and destroyed with the owning class.



## Managed code

Please follow these coding standards: https://msdn.microsoft.com/en-us/library/Ff @abstr_number .aspx?f= @abstr_number &MSPPError=- @abstr_number 
