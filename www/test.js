// 1 引入官方模块
var os = require('os')
var path = require('path')
var url =  require('url')

// 获取系统总内存
console.log(os.totalmem())
// 获取文件后缀
console.log(path.extname('html.css'))
// 获取表单get提交参数。http://itcast.cn?name=zhangsan&age=18

// console.log(url.parse('http://itcast.cn?name=zhangsan&age=18',true))

var urlObj = url.parse('http://itcast.cn?name=zhangsan&age=18',true)

console.log(urlObj.query.name)
console.log(urlObj.query.age)