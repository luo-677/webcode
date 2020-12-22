<?php
    // 1. 连接数据库
    // 2. 获得表单发送的数据
    // 3. 通过用户名和密码查询数据库的用户表
    // 4. 如果有查询结果 说明登陆成功
    //    如果没有查询结果 则登陆失败

    include('./library/conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where username='$username' and password='$password'";

    $result = $mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){
        echo '<script>alert("登陆成功")</script>';
        echo '<script>location.href="../index.html"</script>';
    }else{
        echo '<script>alert("用户名或密码错误")</script>';
        echo '<script>location.href="../eg03.login.html"</script>';
    }
?>