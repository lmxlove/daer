// 使用 Mock
let Mock = require('mockjs')
let data = Mock.mock({
  'list|1-2': [{
    "username": "@cname()",
    "sex": "@cword('男女')",
    "address": "@county(true)",
  }]

})

// data.list.forEach(element => {
//   element.address = element.address.replace(/ /g, '')
// });
// data.list.forEach(function())
data.list.forEach(function (element) {
  element.address = element.address.replace(/ /g, '')
});
// function dayin() {
//   console.log(data)
// }
// dayin()
var json2 = JSON.stringify(data, null, 4)
console.log(json2)
// console.log(data);
