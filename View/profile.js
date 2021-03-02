window.onload = function() {
    const $profileChange = document.querySelector("#profile-change");
    const $inputFile = document.querySelector("input[type='file']");
    const $profileImage = document.querySelector("#profile-img > img");
    const $introduction = document.querySelector("#introduction");
    const $introductionButtonBox = document.querySelector("#introduction-button-box");
    const $edit = document.querySelector("#edit");
    const $save = document.querySelector("#save");
    const $reset = document.querySelector("#reset");

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

    const addClickEvent = (target, listener) => {
        return target.addEventListener("click", listener);
    };

    addClickEvent($introductionButtonBox, ({ target }) => {
        if(target.id === "edit") {
            $introduction.contentEditable  = true;
            return $introduction.parentNode.children[1].innerHTML = `           
                <button id="save">저장</button>
                <button id="reset">초기화</button>
            `;
        };

        if(target.id === "save") {
            $introductionButtonBox.innerHTML = `<button id="edit">수정</button>`;

            return $introduction.contentEditable = false;
        };

        if(target.id === "reset") {
            $introduction.innerHTML = `
             아직 자기소개를 작성하지 않았습니다.
            `;

            $introductionButtonBox.innerHTML = `<button id="edit">수정</button>`;

            return $introduction.contentEditable = false;
        };
    });
}