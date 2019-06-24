# **Visdom**

@abstr_image 

A flexible tool for creating, organizing, and sharing visualizations of live, rich data. Supports Torch and Numpy.

  * Overview
  * Concepts
  * Setup
  * Usage
  * API
  * To Do
  * Contributing



## Overview

Visdom aims to facilitate visualization of (remote) data with an emphasis on supporting scientific experimentation.

@abstr_image 

Broadcast visualizations of plots, images, and text for yourself and your collaborators.

@abstr_image 

Organize your visualization space programmatically or through the UI to create dashboards for live data, inspect results of experiments, or debug experimental code.

@abstr_image 

  


## Concepts

Visdom has a simple set of features that can be composed for various use-cases.

### Windows

@abstr_image 

The UI begins as a blank slate -- you can populate it with plots, images, and text. These appear in windows that you can drag, drop, resize, and destroy. The windows live in `envs` and the state of `envs` is stored across sessions. You can download the content of windows -- including your plots in `svg`.

> **Tip** : You can use the zoom of your browser to adjust the scale of the UI.

##### Callbacks

The python Visdom implementation supports callbacks on a window. The demo shows an example of this in the form of an editable text pad. The functionality of these callbacks allows the Visdom object to receive and react to events that happen in the frontend.

You can subscribe a window to events by adding a function to the event handlers dict for the window id you want to subscribe by calling `viz.register_event_handler(handler, win_id)` with your handler and the window id. Multiple handlers can be registered to the same window. You can remove all event handlers from a window using `viz.clear_event_handlers(win_id)`. When an event occurs to that window, your callbacks will be called on a dict containing:

  * `event_type`: one of the below event types
  * `pane_data`: all of the stored contents for that window including layout and content.
  * `eid`: the current environment id
  * `target`: the window id the event is called on



Additional parameters are defined below.

Right now three callback events are supported:

@abstr_number . `Close` \- Triggers when a window is closed. Returns a dict with only the aforementioned fields. @abstr_number . `KeyPress` \- Triggers when a key is pressed. Contains additional parameters: \- `key` \- A string representation of the key pressed (applying state modifiers such as SHIFT) \- `key_code` \- The javascript event keycode for the pressed key (no modifiers) @abstr_number . `PropertyUpdate` \- Triggers when a property is updated in Property pane \- `propertyId` \- Position in properties list \- `value` \- New property value

### Environments

@abstr_image 

You can partition your visualization space with `envs`. By default, every user will have an env called `main`. New envs can be created in the UI or programmatically. The state of envs is chronically saved. Environments are able to keep entirely different pools of plots.

You can access a specific env via url: `http://localhost.com: @abstr_number /env/main`. If your server is hosted, you can share this url so others can see your visualizations too.

Environments are automatically hierarchically organized by the first `_`.

#### Selecting Environments

@abstr_image 

From the main page it is possible to toggle between different environments using the environment selector. Selecting a new environment will query the server for the plots that exist in that environment. The environment selector allows for searching and filtering for the new enironment.

#### Comparing Environments

From the main page it is possible to compare different environments using the environment selector. Selecting multiple environments in the check box will query the server for the plots with the same titles in all environments and plot them in a single plot. An additional compare legend pane is created with a number corresponding to each selected environment. Individual plots are updated with legends corresponding to "x_name" where `x` is a number corresponding with the compare legend pane and `name` is the original name in the legend.

> **Note** : The compare envs view is not robust to high throughput data, as the server is responsible for generating the compared content. Do not compare an environment that is receiving a high quantity of updates on any plot, as every update will request regenerating the comparison. If you need to compare two plots that are receiving high quantities of data, have them share the same window on a singular env.

#### Clearing Environments

You can use the eraser button to remove all of the current contents of an environment. This closes the plot windows for that environment but keeps the empty environment for new plots.

#### Managing Environments

@abstr_image 

