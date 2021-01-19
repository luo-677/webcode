//自己编写代码

//todo 日期的函数
function timeFilter (date) {
    const d = new Date(date)
    const arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    return d.getFullYear() +'年'+ zeroFilter((d.getMonth() + 1)) +'月'+ zeroFilter(d.getDate()) +'日'+ arr[d.getDay()]
}

//todo <10 加 0
function zeroFilter (n,target=10) {
    if (isNaN(n)) {
        //! 不是数
        return '不是一个数'
    }
    if (n < target) {
        return '0' + n 
    } 
    return n 
}

//

module.exports = {
    timeFilter,
    zeroFilter
}