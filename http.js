//  1、引入http模块

var http = require("http");

// 2、创建web服务器对象（请求和响应）
var server = http.createServer();
// 3、监听请求——>响应内容
server.on("request", function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(`
    <html>
      <head><title>我的页面</title></head>
      <body>
        <h1>Hello, 首页的世界！</h1>
        <p>这是一个由 Node.js 输出的 HTML 页面。</p>
      </body>
    </html>
  `);
    res.end("this is index");
  } else if (req.url == "/login") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(`
    <html>
      <head><title>我的页面</title></head>
      <body>
        <h1>Hello, login的世界！</h1>
        <p>这是一个由 Node.js 输出的 HTML 页面。</p>
      </body>
    </html>
  `);

    res.end("this is login");
  } else {
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end("<h1>404 very big  是汉字！</h1>");
  }

  //       res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  //       res.write(`
  //     <html>
  //       <head><title>我的页面</title></head>
  //       <body>
  //         <h1>Hello, 世界！</h1>
  //         <p>这是一个由 Node.js 输出的 HTML 页面。</p>
  //       </body>
  //     </html>
  //   `);
//   console.log(req.url);
//   // 结束响应
//   res.end("hello,albert");
});
// 4.启动服务
server.listen(8080, function () {
  console.log("server start!");
});
