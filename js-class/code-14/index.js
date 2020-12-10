window.onload = function() {
    // 获取元素
    var title = document.querySelector('#title');
    var todolist = document.querySelector('#todolist');
    var donelist = document.querySelector('#donelist');

    var todocount = document.querySelector('#todocount');
    var donecount = document.querySelector('#donecount');

    var main = document.querySelector('#main');

    // 1. 为输入框绑定事件
    // 由于是判断回车键输入 所以需要使用keyup事件 而不是change事件
    title.onkeyup = function(ev) {
        // String.prototype.trim();
        // 语法: str.trim();
        // 作用: 去除字符串前后空格
        if (ev.keyCode == 13 && this.value.trim()) {
            var li = '<li><input type="checkbox" class="ck"><p>' + this.value + '</p><a class="del">-</a></li>'; //创建新的li元素
            todolist.innerHTML += li; // 将li元素放入todolist
            this.value = ''; // 清空输入框
            count();
        }
    }


    // 2. 为checkbox和删除按钮 添加事件
    // 未来元素 事件委托  将事件委托给 main
    main.onclick = function(ev) {
        switch (ev.target.className) {
            case 'ck':
                if (ev.target.checked) {
                    donelist.appendChild(ev.target.parentNode);
                } else {
                    todolist.appendChild(ev.target.parentNode);
                }
                count();
                break;
            case 'del':
                ev.target.parentNode.remove();
                count();
                break;
        }
    }


    // 3. 计数
    function count() {
        var todo = document.querySelectorAll('#todolist>li');
        var done = document.querySelectorAll('#donelist>li');

        todocount.innerHTML = todo.length;
        donecount.innerHTML = done.length;
    }

}