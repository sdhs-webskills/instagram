<?php

include_once("../DB/DB.php");
use DB\DB;

if($_POST) {
    $data = DB::fetch("select * from member where email = ?", [$_POST["email"]]);

    if($data) print_r(json_encode(array("message" => "중복된 이메일입니다"), JSON_UNESCAPED_UNICODE));
    else print_r(json_encode(array("message" => "사용 가능한 이메일입니다"), JSON_UNESCAPED_UNICODE));
}