Pressing the folder icon opens a dialog that allows you to fork or force save the current environment, or delete any of your existing environments. Use of this feature is fully described in the **State** section.

> **Env Files:** Your envs are loaded at initialization of the server, by default from `$HOME/.visdom/`. Custom paths can be passed as a cmd-line argument. Envs are removed by using the delete button or by deleting the corresponding `.json` file from the env dir.

### State

Once you've created a few visualizations, state is maintained. The server automatically caches your visualizations -- if you reload the page, your visualizations reappear.

@abstr_image 

  * **Save:** You can manually do so with the `save` button. This will serialize the env's state (to disk, in JSON), including window positions. You can save an `env` programmatically.   
This is helpful for more sophisticated visualizations in which configuration is meaningful, e.g. a data-rich demo, a model training dashboard, or systematic experimentation. This also makes them easy to share and reuse.

  * **Fork:** If you enter a new env name, saving will create a new env -- effectively **forking** the previous env.




> **Tip** : Fork an environment before you begin to make edits to ensure that your changes are saved seperately.

### Filter

You can use the `filter` to dynamically sift through windows present in an env -- just provide a regular expression with which to match titles of window you want to show. This can be helpful in use cases involving an env with many windows e.g. when systematically checking experimental results.

@abstr_image 

> **Note** : If you have saved your current view, the view will be restored after clearing the filter.
> 
> @abstr_image 

### Views

@abstr_image 

It is possible to manage the views simply by dragging the tops of windows around, however additional features exist to keep views organized and save common views. View management can be useful for saving and switching between multiple common organizations of your windows.

#### Saving/Deleting Views

Using the folder icon, a dialog window opens where views can be forked in the same way that envs can be. Saving a view will retain the position and sizes of all of the windows in a given environment. Views are saved in `$HOME/.visdom/view/layouts.json` in the visdom filepath.

> **Note** : Saved views are static, and editing a saved view copies that view over to the `current` view where editing can occur.

#### Re-Packing

Using the repack icon ( @abstr_number boxes), visdom will attempt to pack your windows in a way that they best fit while retaining row/column ordering.

> **Note** : Due to the reliance on row/column ordering and `ReactGridLayout` the final layout might be slightly different than what might be expected. We're working on improving that experience or providing alternatives that give more fine-tuned control.

#### Reloading Views

@abstr_image 

Using the view dropdown it is possible to select previously saved views, restoring the locations and sizes of all of the windows within the current environment to the places they were when that view was saved last.

## Setup

Requires Python @abstr_number . @abstr_number / @abstr_number (and optionally Torch @abstr_number )

@abstr_code_section 

@abstr_code_section 

## Usage

Start the server (probably in a `screen` or `tmux`) from the command line:

@abstr_code_section 

Visdom now can be accessed by going to `http://localhost: @abstr_number` in your browser, or your own host address if specified.

> The `visdom` command is equivalent to running `python -m visdom.server`.
> 
> If the above does not work, try using an SSH tunnel to your server by adding the following line to your local `~/.ssh/config`: ```LocalForward @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number @abstr_code_section python import visdom import numpy as np vis = visdom.Visdom() vis.text('Hello, world!') vis.image(np.ones(( @abstr_number , @abstr_number , @abstr_number ))) @abstr_code_section lua require 'image' vis = require 'visdom'() vis:text{text = 'Hello, world!'} vis:image{img = image.fabio()} @abstr_code_section vis = require 'visdom'() vis.ipv @abstr_number = false -- switches off IPv @abstr_number vis:text{text = 'Hello, world!'} @abstr_code_section bash python example/demo.py th example/demo @abstr_number .lua th example/demo @abstr_number .lua @abstr_code_section python import visdom vis = visdom.Visdom()

trace = dict(x=[ @abstr_number , @abstr_number , @abstr_number ], y=[ @abstr_number , @abstr_number , @abstr_number ], mode="markers+lines", type='custom', marker={'color': 'red', 'symbol': @abstr_number , 'size': " @abstr_number "}, text=["one", "two", "three"], name=' @abstr_number st Trace') layout = dict(title="First Plot", xaxis={'title': 'x @abstr_number '}, yaxis={'title': 'x @abstr_number '})

vis._send({'data': [trace], 'layout': layout, 'win': 'mywin'}) @abstr_code_section properties = [ {'type': 'text', 'name': 'Text input', 'value': 'initial'}, {'type': 'number', 'name': 'Number input', 'value': ' @abstr_number '}, {'type': 'button', 'name': 'Button', 'value': 'Start'}, {'type': 'checkbox', 'name': 'Checkbox', 'value': True}, {'type': 'select', 'name': 'Select', 'value': @abstr_number , 'values': ['Red', 'Green', 'Blue']}, ] ``` Supported types: - text: string - number: decimal number - button: button labeled with "value" - checkbox: boolean value rendered as a checkbox - select: multiple values select box -`value`: id of selected value (zero based) -`values`: list of possible values

