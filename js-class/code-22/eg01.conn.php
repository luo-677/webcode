<?php
    header('content-type:text/html;charset=utf-8');

    $mysql_config = array(
        'host'=>'localhost:3306', // host 主机名 mysql默认运行在3306端口
        'db_user'=>'root',  // 登陆数据库的用户名
        'db_pass'=>'root',  // 登陆数据库的密码
        'db'=>'h5_2011'  // 需要连接的数据库
    );

    // 登陆(连接)数据库
    $mysqli = @new mysqli($mysql_config['host'],$mysql_config['db_user'],$mysql_config['db_pass']);
    echo "$mysqli";
    // object(mysqli)#1 (19) { ["affected_rows"]=> int(0) ["client_info"]=> string(79) "mysqlnd 5.0.12-dev - 20150407 - $Id: 7cc7cc96e675f6d72e5cf0f267f48e167c2abb23 $" ["client_version"]=> int(50012) ["connect_errno"]=> int(0) ["connect_error"]=> NULL ["errno"]=> int(0) ["error"]=> string(0) "" ["error_list"]=> array(0) { } ["field_count"]=> int(0) ["host_info"]=> string(25) "localhost:3306 via TCP/IP" ["info"]=> NULL ["insert_id"]=> int(0) ["server_info"]=> string(6) "5.7.26" ["server_version"]=> int(50726) ["stat"]=> string(136) "Uptime: 33334 Threads: 1 Questions: 2244 Slow queries: 0 Opens: 161 Flush tables: 1 Open tables: 65 Queries per second avg: 0.067" ["sqlstate"]=> string(5) "00000" ["protocol_version"]=> int(10) ["thread_id"]=> int(409) ["warning_count"]=> int(0) }

    // var_dump($mysqli);
    // 判断连接是否有错误
    if($mysqli->connect_errno){
        die('连接错误'.$mysqli->connect_errno.$mysqli->connect_error);
    }

    // 设置查询字符集
    $mysqli->query('set names utf8');

    // 选择数据库
    $select_db = $mysqli->select_db($mysql_config['db']);

    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }

    // ------------------------------------------------
    // 查询操作
    $sql = 'select * from users';
    // 执行sql语句的方法
    // $mysqli->query()

    // 通过query函数获得的查询结果 为 结果集
    $result = $mysqli->query($sql);

    // 通过结果集获得一条数据
    // $row = $result->fetch_assoc();
    // var_dump($row);
    // $row = $result->fetch_assoc();
    // var_dump($row);
    // $row = $result->fetch_assoc();
    // var_dump($row);

    $arr = array();

    while($row = $result->fetch_assoc()){
        array_push($arr,$row);
    }

    // var_dump($arr);

    $json = json_encode($arr);

    echo $json;
?>