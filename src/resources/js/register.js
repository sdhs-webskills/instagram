const emailDuplicateCheck = email => {
    const form = new FormData();
    form.append("email", email);

    return fetch("../../../action/email_duplicate.php", {
        method: "POST",
        dataType: "json",
        body: form
    })
        .then(res => res.json())
        .then(data => data.message)
        .catch(error => console.log(error));
};

const $form = document.forms[0];
$form.addEventListener("submit", event => {
    event.preventDefault();

    const $email = $form.children[0];
    $email.addEventListener("blur", async () => {
        const checkResult = await emailDuplicateCheck($email.value);

        if(checkResult === "duplicate") {
            alert("중복된 이메일입니다");

            return $email.focus();
        };
        if($email.value === "") {
            alert("이메일칸은 공백일 수 없습니다");

            return $email.focus();
        };

        const emailRegExp = new RegExp(/[A-Za-z0-9]*@[A-Za-z]([.]?[a-zA-Z])*\.[a-zA-Z]{2,3}/);
        const emailValidCheck = $email.value.match(emailRegExp);

        if(emailValidCheck === null) {
            alert("이메일 형식이 맞지 않습니다");

            return $email.focus();
        };

        return true;
    });

    const $name = $form.children[1];
    $name.addEventListener("blur", () => {
        const nameRegExp = new RegExp(/[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z]{2,10}/);
        const nameValidCheck = $name.value.match(nameRegExp);

        if(nameValidCheck === null) {
            alert("이름칸이 공백입니다");

            return $name.focus();
        };

        return true;
    });

    const $password = $form.children[2];
    $password.addEventListener("blur", () => {
        const passwordRegExp = new RegExp(/[A-Za-z0-9!@#$%^&*()]*/);
        const passwordValidCheck = $password.value.match(passwordRegExp);

        if(passwordValidCheck === "") {
            alert("비밀번호칸이 공백입니다");

            return $password.focus();
        };

        return true;
    });

    const $phone = $form.children[3];
    $phone.addEventListener("blur", () => {
        const phoneRegExp = new RegExp(/[0-9]*([-]?[0-9]{3,4}?[-]?[0-9]{4})/);
        const phoneValidCheck = $phone.value.match(phoneRegExp);

        if(phoneValidCheck === null) {
            alert("전화번호칸이 공백입니다");

            return $phone.focus();
        };

        return true;
    });

    return $form.submit();
});