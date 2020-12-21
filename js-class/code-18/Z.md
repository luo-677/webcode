### 封装函数库
### 功能高度仿造jQuery

### 定义类 Z
用于创建对象 选择元素
这个Z 继承于数组 方便操作

定义类时选择元素 使用的 方法是  `querySelectorAll()`
将选取到的元素创建为一个数组对象  它会支持所有数组的方法

向全局环境暴露一个初始化函数 用于创建对象 

初始化函数 也叫做 工厂函数 ,工厂函数的名称叫  $

整个函数库的基本语法定义
$(selector).action()

### 公有方法
让所有Z创建的对象 都可以访问到的功能

#### on()
方法on() 为被选择的元素添加事件
语法设置:
$('selector').on(eventType,callback);
$('selector').on(options);
参数:
eventType[string] 事件的类型
callback[function] 事件处理函数
options[object] 需要绑定的事件和事件处理函数
```javascript
$('.box').on('click',function(){
    // dosomething ...
});

$('.box').on({
    mouseover:function(){
        // 鼠标悬停
    },
    mouseout:function(){
        // 鼠标离开
    }
})
```


#### css()
css函数用于修改被选元素的行内样式
语法:
$(selector).css(style,value);
$(selector).css(options);
参数:
style[string] css 属性名
value[string]  css 属性值
options[object] css样式的名值对

```javascript
$('.box').css('color','red');
$('.box').css({
    'color':'red',
    'font-size':'2em'
});
```