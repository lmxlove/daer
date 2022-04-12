// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
  'list|1-2': [{
    "username": "@cname()",
    // isMale: "@boolean",
    "sex": "@cword('男女')",
    // "sex|1":["男","女"],
    "address": "@county(true)",



  }]

})
// 定义一个mock数据  随机产生一个手机号  



var data3 = JSON.stringify(data, null, 4)
// console.log(data3)
// var json1 = JSON.parse(data3)
console.log(data3)
// for (var k in data3) {
//   console.log(k + "" + data3[k]);
//   console.log(data3[k].username + "" + data3[k].sex + "" + data3[k].address);
// }
// var json = data3.replace(new RegExp(' ', "gm","\t"), '')
// console.log(json)


// var data2 = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   'list|1-10': [{
//     // // 属性 id 是一个自增数，起始值为 1，每次增 1
//     // 'id|+1': 1,
//     'username|+1':5,
//     'dd|+1': 2,
//   }]
// })
// var data1 = Mock.mock({
//   "array|1-10": [
//     "Mock.js"
//   ]
// })
// var template = {
//   name: 'value1'
// }
// var data = {
//   name: 'value2'
// }
// Mock.valid(template, data)
// // =>
// [
//   {
//     "path": [
//       "data",
//       "name"
//     ],
//     "type": "value",
//     "actual": "value2",
//     "expected": "value1",
//     "action": "equal to",
//     "message": "[VALUE] Expect ROOT.name'value is equal to value1, but is value2"
//   }
// ]
// Mock.mock({
//   "number|+1": 202
// })
// 输出结果
// console.log(JSON.stringify(data, null, 4))
// console.log(JSON.stringify(data1, null, 4))
