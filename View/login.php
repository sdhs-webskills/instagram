<?php

$username = $_POST['username'];
$password = $_POST['password'];
$wu = 0;
$wp = 0;

if(sizeof($_POST) > 0) {
    print_r($_POST);
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

