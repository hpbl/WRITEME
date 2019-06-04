# ECOOP @abstr_number Artifact

Our tool adds a new sanitizer to `clang`, a const sanitizer. This sanitizer verifies that instances of `const` are treated as transitively immutable. Our tool will display a warning for any write through a `const` type qualifier, even if a field is explictly `const`. The goal of our tool is to investigate how developers use `const` in programs.

## Content

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Virtual Machine

Note that these instructions assume the non-VDI image, running on QEMU. For Windows users, download the VDI image and use VirtualBox. After the Virtual Machine is running, the instructions are identical.

There is an example @abstr_hyperlink already setup. The username and password to this VM are both `ecoop- @abstr_number`. To run the VM, with QEMU, do the following:
    
    
    qemu-system-x @abstr_number _ @abstr_number  -enable-kvm -m  @abstr_number  -drive file=ecoop- @abstr_number .qcow @abstr_number ,format=qcow @abstr_number
    

The login information you'll always want to use is:
    
    
    Username: ecoop- @abstr_number 
    Password: ecoop- @abstr_number
    

This VM should have all the requirements needed to run all of the experiments. If you want to SSH into the VM from your host, use the following:
    
    
    qemu-system-x @abstr_number _ @abstr_number  -enable-kvm -m  @abstr_number  -drive file=ecoop- @abstr_number .qcow @abstr_number ,format=qcow @abstr_number  -net user,hostfwd=tcp:: @abstr_number -: @abstr_number  -net nic
    

Then from your host machine do:
    
    
    ssh ecoop- @abstr_number @localhost -p @abstr_number
    

Note that the VM needs to be connected to the internet in order for some packages to build.

## Building (Optional)

If you are using the VM image that we've distributed, the `clang++` executable on that VM points to a prebuilt version of our tool. However, we've included the sources and you can build your own `clang++` from scratch as follows.

Ensure you have the `base-devel` group installed and the `multilib` repository enabled. Afterwards you can build the package in the standard Arch Linux fashion:
    
    
    cd ~/abs
    makepkg -s
    

After building the tool, you can use our set of @abstr_number small test cases you run to ensure the tool works correctly. Navigate to the test directory to see these tests:
    
    
    cd ~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /projects/compiler-rt/test/csan
    

Note: if you haven't built the tool, this directory will not exist, do the following first:
    
    
    cd ~/abs
    makepkg -o
    

The expected test results are embedded within the source files themselves. Any lines with `CHECK` are expected to occur on `stderr` when the source file is compiled and run with our tool enabled. Any lines beginning with `CHECK-NOT` should not occur when our tool is used. To run all the tests do the following:
    
    
    cd ~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /build
    make check-csan
    

Note @abstr_number : you must have built the tool in order to run `make check-csan`!

Note @abstr_number : for the timing results in the paper, ran a debug version of the tool. To build a debug version, follow these steps:
    
    
    cd ~/abs
    makepkg -s -p PKGBUILD-debug
    

Then replace the current version of our packages with these debugging ones with:
    
    
    pacman -U *.pkg.tar.xz
    

### Manually Running Tests

Instead of automatically running the tests with `make check-csan` (and not getting much feedback, due to the LLVM testing framework), you can also manually run the tests. You do need to `cd ~/abs; makepkg -o` as described above, though.

To manually run them yourself do the following:
    
    
    cd ~
    clang++ -fsanitize=const -g ~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /projects/compiler-rt/test/csan/const-object.cc -o const-object
    ./const-object
    

You may explore all the other tests by exploring `~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /projects/compiler-rt/test/csan` and running them in a similar manner.

## Usage

To use the tool, use `clang++` as you normally would, but add the flags `-fsanitize=const -g`. You should get more precise results if you disable optimizations and include the frame pointer with `-O @abstr_number -fno-omit-frame-pointer`. To run the example given in Listing @abstr_number of the paper, do the following:
    
    
    cd ~/examples
    clang++ -std=c++ @abstr_number  -fsanitize=const -g listing- @abstr_number .cpp
    

You can run the resulting executable as `./a.out` and you should see a warning. To write to an external log file, use the `log_path` option. For example, to log the results to a file called `listing- @abstr_number .log` do the following:
    
    
    CSAN_OPTIONS=log_path=listing- @abstr_number .log ./a.out
    

After running the program again, there should be no extra output on `stderr` and there should be a `listing- @abstr_number .log.XXXXX` file in the current directory where `XXXXX` are random numbers. Feel free to try it out!

## Implementation

Note that to browse the implementation you have to have the sources extracted. To extract the sources, do the following:
    
    
    cd ~/abs
    makepkg -o
    

The first part of the implementation is getting Clang to annotate definition expressions of declaration statements so that ConstSanitizer can ignore them. The code implementing this is in: `~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /tools/clang/lib/CodeGen/CGDebugInfo.cpp` and `~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /tools/clang/lib/CodeGen/CGDebugInfo.h`. The part of the code generation we instrument is in `~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /tools/clang/lib/CodeGen/CGDecl.cpp` within the `EmitAutoVarDecl` method.

The heart of our implementation is located at: `~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /lib/Transforms/Instrumentation/ConstSanitizer.cpp`. This file corresponds to the instrumentation of LLVM bit code that implements our runtime const tracking. The computation of the shadow values is in the `getShadowVal` method.

The runtime library is located at: `~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /projects/compiler-rt/lib/csan/csan.cc`. This file contains the implementation that reports the stack traces at runtime.

