<?php
    include 'connect.php';
    $num = isset($_GET['index']) ? $_GET['index'] : '0';
    $username = isset($_GET['username']) ? $_GET['username'] : 'hull';
    $name= isset($_GET['name']) ? urldecode($_GET['name']) : '';
    $l_price= isset($_GET['l_price']) ? urldecode($_GET['l_price']) : '';
    $f_price= isset($_GET['f_price']) ? urldecode($_GET['f_price']): '';
    $size= isset($_GET['size']) ? $_GET['size'] : '';
    $qty= isset($_GET['qty']) ? $_GET['qty'] : '1';
    $category= isset($_GET['category']) ? $_GET['category'] : '鞋子';


   
   
   
    $sql = "insert into user (username,name,l_price,f_price,size,qty,category,num) values('$username','$name','$l_price','$f_price','$size','$qty','$category','$num')";
    echo $sql;
    $result = $conn->query($sql);
    if ($result) {
            echo "ok";
        } else {
            echo "fail";
    }
    // // 释放查询内存(销毁)
    // $result->free();

    //关闭连接
    $conn->close();
?>