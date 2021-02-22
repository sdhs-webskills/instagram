<?php
    include_once("model/user.php");

    if(session_status() == PHP_SESSION_NONE) session_start();

    $user = null;

    if(isset($_SESSOIN["user"]))
        $user = unserialize($_SESSION["user"]);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>instagram</title>
	<link rel="stylesheet" href="resources/css/index.css">
	<script src="resources/js/main.js" defer></script>
</head>
<body>
	<article id="wrap">
        <section id="menu">
            <div id="button-box">
                <?php if($user !== null): ?>
                    <button id="logout-button">로그아웃</button>
                <?php else: ?>
                    <button id="login-button">로그인</button>
                    <button id="register-button">회원가입</button>
                <?php endif;?>
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
                                <img src="resources/images/1.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
                                </div>
                            </div>
                        </div>
                        <div class="content" data-id="2">
                            <div class="content-picture-box">
                                <img src="resources/images/2.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
                                </div>
                            </div>
                        </div>
                        <div class="content" data-id="3">
                            <div class="content-picture-box">
                                <img src="resources/images/3.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-line">
                        <div class="content" data-id="4">
                            <div class="content-picture-box">
                                <img src="resources/images/4.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
                                </div>
                            </div>
                        </div>
                        <div class="content" data-id="5">
                            <div class="content-picture-box">
                                <img src="resources/images/5.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
                                </div>
                            </div>
                        </div>
                        <div class="content" data-id="6">
                            <div class="content-picture-box">
                                <img src="resources/images/6.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-line">
                        <div class="content" data-id="8">
                            <div class="content-picture-box">
                                <img src="resources/images/2.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
                                </div>
                            </div>
                        </div>
                        <div class="content" data-id="7">
                            <div class="content-picture-box">
                                <img src="resources/images/7.jpg" alt="" class="content-picture">
                            </div>
                            <div class="content-menu">
                                <div class="content-profile">
                                    <div class="profile-img"></div>
                                    <div class="profile-name"></div>
                                </div>
                                <div class="content-active-menu">
                                    <img src="resources/images/heart.png" alt="" class="heart"><span>0 </span>
                                    <img src="resources/images/comment.png" alt=""><span>0 </span>
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