Callback are called on property value update: \- `event_type`: `"PropertyUpdate"` \- `propertyId`: position in the `properties` list \- `value`: new value

No specific `opts` are currently supported.

#### vis.audio

This function plays audio. It takes as input the filename of the audio file or an `N` tensor containing the waveform (use an `Nx @abstr_number` matrix for stereo audio). The function does not support any plot-specific `opts`.

The following `opts` are supported:

  * `opts.sample_frequency`: sample frequency (`integer` > @abstr_number ; default = @abstr_number )



Known issue: Visdom uses scipy to convert tensor inputs to wave files. Some versions of Chrome are known not to play these wave files (Firefox and Safari work fine).

#### vis.video

This function plays a video. It takes as input the filename of the video `videofile` or a `LxHxWxC`-sized `tensor` containing all the frames of the video as input. The function does not support any plot-specific `opts`.

The following `opts` are supported:

  * `opts.fps`: FPS for the video (`integer` > @abstr_number ; default = @abstr_number )



Note: Using `tensor` input requires that ffmpeg is installed and working. Your ability to play video may depend on the browser you use: your browser has to support the Theano codec in an OGG container (Chrome supports this).

#### vis.svg

This function draws an SVG object. It takes as input a SVG string `svgstr` or the name of an SVG file `svgfile`. The function does not support any specific `opts`.

#### vis.matplot

This function draws a Matplotlib `plot`. The function supports one plot-specific option: `resizable`.

> **Note** When set to `True` the plot is resized with the pane. You need `beautifulsoup @abstr_number` and `lxml` packages installed to use this option.
> 
> **Note** : `matplot` is not rendered using the same backend as plotly plots, and is somewhat less efficient. Using too many matplot windows may degrade visdom performance.

#### vis.plotlyplot

This function draws a Plotly `Figure` object. It does not explicitly take options as it assumes you have already explicitly configured the figure's `layout`.

> **Note** You must have the `plotly` Python package installed to use this function. It can typically be installed by running `pip install plotly`.

#### vis.save

This function saves the `envs` that are alive on the visdom server. It takes input a list (in python) or table (in lua) of env ids to be saved.

### Plotting

Further details on the wrapped plotting functions are given below.

The exact inputs into the plotting functions vary, although most of them take as input a tensor `X` than contains the data and an (optional) tensor `Y` that contains optional data variables (such as labels or timestamps). All plotting functions take as input an optional `win` that can be used to plot into a specific window; each plotting function also returns the `win` of the window it plotted in. One can also specify the `env` to which the visualization should be added.

#### vis.scatter

This function draws a @abstr_number D or @abstr_number D scatter plot. It takes as input an `Nx @abstr_number` or `Nx @abstr_number` tensor `X` that specifies the locations of the `N` points in the scatter plot. An optional `N` tensor `Y` containing discrete labels that range between `@abstr_number` and `K` can be specified as well -- the labels will be reflected in the colors of the markers.

