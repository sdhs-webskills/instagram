const dataValidateCheck = ($form) => {
    const $email = $form.children[0];
    const $name = $form.children[1];
    const $password = $form.children[2];
    const $phone = $form.children[3];

    const emailCheck = $email.value.match(new RegExp(/[A-Za-z0-9]*@[A-Za-z]([.]?[a-zA-Z])*\.[a-zA-Z]{2,3}/));
    const nameCheck = $name.value.match(new RegExp(/[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z]{2,10}/));
    const passwordCheck = $password.value.match(new RegExp(/[A-Za-z0-9!@#$%^&*()]*/));
    const phoneCheck = $phone.value.match(new RegExp(/[0-9]*([-]?[0-9]{3,4}?[-]?[0-9]{4})/));
    const checkResult = [emailCheck, nameCheck, passwordCheck, phoneCheck];

    return checkResult.filter(check => check === null || check?.input === "");
};

const $form = document.forms[0];
$form.addEventListener("submit", event => {
    event.preventDefault();

    const checkResult = dataValidateCheck(event.target);
    for(let i = 0; i < checkResult.length; i++) {
        return alert(`${document.querySelectorAll("input")[i].placeholder}칸이 형식에 맞지 않습니다`);
    }

    return $form.submit();
});

const $email = $form.children[0];
$email.addEventListener("blur", async () => {
    const checkResult = await emailDuplicateCheck($email.value);

    if(checkResult === "duplicate") return $email.focus();
});