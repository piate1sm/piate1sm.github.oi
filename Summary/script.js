const hamburger = document.getElementById('header-nav-hamburger');
const navMenu = document.getElementById('header-nav-menu');

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
	const isClickInsideHamburger = hamburger.contains(event.target);
	const isClickInsideMenu = navMenu.contains(event.target);

	if (!isClickInsideHamburger && !isClickInsideMenu && navMenu.classList.contains('active')) {
		navMenu.classList.remove('active'); // Close menu if the clicked element is outside
	}
});
