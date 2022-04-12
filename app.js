// 导入http模块:
const express = require('express')
const app = express()
const fs = require('fs')

// 创建http server，并传入回调函数:

// 设置跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
console.log(1111, __dirname)
// 让服务器监听8080端口:
app.listen(8087, () => {
  console.log('开启成功！！')
})

app.get('/test', (req, res) => {
  fs.readFile(__dirname + '/dist/static/js/chunk-libs.8cbe9a13.js', function(
    err,
    data
  ) {
    if (err) throw err
    res.write(data)
    res.end()
  })
})
app.get('/url/:fileID?', (req, res) => {
  console.log(req.query.fileID)
  if (req.query.fileID) {
    // 读取文件，并且替换文件中指定的字符串
    const replaceFile = function(filePath, sourceRegx, targetStr) {
      fs.readFile(filePath, function(err, data) {
        if (err) {
          return err
        }
        let str = data.toString()
        str = str.replace(sourceRegx, targetStr)
        fs.writeFile(filePath, str, function(err) {
          if (err) return err
        })
        console.log('修改成功')
      })
    }
    // 遍历statics文件夹，找到main_*.js
    fs.readdir(__dirname + '/dist/', function(err, files) {
      if (err) {
        return err
      }
      if (files.length != 0) {
        files.forEach(item => {
          const path = __dirname + '/dist/' + item
          // 判断文件的状态，用于区分文件名/文件夹
          console.log(path)
          fs.stat(path, function(err, status) {
            if (err) {
              return err
            }
            const isFile = status.isFile() // 是文件
            const isDir = status.isDirectory() // 是文件夹
            if (isFile) {
              if (item.match(new RegExp('^index.*$'))) {
                replaceFile(
                  path,
                  /static\/js\/chunk-libs\.8cbe9a13.js/g,
                  req.query.fileID
                )
              }
            }
            if (isDir) {
              console.log('文件夹：' + item)
            }
          })
        })
      }
    })
  }
  res.send(req.query.fileID)
})

// static/js/chunk-libs.8cbe9a13.js
