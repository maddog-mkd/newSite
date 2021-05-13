const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
	navbar.classList.toggle('change');
});





const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top

		if(boxTop < triggerBottom) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
}