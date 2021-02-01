window.onload = () => {
	const findFromLocalStorage = index => {
		const ids = JSON.parse(localStorage.getItem("heart")) ?? {id: []};

		return ids["id"].findIndex(id => id === index);
	};
	const setState = (newState) => {
		const todos = JSON.parse(localStorage.getItem("heart")) || {id: []};
		todos["id"].push(newState["id"]);

		localStorage.setItem("heart", JSON.stringify(todos));
	};

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

		let contentIndex = null;

		[...document.querySelectorAll(".content")].forEach((element, index) => {
			if(element === target.parentNode.parentNode.parentNode) return contentIndex = index;
		});


		if(findFromLocalStorage(contentIndex) < 0)
			return setState({id: contentIndex});

		const array = JSON.parse(localStorage.getItem("heart"))["id"];
		array.splice(findFromLocalStorage(contentIndex), 1);

		localStorage.setItem("heart", JSON.stringify({id: array}));

		console.log(localStorage);
	};
};