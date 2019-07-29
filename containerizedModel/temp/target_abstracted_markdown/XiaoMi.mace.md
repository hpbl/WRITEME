@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink | @abstr_hyperlink | Release Notes | Roadmap | @abstr_hyperlink | Demo | Join Us | 中文

**Mobile AI Compute Engine** (or **MACE** for short) is a deep learning inference framework optimized for mobile heterogeneous computing on Android, iOS, Linux and Windows devices. The design focuses on the following targets: * Performance * Runtime is optimized with NEON, OpenCL and Hexagon, and @abstr_hyperlink is introduced to speed up convolution operations. The initialization is also optimized to be faster. * Power consumption * Chip dependent power options like big.LITTLE scheduling, Adreno GPU hints are included as advanced APIs. * Responsiveness * UI responsiveness guarantee is sometimes obligatory when running a model. Mechanism like automatically breaking OpenCL kernel into small units is introduced to allow better preemption for the UI rendering task. * Memory usage and library footprint * Graph level memory allocation optimization and buffer reuse are supported. The core library tries to keep minimum external dependencies to keep the library footprint small. * Model protection * Model protection has been the highest priority since the beginning of the design. Various techniques are introduced like converting models to C++ code and literal obfuscations. * Platform coverage * Good coverage of recent Qualcomm, MediaTek, Pinecone and other ARM based chips. CPU runtime supports Android, iOS and Linux. * Rich model formats support * @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink model formats are supported.

## Getting Started

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Performance

@abstr_hyperlink contains several common neural networks and models which will be built daily against a list of mobile phones. The benchmark results can be found in @abstr_hyperlink (choose the latest passed pipeline, click _release_ step and you will see the benchmark results). To get the comparison results with other frameworks, you can take a look at @abstr_hyperlink project.

## Communication

  * GitHub issues: bug reports, usage issues, feature requests
  * Slack: @abstr_hyperlink 
  * QQ群: @abstr_number 



## Contributing

Any kind of contribution is welcome. For bug reports, feature requests, please just open an issue without any hesitation. For code contributions, it's strongly suggested to open an issue for discussion first. For more details, please refer to @abstr_hyperlink .

## License

Apache License @abstr_number . @abstr_number .

## Acknowledgement

MACE depends on several open source projects located in the third_party directory. Particularly, we learned a lot from the following projects during the development: * @abstr_hyperlink : the Hexagon DSP runtime depends on this library. * @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and many others: we learned many best practices from these projects.

Finally, we also thank the Qualcomm, Pinecone and MediaTek engineering teams for their help.

## Join Us

We are hiring.
