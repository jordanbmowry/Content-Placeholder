const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
	header.innerHTML = `<img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />`;
	title.innerHTML = 'Lorem ipsum dolor sit amet';
	excerpt.innerHTML =
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
	profile_img.innerHTML =
		'<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
	name.innerHTML = 'John Doe';
	date.innerHTML = 'May 20, 2021';

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
