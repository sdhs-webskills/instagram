window.onload = function() {
    const $registerButton = document.querySelector("#register-button");
    const $imageFile = document.querySelector("input[type='file']");
    const $registerImage = document.querySelector("#register-image");
    $registerButton.addEventListener("click", () => {
        $imageFile.click();
    });

    const file_type_check = img => img.match(new RegExp(/\.png|\.jpg|\.jpeg/));
    $imageFile.addEventListener("change", () => {
        const selectedFile = $imageFile.files[0];
        console.log(selectedFile);
    })
}