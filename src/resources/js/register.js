const dataValidateCheck = () => {

};

const $form = document.forms[0];
$form.addEventListener("submit", event => {
    event.preventDefault();

    const $email = $form.children[0];
    const $name = $form.children[1];
    const $password = $form.children[2];
    const $phone = $form.children[3];

    const emailCheck = $email.value.match(new RegExp(/[A-Za-z0-9]*@[A-Za-z]([.]?[a-zA-Z])*\.[a-zA-Z]{2,3}/));
    const nameCheck = $name.value.match(new RegExp(/[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z]{2,10}/));
    const passwordCheck = $password.value.match(new RegExp(/[A-Za-z0-9!@#$%^&*()]*/));
    const phoneCheck = $phone.value.match(new RegExp(/[0-9]*([-]?[0-9]{3,4}?[-]?[0-9]{4})/));

    console.log(emailCheck);
    console.log(nameCheck);
    console.log(passwordCheck);
    console.log(phoneCheck);
});