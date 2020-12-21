<?php

    // 文件类型
    // content-type:text/html           内容是html
    // content-type:application/json    内容是json
    header('content-type:application/json;charset=utf-8');

    // 混合数组
    // 外层使用索引数组  内层使用关联数组
    $data = array(
        array(
            'product'=>'macbook pro 2019',
            'price'=>21990,
            'num'=>58
        ),
        array(
            'product'=>'iphone12',
            'price'=>7999,
            'num'=>158
        ),
        array(
            'product'=>'ipad pro',
            'price'=>12999,
            'num'=>36
        )
    );

    $json = json_encode($data);
    echo $json;  // JSON数组  (字符串)  
?>