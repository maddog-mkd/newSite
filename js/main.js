// MENU
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
	navbar.classList.toggle('change');
});





// MAIN BOXES
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





// TESTIMONIALS
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImg = document.querySelector('.user-img');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
	{
		name: 'Zaklina Trajanova',
		position: 'rabotnik',
		photo: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
		text: ' of libraries and tools only to come out of it not knowing how to build and launch a real-world React application. You get things configured, but you’re not sure how the libraries fit together (or if you’re even using It’s easy to go down the rabbit hole',
	},
	{
		name: 'Mila Vanila',
		position: 'direktor',
		photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
		text: '(or if you’re even using the right one)It’s easy to go down the rabbit hole of libraries and tools only to come out of it not knowing how to build and launch a real-world React application. You get things configured, but you’re not sure how the libraries fit together',
	},
	{
		name: 'Borkica Gjuzelovska',
		position: 'Marketing',
		photo: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
		text: 'It’s easy to go down the rabbit hole of libraries and tools only to come out of it not knowing how to build and launch a real-world React application. You get things configured, but you’re not sure how the libraries fit together (or if you’re even using the right one)',
	},
]

let idx = 0

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx]

	testimonial.innerHTML = text
	userImg.src = photo
	username.innerHTML = name 
	role.innerHTML = position

	idx++

	if(inx > testimonials.lenght - 1) {
		idx = 0
	}
}

setInterval(updateTestimonial, 10000)