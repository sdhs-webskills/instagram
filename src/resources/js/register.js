const dataValidateCheck = () => {

};

const $form = document.forms[0];
$form.addEventListener("submit", event => {
    event.preventDefault();

    const $email = $form.children[0];
    const $name = $form.children[1];
    const $password = $form.children[2];
    const $phone = $form.children[3];

    const emailCheck = $email.value.match(new RegExp(/[A-Za-z0-9]*@[A-Za-z]*\.[A-Za-z]{2,3}/g));
    const emailCheck2 = $email.value.match(new RegExp(/[A-Za-z|0-9]*@[A-Za-z]*\.[A-Za-z]{2,3}\.[A-Z|a-z]*/g));
    const nameCheck = $name.value.match(new RegExp(/^[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z]{2,10}$/g));
    const passwordCheck = $password.value.match(new RegExp(/^[A-Za-z0-9!@#$%^&*()]*$/g));
    const phoneCheck = $phone.value.match();

    console.log(emailCheck);
    console.log(emailCheck2);
    console.log(nameCheck);
});