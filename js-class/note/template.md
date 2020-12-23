# template
用途：当多个页面都有重复的代码块出现时，可以将这些代码块提取出来，都使用Ajax请求进行获取
```javascript
$(function() {
	const xhr = new XMLHttpRequest();
    xhr.open('get', './interface/template/nav.html');
    xhr.send();
    xhr.onreadystatechange = function() {
    	if (xhr.readyState == 4 && xhr.status == 200){
        	$('.header')[0].innerHTML = xhr.responseText;
        }
    }
});
```
注意：使用Ajax请求过来的数据是未来元素，如果要进行添加事件，需要写在数据传输完成之后，不然Ajax异步执行，事件绑定无法获取到元素