<?php
    header('content-type:text/html;charset=utf-8');

    // PHP有两种数组语法
    // 1. 索引数组 
    // 数组里的成员是有序排列 在PHP的数组中可以存放任何类型的值
    // 最小索引是0  最大索引是长度-1
    // PHP数组没有length属性

    // $arr = array(1,2,3,4,5);

    // echo 无法输出数组
    // echo $arr;

    // 输出数组可以使用 
    // print_r($arr);
    // var_dump($arr);

    // echo count($arr); // 使用count()函数查看数组的长度

    // 使用for循环遍历数组
    // for($i = 0 ; $i<count($arr);$i++){
    //     echo $arr[$i];
    //     echo "<br>";
    // }

    // 使用foreach遍历数组
    // foreach($arr as $value){  // 类似于JS中的 for-of
    //     echo $value;
    // }

    // https://www.php.net/manual/zh/book.array.php  数组文档

    // $arr2 = array(654,12,65,123,765,4328,721,76);
    
    // $arr3 = array_filter($arr2,function($elm){
    //     return $elm%2;
    // });

    // // var_dump($arr3);

    // array_push($arr3,'ok');

    // print_r($arr3);

    // ------------------------------------------------------------------------

    // 2. 关联数组
    // 在PHP中 关联数组是由若干键值对组成的一种哈希(HASH)结构
    // 语法类似于 JS中的 对象

    $user = array(
        'username'=>'zhangsan',
        'age'=>25,
        'sex'=>'nan'
    );

    // print_r($user);
    // echo count($user);

    $phone = array('phoneNumber'=>1388888888);

    $result = array_merge($user,$phone);
   
    // var_dump($result);

    // php 的关联数组 可以转换成JSON字符串格式
    // json_encode()

    $json = json_encode($result);

    echo $json;

    // 前端给后端发送的内容 是   JSON字符串
    // 后端给前端发送的内容 也是 JSON字符串

    // json_decode(jsonString)  将JSON字符串转成PHP对象

    echo '<br>';
    $res = json_decode($json);

    var_dump($res);

?>