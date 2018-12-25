const express = require('express');

let app = new express();

app.use(express.static('page'));//静态文件

app.listen(8888)