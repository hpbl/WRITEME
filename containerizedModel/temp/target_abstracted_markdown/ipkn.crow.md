@abstr_image 

Crow is C++ microframework for web. (inspired by Python Flask)

@abstr_hyperlink @abstr_hyperlink 

```c++

# include "crow.h"

int main() { crow::SimpleApp app;
    
    
    CROW_ROUTE(app, "/")([](){
        return "Hello world";
    });
    
    app.port( @abstr_number ).multithreaded().run();
    

} @abstr_code_section c++ CROW_ROUTE(app, "/json") ([]{ crow::json::wvalue x; x["message"] = "Hello, World!"; return x; }); @abstr_code_section c++ CROW_ROUTE(app,"/hello/") ({ if (count > @abstr_number ) return crow::response( @abstr_number ); std::ostringstream os; os << count << " bottles of beer!"; return crow::response(os.str()); }); @abstr_code_section c++ // Compile error with message "Handler type is mismatched with URL paramters" CROW_ROUTE(app,"/another/") ({ return crow::response( @abstr_number ); }); @abstr_code_section c++ CROW_ROUTE(app, "/add_json") .methods("POST"_method) ({ auto x = crow::json::load(req.body); if (!x) return crow::response( @abstr_number ); int sum = x["a"].i()+x["b"].i(); std::ostringstream os; os << sum; return crow::response{os.str()}; }); @abstr_code_section mkdir build cd build cmake .. make @abstr_code_section ctest ```

### Installing missing dependencies

#### Ubuntu
    
    
    sudo apt-get install build-essential libtcmalloc-minimal @abstr_number  && sudo ln -s /usr/lib/libtcmalloc_minimal.so. @abstr_number  /usr/lib/libtcmalloc_minimal.so
    

#### OSX
    
    
    brew install boost google-perftools
    

### Attributions

Crow uses the following libraries.
    
    
    http-parser
    
    https://github.com/nodejs/http-parser
    
    http_parser.c is based on src/http/ngx_http_parse.c from NGINX copyright
    Igor Sysoev.
    
    Additional changes are licensed under the same terms as NGINX and
    copyright Joyent, Inc. and other Node contributors. All rights reserved.
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE. 
    
    
    qs_parse
    
    https://github.com/bartgrantham/qs_parse
    
    Copyright (c)  @abstr_number  Bart Grantham
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    
    TinySHA @abstr_number 
    
    https://github.com/mohaps/TinySHA @abstr_number 
    
    TinySHA @abstr_number  - a header only implementation of the SHA @abstr_number  algorithm. Based on the implementation in boost::uuid::details
    
    Copyright (c)  @abstr_number - @abstr_number  SAURAV MOHAPATRA mohaps@gmail.com
    Permission to use, copy, modify, and distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    
