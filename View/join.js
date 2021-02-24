
window.onload = function (){
    const email = document.querySelector(".email");
    let regExp = new RegExp(/[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/);
    let regExp2 = new RegExp(/[a-zA-Z0-9]*@[0-9a-zA-Z]([\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/);
    const formBtn = document.querySelector(".form-button");

    const form = new FormData();

    document.forms[0].addEventListener("submit", event => {
        event.preventDefault();

        // console.log(email.value.match(regExp));
        // console.log(email.value.match(regExp2));


        form.append("email", email.value);
        fetch("duplicate.php", {
            method : "POST",
            dataType : "json",
            body : form
        })

            .then(function(res){
                return res.json();
            })
            .then(function(data) {
                console.log(data.message);
            })
    });

    // email.addEventListener("keyup", ({ key }) => {
    //     if(key === "Enter") {
    //         console.log(regExp.test(email.value));
    //         // console.log(regExp2.test(email.value));
    //
    //     }
    // })
    formBtn.addEventListener("click", () => {
        if(email.value.match(regExp) === false) {
           alert("이메일이 형식에 맞지 않습니다.");
        }
        if(!email.value.match(regExp2)) {
            alert("이메일이 형식에 맞지 않습니다.");
        }

    });

    // document.forms[0].addEventListener("submit", () => {
    //
    // })




}

