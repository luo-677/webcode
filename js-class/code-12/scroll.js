window.onload = function() {
    var main = document.querySelector('#main'); // 获得元素
    var span = document.createElement('span');
    main.appendChild(span);

    span.style.position = 'fixed';
    span.style.left = '0';
    span.style.top = '0';
    span.style.backgroundColor = 'red';
    span.style.zIndex = 999;
    span.style.height = '3px';



    // 滚动条 滚动事件     修改窗口大小
    window.onscroll = window.onresize = function() {
        // 获得滚动条距离页面顶部的高度
        var tops = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(document.documentElement.scrollTop);
        // console.log(tops);

        var height = document.body.offsetHeight - innerHeight;

        if (height > 0 && tops) {
            // 计算百分比
            span.style.width = 100 * tops / height + '%';
        } else {
            span.style.width = 0;
        }

    }
}