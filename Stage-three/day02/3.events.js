const events = require("events");
// 创建事件总线，获得原型
const bus = events.EventEmitter.prototype;
// 定义事件
bus.on('aa', function(n) {
    console.log('aa' + n);
});
// 触发事件
bus.emit('aa', 20);