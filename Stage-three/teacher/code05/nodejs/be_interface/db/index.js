//todo 数据库操作 --- 第三方模块  mongoose
const mongoose = require('mongoose')

//todo 定义的一些变量
const DB_CONNET_URL = 'mongodb://127.0.0.1:27017/'
const DB_NAME = 2011
const URL = DB_CONNET_URL + DB_NAME

//todo 1. 连接数据库
// mongoose.connect(url,options,callback)
mongoose.connect(URL, {
    useNewUrlParser: true,
    // useUnifiedTopology: true 
}, error => {
    if (error) {
        console.log(error.message)
    }
    console.log('The db is connected')
})

//todo 2. 创建骨架  Scheam   ----  定义字段
const userSchema = new mongoose.Schema({
    username: String,
    phone: String,
    email: String,
    avatar: String,
    pass: String
})

//todo3 创建模型  model  --- 用于操作数据库
// const userModel = mongoose.model(集合名称【复数】,骨架名称)
const userModel = mongoose.model('users', userSchema)

//todo4 导出数据库操作

module.exports = {
    user: {
         add(data) { // 注册
            return new Promise(async (resolve,reject) => {
                //? 1. 能直接存储吗？  否 判断数据库中是否已有你的用户名
                // this.query()  Promise
                const queryRes = await this.query()
                // console.log(queryRes)  [] 

                // 判断我们新增的用户名是否已在数据库中存在 
                if (queryRes.some(v => v.username == data.username)) {
                    // 用户名已存在
                    resolve({
                        status: 1,
                        msg: '用户名已存在'
                    })
                } else {
                    // 用户名不存在 
                    const enity = new userModel(data)
                    enity.save()
                    resolve({
                        status: 2,
                        msg: '注册成功'
                    })
                }
            })
        },
        query() { // 登录
            return new Promise((resolve, reject) => {
                userModel.find({}, (error, docs) => {
                    if (error) {
                        // 表示查询出现了异常
                    } else {
                        resolve(docs)
                    }
                })
            })
        },
        login ({username,pass}) {
            return new Promise(async (resolve,reject) => {
                const queryRes = await this.query()
                //1. 判断数据库中是否有这个用户名
                if (!queryRes.some(v => v.username==username)) {
                    resolve({
                        status: 0,
                        msg: '用户名不存在，请先注册'
                    })
                }
                queryRes.forEach(v => {
                    if (v.username === username && v.pass===pass) {
                        resolve({
                            status: 1,
                            msg: '信息匹配成功',
                            phone: v.phone,
                            email: v.email,
                            username: v.username
                        })
                    } else {
                        resolve({
                            status: 2,
                            msg: '信息匹配不成功'
                        })
                    }
                })
            })
        }
    }
}