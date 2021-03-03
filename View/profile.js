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

    const readFile = file => {
        return new Promise(resolve => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = ({ target}) => {
                resolve(target.result);
            };
        });
    };

    $inputFile.addEventListener("change", async () => {
        const selectedFile = $inputFile.files[0];
        const formData = new FormData();
        formData.append("img", selectedFile);

        const imagePath = await fetch("insertImage.php", {
            method: 'POST', // POST 로 처리한다.
            dataType: "json", // 데이터를 받는형식을 JSON 형식으로 받는다.
            body: formData // body 는 객체만 받을수 있다.
        })
            .then(res => res.json())
            .then(data => data.path);

        if(!selectedFile) return false;
        if(!file_type_check(selectedFile.name)) return alert("이미지(jpg, jpeg, png)만 가능합니다.");

        const profileImageChangeForm = new FormData();
        profileImageChangeForm.append("img", imagePath);

        fetch("changeprofilerequest.php", {
            method: 'POST',
            dataType: "json",
            body: profileImageChangeForm
        })
            .then(res => res.json())
            .then(data => data);

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
            $introductionButtonBox.innerHTML = `<button id="edit">수정</button> <button id="reset">초기화</button>`;

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