<?php
    header('content-type:text/html;charset=utf-8');
    include('./library/conn.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $address = $_REQUEST['address'];
    $phone = $_REQUEST['phone'];
    $sex = $_REQUEST['sex'];
    $sql = "select * from users where username='$username'";

    $resust = $mysqli->query($sql);
    var_dump($resust);
?>