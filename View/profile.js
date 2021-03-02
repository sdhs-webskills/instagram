window.onload = function() {
    const $profileChange = document.querySelector("#profile-change");
    const $inputFile = document.querySelector("input[type='file']");
    const $profileImage = document.querySelector("#profile-img > img");
    const $introduction = document.querySelector("#introduction");

    $profileChange.addEventListener("click", () => {
        $inputFile.click();
    });

    const file_type_check = img => img.match(new RegExp(/\.png|\.jpg|\.jpeg/));

    $inputFile.addEventListener("change", () => {
        const selectedFile = $inputFile.files[0];

        if(!selectedFile) return false;
        if(!file_type_check(selectedFile.name)) return alert("이미지(jpg, jpeg, png)만 가능합니다.");

        $profileImage.src = URL.createObjectURL(selectedFile);
    });


}