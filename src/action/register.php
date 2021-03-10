<?php

include_once("../model/user.php");
include_once("../lib/function.php");
include_once("../core/DB.php");

use \src\core\DB;

if(session_status() == PHP_SESSION_NONE) session_start();

if($_SERVER["REQUEST_METHOD"] !== "POST") header("Location: http://localhost/instagram/src/main.php");

$data = [...array_values($_POST)];
$data[2] = md5($data[2]);

DB::fetch("insert into user_info(email, name, password, phone) values(?, ?, ?, ?)", [...array_values($data)]);

alert("회원가입되었습니다");
move("/instagram/src/main.php");