# pix @abstr_number code

_Generating Code from a Graphical User Interface Screenshot_

  * A video demo of the system can be seen @abstr_hyperlink 
  * The paper is available at @abstr_hyperlink 
  * Official research page: @abstr_hyperlink 



## Abstract

Transforming a graphical user interface screenshot created by a designer into computer code is a typical task conducted by a developer in order to build customized software, websites, and mobile applications. In this paper, we show that deep learning methods can be leveraged to train a model end-to-end to automatically generate code from a single input image with over @abstr_number % of accuracy for three different platforms (i.e. iOS, Android and web-based technologies).

## Citation

@abstr_code_section 

## Disclaimer

The following software is shared for educational purposes only. The author and its affiliated institution are not responsible in any manner whatsoever for any damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of the use or inability to use this software.

The project pix @abstr_number code is a research project demonstrating an application of deep neural networks to generate code from visual inputs. The current implementation is not, in any way, intended, nor able to generate code in a real-world context. We could not emphasize enough that this project is experimental and shared for educational purposes only. Both the source code and the datasets are provided to foster future research in machine intelligence and are not designed for end users.

## Setup

### Prerequisites

  * Python @abstr_number or @abstr_number 
  * pip



### Install dependencies

@abstr_code_section 

## Usage

Prepare the data: @abstr_code_section 

Train the model: @abstr_code_section 

Generate code for batch of GUIs: @abstr_code_section 

Generate code for a single GUI image: @abstr_code_section 

Compile generated code to target language: @abstr_code_section 

## FAQ

### Will pix @abstr_number code supports other target platforms/languages?

No, pix @abstr_number code is only a research project and will stay in the state described in the paper for consistency reasons. This project is really just a toy example but you are of course more than welcome to fork the repo and experiment yourself with other target platforms/languages.

### Will I be able to use pix @abstr_number code for my own frontend projects?

No, pix @abstr_number code is experimental and won't work for your specific use cases.

### How is the model performance measured?

The accuracy/error reported in the paper is measured at the DSL level by comparing each generated token with each expected token. Any difference in length between the generated token sequence and the expected token sequence is also counted as error.

### How long does it take to train the model?

On a Nvidia Tesla K @abstr_number GPU, it takes a little less than @abstr_number hours to optimize the @abstr_number * @abstr_number ^ @abstr_number parameters for one dataset; so expect around @abstr_number hours if you want to train the model for the three target platforms.

### I am a front-end developer, will I soon lose my job?

_(I have genuinely been asked this question multiple times)_

**TL;DR** Not anytime soon will AI replace front-end developers.

Even assuming a mature version of pix @abstr_number code able to generate GUI code with @abstr_number % accuracy for every platforms/languages in the universe, front-enders will still be needed to implement the logic, the interactive parts, the advanced graphics and animations, and all the features users love. The product we are building at @abstr_hyperlink is intended to bridge the gap between UI/UX designers and front-end developers, not replace any of them. We want to rethink the traditional workflow that too often results in more frustration than innovation. We want designers to be as creative as possible to better serve end users, and developers to dedicate their time programming the core functionality and forget about repetitive tasks such as UI implementation. We believe in a future where AI collaborate with humans, not replace humans.

## Media coverage

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (web series)
  * @abstr_hyperlink (podcast)
  * @abstr_hyperlink (podcast)
  * Read comments on @abstr_hyperlink 


