<?php
    header('comntent-type: text/html;charset=utf-8');

    // 创建数据库配置
    $mysql_config = array(
        'host'=>'localhost:3306',
        'db_user'=>'root',
        'db_pass'=>'123456',
        'db'=>'h5_2011'
    );

    // 连接数据库
    $mysqli = @new mysqli($mysql_config['host'],$mysql_config['db_user'],$mysql_config['db_pass']);

    var_dump($mysqli);
?>