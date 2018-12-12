const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req,res){

    let pathName = url.parse(req.url).pathname;
    let params = url.parse(req.url,true).query;

    if(isStatic(pathName)){//静态资源
        try{
            let page = fs.readFileSync('./page' + pathName);
            res.writeHead(200);
            res.write(page.toString());
            res.end();
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
    }else{//接口 
        if(pathName == '/getStudentspage'){
            const { queryStudentByPage } = require('./services/StudentsServices');
            queryStudentByPage( parseInt(params.offset) , parseInt(params.size) ,(obj)=>{
                res.writeHead(200,{'Content-type':'application/json; charset=utf8'});
                res.write(JSON.stringify({data:obj,page:9}));
                res.end();
            })
        }
    }

}).listen('8888');

function isStatic(pathName){
    let staticFile = ['.html','.js','.css','.jpg','.png','.gif'];
    return staticFile.some(ele=>{
        if(pathName.indexOf(ele) === pathName.length - ele.length){
            return true
        }else{
            return false
        }
    })
}