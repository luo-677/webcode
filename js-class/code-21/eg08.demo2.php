<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $books = array(
            array(
                'bookName'=>'JavaScript高级程序设计',
                'price'=>139,
                'num'=>25
            ),
            array(
                'bookName'=>'JavaScript忍者密集',
                'price'=>99,
                'num'=>29
            ),
            array(
                'bookName'=>'ES6标准入门',
                'price'=>99,
                'num'=>125
            ),
            array(
                'bookName'=>'PHP从入门到精通',
                'price'=>99,
                'num'=>22
            )
        );
    ?>

    <ul>
        <?php
            for($i=0;$i<count($books);$i++){
                echo '<li>书名:'.$books[$i]['bookName'].' 价格:'.$books[$i]['price'].' 库存:'.$books[$i]['num'].'</li>';
            }
        ?>
    </ul>
</body>
</html>