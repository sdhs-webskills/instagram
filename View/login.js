window.onload = function() {
    const $email = document.querySelector("#user-email");
    const $password = document.querySelector("#user-password");

    const regExp = new RegExp(/[0-9a-zA-Z]*([-_\.]?[0-9a-zA-Z])@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/);

    const $form = document.forms[0];
    $form.addEventListener("submit", event => {
        event.preventDefault();

        if($email.value.match(regExp) === null) {
            alert("이메일형식이 잘못되었습니다");

            return $email.focus();
        };
        if($password.value.length === 0) {
            alert("비밀번호칸이 공백입니다");

            return $password.focus();
        };

        return $form.submit();
    });

    // login.addEventListener("click", () => {
    //     location.href = "../index.html";
    // })
};