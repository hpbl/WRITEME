#  @abstr_image 

PruneCluster is a fast and realtime marker clustering library.

It's working with @abstr_hyperlink as an alternative to @abstr_hyperlink .

_The library is designed for large datasets or live situations._ The memory consumption is kept low and the library is fast on mobile devices, thanks to a new algorithm inspired by collision detection in physical engines.

@abstr_image **Some tweets over the world**

### Features

#### Realtime

The clusters can be updated in realtime. It's perfect for live situations.

#### Fast

Number of markers|First step|Update (low zoom level)|Update (high zoom level) \---------|------------------|------------------------|------------------ @abstr_hyperlink |instant|instant|instant @abstr_hyperlink |instant|instant|instant @abstr_hyperlink | @abstr_number ms| @abstr_number ms| @abstr_number ms @abstr_hyperlink | @abstr_number ms| @abstr_number ms| @abstr_number ms @abstr_hyperlink | @abstr_number ms| @abstr_number ms| @abstr_number ms @abstr_hyperlink | @abstr_number . @abstr_number s| @abstr_number ms| @abstr_number ms

These values are tested with random positions, on a recent laptop, using Chrome @abstr_number . One half of markers is moving randomly and the other half is static. It is also fast enough for mobile devices.

If you prefer real world data, the @abstr_hyperlink is computed in @abstr_number ms _( @abstr_hyperlink )_.

#### Weight

You can specify the weight of each marker.

For example, you may want to add more importance to a marker representing an incident, than a marker representing a tweet.

#### Categories

You can specify a category for the markers. Then a small object representing the number of markers for each category is attached to the clusters. This way, you can create cluster icons adapted to their content.

@abstr_hyperlink @abstr_hyperlink 

#### Dynamic cluster size

The size of a cluster can be adjusted on the fly _( @abstr_hyperlink )_

#### Filtering

The markers can be filtered easily with no performance cost.

### Usage

@abstr_code_section 

@abstr_code_section 

### PruneClusterForLeaflet constructor

PruneClusterForLeaflet(size, margin)

You can specify the size and margin which affect when your clusters and markers will be merged.

size defaults to @abstr_number and margin to @abstr_number .

#### Update a position

@abstr_code_section 

#### Deletions

@abstr_code_section 

#### Set the category

The category can be a number or a string, but in order to minimize the performance cost, it is recommended to use numbers between @abstr_number and @abstr_number . @abstr_code_section 

#### Set the weight

@abstr_code_section 

#### Filtering

@abstr_code_section 

#### Set the clustering size

You can specify a number indicating the area of the cluster. Higher number means more markers "merged". _( @abstr_hyperlink )_ @abstr_code_section 

#### Apply the changes

**Must be called when ANY changes are made.**

@abstr_code_section 

#### Add custom data to marker object

Each marker has a data object where you can specify your data. @abstr_code_section 

#### Setting up a Leaflet icon or a Leaflet popup

You can attach to the markers an icon object and a popup content @abstr_code_section 

#### Faster leaflet icons

If you have a lot of markers, you can create the icons and popups on the fly in order to improve their performance.

@abstr_code_section 

You can also override the PreapareLeafletMarker method. You can apply listeners to the markers here.

@abstr_code_section 

#### Setting up a custom cluster icon

@abstr_code_section 

#### Listening to events on a cluster

To listen to events on the cluster, you will need to override the `BuildLeafletCluster` method. A click event is already specified on m, but you can add other events like mouseover, mouseout, etc. Any events that a Leaflet marker supports, the cluster also supports, since it is just a modified marker. A full list of events can be found @abstr_hyperlink .

Below is an example of how to implement mouseover and mousedown for the cluster, but any events can be used in place of those. @abstr_code_section 

#### Redraw the icons

Marker icon redrawing with a flag:

@abstr_code_section 

Redraw all the icons: @abstr_code_section 

### Acknowledgements

This library was developed in context of the @abstr_hyperlink project. It is now supported by the community and we thank @abstr_hyperlink .

### Licence

The source code of this library is licensed under the MIT License.
