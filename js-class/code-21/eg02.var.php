<?php
    header('content-type:text/html;charset=utf-8');

    // php是一个弱类型的脚本语言
    // 定义变量时 不需要强制指定数据类型 
    // 数据类型由赋值操作决定
    // 变量的命名规范 使用驼峰命名法
    // JS中声明变量使用 var let const
    // 在PHP中 变量无需声明  直接赋值
    // PHP中所有的变量必须以$符号开头

    // $username = 'zhangsan';

    // // . 操作符 在php中是 字符连接符
    // echo $username.'你好';

    // // php的字符串 可以是单引号 也可以是双引号
    // // php的双引号字符串 类似于 JS中的 模板字符串

    // echo '<br>';
    // $user = 'lisi';
    // echo "$user 你好";



    $username = 'wangwu';
    $age = 18;
    $bool = true;
    $n = null;
    $num = 3.1;

    // 输出语句 var_dump()  
    // 输出变量并输出数据类型
    var_dump($username);
    var_dump($age);
    var_dump($bool);
    var_dump($n);
    var_dump($num);

?>