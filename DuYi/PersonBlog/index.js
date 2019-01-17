const Express = require("express");

let app = new Express();

app.use(Express.static("./page/"));

app.listen(8888,()=>{
    console.log("服务器已启动")
})