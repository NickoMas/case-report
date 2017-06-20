const wrapper = document.querySelector(".wrapper");

const face = document.querySelector(".face");
const letter = document.querySelector(".letter");
const works = document.querySelector(".works");
const contact = document.querySelector(".contact");

const unfold = function (e) {
console.log(e);

	const element = e.target;
	const parent = e.target.children;

	Array.from(parent).some(item => { 
		if(item.classList.contains('active-section')){
			return item.classList.toggle('active-section')
		}
	})

	if (element.parentNode === wrapper) {
		element.classList.toggle('active-section')
	}
	//wrapper.style.width = "40vw";
	// [face, letter, works, contact].map(item => {
	// 	item.style.height = "200px";
	// })
	//wrapper.style.height = "500px";
}

wrapper.addEventListener('click', unfold);