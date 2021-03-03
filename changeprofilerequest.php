<?php
include_once("DB\DB.php");
include_once("Model\user.php");

use DB\DB;


session_start();

$method = $_SERVER["REQUEST_METHOD"];

if($method === "POST"){
    $email = unserialize($_SESSION["user"]);
    $email = $email -> getEmail();

    DB::fetch("update member set img = ? where email = ?", [$_POST["img"], $email]);

    print_r(json_encode(array("message" => $_POST["img"])));
}

