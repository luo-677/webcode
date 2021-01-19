/* 
    * events  用于事件驱动
    * 原生js 
        *   box.onclick = function () {}
            *  box  事件源
            *  on   DOM事件添加形式
            *  click 事件类型
            *  function () {} 事件处理程序    
*/

const events = require('events')

// events 不具备事件驱动能力
// bus  事件总线
const bus = events.EventEmitter.prototype  // 拿到了原型 
// console.log(bus)
// bus.on(事件名，事件处理程序)


//todo 定义事件【发布】
bus.on('aa',function (n) {
    // 书写逻辑
    console.log('aa' + n)
})


//todo 触发事件【订阅 subscript】
// bus.emit(事件名，实际参数)
bus.emit('aa',10)