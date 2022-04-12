/*
 * @Author: your name
 * @Date: 2022-03-31 08:54:34
 * @LastEditTime: 2022-03-31 16:00:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html\vue_2\index.js
 */
window.onload = function () {
    new Vue({
        el: '#demo',
        data: {
            lists: [
                { name: '刘德华', sex: '男', city: '香港', check: false },
                { name: '刘德华', sex: '男', city: '香港', check: true },
                { name: '刘德华', sex: '男', city: '香港', check: false }
            ]

        },
        methods: {
            getList: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:3300/getlist'

                }).then(function (res) {//请求成功
                    console.log(res);
                    this.data.result;

                }).catch(function (error) {//请求失败
                    console.log(error);

                })
            },


        },
        mounted: function () {
            this.getList()

        }

    })

}