`update` can be used to efficiently update the data of an existing plot. Use `'append'` to append data, `'replace'` to use new data, or `'remove'` to remove the trace specified by `name`. Using `update='append'` will create a plot if it doesn't exist and append to the existing plot otherwise. If updating a single trace, use `name` to specify the name of the trace to be updated. Update data that is all NaN is ignored (can be used for masking update).

The following `opts` are supported:

  * `opts.markersymbol`: marker symbol (`string`; default = `'dot'`)
  * `opts.markersize` : marker size (`number`; default = `' @abstr_number '`)
  * `opts.markercolor` : color per marker. (`torch.*Tensor`; default = `nil`)
  * `opts.legend` : `table` containing legend names
  * `opts.textlabels` : text label for each point (`list`: default = `None`)
  * `opts.layoutopts` : dict of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.
  * `opts.traceopts` : dict mapping trace names or indices to dicts of additional options that the graph backend accepts. For example `traceopts = {'plotly': {'myTrace': {'mode': 'markers'}}}`.
  * `opts.webgl` : use WebGL for plotting (`boolean`; default = `false`). It is faster if a plot contains too many points. Use sparingly as browsers won't allow more than a couple of WebGL contexts on a single page.



`opts.markercolor` is a Tensor with Integer values. The tensor can be of size `N` or `N x @abstr_number` or `K` or `K x @abstr_number`.

  * Tensor of size `N`: Single intensity value per data point. @abstr_number = black, @abstr_number = red
  * Tensor of size `N x @abstr_number`: Red, Green and Blue intensities per data point. @abstr_number , @abstr_number , @abstr_number = black, @abstr_number , @abstr_number , @abstr_number = white
  * Tensor of size `K` and `K x @abstr_number`: Instead of having a unique color per data point, the same color is shared for all points of a particular label.



#### vis.line

This function draws a line plot. It takes as input an `N` or `NxM` tensor `Y` that specifies the values of the `M` lines (that connect `N` points) to plot. It also takes an optional `X` tensor that specifies the corresponding x-axis values; `X` can be an `N` tensor (in which case all lines will share the same x-axis values) or have the same size as `Y`.

`update` can be used to efficiently update the data of an existing plot. Use 'append' to append data, 'replace' to use new data, or 'remove' to remove the trace specified by `name`. If updating a single trace, use `name` to specify the name of the trace to be updated. Update data that is all NaN is ignored (can be used for masking update).

The following `opts` are supported:

  * `opts.fillarea` : fill area below line (`boolean`)
  * `opts.markers` : show markers (`boolean`; default = `false`)
  * `opts.markersymbol`: marker symbol (`string`; default = `'dot'`)
  * `opts.markersize` : marker size (`number`; default = `' @abstr_number '`)
  * `opts.linecolor` : line colors (`np.array`; default = None)
  * `opts.dash` : line dash type for each line (`np.array`; default = 'solid'), one of `solid`, `dash`, `dashdot` or `dash`, size should match number of lines being drawn
  * `opts.legend` : `table` containing legend names
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.
  * `opts.traceopts` : `dict` mapping trace names or indices to `dict`s of additional options that plot.ly accepts for a trace.
  * `opts.webgl` : use WebGL for plotting (`boolean`; default = `false`). It is faster if a plot contains too many points. Use sparingly as browsers won't allow more than a couple of WebGL contexts on a single page.



#### vis.stem

This function draws a stem plot. It takes as input an `N` or `NxM` tensor `X` that specifies the values of the `N` points in the `M` time series. An optional `N` or `NxM` tensor `Y` containing timestamps can be specified as well; if `Y` is an `N` tensor then all `M` time series are assumed to have the same timestamps.

The following `opts` are supported:

  * `opts.colormap`: colormap (`string`; default = `'Viridis'`)
  * `opts.legend` : `table` containing legend names
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



#### vis.heatmap

This function draws a heatmap. It takes as input an `NxM` tensor `X` that specifies the value at each location in the heatmap.

