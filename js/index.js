window.onload = () => {
	document.body.onclick = ({ target }) => {
		if(!target.classList.contains("heart")) return false;

		document.body.insertAdjacentHTML(
			"beforeend",
			"<div class=heart-animation><img src='images/heart_red.png'></div>"
			);

		target.src = "images/heart_red.png";

		const heartSpan = target.parentNode.children[1];

		heartSpan.innerHTML = Number(heartSpan.innerHTML) + 1;

		setTimeout(() => {
			document.body.removeChild(document.querySelector(".heart-animation"));
		}, 1350);
	};
};