const $introduction = document.querySelector("#introduction");
const $edit = document.querySelector("#edit");
const $save = document.querySelector("#save");
const $reset = document.querySelector("#reset");

$save.style.display = "none";
$reset.style.display = "none";

$edit.addEventListener("click", () => {
    $introduction.contentEditable = true;

    $edit.style.display = "none";
    $save.style.display = "block";
    $reset.style.display = "block";
});
$save.addEventListener("click", () => {
    $introduction.contentEditable = false;

    $edit.style.display = "block";
    $save.style.display = "none";
    $reset.style.display = "none";
});
$reset.addEventListener("click", () => {
    $introduction.contentEditable = false;
    $introduction.innerHTML = "아직 자기소개를 작성하지 않았습니다.";

    $edit.style.display = "block";
    $save.style.display = "none";
    $reset.style.display = "none";
});