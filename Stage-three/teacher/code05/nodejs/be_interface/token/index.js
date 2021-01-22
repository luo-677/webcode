//todo 封装token生成和token的验证

//todo 1. 引入插件
const jwt = require('jsonwebtoken')
const fs = require('fs') // 去读取文件
const path = require('path') // 去读取磁盘路径

//todo 2. 读取公钥[验证token]和私钥【生成token】

const publicKey = fs.readFileSync(path.join(__dirname, '../rsa/public_key.pem'))
const privateKey = fs.readFileSync(path.join(__dirname, '../rsa/private_key.pem'))

//todo 3. 封装函数

function createToken(payload) {
    //? payload  负载  ---   你要加密的数据 
    payload.ctime = Date.now()
    return jwt.sign(payload, privateKey) 
}

function checkToken(token) {
    return new Promise((resolve,reject) => {
        jwt.verify(token, privateKey, (err, data) => { 
            if (err) {
                // token验证失败了
                resolve({
                    status: 0,
                    msg: err.message  
                })
            } else {
                // token验证通过 
                resolve({
                    status: 1,
                    ...data
                })
            }
        })
    })
}

module.exports = {
    createToken,checkToken
}