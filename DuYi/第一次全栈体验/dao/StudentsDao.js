const { creadConnection } = require('./DBUtil');

function queryStudentByPage(offset,limit,success){
    let sqlStudentByPage = 'select * from students limit ?,?;',conection = creadConnection();
    let sqlArr = [offset,limit]
    conection.connect();
    conection.query(sqlStudentByPage,sqlArr,(error,result)=>{
        if(error == null){
            success(result)
        }else{
            console.log(error)
        }
    })
    conection.end()
}

module.exports = {
    queryStudentByPage
}





