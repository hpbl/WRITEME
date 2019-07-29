# Overview

rr is a lightweight tool for recording, replaying and debugging execution of applications (trees of processes and threads). Debugging extends gdb with very efficient reverse-execution, which in combination with standard gdb/x @abstr_number features like hardware data watchpoints, makes debugging much more fun. More information about the project, including instructions on how to install, run, and build rr, is at @abstr_hyperlink . The best technical overview is currently the paper @abstr_hyperlink .

Or go directly to the @abstr_hyperlink .

Please contribute! Make sure to review the pull request checklist before submitting a pull request.

If you find rr useful, please @abstr_hyperlink .

# System requirements

  * Linux kernel ≥ @abstr_number . @abstr_number is required (for `PTRACE_SETSIGMASK`).
  * rr currently requires an Intel CPU with @abstr_hyperlink ( @abstr_number ) or later microarchitecture.
  * Running in a VM guest is supported, as long as the VM supports virtualization of hardware performance counters. (VMware and KVM are known to work; Xen does not.)


