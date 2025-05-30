let mysql = require('mysql2');
let connection =  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"student_sys"
})

connection.connect((err)=>{
   if (err){
    console.error('连接失败'+ err.stack);
    return;
   }
   console.log('连接成功');


});

connection.query ('select * from student', (err, result)=>{
   if(err){
    console.error('查询出错:' + err.message);
    return;
   }
   console.log('数据，来！')
   console.log(result);


});

// let sql = 'insert into student value(?,?,?)';
// let params = ['3','王五',20];
// connection.query(sql, params, (err, result)=>{
//  if(err){
//     console.error('插入出错:' + err.message);
//     return;
//    }
//    console.log('插入成功！')
   

// })

connection.end();
