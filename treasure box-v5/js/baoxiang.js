$(function() {
    let arr = [
        ["迷你钥匙扣 * 1", "学霸笔 * 1", "萌萌随身本 * 1"],
        ["迷你钥匙扣 * 1", "学霸笔 * 1", "萌萌随身本 * 1"],
        ["迷你钥匙扣 * 1", "学霸笔 * 1", "萌萌随身本 * 1"],
        ["迷你钥匙扣 * 1", "学霸笔 * 1", "萌萌随身本 * 1"],
        ["学霸笔 * 1", "萌萌随身本 * 1", "迷你钥匙扣 * 1"],
        ["学霸笔 * 1", "萌萌随身本 * 1", "迷你钥匙扣 * 1"],
        ["学霸笔 * 1", "萌萌随身本 * 1", "迷你钥匙扣 * 1"],
        ["学霸笔 * 1", "萌萌随身本 * 1", "迷你钥匙扣 * 1"],
        ["萌萌随身本 * 1", "学霸笔 * 1", "迷你钥匙扣 * 1"],
        ["萌萌随身本 * 1", "学霸笔 * 1", "迷你钥匙扣 * 1"],
        ["萌萌随身本 * 1", "学霸笔 * 1", "迷你钥匙扣 * 1"],
        ["萌萌随身本 * 1", "学霸笔 * 1", "迷你钥匙扣 * 1"],
        ["学霸笔 * 1", "炫酷溜溜球 * 1", "迷你钥匙扣 * 1"],
        ["学霸笔 * 1", "炫酷溜溜球 * 1", "迷你钥匙扣 * 1"],
        ["学霸笔 * 1", "炫酷溜溜球 * 1", "迷你钥匙扣 * 1"],
        ["学霸笔 * 1", "炫酷溜溜球 * 1", "迷你钥匙扣 * 1"],
        ["幸运笔袋 * 1", "萌萌随身本 * 1", "学霸笔 * 1"],
        ["幸运笔袋 * 1", "萌萌随身本 * 1", "学霸笔 * 1"],
        ["幸运笔袋 * 1", "萌萌随身本 * 1", "学霸笔 * 1"],
        ["幸运笔袋 * 1", "萌萌随身本 * 1", "学霸笔 * 1"]
    ];
    let box1, box2, box3;
    let count = 0;
    $('#btn').on('click', function() {
        if (arr.length > 0) {
            $('.container .row .col-md-4 img').attr({ src: "img/game/caclose.png", alt: "宝箱" })
            let num = Math.floor(Math.random() * arr.length);
            box1 = arr[num][0];
            box2 = arr[num][1];
            box3 = arr[num][2];
            console.log(box1, box2, box3);
            arr.splice(num, 1);
            count++;
            $('#countNum').html(`您是第${count}位`);
            $('.b1div').html("");
            $('.b2div').html("");
            $('.b3div').html("");
            $('.container .row .col-md-4 img').removeClass('caseopen');
        } else {
            alert("抽奖结束");
        }
        $('.container .row .col-md-4 img').on("click", function() {
            $(this).unbind();
            if ($(this).hasClass("b1")) {
                $('#p').html(box1);
            } else if ($(this).hasClass("b2")) {
                $('#p').html(box2);
            } else {
                $('#p').html(box3);
            }
            $(this).addClass('caseopen');
            let that = this;
            $(that).on("webkitAnimationEnd", function() {
                $(that).unbind();
                setTimeout(function() {
                    $(that).attr({ src: "img/game/caopen.png", alt: "宝箱" });
                    $('.ca-prmsg').fadeIn(500);
                    $(".ca-prmsg").click(function() {
                        $('.ca-prmsg').fadeOut(500);
                        if ($(that).hasClass("b1")) {
                            $('.b1div').css({ "backgroundColor": "#FEE749", "color": "#654F04" }).html(box1);
                        } else if ($(that).hasClass("b2")) {
                            $('.b2div').css({ "backgroundColor": "#FEE749", "color": "#654F04" }).html(box2);
                        } else {
                            $('.b3div').css({ "backgroundColor": "#FEE749", "color": "#654F04" }).html(box3);
                        }
                        $(".ca-prmsg").unbind();
                    });
                }, 300);
            })
        });
    })

});