/**
 * 为元素添加类名
 * @param {DOMElement} elm 
 * @param {string} className 
 */
function addClass(elm, className) {
    if (elm.nodeType === 1 && typeof className === 'string' && elm.hasAttribute('class')) {
        elm.setAttribute('class', elm.getAttribute('class') + ' ' + className);
    } else if (elm.nodeType === 1 && typeof className === 'string') {
        elm.setAttribute('class', className);
    }
}


/**
 * 为元素删除类名
 * @param {DOMElement} elm 
 * @param {string} className 
 */
function removeClass(elm, className) {
    if (elm.nodeType === 1 && typeof className === 'string' && elm.hasAttribute('class')) {
        // 找所有的类名
        var classList = elm.getAttribute('class'); // 获得所有类名
        classList = classList.split(' '); // 通过空格拆分字符串 获得一个数组
        var index = classList.indexOf(className); // 找到类名所在的索引
        if (index >= 0) classList.splice(index, 1); // 如果元素存在就删除1位
        classList = classList.join(' ');
        elm.setAttribute('class', classList);
    }
}