(function() {
    'use strict';

    const init = (selector) => {
        return new Z(selector);
    }

    class Z extends Array {
        constructor(selector) {
            let elms = document.querySelectorAll(selector);
            super(...elms);
        }


        on(type, callback) {
            if (typeof type === 'string' && typeof callback === 'function') {
                this.forEach(elm => { // 遍历数组
                    elm.addEventListener(type, callback); // 为每一个被选元素 添加事件
                });
            } else if (type.constructor.name === 'Object') {
                for (let key in type) { // 遍历对象 获得key和value (key是事件类型,value是事件函数)
                    this.forEach(elm => { // 遍历每一个被选择的元素
                        elm.addEventListener(key, type[key]); // 为元素添加事件
                    });
                }
            }
        }

        css(style, value) {
            if (typeof style === 'string' && typeof value === 'string') {
                this.forEach(elm => {
                    elm.style[style] = value;
                });
            } else if (style.constructor.name === 'Object') {
                for (let key in style) {
                    this.forEach(elm => {
                        elm.style[key] = style[key];
                    })
                }
            }

            return this; // 返回的是Z创建的对象 支持链式调用
        }

        addClass(className) { // 为所有被选元素添加类名
            if (typeof className === 'string' && className) {
                this.forEach(elm => {
                    elm.classList.add(className);
                });
            }
            return this;
        }
    }


    window.$ = init;
})();