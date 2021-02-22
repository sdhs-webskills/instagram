const dataValidateCheck = $form => {
    const $email = $form.children[0];
    const $password = $form.children[1];

    const emailCheck = $email.value.match(new RegExp(/[A-Za-z0-9]*@[A-Za-z]([.]?[a-zA-Z])*\.[a-zA-Z]{2,3}/));
    const passwordCheck = $password.value.match(new RegExp(/[A-Za-z0-9!@#$%^&*()]*/));
    const checkResult = [emailCheck, passwordCheck];

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