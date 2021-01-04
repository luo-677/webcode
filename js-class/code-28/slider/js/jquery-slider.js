(function($) {
    $.fn.extend({
        slider: function(options) {
            let defaults = {
                speed: 500, // 动画执行时间
                delay: 3000 // 图片停留时间
            };

            // 合并参数
            $.extend(defaults, options);

            // 定义变量
            let main = null, // 主函数
                init = null, // 初始化
                start = null, // 开始动画
                stop = null, // 停止动画
                next = null, // 下一张
                prev = null, // 上一张
                timer = null, // 计时器
                elms = {}; // 命名空间

            init = function() {
                // 获取元素
                elms.sliderElm = this.children('div');
                elms.btns = this.children('span');

                // 复制第一张图片
                elms.sliderElm.append(elms.sliderElm.children('img').first().clone());
                // 获得元素宽度
                elms.imgWidth = elms.sliderElm.children('img').first().width();

                // 设置轮播索引值
                elms.index = 1;

                // 悬停事件
                this.hover(function() {
                    stop();
                }, function() {
                    timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
                });

                // 按钮事件
                elms.btns.on('click', function() {
                    if (elms.btns.index(this)) {
                        next();
                    } else {
                        prev();
                    }
                });

            }.bind(this);

            start = function(direction) {
                let left = `-=${elms.imgWidth}`;

                if (!direction) {
                    left = `+=${elms.imgWidth}`; // 改变方向

                    if (elms.index === 1) {
                        elms.index = 4;
                        let divLeft = this.offset().left,
                            imgLeft = elms.sliderElm.children('img').last().offset().left;
                        elms.sliderElm.css('left', `-${imgLeft-divLeft}px`);
                    }
                }

                elms.sliderElm.animate({
                    left: left
                }, defaults.speed, function() {
                    if (direction) {
                        elms.index++;
                    } else {
                        elms.index--;
                    }

                    if (elms.index === 4) {
                        elms.index = 1;
                        elms.sliderElm.css('left', 0);
                    }
                });
            }.bind(this);

            stop = function() {
                clearInterval(timer);
                elms.sliderElm.stop(true, true);
            }


            prev = function() {
                stop();
                start(0);
            }

            next = function() {
                stop();
                start(1);
            }


            main = function() {
                init();
                timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
            }

            main();
        }
    });
})(jQuery);