/*
 * @Author: your name
 * @Date: 2022-03-31 10:27:39
 * @LastEditTime: 2022-03-31 15:37:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html\vue_2\jiekou.js
 */
const express = require("express");
const app = express();
const vipLogin = require("./data/shuju.json");
const bb=require("./data1/shuju2.json")

/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// get方式监听/get_List请求
app.get("/get_List", (req, res) => {
    //在这里做点什么
    res.send(vipLogin)
})
app.get("/getlist", (req, res) => {
    res.send(bb)
})
// post监听请求
// app.post("/post_List", (req, res) => {
//     //在这里做点什么
//     res.send(vipLogin)
// })

// 监听3300端口
app.listen(3300, () => {
    console.log('服务器运行在3300');
})