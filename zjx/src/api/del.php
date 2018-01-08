<?php
    include 'connect.php';
    $num = isset($_GET['index']) ? $_GET['index'] : '';
    
    $sql="delete from user where num='$num'";
    $result = $conn->query($sql);
    if ($result) {
            echo "ok";
        } else {
            echo "fail";
    }


?>