# node-canvas

@abstr_hyperlink @abstr_hyperlink 

node-canvas is a @abstr_hyperlink -backed Canvas implementation for @abstr_hyperlink .

## Installation

@abstr_code_section 

By default, binaries for macOS, Linux and Windows will be downloaded. If you want to build from source, use `npm install --build-from-source` and see the **Compiling** section below.

The minimum version of Node.js required is _* @abstr_number . @abstr_number . @abstr_number *_.

### Compiling

If you don't have a supported OS or processor architecture, or you use `--build-from-source`, the module will be compiled on your system. This requires several dependencies, including Cairo and Pango.

For detailed installation information, see the @abstr_hyperlink . One-line installation instructions for common OSes are below. Note that libgif/giflib, librsvg and libjpeg are optional and only required if you need GIF, SVG and JPEG support, respectively. Cairo v @abstr_number . @abstr_number . @abstr_number or later is required.

OS | Command \----- | ----- OS X | Using @abstr_hyperlink :  
`brew install pkg-config cairo pango libpng jpeg giflib librsvg` Ubuntu | `sudo apt-get install build-essential libcairo @abstr_number -dev libpango @abstr_number . @abstr_number -dev libjpeg-dev libgif-dev librsvg @abstr_number -dev` Fedora | `sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel` Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto` OpenBSD | `doas pkg_add cairo pango png jpeg giflib` Windows | See the @abstr_hyperlink Others | See the @abstr_hyperlink 

**Mac OS X v @abstr_number . @abstr_number +:** If you have recently updated to Mac OS X v @abstr_number . @abstr_number + and are experiencing trouble when compiling, run the following command: `xcode-select --install`. Read more about the problem @abstr_hyperlink . If you have xcode @abstr_number . @abstr_number or higher installed, in order to build from source you need NPM @abstr_number . @abstr_number . @abstr_number or higher.

## Quick Example

@abstr_code_section 

## Upgrading from @abstr_number .x

See the @abstr_hyperlink for a guide to upgrading from @abstr_number .x to @abstr_number .x.

For version @abstr_number .x documentation, see @abstr_hyperlink .

## Documentation

This project is an implementation of the Web Canvas API and implements that API as closely as possible. For API documentation, please visit @abstr_hyperlink . (See @abstr_hyperlink for the current API compliance.) All utility methods and non-standard APIs are documented below.

### Utility methods

  * createCanvas()
  * createImageData()
  * loadImage()
  * registerFont()



### Non-standard APIs

  * Image#src
  * Image#dataMode
  * Canvas#toBuffer()
  * Canvas#createPNGStream()
  * Canvas#createJPEGStream()
  * Canvas#createPDFStream()
  * Canvas#toDataURL()
  * CanvasRenderingContext @abstr_number D#patternQuality
  * CanvasRenderingContext @abstr_number D#quality
  * CanvasRenderingContext @abstr_number D#textDrawingMode
  * CanvasRenderingContext @abstr_number D#globalCompositeOperator = 'saturate'
  * CanvasRenderingContext @abstr_number D#antialias



### createCanvas()

> @abstr_code_section js const { createCanvas } = require('canvas') const mycanvas = createCanvas( @abstr_number , @abstr_number ) const myPDFcanvas = createCanvas( @abstr_number , @abstr_number , 'pdf') // see "PDF Support" section @abstr_code_section js const { createImageData } = require('canvas') const width = @abstr_number , height = @abstr_number const arraySize = width * height * @abstr_number const mydata = createImageData(new Uint @abstr_number ClampedArray(arraySize), width) @abstr_code_section js const { loadImage } = require('canvas') const myimg = loadImage('http://server.com/image.png')

myimg.then(() => { // do something with image }).catch(err => { console.log('oh no!', err) })

// or with async/await: const myimg = await loadImage('http://server.com/image.png') // do something with image @abstr_code_section js const { registerFont, createCanvas } = require('canvas') registerFont('comicsans.ttf', { family: 'Comic Sans' })

const canvas = createCanvas( @abstr_number , @abstr_number ) const ctx = canvas.getContext(' @abstr_number d')

ctx.font = ' @abstr_number px "Comic Sans"' ctx.fillText('Everyone hates this font :(', @abstr_number , @abstr_number ) @abstr_code_section javascript const { Image } = require('canvas')

// From a buffer: fs.readFile('images/squid.png', (err, squid) => { if (err) throw err const img = new Image() img.onload = () => ctx.drawImage(img, @abstr_number , @abstr_number ) img.onerror = err => { throw err } img.src = squid })

// From a local file path: const img = new Image() img.onload = () => ctx.drawImage(img, @abstr_number , @abstr_number ) img.onerror = err => { throw err } img.src = 'images/squid.png'

// From a remote URL: img.src = 'http://picsum.photos/ @abstr_number / @abstr_number ' // ... as above

// From a `data:` URI: img.src = 'data:image/png;base @abstr_number ,iVBORw @abstr_number KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI @abstr_number P @abstr_number // @abstr_number /w @abstr_number GIAXDIBKE @abstr_number DHxgljNBAAO @abstr_number TXL @abstr_number Y @abstr_number OHwAAAABJRU @abstr_number ErkJggg==' // ... as above @abstr_code_section javascript const { Image, createCanvas } = require('canvas') const canvas = createCanvas(w, h, 'pdf') const img = new Image() img.dataMode = Image.MODE_IMAGE // Only image data tracked img.dataMode = Image.MODE_MIME // Only mime data tracked img.dataMode = Image.MODE_MIME | Image.MODE_IMAGE // Both are tracked @abstr_code_section js // Default: buf contains a PNG-encoded image const buf = canvas.toBuffer()

// PNG-encoded, zlib compression level @abstr_number for faster compression but bigger files, no filtering const buf @abstr_number = canvas.toBuffer('image/png', { compressionLevel: @abstr_number , filters: canvas.PNG_FILTER_NONE })

// JPEG-encoded, @abstr_number % quality const buf @abstr_number = canvas.toBuffer('image/jpeg', { quality: @abstr_number . @abstr_number })

// Asynchronous PNG canvas.toBuffer((err, buf) => { if (err) throw err // encoding failed // buf is PNG-encoded image })

canvas.toBuffer((err, buf) => { if (err) throw err // encoding failed // buf is JPEG-encoded image at @abstr_number % quality }, 'image/jpeg', { quality: @abstr_number . @abstr_number })

// BGRA pixel values, native-endian const buf @abstr_number = canvas.toBuffer('raw') const { stride, width } = canvas // In memory, this is `canvas.height * canvas.stride` bytes long. // The top row of pixels, in BGRA order on little-endian hardware, // left-to-right, is: const topPixelsBGRALeftToRight = buf @abstr_number .slice( @abstr_number , width * @abstr_number ) // And the third row is: const row @abstr_number = buf @abstr_number .slice( @abstr_number * stride, @abstr_number * stride + width * @abstr_number )

// SVG and PDF canvases const myCanvas = createCanvas(w, h, 'pdf') myCanvas.toBuffer() // returns a buffer containing a PDF-encoded canvas // With optional metadata: myCanvas.toBuffer('application/pdf', { title: 'my picture', keywords: 'node.js demo cairo', creationDate: new Date() }) @abstr_code_section javascript const fs = require('fs') const out = fs.createWriteStream(__dirname + '/test.png') const stream = canvas.createPNGStream() stream.pipe(out) out.on('finish', () => console.log('The PNG file was created.')) @abstr_code_section js const palette = new Uint @abstr_number ClampedArray([ //r g b a @abstr_number , @abstr_number , @abstr_number , @abstr_number , // index @abstr_number @abstr_number , @abstr_number , @abstr_number , @abstr_number , // index @abstr_number @abstr_number , @abstr_number , @abstr_number , @abstr_number // ... ]) canvas.createPNGStream({ palette: palette, backgroundIndex: @abstr_number // optional, defaults to @abstr_number }) @abstr_code_section javascript const fs = require('fs') const out = fs.createWriteStream(__dirname + '/test.jpeg') const stream = canvas.createJPEGStream() stream.pipe(out) out.on('finish', () => console.log('The JPEG file was created.'))

// Disable @abstr_number x @abstr_number chromaSubsampling for deeper colors and use a higher quality const stream = canvas.createJPEGStream({ quality: @abstr_number . @abstr_number , chromaSubsampling: false }) @abstr_code_section js dataUrl = canvas.toDataURL() // defaults to PNG dataUrl = canvas.toDataURL('image/png') dataUrl = canvas.toDataURL('image/jpeg') dataUrl = canvas.toDataURL('image/jpeg', quality) // quality from @abstr_number to @abstr_number canvas.toDataURL((err, png) => { }) // defaults to PNG canvas.toDataURL('image/png', (err, png) => { }) canvas.toDataURL('image/jpeg', (err, jpeg) => { }) // sync JPEG is not supported canvas.toDataURL('image/jpeg', {...opts}, (err, jpeg) => { }) // see Canvas#createJPEGStream for valid options canvas.toDataURL('image/jpeg', quality, (err, jpeg) => { }) // spec-following; quality from @abstr_number to @abstr_number @abstr_code_section js const canvas = createCanvas( @abstr_number , @abstr_number , 'pdf') @abstr_code_section js // On first page ctx.font = ' @abstr_number px Helvetica' ctx.fillText('Hello World', @abstr_number , @abstr_number )

ctx.addPage() // Now on second page ctx.font = ' @abstr_number px Helvetica' ctx.fillText('Hello World @abstr_number ', @abstr_number , @abstr_number )

canvas.toBuffer() // returns a PDF file canvas.createPDFStream() // returns a ReadableStream that emits a PDF // With optional document metadata (requires Cairo @abstr_number . @abstr_number . @abstr_number ): canvas.toBuffer('application/pdf', { title: 'my picture', keywords: 'node.js demo cairo', creationDate: new Date() }) @abstr_code_section js ctx.font = ' @abstr_number px Helvetica' ctx.fillText('Hello World', @abstr_number , @abstr_number ) ctx.addPage( @abstr_number , @abstr_number )

ctx.fillText('Hello World @abstr_number ', @abstr_number , @abstr_number ) @abstr_code_section js const canvas = createCanvas( @abstr_number , @abstr_number , 'svg') // Use the normal primitives. fs.writeFileSync('out.svg', canvas.toBuffer()) @abstr_code_section js const img = new Image() img.onload = () => ctx.drawImage(img, @abstr_number , @abstr_number ) img.onerror = err => { throw err } img.src = './example.svg' @abstr_code_section js const canvas = createCanvas( @abstr_number , @abstr_number ) const ctx = canvas.getContext(' @abstr_number d', { pixelFormat: 'A @abstr_number ' }) @abstr_code_section npm install --build-from-source ```

For visual tests: `npm run test-server` and point your browser to http://localhost: @abstr_number .

For unit tests: `npm run test`.

## Benchmarks

Benchmarks live in the `benchmarks` directory.

## Examples

Examples line in the `examples` directory. Most produce a png image of the same name, and others such as _live-clock.js_ launch an HTTP server to be viewed in the browser.

## Original Authors

  * TJ Holowaychuk ( @abstr_hyperlink )
  * Nathan Rajlich ( @abstr_hyperlink )
  * Rod Vagg ( @abstr_hyperlink )
  * Juriy Zaytsev ( @abstr_hyperlink )



## License

### node-canvas

(The MIT License)

Copyright (c) @abstr_number LearnBoost, and contributors <dev@learnboost.com>

Copyright (c) @abstr_number Automattic, Inc and contributors <dev@automattic.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### BMP parser

See license
