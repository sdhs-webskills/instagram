window.onload = function() {
    const $registerButton = document.querySelector("#register-button");
    const $imageFile = document.querySelector("input[type='file']");
    const $registerImage = document.querySelector("#register-image>img");
    const $form = document.querySelector("form");

    $form.addEventListener("submit", (e) => {
        e.preventDefault(); // form 을 사용할때 넘어가서 새로고침되어 내용이 날라가기 때문에 preventDefault 로 이벤트를 설정한다.
    });

    $registerButton.addEventListener("click", () => {
        $imageFile.click(); // button 태그를 input[type="file"]의 역할을 하게한다.
    });

    const file_type_check = img => img.match(new RegExp(/\.png|\.jpg|\.jpeg/)); // 파일 확장자가 .png, .jpg, .jpeg 형식인것만 넘어가도록 만든 정규식
    $imageFile.addEventListener("change", () => {
        const selectedFile = $imageFile.files[0]; // 확장자 제거
        console.log(selectedFile);

        if(!selectedFile) return false; //
        if(!file_type_check(selectedFile.name)) return alert("이미지(jpg, jpeg, png)만 가능합니다."); // file_type_check 로 확장자를 검사하고 정규식으로 설정한 확장자외의 확장자를 집어 넣으면 일치하지 않는다는 메시지를 리턴한다.
        $registerImage.src = URL.createObjectURL(selectedFile);
    });




}