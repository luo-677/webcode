<?php
    include('./library/conn.php');

    $username = $_REQUEST['username'];
    $callback = $_REQUEST['callback'];

    $sql = "select * from users where username='$username'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        
        echo $callback.'({"username":"'.$username.'","has":true,"msg":"用户名已存在"})';
    }else{
        echo $callback.'({"username":"'.$username.'","has":false,"msg":"用户名可以使用"})';
    }
?>