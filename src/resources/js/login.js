const $form = document.forms[0];
$form.addEventListener("submit", event => {
    event.preventDefault();

    const checkResult = dataValidateCheck(event.target);
    for(let i = 0; i < checkResult.length; i++) {
        return alert(`${document.querySelectorAll("input")[i].placeholder}칸이 형식에 맞지 않습니다`);
    }

});