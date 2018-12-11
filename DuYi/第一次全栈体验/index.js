const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req,res){

    let pathName = url.parse(req.url).pathname;

    // let isStatic = 

    try{

        let page = fs.readFileSync('./page' + pathName);
        res.writeHead(200);
        res.write(page.toString())
        res.end()
    }catch(e){
        res.writeHead(404);
        res.write(`<html>
                    <bady>
                        <h1>
                            404 NOT FOUND
                        </h1>
                    </bady>
                    </html>`)
        res.end()
    }

}).listen('8888');

function isStatic(pathName){
    let staticFile = ['.html','.js',]
}