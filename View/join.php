<?php
include_once("../DB/DB.php");
use DB\DB;

if($_GET){
    extract($_POST);

    DB::fetch("insert into member values(?, ?, ?, ?)", [$email, $name, md5($password), $phone]);

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
    <link rel="stylesheet" href="../css/form.css">
    <script src="./join.js"></script>
</head>
<body>
    <form action="" id="join" method="post">
        <h2>회원가입</h2>
        <input type="email" class="email form-first-input" placeholder="이메일을 입력하세요" autocomplete="off" name="email">
        <input type="password" class="password" placeholder="비밀번호를 입력하세요" name="password">
        <input type="text" class="name" placeholder="이름" name="name">
        <input type="text" class="phone" placeholder="전화번호" name="phone">
        <input type="submit" value="회원가입" class="form-button">
    </form>
</body>
</html>

