<?php
include_once("../lib/function.php");

if(session_status() == PHP_SESSION_NONE) session_start();

if(sizeof($_SESSION) === 0) {
    alert("로그인한 유저만 사용가능한 기능입니다");

    move("../main.php");
};
session_destroy();
alert("로그아웃 되었습니다");
move("../main.php");