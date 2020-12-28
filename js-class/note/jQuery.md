# jQuery
## 1. 工厂函数
概念：jQuery中的工厂函数叫做jQuery，拥有一个别名 $
```javascript
console.log(jQuery === $); // true
// jQuery拥有非常强大的对象创建能力
// 使用jQuery创建的对象都叫做jQuery对象
// 创建的对象均为类数组对象
$(selector).action();
```
## 2. 就绪事件
概念：DOMContentLoaded DOM元素加载完毕
```javascript
// 完整写法
$(document).ready(function(){});
// 简便写法
$(function(){});
```
## 3. jQuery选择器
概念：jQuery的选择器主要依赖于css选择器
```javascript
// :lang选择器
$('div:lang("zh-cn")').action();
// 选择类数组的第一个元素
$('div:first').action();
// 除了...
$('div:not(:first)').action();
// 偶数下标
$('div:even').action();
// 奇数下标
$('div:odd').action();
// eq等于，下标等于1的元素
$('div:eq(1)').action();
// lt小于，下标小于2的元素
$('div:lt(2)').action();
// gt大于，下标大于3的元素
$('div:gt(3)').action();
// 根据内容字符串进行筛选元素
$('div:contains("hello")').action();
// 根据元素的可见性筛选
$('div:hidden').action();
// 根据表单元素的种类进行筛选
$('input:text').action();
```
## 4. jQuery中的事件绑定
```javascript
// 普通事件绑定
// 写法1：
$('.btn').on('mouseover mouseout',function(){});
// 写法2：
$('.btn').on({
    mouseover: function(){
        console.log(1);
    },
    mouseout: function(){
        console.log(2);
    }
});
```
## 5. jQuery中的事件委派
概念：
    1. 将事件绑定给父级或者祖先级元素
    2. 通过事件冒泡的原理，判断事件触发的目标
作用：
    1. 可以为未来元素添加事件
    2. 减少DOM查询次数
    3. 减少事件绑定次数
jQuery对事件委托进行了封装，让事件委托更简单易用
```javascript
// jQuery 1.x 事件委托
$('#box').delegate('.btn','click',function(){});
// 高版本的jQuery将事件委托封装进了方法on
$('#box').on('click','.btn',function(){});
$('ul').on({
    mouseover: function(){
        $(this).css('background','red');
    },
    mouseout: function(){
        $(this).css('background','#fff');
    }
}, 'li');
```
## 6. jQuery中的常用事件
```javascript
// hover事件
$('.list>li').hover(function(){
    // mouseenter
    $(this).css('background','red');
},function(){
    // mouseleave
    $(this).css('background','#fff');
});
// 一次性事件
$('.list>li:first').one('click',function(){});
// trigger 触发其他元素的事件
$('#box').on('click',function(){});
$('button').on('click',function(){
    $('#box').trigger('click');
});
```