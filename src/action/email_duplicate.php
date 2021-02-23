<?php

include_once("../lib/function.php");
include_once("../core/DB.php");

use \src\core\DB;

$emailDuplicate = DB::fetch("select email from user_info where email = ?", [$_POST["email"]]);

if($emailDuplicate) print_r(json_encode(array("message" => "duplicate"), JSON_UNESCAPED_UNICODE));
else print_r(json_encode(array("message" => "usable"), JSON_UNESCAPED_UNICODE));