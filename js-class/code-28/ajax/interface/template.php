<?php
    $name = $_REQUEST['name'];

    switch($name){
        case 'nav-tabs':
            echo '<ul class="nav nav-tabs"><li role="presentation" class="active"><a href="#">Home</a></li><li role="presentation"><a href="#">Profile</a></li><li role="presentation"><a href="#">Messages</a></li></ul>';
            break;
        case 'nav-pills':
            echo '<ul class="nav nav-pills"><li role="presentation" class="active"><a href="#">Home</a></li><li role="presentation"><a href="#">Profile</a></li><li role="presentation"><a href="#">Messages</a></li></ul>';
            break;
        }
?>