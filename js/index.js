window.onload = () => {
	const hearts = document.querySelectorAll(".heart");
	JSON.parse(localStorage.getItem("heart"))["id"].forEach(id => {
		const heart = hearts[id];

		heart.src = "images/heart_red.png";
		heart.parentNode.children[1].innerHTML = Number(heart.parentNode.children[1].innerHTML) + 1;
	});

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

		const heartSpan = target.parentNode.children[1];

		let contentIndex = null;

		[...document.querySelectorAll(".content")].forEach((element, index) => {
			if(element === target.parentNode.parentNode.parentNode) return contentIndex = index;
		});

		if(findFromLocalStorage(contentIndex) < 0) {
			document.body.insertAdjacentHTML(
				"beforeend",
				"<div class=heart-animation><img src='images/heart_red.png'></div>"
				);

			target.src = "images/heart_red.png";
			heartSpan.innerHTML = Number(heartSpan.innerHTML) + 1;

			setTimeout(() => {
				document.body.removeChild(document.querySelector(".heart-animation"));
			}, 1350);

			return setState({id: contentIndex});
		};

		const array = JSON.parse(localStorage.getItem("heart"))["id"];
		array.splice(findFromLocalStorage(contentIndex), 1);

		localStorage.setItem("heart", JSON.stringify({id: array}));

		heartSpan.innerHTML = Number(heartSpan.innerHTML) - 1;
		target.src = "images/heart.png";
	};

	document.body.ondblclick = ({ target }) => {
		if(!target.classList.contains("content-picture")) return false;

		const content = target?.parentNode?.parentNode;
		const heartImg = content.children[1].children[1].children[0];
		const heartSpan = content.children[1].children[1].children[1];

		let contentIndex = null;

		[...document.querySelectorAll(".content")].forEach((element, index) => {
			if(element === content) return contentIndex = index;
		});

		document.body.insertAdjacentHTML(
			"beforeend",
			"<div class=heart-animation><img src='images/heart_red.png'></div>"
			);
		
		setTimeout(() => {
			document.body.removeChild(document.querySelector(".heart-animation"));
		}, 1350);


		if(findFromLocalStorage(contentIndex) < 0) {			
			heartImg.src = "images/heart_red.png";
			heartSpan.innerHTML = Number(heartSpan.innerHTML) + 1;

			return setState({id: contentIndex});
		};
	};
};