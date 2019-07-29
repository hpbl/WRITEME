@abstr_image *µWebSockets™ (it's "[micro](https://en.wikipedia.org/wiki/Micro-)") is simple, secure*[[ @abstr_number ]](fuzzing) *& standards compliant web I/O for the most demanding*[[ @abstr_number ]](benchmarks) *of applications.* • [Read more](misc/READMORE.md) • [Read about uSockets](https://github.com/uNetworking/uSockets) • [See uWebSockets.js](https://github.com/uNetworking/uWebSockets.js) 

#### Express yourself briefly.

```c++ uWS::SSLApp({
    
    
    /* There are tons of SSL options */
    .cert_file_name = "cert.pem",
    .key_file_name = "key.pem"
    

}).get("/hello", {
    
    
    /* You can efficiently stream huge files too */
    res->writeHeader("Content-Type", "text/html; charset=utf- @abstr_number ")->end("Hello HTTP!");
    

}).ws("/*", {
    
    
    /* Just a few of the available handlers */
    .open = [](auto *ws, auto *req) {
        ws->subscribe("buzzword weekly");
    },
    .message = [](auto *ws, std::string_view message, uWS::OpCode opCode) {
        ws->send(message, opCode);
    }
    

}).listen( @abstr_number , {
    
    
    if (token) {
        std::cout << "Listening on port " <<  @abstr_number  << std::endl;
    }
    

}).run(); ``` Don't miss the @abstr_hyperlink , the @abstr_hyperlink or the @abstr_hyperlink . JavaScript examples are very applicable to C++ developers, so go through them as well.

#### Pay what you want.

A free & open source (permissive) project since @abstr_number . Kindly sponsored by @abstr_hyperlink , @abstr_hyperlink & @abstr_hyperlink in @abstr_number and/or @abstr_number . Individual donations are always accepted via @abstr_hyperlink .

@abstr_image 

_Code is provided as-is, do not expect or demand **free** consulting services, personal tutoring, advice or debugging._

#### Deploy like a boss.

Commercial support is available via a per-hourly consulting plan or as otherwise negotiated. If you're stuck, worried about design or just in need of help don't hesitate throwing @abstr_hyperlink a mail and we'll figure out what's best for both parties. I want your business to have a proper understanding of the problem before rushing in to one of the many pitfalls.

#### Excel across the board.

All that glitters is not gold. Especially so in a market driven by flashy logos, hype and pointless badges.

Http | WebSockets \--- | --- @abstr_image | @abstr_image 

#### Keep it legal.

Intellectual property, all rights reserved.

_You are forbidden to use logos, product names, texts, names or otherwise perceived brand identity, of copyright holder, in any way that might state or imply that the copyright holder endorses your distribution or in any way that might state or imply that you created the original software. Modified distributions must carry, from the original distribution, significantly different names and must not be confused with the original distribution._