The modification to get Clang to recongize our new sanitizer option is located at: `~/abs/src/llvm-csan- @abstr_number . @abstr_number . @abstr_number /tools/clang/lib/CodeGen/BackendUtil.cpp`.

## Experiments

All experiments are located in the `experiments` directory. To instrument a project, for example Ninja, do the following:
    
    
    cd ~/experiments
    python build.py ninja
    

The build script stores any build-time violations (for instance, that occur while running a project's tests as part of the build) in the `experiments` directory, in a file named `PACKAGE-build.log`. Ninja is an example of a project that runs tests as part of its build.

To create groupings for manual inspection, run `python group.py ninja`. The `group.py` script collects all results from log files with the specified project name.

The next subsections give examples of how we obtained the results in the paper.

### Protobuf

Similar to the Ninja example above, tests are run as part of the build process. So you may do the following:
    
    
    cd ~/experiments
    python build.py protobuf
    python group.py protobuf-build
    

These results should be comparable to `~/results/protobuf.txt` after organization. Note that running the tests produces many `protobuf-build.log.XXXXX` files. While the `group.py` script does combine all build log files, the resulting file still contains a separate section for each build log file. We manually combined these sections and report combined results from all build logs.

Note that before manual post-processing we found @abstr_number unique warnings with @abstr_number occurences. There was one archetype, relating to message targets, we could not determine and did not include in the paper. This archetype had @abstr_number unique warnings with @abstr_number occurences and were manually identified. We also had a false positive due to incorrect debugging information (we believe). This archetype had @abstr_number unique locations with @abstr_number occurences. Manually removing these results should exactly match the results in the paper.

### LevelDB

Similar to above, tests are run as part of the build process.

### Fish

We obtained the Fish results by running the shell, following these steps:
    
    
    cd ~/experiments
    python build.py fish
    CSAN_OPTIONS=log_path=fish.log fish/pkg/fish/usr/bin/fish
    

Then press control-D to exit. Afterwards you can do the same as with Ninja:
    
    
    python group.py fish
    

These results should correspond to the paper.

### Mosh
    
    
    cd ~/experiments
    python build.py mosh
    CSAN_OPTIONS=log_path=mosh.log mosh/pkg/mosh/usr/bin/mosh --client=/home/ecoop- @abstr_number /experiments/mosh/pkg/mosh/usr/bin/mosh-client --server=/home/ecoop- @abstr_number /experiments/mosh/pkg/mosh/usr/bin/mosh-server localhost
    

Answer yes to the certificate (if prompted) and login using the same information used for the virtual machine (username `ecoop- @abstr_number`, password `ecoop- @abstr_number`).

Again, similar to the last case, use the group script:
    
    
    python group.py mosh
    

These results should correspond to the paper (there may be more unique locations than in the paper).

### LLVM

Similar to Ninja, LLVM compiles `llvm-tblgen` and executes it as part of its build process. Therefore after running the build script the results should be accessible with:
    
    
    cd ~/experiments
    python group.py llvm-build
    

### Tesseract

Similar to Fish, we run the executable. You may need to also include `LD_LIBRARY_PATH` like so:
    
    
    cd ~/experiments
    python build.py tesseract
    CSAN_OPTIONS=log_path=tesseract.log LD_LIBRARY_PATH=tesseract/pkg/tesseract/usr/lib tesseract/pkg/tesseract/usr/bin/tesseract stdin stdout
    

You should get an error along the lines of "error opening data file", and tesseract immediately exits. However, there will be some results, as before run:
    
    
    python group.py tesseract
    

### Ninja

In this case, as part of the build process, the tests are run. Therefore the `ninja-build.log.XXXXX` shows what violations occur as part of the test suite. If you open this file and observe it, the first non-standard library portion of the stack trace should be in `src/disk_interface_test.cc: @abstr_number : @abstr_number` matching the results of the paper. There should be @abstr_number unique source locations, starting in the standard library, for all violations. To find these unique source locations, like for all other experiments, use the group script:
    
    
    cd ~/experiments
    python group.py ninja-build
    

This will group the raw results into unique locations and also give the dynamic violation count.

### Wayland / Weston

First build Wayland and install the package:
    
    
    cd ~/experiments
    python build.py wayland
    sudo pacman -U wayland/wayland- @abstr_number . @abstr_number . @abstr_number - @abstr_number -x @abstr_number _ @abstr_number .pkg.tar.xz
    

Then you can build weston:
    
    
    python build.py weston
    

Again, run the produced executable:
    
    
    CSAN_OPTIONS=log_path=weston.log weston/pkg/weston/usr/bin/weston
    

## Timing

To collect the timing results, for example for Protobuf, do the following:
    
    
    cd ~/experiments
    python time.py protobuf
    

Note that you'll have to clear all the build files between each run. Do that with the following command (you need to `cd` into the project directory first).
    
    
    cd ~/experiments/protobuf
    rm -rf src pkg *.pkg.tar.xz
    

The resulting files will be in `/tmp/time-protobuf-build` and `/tmp/time-protobuf-check`. The last @abstr_number lines of the first file indicate how long it took to build with the tool enabled. The last @abstr_number lines of the second file indicate how long it took to run the tests with the tool enabled. After recording these numbers you can do the same procedure with the tool disabled. To collect the timing (after cleaning) results do:
    
    
    cd ~/experiments
    python time-disable-csan.py protobuf
    

## Results

Our results are in the `results` directory, organized by project name. These files represent our findings organized by manually categorizing the violations and putting them all under the same heading. The remaining results show the number of violations at each source location. These violations are annotated with source locations.
