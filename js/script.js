let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
				navbar.classList.toggle("active");
});

window.onscroll = () => {
				navbar.classList.remove("active");
};


const head = document.querySelector(".head")
const home = document.querySelector(".home")
const btn = document.querySelectorAll(".btn")

gsap.from(head.children , {
				duration:1,
				delay:.5,
				opacity:0,
				y:-50,
				stagger:{
								amount:.4,
				}
})


gsap.from(home.children , {
				duration:1,
				delay:.5,
				opacity:0,
				y:-50,
				stagger:{
								amount:.4,
				}
})

gsap.from(btn , {
				skewX:65,
				duration:1,
				delay:.5,
				opacity:0,
				x:-200,
				stagger:{
								amount:.4,
				}
})
