# ADClusterMapView - MKMapView with clustering

ADClusterMapView is a drop-in subclass of MKMapView that displays and animates clusters of annotations. This is very useful in cases where you have to display many annotations on the map. Concept and implementation were described on Applidium's @abstr_hyperlink .

## Quick start

@abstr_number . Add the content of the ADClusterMapView folder to your iOS project @abstr_number . Link against the MapKit and CoreLocation frameworks if you don't already @abstr_number . Turn your MKMapView instance into a subclass of ADClusterMapView @abstr_number . Set your annotations by calling `setAnnotations:`. Do not use `addAnnotation:` or `addAnnotations:` as they are not supported yet.

### ARC

If you are not using ARC in your project, add the `-fobjc-arc` flag to the files of the library in the _Build Phases > Compile Sources_ section in Xcode.

## Displaying custom MKAnnotationView instances

In the `mapView:viewForAnnotation:` and `mapView:viewForClusterAnnotation:` implementations of your map view's delegate, you are given an instance of ADClusterAnnotation. You can call `[annotation originalAnnotations]` to retrieve your original `id<MKAnnotation>` instances and customize your `MKAnnotationView` instance like you would do with Map Kit. This is especially useful in the case of a _leaf_ annotation, whose `originalAnnotations` array obviously contains one and only one object.

### Example code:

@abstr_code_section 

## Optional delegate methods

We provide you with a few optional methods that you may want to add to your `ADClusterMapViewDelegate` implementation:

### Setting the maximum number of clusters that you want to display at the same time

@abstr_code_section 

### Custom MKAnnotationView instance for clusters

@abstr_code_section 

### Custom title for clusters

@abstr_code_section 

### Set visibility for cluster annotation's subtitle

@abstr_code_section 

### Disminish outliers weight

@abstr_code_section 

### Animation callback

@abstr_code_section 

## Future Work

There are a couple of improvements that could be done. Feel free to send us pull requests if you want to contribute!

  * Add support for annotations addition and removal.
  * Add support for multiple independant trees
  * More?


