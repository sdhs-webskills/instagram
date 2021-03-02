window.onload = function() {
    const $registerButton = document.querySelector("#register-button");
    const $imageFile = document.querySelector("input[type='file']");
    const $registerImage = document.querySelector("#register-image>img");
    const $form = document.querySelector("form");

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    $registerButton.addEventListener("click", () => {
        $imageFile.click();
    });

    const file_type_check = img => img.match(new RegExp(/\.png|\.jpg|\.jpeg/));
    $imageFile.addEventListener("change", () => {
        const selectedFile = $imageFile.files[0];
        console.log(selectedFile);

        if(!selectedFile) return false;
        if(!file_type_check(selectedFile.name)) return alert("이미지(jpg, jpeg, png)만 가능합니다.");
        $registerImage.src = URL.createObjectURL(selectedFile);
    });




}