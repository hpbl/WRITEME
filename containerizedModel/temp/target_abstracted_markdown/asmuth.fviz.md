# fviz

fviz is a text-based data visualization program. It generates custom charts, dashboards and other illustrations from simple expressions.

You can run fviz from the command line, where it generates SVG, PNG and PDF output files. Additionally, you can embed it into your own application using the C API.

Examples · @abstr_hyperlink 

## Example

Being a highly visual tool, fviz is best explained by example. So here is a fviz file that defines a simple scatterplot (`example_chart.fvz`). Note that this example is only intended to give you an idea of what the syntax looks like and to get you started quickly; for an in-depth description of all parameters, please refer to the documentation.
    
    
    (chart/scatterplot
        data-x (csv tests/testdata/gauss @abstr_number d.csv x)
        data-y (csv tests/testdata/gauss @abstr_number d.csv y)
        limit-x ( @abstr_number   @abstr_number )
        limit-y ( @abstr_number   @abstr_number )
        axes (bottom left)
        grid (color #fff)
        background #eee
        border none)
    

Here is how you can run the above example file through fviz:
    
    
    $ fviz --in example_chart.fvz --out example_chart.svg
    

When running the example locally, you can use your own input CSV file, or you can download the example CSV file from here. If everything works, you should get an output file similar to the one below (`example_chart.svg`):

@abstr_hyperlink 

More examples can be found on @abstr_hyperlink . For a more detailed introduction to fviz, see the @abstr_hyperlink page. If you have any questions please don't hesitate to reach out via @abstr_hyperlink .

## Building

To build fviz, you need an up-to-date C++ compiler, cmake, fmtlib, libharfbuzz, libfreetype and cairo. Run:
    
    
    $ cmake .
    $ make -j
    

To install the `fviz` binary into your system, run `make install`:
    
    
    $ make install
    

To run the test suite, run `make test`:
    
    
    $ make test
    

## Acknowledgements

fviz is the successor of the FnordMetric ChartSQL project by the same authors.

Parts of the new chart specification semantics were inspired by ideas from the "Grammar of Graphics" [ @abstr_number ] and the ggplot @abstr_number project.

[ @abstr_number ] Wilkinson, L. ( @abstr_number ). The Grammar of Graphics (Springer)

## License
    
    
    fviz -- Open-Source Data Visualization Toolkit 
    https://fviz.org
    
    Copyright (c)  @abstr_number , Paul Asmuth, Laura Schlimmer
    All rights reserved.
    
    Licensed under the Apache License, Version  @abstr_number . @abstr_number  (the "License");
    you may not use this file except in compliance with the License.
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
