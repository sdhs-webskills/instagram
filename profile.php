<?php
    session_start(); // 세션 활성화
    include_once("Model/user.php");

    $user = unserialize($_SESSION["user"]); // 세션에 있는 유저를 받아옴
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>profile</title>
    <link rel="stylesheet" href="css/profile.css">
    <script src="View/profile.js"></script>
</head>
<body>
<article id="wrap">
    <section id="profile">
        <div id="profile-img">
            <img src="<?= $user -> getImage() ?>" alt="">
        </div>
        <div id="introduction-box">
            <div id="introduction" contenteditable="false">
                아직 자기소개를 작성하지 않았습니다.
            </div>
            <div id="introduction-button-box">
                <button id="edit">수정</button>
                <button id="save">저장</button>
                <button id="reset">초기화</button>
            </div>
        </div>
        <section id="button-box">
            <button id="profile-change">변경하기</button>
            <div class="blind"></div>
        </section>
    </section>

    <input type="file">
    <section id="contents">
        <div class="content">
            <div class="content-picture-box">
                <img src="images/1.jpg" alt="" class="content-picture">
            </div>
        </div>
        <div class="content">
            <div class="content-picture-box">
                <img src="images/1.jpg" alt="" class="content-picture">
            </div>
        </div>
        <div class="content">
            <div class="content-picture-box">
                <img src="images/1.jpg" alt="" class="content-picture">
            </div>
        </div>
    </section>
</article>
</body>
</html>

<?php

