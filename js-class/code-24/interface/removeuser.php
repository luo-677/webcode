<?php
    // 1. 连接数据库
    // 2. 获得id
    // 3. 操作数据库

    include('./library/conn.php');

    $id = $_REQUEST['id'];

    $sql = "delete from users where id=$id";

    $mysqli->query($sql);

    $mysqli->close();

    echo '<script>location.href="../eg02.admin.php";</script>';

?>