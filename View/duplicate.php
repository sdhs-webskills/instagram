<?php

include_once("../DB/DB.php"); // 같은파일을 한번만 포함시킨다.
use DB\DB; // DB 파일에 Class DB를 사용한다.

if($_POST) {
    $data = DB::fetch("select * from member where email = ?", [$_POST["email"]]); // fetch 를 이용해서 쿼리문을 작성한다음 $_POST["email"]을 불러옴

    if($data) print_r(json_encode(array("message" => "중복된 이메일입니다"), JSON_UNESCAPED_UNICODE)); // UTF-8로 설정안해놓으면 한글이 깨진다. 따라서 JSON_UNESCAPED_UNICODE 를 사용하여 방지해야 한다.
    else print_r(json_encode(array("message" => "사용 가능한 이메일입니다"), JSON_UNESCAPED_UNICODE));
}