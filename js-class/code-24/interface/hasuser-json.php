<?php

    include('./library/conn.php');

    $data = file_get_contents('php://input');  // 用于接收json数据

    $obj = json_decode($data); // 将json 转成php对象


    $username = $obj->username;

    $sql = "select * from users where username='$username'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        echo '{"username":"'.$username.'","has":true,"msg":"用户名已存在"}';
    }else{
        echo '{"username":"'.$username.'","has":false,"msg":"用户名可以使用"}';
    }
?>