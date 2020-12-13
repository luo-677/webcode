window.onload = function() {
    var toDoList = document.getElementById("todolist");
    var doneList = document.getElementById("donelist");
    var title = document.getElementById("title");
    var toDoListlis = document.querySelectorAll("#todolist>li");
    var doneListlis = document.querySelectorAll("#donelist>li");
    var len = toDoListlis.length;
    var lend = doneListlis.length;
    var todoCount = document.getElementById("todocount");
    var doneCount = document.getElementById("donecount");
    todoCount.innerHTML = len;
    doneCount.innerHTML = lend;
    var main = document.getElementById("main");
    title.onkeyup = function(ev) {
        if (ev.key == "Enter" && !this.value.trim()) {
            alert("输入不能为空");
            title.value = '';
        } else if (ev.key == "Enter" && this.value.trim()) {
            var toDoListlis = document.querySelectorAll("#todolist>li");
            var newLi = document.createElement("li");
            newLi.innerHTML = '<input type="checkbox" class="ck"><p>' + title.value + '</p><a class="del">-</a>';
            toDoList.insertBefore(newLi, toDoListlis[0]);
            title.value = '';
            count();
        }
    }
    main.onclick = function(ev) {
        switch (ev.target.className) {
            case "ck":
                if (ev.target.checked) {
                    doneList.appendChild(ev.target.parentNode);
                    count();
                } else {
                    toDoList.appendChild(ev.target.parentNode);
                    count();
                }
                break;
            case "del":
                ev.target.parentNode.remove();
                count();
                break;
        }
    }

    function count() {
        var len1 = document.querySelectorAll("#todolist>li").length;
        todoCount.innerHTML = len1;
        var len2 = document.querySelectorAll("#donelist>li").length;
        doneCount.innerHTML = len2;
    }
}