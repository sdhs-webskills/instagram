<?php

include_once("Model/user.php");

session_start();
$user = unserialize($_SESSION["user"]);
$email = $user -> getEmail();
$email = explode("@", $email)[0];

$img = $_FILES["img"]["name"];
$img_path_prefix = "../instagram/images/profile/";

$img_explode = explode(".", $img);
$replaced_img_name = $email."_profile.".$img_explode[1];

$completed_img_path = $img_path_prefix.$replaced_img_name;
move_uploaded_file($_FILES["img"]["tmp_name"], $completed_img_path);

$user -> setImage($completed_img_path);

print_r(json_encode(array(
    "message" =>"success",
    "path" => $completed_img_path
)));