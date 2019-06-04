# CoreAR.framework

@abstr_image 

# Introduction and information

CoreAR.framework is open source AR framework. You can make an AR application using visual code like ARToolKit using this framework. CoreAR.framework does not depend on the other computer vision library like OpenCV. Considered portability, this framework is written only C or C++. The pixel array of an image is passed to CoreAR.framework and then visual code's identification number, rotation and translation matrix are obtained from the image including a visual code. Image processing speed of this framework is about @abstr_number fps on iPhone @abstr_number .

Take notice that CoreAR.framework depends on @abstr_hyperlink and @abstr_hyperlink . You have to download these libraries and put on them at the path where CoreAR.framework has been installed.

# License

@abstr_hyperlink .

# App Store

You can take a sample application from @abstr_hyperlink .

# Sample code in C++
    
    
    float codeSize =  @abstr_number ;
    int croppingSize =  @abstr_number ;
    int threshold =  @abstr_number ;
    int width = (int)bufferSize.width;
    int height = (int)bufferSize.height;
    
    // do it
    if (chaincodeBuff == NULL)
        chaincodeBuff = (unsigned char*)malloc(sizeof(unsigned char) * width * height);
    
    // binarize for chain code
    for (int y =  @abstr_number ; y < height; y++)
        for (int x =  @abstr_number ; x < width; x++)
            *(chaincodeBuff + x + y * width) = *(buffer + x + y * width) < threshold ? CRChainCodeFlagUnchecked : CRChainCodeFlagIgnore;
    
    // prepare to parse chain code
    CRChainCode *chaincode = new CRChainCode();
    chaincode->parsePixel(chaincodeBuff, width, height);
    
    // clear previous buffer
    CRCodeList::iterator it = codeListRef->begin();
    while(it != codeListRef->end()) {
        SAFE_DELETE(*it);
        ++it;
    }
    codeListRef->clear();
    
    // reload detected codes
    if (!chaincode->blobs->empty()) {
        std::list<CRChainCodeBlob*>::iterator blobIterator = chaincode->blobs->begin();
        while(blobIterator != chaincode->blobs->end()) {
            if (!(*blobIterator)->isValid(width, height)) {
                blobIterator++;
                continue;
            }
            CRCode *code = (*blobIterator)->code(); 
            if(code) {
                // estimate and optimize pose and position
                code->normalizeCornerForImageCoord(width, height, focalLength, focalLength);
                code->getSimpleHomography(codeSize);
                code->optimizeRTMatrinxWithLevenbergMarquardtMethod();
    
                // cropping code image area
                code->crop(croppingSize, croppingSize, focalLength, focalLength, codeSize, buffer, width, height);
                codeListRef->push_back(code);
            }
            blobIterator++;
        }
    }
    

# Sample code in C (depracted)
    
    
    // Copy image buffer from camera into "pixel".
    int width;
    int height;
    unsigned char *pixel = (unsigned char*)malloc(sizeof(unsigned char) * width * height);
    
    // codeInfoStorage receives the result of visual code recognition.
    CRCodeInfoStorage *codeInfoStorage = CRCreateCodeInfoStorage();
    
    // storage to save visual code templates.
    CRCodeImageTemplate *codeImageTemplateStorage = CRCreateCodeImageTemplateStorage();
    
    // make template to recognize visual codes.
    int c_width;
    int c_height;
    unsigned char *c_p = (unsigned char*)malloc(sizeof(unsigned char) * c_width * c_height);
    
    /* read images of visual codes you want to recognize */
    
    CRCodeImageTemplate *template = CRCreateCodeImageTemplate(c_p, c_width, c_height);
    template->code = codeNumber;
    template->size = codeSize;
    CRCodeImageTemplateStorageAddNewTemplate(codeImageTemplateStorage, template);
    free(c_p);
    
    // Start extraction
    CRChainCodeStorage *storage = CRCreateChainCodeStorageByParsingPixel(pixel, width, height);
    CRChainCodeStorageDetectCornerWithLSM(storage);
    CRCodeInfoStorageAddCodeInfoByExtractingFromChainCode(codeInfoStorage, storage, valueBuffer, width, height, codeImageTemplateStorage);
    
    // Release
    CRReleaseChainCodeStorage(&storage);
    CRReleaseCodeInfoStorage(&codeInfoStorage);
    free(pixel);
    

# Frequently Asked Questions

  * I can't compile CoreAR.framework...

    * Ans. CoreAR.framework depends on @abstr_hyperlink and @abstr_hyperlink . You have to download these libraries and put on them at the path where CoreAR.framework has been installed.
  * How do I render a @abstr_number D model on the code with CoreAR.framework?

    * Ans. CoreAR.framework does not support rendering any @abstr_number D model files. You have to write a code to render @abstr_number D model files with OpenGLES. Sample program does not render a cube and Utah teapot with @abstr_number D model files but with OpenGLES code.



# Blog

  * @abstr_hyperlink Sorry, Japanese only....



# Dependency

  * @abstr_hyperlink 
  * @abstr_hyperlink 



# Acknowledgement

  * @abstr_hyperlink has supported my work.
  * There are some public projects supported by @abstr_hyperlink in @abstr_hyperlink .


