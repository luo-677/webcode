<?php
    include('./library/conn.php');

    // $_GET[]  $_POST[]  $_REQUEST[]  都是用于接收表单数据的
    $username = $_REQUEST['username'];

    $sql = "select * from users where username='$username'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        echo '{"username":"'.$username.'","has":true,"msg":"用户名已存在"}';
    }else{
        echo '{"username":"'.$username.'","has":false,"msg":"用户名可以使用"}';
    }


?>