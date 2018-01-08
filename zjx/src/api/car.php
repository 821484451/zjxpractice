<?php
    include 'connect.php';
    //编写sql语句
    $sql = 'select * from user';

    //获取查询结果集
    $result = $conn->query($sql);

    //使用查询结果集
    //得到json字符串
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    //把结果输出到前台
    echo json_encode($row);

    // 关闭数据库，避免资源浪费
    $conn->close();



?>