// write code...

window.onload = function() {
    const hearts = document.querySelectorAll(".heart");
    const activeMenus = document.querySelectorAll(".content-active-menu");
    hearts.forEach((heart, index) => {
        heart.addEventListener("click", () => {

            document.body.insertAdjacentHTML("beforeend", `
            <div class="heart-animation">
                <img src="images/heart_red.png">
            </div>`);

            setTimeout(() => {
                document.body.removeChild(document.querySelector(".heart-animation"));
            }, 1350);

            heart.setAttribute("src", "images/heart_red.png");

            const likeCount = activeMenus[index].querySelectorAll("span")[0];
            
            likeCount.innerHTML = Number(likeCount.innerHTML) + 1;
        });
    });
};
