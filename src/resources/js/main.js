const hearts = document.querySelectorAll(".heart");
const ids = JSON.parse(localStorage.getItem("heart")) ?? {id: []};

const getHeart = index => {
    let $heart;

    hearts.forEach(heart => {
        const heartId = heart?.parentNode.parentNode.parentNode.dataset.id;

        if(heartId === index) $heart = heart;
    });

    return $heart;
};

ids["id"].forEach(id => {
    const heart = getHeart(id);
    const heartSpan = heart.parentNode.children[1];

    heart.src = "resources/images/heart_red.png";
    heartSpan.innerHTML = Number(heartSpan.innerHTML) + 1;
});

const parseLocalStorage = () => JSON.parse(localStorage.getItem("heart")) ?? {id: []};
const findFromLocalStorage = index => {
    const ids = parseLocalStorage();

    return ids["id"].findIndex(id => id === index);
};
const setState = (newState) => {
    const ids = parseLocalStorage();
    ids["id"].push(newState["id"]);

    localStorage.setItem("heart", JSON.stringify(ids));
};
const heartAnimation = () => {
    document.body.insertAdjacentHTML(
        "beforeend",
        `<div class=heart-animation>
			<img src='resources/images/heart_red.png'>
			</div>`
    );

    setTimeout(() => {
        document.body.removeChild(
            document.querySelector(".heart-animation")
        );
    }, 1350);
};

document.body.onclick = ({ target }) => {
    if(!target.classList.contains("heart")) return false;

    const content = target?.parentNode?.parentNode?.parentNode;
    const heartSpan = target.parentNode.children[1];
    const contentIndex = content.dataset.id;

    if(findFromLocalStorage(contentIndex) < 0) {
        heartAnimation();

        target.src = "resources/images/heart_red.png";
        heartSpan.innerHTML = Number(heartSpan.innerHTML) + 1;

        return setState({id: contentIndex});
    };

    const array = parseLocalStorage()["id"];
    array.splice(findFromLocalStorage(contentIndex), 1);

    localStorage.setItem("heart", JSON.stringify({id: array}));

    heartSpan.innerHTML = Number(heartSpan.innerHTML) - 1;
    target.src = "resources/images/heart.png";
};

document.body.ondblclick = ({ target }) => {
    if(!target.classList.contains("content-picture")) return false;

    const content = target?.parentNode?.parentNode;
    const heartImg = content.children[1].children[1].children[0];
    const heartSpan = content.children[1].children[1].children[1];
    const contentIndex = content.dataset.id;

    heartAnimation();

    if(findFromLocalStorage(contentIndex) < 0) {
        heartImg.src = "resources/images/heart_red.png";
        heartSpan.innerHTML = Number(heartSpan.innerHTML) + 1;

        return setState({id: contentIndex});
    };
};

const $loginButton = document.querySelector("#login-button");
const $registerButton = document.querySelector("#register-button");

$loginButton.addEventListener("click", () => {
    location.href = "../src/pages/user/account/login.php";
});
$registerButton.addEventListener("click", () => {
    location.href = "../src/pages/user/account/register.php";
});