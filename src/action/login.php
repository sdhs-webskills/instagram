<?php

include_once("../model/user.php");
include_once("../lib/function.php");
include_once("../core/DB.php");

use \src\core\DB;

if(session_status() == PHP_SESSION_NONE) session_start();

if($_SERVER["REQUEST_METHOD"] !== "POST") header("Location: http://localhost/instagram/src/main.php");

extract($_POST);

$result = DB::fetch("select * from user_info where email = ? and password = ?", array($email, md5($password)));

if($result) {
    $_SESSION["user"] = serialize(new User($result[0], $result[1], $result[2], $result[3]));

    alert("로그인되었습니다");
    move("/instagram/src/main.php");
}else{
    alert("이메일 또는 비밀번호가 잘못되었습니다");
    move("../pages/user/account/login.php");
};