<?php
    header('content-type:text/html;charset=utf-8');

    // php中的函数 命名 驼峰命名法
    // 命名没有 $


    // function fn(){
    //     echo '<h1>hello world</h1>';
    // }

    // fn();


    function fn2($num){
        for($i = 2; $i< $num ;$i++){
            if($num % $i == 0){
                return false;
            }
        }
        return true;
    }

    if(fn2(17)){
        echo '是质数';
    }else{
        echo '不是质数';
    }
?>