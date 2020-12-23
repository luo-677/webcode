<?php
    // 1. 连接数据库
    // 2. 获得前端发送的数据
    // 3. 执行修改语句

    include('../library/conn.php');

    $id = $_REQUEST['userid'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $address = $_REQUEST['address'];
    $phone = $_REQUEST['phone'];
    $sex = $_REQUEST['sex'];

    $sql = "update users set password='$password',email='$email',address='$address',phone='$phone',sex='$sex' where id=$id";


    $mysqli->query($sql);

    $mysqli->close();

    echo '<script>location.href="../eg02.admin.php"</script>';
?>