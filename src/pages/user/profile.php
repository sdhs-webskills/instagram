<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>profile</title>
    <link rel="stylesheet" href="../../resources/css/profile.css">
    <script src="../../resources/js/profile.js" defer></script>
</head>
<body>
<article id="wrap">
    <section id="profile">
        <div id="profile-img">
            <img src="../../resources/images/basic_img.jpg" alt="">
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
    <section id="contents">
        <div class="content">
            <div class="content-picture-box">
                <img src="../../resources/images/1.jpg" alt="" class="content-picture">
            </div>
        </div>
    </section>
</article>
</body>
</html>