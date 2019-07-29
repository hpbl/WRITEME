# DXVK

A Vulkan-based translation layer for Direct @abstr_number D @abstr_number / @abstr_number which allows running @abstr_number D applications on Linux using Wine.

For the current status of the project, please refer to the @abstr_hyperlink .

## How to use

In order to install a DXVK package obtained from the @abstr_hyperlink page into a given wine prefix, run the following commands from within the DXVK directory:

@abstr_code_section 

This will **copy** the DLLs into the `system @abstr_number` and `syswow @abstr_number` directories of your wine prefix and set up the required DLL overrides. Pure @abstr_number -bit prefixes are also supported.

The setup script optionally takes the following arguments: \- `--symlink`: Create symbolic links to the DLL files instead of copying them. This is especially useful for development. \- `--without-dxgi`: Do not install DXVK's DXGI implementation and use the one provided by wine instead. This is necessary for both vkd @abstr_number d and DXVK to work within the same wine prefix.

Verify that your application uses DXVK instead of wined @abstr_number d by checking for the presence of the log file `d @abstr_number d @abstr_number .log` in the application's directory, or by enabling the HUD (see notes below).

In order to remove DXVK from a prefix, run the following command: @abstr_code_section 

## Build instructions

### Requirements:

  * @abstr_hyperlink or newer
  * @abstr_hyperlink build system (at least version @abstr_number . @abstr_number )
  * @abstr_hyperlink @abstr_number . @abstr_number compiler and headers
  * @abstr_hyperlink compiler



### Building DLLs

#### The simple way

Inside the DXVK directory, run: @abstr_code_section 

This will create a folder `dxvk-master` in `/your/target/directory`, which contains both @abstr_number -bit and @abstr_number -bit versions of DXVK, which can be set up in the same way as the release versions as noted above.

In order to preserve the build directories for development, pass `--dev-build` to the script. This option implies `--no-package`. After making changes to the source code, you can then do the following to rebuild DXVK: @abstr_code_section 

A winelib build can be created by adding the `--winelib` argument.

#### Compiling manually

@abstr_code_section 

The D @abstr_number D @abstr_number , D @abstr_number D @abstr_number and DXGI DLLs will be located in `/your/dxvk/directory/bin`. Setup has to be done manually in this case.

### Notes on Vulkan drivers

Before reporting an issue, please check the @abstr_hyperlink page on the current driver status and make sure you run a recent enough driver version for your hardware.

### Online multi-player games

Manipulation of Direct @abstr_number D libraries in multi-player games may be considered cheating and can get your account **banned**. This may also apply to single-player games with an embedded or dedicated multiplayer portion. **Use at your own risk.**

### HUD

The `DXVK_HUD` environment variable controls a HUD which can display the framerate and some stat counters. It accepts a comma-separated list of the following options: \- `devinfo`: Displays the name of the GPU and the driver version. \- `fps`: Shows the current frame rate. \- `frametimes`: Shows a frame time graph. \- `submissions`: Shows the number of command buffers submitted per frame. \- `drawcalls`: Shows the number of draw calls and render passes per frame. \- `pipelines`: Shows the total number of graphics and compute pipelines. \- `memory`: Shows the amount of device memory allocated and used. \- `gpuload`: Shows estimated GPU load. May be inaccurate. \- `version`: Shows DXVK version. \- `api`: Shows the D @abstr_number D feature level used by the application. Does not work correctly for D @abstr_number D @abstr_number at the moment.

Additionally, `DXVK_HUD= @abstr_number` has the same effect as `DXVK_HUD=devinfo,fps`, and `DXVK_HUD=full` enables all available HUD elements.

### Device filter

Some applications do not provide a method to select a different GPU. In that case, DXVK can be forced to use a given device: \- `DXVK_FILTER_DEVICE_NAME="Device Name"` Selects devices with a matching Vulkan device name, which can be retrieved with tools such as `vulkaninfo`. Matches on substrings, so "VEGA" or "AMD RADV VEGA @abstr_number " is supported if the full device name is "AMD RADV VEGA @abstr_number (LLVM @abstr_number . @abstr_number . @abstr_number )", for example. If the substring matches more than one device, the first device matched will be used.

**Note:** If the device filter is configured incorrectly, it may filter out all devices and applications will be unable to create a D @abstr_number D device.

### State cache

DXVK caches pipeline state by default, so that shaders can be recompiled ahead of time on subsequent runs of an application, even if the driver's own shader cache got invalidated in the meantime. This cache is enabled by default, and generally reduces stuttering.

The following environment variables can be used to control the cache: \- `DXVK_STATE_CACHE= @abstr_number` Disables the state cache. \- `DXVK_STATE_CACHE_PATH=/some/directory` Specifies a directory where to put the cache files. Defaults to the current working directory of the application.

### Debugging

The following environment variables can be used for **debugging** purposes. \- `VK_INSTANCE_LAYERS=VK_LAYER_LUNARG_standard_validation` Enables Vulkan debug layers. Highly recommended for troubleshooting rendering issues and driver crashes. Requires the Vulkan SDK to be installed on the host system. \- `DXVK_LOG_LEVEL=none|error|warn|info|debug` Controls message logging. \- `DXVK_LOG_PATH=/some/directory` Changes path where log files are stored. \- `DXVK_CONFIG_FILE=/xxx/dxvk.conf` Sets path to the configuration file.

## Troubleshooting

DXVK requires threading support from your mingw-w @abstr_number build environment. If you are missing this, you may see "error: 'mutex' is not a member of 'std'". On Debian and Ubuntu, this can usually be resolved by using the posix alternate, which supports threading. For example, choose the posix alternate from these commands (use i @abstr_number for @abstr_number -bit): @abstr_code_section 