The following `opts` are supported:

  * `opts.colormap` : colormap (`string`; default = `'Viridis'`)
  * `opts.xmin` : clip minimum value (`number`; default = `X:min()`)
  * `opts.xmax` : clip maximum value (`number`; default = `X:max()`)
  * `opts.columnnames`: `table` containing x-axis labels
  * `opts.rownames` : `table` containing y-axis labels
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.
  * `opts.nancolor` : color for plotting `NaN`s. If this is `None`, `NaN`s will be plotted as transparent. (`string`; default = `None`)



#### vis.bar

This function draws a regular, stacked, or grouped bar plot. It takes as input an `N` or `NxM` tensor `X` that specifies the height of each of the bars. If `X` contains `M` columns, the values corresponding to each row are either stacked or grouped (depending on how `opts.stacked` is set). In addition to `X`, an (optional) `N` tensor `Y` can be specified that contains the corresponding x-axis values.

The following plot-specific `opts` are currently supported:

  * `opts.rownames`: `table` containing x-axis labels
  * `opts.stacked` : stack multiple columns in `X`
  * `opts.legend` : `table` containing legend labels
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



#### vis.histogram

This function draws a histogram of the specified data. It takes as input an `N` tensor `X` that specifies the data of which to construct the histogram.

The following plot-specific `opts` are currently supported:

  * `opts.numbins`: number of bins (`number`; default = @abstr_number )
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



#### vis.boxplot

This function draws boxplots of the specified data. It takes as input an `N` or an `NxM` tensor `X` that specifies the `N` data values of which to construct the `M` boxplots.

The following plot-specific `opts` are currently supported:

  * `opts.legend`: labels for each of the columns in `X`
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



#### vis.surf

This function draws a surface plot. It takes as input an `NxM` tensor `X` that specifies the value at each location in the surface plot.

The following `opts` are supported:

  * `opts.colormap`: colormap (`string`; default = `'Viridis'`)
  * `opts.xmin` : clip minimum value (`number`; default = `X:min()`)
  * `opts.xmax` : clip maximum value (`number`; default = `X:max()`)
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



#### vis.contour

This function draws a contour plot. It takes as input an `NxM` tensor `X` that specifies the value at each location in the contour plot.

The following `opts` are supported:

  * `opts.colormap`: colormap (`string`; default = `'Viridis'`)
  * `opts.xmin` : clip minimum value (`number`; default = `X:min()`)
  * `opts.xmax` : clip maximum value (`number`; default = `X:max()`)
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



#### vis.quiver

This function draws a quiver plot in which the direction and length of the arrows is determined by the `NxM` tensors `X` and `Y`. Two optional `NxM` tensors `gridX` and `gridY` can be provided that specify the offsets of the arrows; by default, the arrows will be done on a regular grid.

The following `opts` are supported:

  * `opts.normalize`: length of longest arrows (`number`)
  * `opts.arrowheads`: show arrow heads (`boolean`; default = `true`)
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



#### vis.mesh

This function draws a mesh plot from a set of vertices defined in an `Nx @abstr_number` or `Nx @abstr_number` matrix `X`, and polygons defined in an optional `Mx @abstr_number` or `Mx @abstr_number` matrix `Y`.

The following `opts` are supported:

  * `opts.color`: color (`string`)
  * `opts.opacity`: opacity of polygons (`number` between @abstr_number and @abstr_number )
  * `opts.layoutopts` : `dict` of any additional options that the graph backend accepts for a layout. For example `layoutopts = {'plotly': {'legend': {'x': @abstr_number , 'y': @abstr_number }}}`.



### Customizing plots

The plotting functions take an optional `opts` table as input that can be used to change (generic or plot-specific) properties of the plots. All input arguments are specified in a single table; the input arguments are matches based on the keys they have in the input table.

