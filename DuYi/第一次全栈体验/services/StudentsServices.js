const StudentsDao = require('../dao/StudentsDao');

function queryStudentByPage( offset, limit, success){
    return StudentsDao.queryStudentByPage( offset, limit, success)
}

module.exports = {
    queryStudentByPage,
}