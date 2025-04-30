const hamburger = document.getElementById('header-nav-hamburger');
const navMenu = document.getElementById('header-nav-menu');
let currentImageIndex = 0;
const images = [
	'./images/draft_1.png',
	'./images/draft_2.png',
	'./images/home_page.png',
	'./images/wage_gap.png',
	'./images/income.png',
	'./images/style_guide.png',
	
];

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

function openModal(index) {
	currentImageIndex = index - 1; // Reset to first image
	showImage(currentImageIndex);
	document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
	document.getElementById('myModal').style.display = 'none';
}

function showImage(index) {
	const modalImage = document.getElementById('modal-image');
	modalImage.src = images[index];
}

function prevImage() {
	if (currentImageIndex > 0) {
		currentImageIndex--;
		showImage(currentImageIndex);
	} else if (currentImageIndex === 0) {
		currentImageIndex = images.length - 1;
		showImage(currentImageIndex);
	}
}

function nextImage() {
	if (currentImageIndex < images.length - 1) {
		currentImageIndex++;
		showImage(currentImageIndex);
	} else if (currentImageIndex === images.length - 1) {
		currentImageIndex = 0;
		showImage(currentImageIndex);
	}
}