The following `opts` are generic in the sense that they are the same for all visualizations (except `plot.image`, `plot.text`, `plot.video`, and `plot.audio`):

  * `opts.title` : figure title
  * `opts.width` : figure width
  * `opts.height` : figure height
  * `opts.showlegend` : show legend (`true` or `false`)
  * `opts.xtype` : type of x-axis (`'linear'` or `'log'`)
  * `opts.xlabel` : label of x-axis
  * `opts.xtick` : show ticks on x-axis (`boolean`)
  * `opts.xtickmin` : first tick on x-axis (`number`)
  * `opts.xtickmax` : last tick on x-axis (`number`)
  * `opts.xtickvals` : locations of ticks on x-axis (`table` of `number`s)
  * `opts.xticklabels` : ticks labels on x-axis (`table` of `string`s)
  * `opts.xtickstep` : distances between ticks on x-axis (`number`)
  * `opts.xtickfont` : font for x-axis labels (dict of @abstr_hyperlink )
  * `opts.ytype` : type of y-axis (`'linear'` or `'log'`)
  * `opts.ylabel` : label of y-axis
  * `opts.ytick` : show ticks on y-axis (`boolean`)
  * `opts.ytickmin` : first tick on y-axis (`number`)
  * `opts.ytickmax` : last tick on y-axis (`number`)
  * `opts.ytickvals` : locations of ticks on y-axis (`table` of `number`s)
  * `opts.yticklabels` : ticks labels on y-axis (`table` of `string`s)
  * `opts.ytickstep` : distances between ticks on y-axis (`number`)
  * `opts.ytickfont` : font for y-axis labels (dict of @abstr_hyperlink )
  * `opts.marginleft` : left margin (in pixels)
  * `opts.marginright` : right margin (in pixels)
  * `opts.margintop` : top margin (in pixels)
  * `opts.marginbottom`: bottom margin (in pixels)



The other options are visualization-specific, and are described in the documentation of the functions.

### Others

#### vis.close

This function closes a specific window. It takes input window id `win` and environment id `eid`. Use `win` as `None` to close all windows in an environment.

#### vis.delete_env

This function deletes a specified env entirely. It takes env id `eid` as input.

> **Note** : `delete_env` is deletes all data for an environment and is IRREVERSIBLE. Do not use unless you absolutely want to remove an environment.

#### vis.fork_env

This function forks an environment, similiar to the UI feature.

Arguments: \- `prev_eid`: Environment ID that we want to fork. \- `eid`: New Environment ID that will be created with the fork.

> **Note** : `fork_env` an exception will occur if an env that doesn't exist is forked.

#### vis.win_exists

This function returns a bool indicating whether or not a window `win` exists on the server already. Returns None if something went wrong.

Optional arguments: \- `env`: Environment to search for the window in. Default is `None`.

#### vis.get_env_list

This function returns a list of all of the environments on the server at the time of calling. It takes no arguments.

#### vis.win_hash

This function returns md @abstr_number hash of the contents of a window `win` if it exists on the server. Returns None otherwise.

Optional arguments: \- `env` : Environment to search for the window in. Default is `None`.

#### vis.get_window_data

This function returns the window data for the given window. Returns data for all windows in an env if win is None.

Arguments: \- `env`: Environment to search for the window in. \- `win`: Window to return data for. Set to `None` to retrieve all the windows in an environment.

#### vis.check_connection

This function returns a bool indicating whether or not the server is connected. It accepts an optional argument `timeout_seconds` for a number of seconds to wait for the server to come up.

#### vis.replay_log

This function takes the contents of a visdom log and replays them to the current server to restore a state or handle any missing entries.

Arguments: \- `log_filename`: log file to replay the contents of.

## License

visdom is Creative Commons Attribution-NonCommercial @abstr_number . @abstr_number International Public licensed, as found in the LICENSE file.

## Contributing

See guidelines for contributing here.

## Acknowledgments

Visdom was inspired by tools like @abstr_hyperlink and relies on @abstr_hyperlink as a plotting front-end.
