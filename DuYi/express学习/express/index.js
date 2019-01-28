const fs = require('fs');

let path = new Map();

function upLoad(request,response){
    console.log('============')

    request.on('data',(data)=>{
        let fis = fs.createWriteStream(data);
        fis.write('./file/abc.jpg')
        fis.end();
        request.end();
    })
}

path.set('/upLoad',upLoad);

module.exports = {
    path
}