<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 你好世界 -->
    <?php
        // 后端渲染

        // 动态网站 和服务器有数据交互    php jsp asp
        // 需要通过web服务器访问  让web服务器通过后端语言将动态的文件(php,jsp,asp)翻译成html


        // 静态网站 和服务器没有数据交互  html
        // 不需要通过web服务器  浏览器认是html

        $msg = 'hello world';
        $color = 'red';
    ?>

    <h1 style="color:<?php echo $color;?>"><?php echo $msg; ?></h1>
</body>
</html>