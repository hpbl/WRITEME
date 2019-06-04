# RoaringBitmap @abstr_hyperlink 

Bitsets, also called bitmaps, are commonly used as fast data structures. Unfortunately, they can use too much memory. To compensate, we often use compressed bitmaps.

Roaring bitmaps are compressed bitmaps which tend to outperform conventional compressed bitmaps such as WAH, EWAH or Concise. In some instances, roaring bitmaps can be hundreds of times faster and they often offer significantly better compression. They can even be faster than uncompressed bitmaps.

This library is used by Apache Spark (https://spark.apache.org/) and Druid.io (http://druid.io/). Apache Lucene (http://lucene.apache.org/) uses Roaring bitmaps, though they have their own @abstr_hyperlink .

(c) @abstr_number - @abstr_number Daniel Lemire, Owen Kaser, Samy Chambi, Jon Alvarado, Rory Graves, Björn Sperber, Seth Pellegrino, Borislav Ivanov, Gregory Ssi-Yan-Kai

This code is licensed under Apache License, Version @abstr_number . @abstr_number (ASL @abstr_number . @abstr_number ). 

## API docs

http://lemire.me/docs/RoaringBitmap/

## Scientific Documentation

Samy Chambi, Daniel Lemire, Owen Kaser, Robert Godin, Better bitmap performance with Roaring bitmaps, Software: Practice and Experience (to appear) http://arxiv.org/abs/ @abstr_number . @abstr_number 

This paper used data from http://lemire.me/data/realroaring @abstr_number .html

## Code sample
    
    
        import org.roaringbitmap.*;
    
        //...
    
        RoaringBitmap rr = RoaringBitmap.bitmapOf( @abstr_number , @abstr_number , @abstr_number , @abstr_number );
        RoaringBitmap rr @abstr_number  = new RoaringBitmap();
        for(int k =  @abstr_number ; k< @abstr_number ;++k) rr @abstr_number .add(k);
    
        RoaringBitmap rror = RoaringBitmap.or(rr, rr @abstr_number );
    

Please see the examples folder for more examples.

## Working with memory-mapped bitmaps

If you want to have your bitmaps lie in memory-mapped files, you can use the org.roaringbitmap.buffer package instead. 

The following code sample illustrates how to create an ImmutableRoaringBitmap from a ByteBuffer. In such instances, the constructor only loads the meta-data in RAM while the actual data is accessed from the ByteBuffer on demand.
    
    
        import org.roaringbitmap.buffer.*;
    
        //...
    
        MutableRoaringBitmap rr @abstr_number  = MutableRoaringBitmap.bitmapOf( @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number );
        MutableRoaringBitmap rr @abstr_number  = MutableRoaringBitmap.bitmapOf(  @abstr_number ,  @abstr_number ,  @abstr_number );
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        DataOutputStream dos = new DataOutputStream(bos);
        rr @abstr_number .serialize(dos);
        rr @abstr_number .serialize(dos);
        dos.close();
        ByteBuffer bb = ByteBuffer.wrap(bos.toByteArray());
        ImmutableRoaringBitmap rrback @abstr_number  = new ImmutableRoaringBitmap(bb);
        bb.position(bb.position() + rrback @abstr_number .serializedSizeInBytes());
        ImmutableRoaringBitmap rrback @abstr_number  = new ImmutableRoaringBitmap(bb);
    

Operations on an ImmutableRoaringBitmap such as and, or, xor, flip, will generate a RoaringBitmap which lies in RAM. As the name suggest, the ImmutableRoaringBitmap itself cannot be modified.

This design was inspired by druid.io.

One can find a complete working example in the test file TestMemoryMapping.java.

Note that you should not mix the classes from the org.roaringbitmap package with the classes from the org.roaringbitmap.buffer package. They are incompatible. They serialize to the same output however.

## Download

You can download releases from the Maven repository: http://central.maven.org/maven @abstr_number /org/roaringbitmap/RoaringBitmap/

or from github: https://github.com/lemire/RoaringBitmap/releases

## Maven repository

If your project depends on roaring, you can specify the dependency in the Maven "pom.xml" file:
    
    
        <dependencies>
          <dependency>
            <groupId>org.roaringbitmap</groupId>
            <artifactId>RoaringBitmap</artifactId>
            <version> @abstr_number . @abstr_number . @abstr_number </version>
          </dependency>
        </dependencies>
    

where you should replace the version number by the version you require.

## Usage

  * Get java
  * Get maven @abstr_number 

  * mvn compile will compile

  * mvn test will run the unit tests
  * mvn package will package in a jar (found in target)



## Benchmark

To run JMH benchmarks, use the following command:
    
    
         $ ./jmh/run.sh
    

You can also run specific benchmarks...
    
    
         $ ./jmh/run.sh org.roaringbitmap.aggregation.newand.identical.*
    

## Funding 

This work was supported by NSERC grant number @abstr_number .
