<?php
include_once("Model/user.php");
session_start();
$user = null;
if(isset($user)){
$user = unserialize($_SESSION["user"]);
}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>instagram</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="js/index.js" defer></script>
</head>
<body>
<article id="wrap">
    <section id="menu">
        <div id="button-box">
            <?php  if(isset($_SESSION["user"])): ?>
                <a href="profile.php">프로필</a>
                <a href="registerImg.php">게시글등록</a>
                <a href="View/logout.php">로그아웃</a>
            <?php else: ?>
                <a href="View/join.php">회원가입</a>
                <a href="View/login.php">로그인</a>
            <?php endif; ?>
        </div>
    </section>
    <section id="content">
        <section id="stories">
            <h2>Stories</h2>
        </section>
        <section id="contents">
            <h2>Feed</h2>
            <div id="content-line-box">
                <div class="content-line">
                    <div class="content" data-id="1">
                        <div class="content-picture-box">
                            <img src="images/1.jpg" alt="" class="content-picture">
                        </div>
                        <div class="content-menu">
                            <div class="content-profile">
                                <div class="profile-img"></div>
                                <div class="profile-name"></div>
                            </div>
                            <div class="content-active-menu">
                                <img src="images/heart.png" alt="" class="heart"><span>0 </span>
                                <img src="images/comment.png" alt=""><span>0 </span>
                            </div>
                        </div>
                    </div>
                    <div class="content" data-id="2">
                        <div class="content-picture-box">
                            <img src="images/2.jpg" alt="" class="content-picture">
                        </div>
                        <div class="content-menu">
                            <div class="content-profile">
                                <div class="profile-img"></div>
                                <div class="profile-name"></div>
                            </div>
                            <div class="content-active-menu">
                                <img src="images/heart.png" alt="" class="heart"><span>0 </span>
                                <img src="images/comment.png" alt=""><span>0 </span>
                            </div>
                        </div>
                    </div>
                    <div class="content" data-id="3">
                        <div class="content-picture-box">
                            <img src="images/3.jpg" alt="" class="content-picture">
                        </div>
                        <div class="content-menu">
                            <div class="content-profile">
                                <div class="profile-img"></div>
                                <div class="profile-name"></div>
                            </div>
                            <div class="content-active-menu">
                                <img src="images/heart.png" alt="" class="heart"><span>0 </span>
                                <img src="images/comment.png" alt=""><span>0 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-line">
                    <div class="content" data-id="4">
                        <div class="content-picture-box">
                            <img src="images/4.jpg" alt="" class="content-picture">
                        </div>
                        <div class="content-menu">
                            <div class="content-profile">
                                <div class="profile-img"></div>
                                <div class="profile-name"></div>
                            </div>
                            <div class="content-active-menu">
                                <img src="images/heart.png" alt="" class="heart"><span>0 </span>
                                <img src="images/comment.png" alt=""><span>0 </span>
                            </div>
                        </div>
                    </div>
                    <div class="content" data-id="5">
                        <div class="content-picture-box">
                            <img src="images/5.jpg" alt="" class="content-picture">
                        </div>
                        <div class="content-menu">
                            <div class="content-profile">
                                <div class="profile-img"></div>
                                <div class="profile-name"></div>
                            </div>
                            <div class="content-active-menu">
                                <img src="images/heart.png" alt="" class="heart"><span>0 </span>
                                <img src="images/comment.png" alt=""><span>0 </span>
                            </div>
                        </div>
                    </div>
                    <div class="content" data-id="6">
                        <div class="content-picture-box">
                            <img src="images/6.jpg" alt="" class="content-picture">
                        </div>
                        <div class="content-menu">
                            <div class="content-profile">
                                <div class="profile-img"></div>
                                <div class="profile-name"></div>
                            </div>
                            <div class="content-active-menu">
                                <img src="images/heart.png" alt="" class="heart"><span>0 </span>
                                <img src="images/comment.png" alt=""><span>0 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-line">
                    <div class="content" data-id="7">
                        <div class="content-picture-box">
                            <img src="images/7.jpg" alt="" class="content-picture">
                        </div>
                        <div class="content-menu">
                            <div class="content-profile">
                                <div class="profile-img"></div>
                                <div class="profile-name"></div>
                            </div>
                            <div class="content-active-menu">
                                <img src="images/heart.png" alt="" class="heart"><span>0 </span>
                                <img src="images/comment.png" alt=""><span>0 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</article>
</body>
</html>

<?php
