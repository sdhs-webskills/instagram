<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <style>
        *{ margin: 0; padding: 0;}
        body{ background: #ededed; }
    </style>
    <link rel="stylesheet" href="../../../resources/css/form.css">
</head>
<body>
<form action="../../../action/login.php" method="POST">
    <input type="text" name="email" class="form-first-input" placeholder="이메일" autocomplete="off">
    <input type="password" name="password" class="form-last-input" placeholder="비밀번호">
    <input type="submit" value="로그인" class="form-button">
</form>
</body>
</html>