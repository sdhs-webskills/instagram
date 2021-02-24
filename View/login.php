<?php

include_once("../DB/DB.php");
include_once("../Model/user.php");
use  DB\DB;

if(sizeof($_POST) > 0) {
    $username = $_POST['user-email'];
    $password = $_POST['user-password'];

    $result = DB::fetch("select * from member where email = ? and password = ? ;", [$username,$password]);
    session_start();
    $user = new User($result[0], $result[1], $result[2], $result[3]);
    $_SESSION["user"] = serialize($user);

    echo "<script>location.href = '../'</script>";
}



?>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/login.css">
    <script src="login.js"></script>
</head>
<body>
    <form action="" id="login" method="post">
        <h2>로그인</h2>
        <input type="email" name="user-email" id="user-email" placeholder="아이디">
        <input type="password" name="user-password" id="user-password" placeholder="비밀번호">
        <input type="submit" id="user-login" value="로그인">
        <?php

        ?>
    </form>
</body>
</html>

