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

#### addClass()
方法addClass为所有被选择的元素添加指定的类名   
语法:   
$(selector).addClass(className);   
参数:    
className[string] css类名   
返回值:     
Z对象   
```javascript  
$('.box').addClass('active');
```

#### removeClass()
方法removeClass为所有被选择元素删除指定类名   
语法:   
$(selector).removeClass(className);   
参数:   
className[string] css类名   
返回值:   
Z对象   
```javascript
$('.btn').removeClass('active');
```

#### toggleClass()
方法toggleClass为所有被选择的元素进行类名切换    
如果元素由该类名就删除该类名 如果没有该类名就添加该类名   
语法:     
$(selector).toggleClass(className);    
参数:    
className[string] css类名    
返回值:    
Z对象    
```javascript
$(selector).toggleClass('active')
```

#### replaceClass()  
方法replaceClass将为被选元素替换类名   
语法:   
$(selector).replaceClass(oldClass,newClass);   
参数:   
oldClass[string] 旧的类名   
newClass[string] 新的类名   
返回值:   
Z对象   
```javascript
$('.box').replaceClass('old','new');
```

#### attr()
语法:   
$(selector).attr(attrName);     // 根据属性名 获得第一个被选元素的属性值   
$(selector).attr(attrName,value); // 为所有被选元素 设置或修改属性值   
$(selector).attr(attrName,callback);  // 为所有元素修改或设置属性值(高阶)   
回调参数:   
oldValue[string] 当前属性的旧值   
index[number]    索引值   
```javascript
let tit = $('.box').attr('title');

$('.box').attr('title','hello world');

$('.box').attr('title',function(oldValue,index){
    return oldValue + '!';
});
```

#### removeAttr()
方法removeAttr为所有被选择的元素删除指定属性   
语法:   
$(selector).removeAttr(attrName);   
参数:   
attrName[string] 属性名   
返回值:   
Z对象   
```javascript
$('.box').removeAttr('class');
```

#### find()
函数find 在被选元素中查找指定的后代元素   
语法:   
$(selector).find(selector)   
返回值:   
Z对象 包含所有被筛选出的后代元素   
```javascript
$('.box').find('li');
```

#### eq()
方法eq 在被选元素中查找指定索引的元素   
语法:   
$(selector).eq(index)
参数:
index[number] 索引值
返回值:
Z对象 包含了被筛选的元素
```javascript
$('ul>li').eq(5);
```

#### siblings()
方法siblings 为所有被选元素选择它们的兄弟元素   
语法:   
$(selector).siblings([selector]);   
参数:   
selector[string] 可选 选择器   
返回值:   
Z对象 包含所有被选元素筛选后的兄弟元素   
```javascript
$('.box').siblings();   // 选择所有.box的兄弟元素
$('.box').siblings('span');  // 选择所有.box兄弟元素中的span元素
```  


#### children()
方法children 选择所有被选元素的子元素
语法:
$(selector).children([selector]);
参数:
selector[string] 可选 选择器
返回值:
Z对象 包含所有被选元素的子元素 或是 筛选后的子元素
```javascript
$('.box').children();   // 获得box的所有子元素
$('.box').children('.title');   // 获得box子元素中类名为title的元素
```

#### index()
方法index 可以获得被选元素在集合中的索引值
语法:
$(selector).index(domElement)
参数:
domElement[object]  dom元素对象
返回值:
domElement 在 在被选元素中的索引值  number
```javascript
$('#list>li').index(elm);  // 返回elm在Z对象中的索引
```