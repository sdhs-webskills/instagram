<?php

include_once("Model/user.php"); // 같은 파일을 한번만 포함한다.

session_start(); // 세션 활성화
$user = unserialize($_SESSION["user"]); // 세션에 있는 유저를 받아온다.
$email = $user -> getEmail(); // 이메일을 받아온다.
$email = explode("@", $email)[0]; // @기준으로 자른다 js split 을 생각하면 된다.

$img = $_FILES["img"]["name"]; // $_FILES["내가 설정한 이름"]["name"]
$img_path_prefix = "../instagram/images/profile/"; // 유저가 프로필을 변경했을때 images/profile 디렉토리에 저장한다.

$img_explode = explode(".", $img); // $email 부분과 같으므로 생략
$replaced_img_name = $email."_profile.".$img_explode[1]; // 로그인한 유저의 프로필을 변경헀을때 유저의 이메일을 기준으로 프로필 이미지를 설정한다.

$completed_img_path = $img_path_prefix.$replaced_img_name; // 이미지를 저장할 경로
move_uploaded_file($_FILES["img"]["tmp_name"], $completed_img_path); // 임시로 업로드된 이미지를 찾아 내가 원하는 주소에 저장한다.

$user -> setImage($completed_img_path); // 유저 모델이 가지고있는 이미지 주소만 변경

print_r(json_encode(array(
    "message" =>"success",
    "path" => $completed_img_path
)));