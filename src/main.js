let menu = document.querySelector('.menu');
if (menu) {
	if (document.querySelector('.menu__icon')) {
		document.querySelectorAll('.menu__icon').forEach(el => {
			el.addEventListener('click', () => {
				document.querySelector('body').classList.toggle('lock');
				menu.classList.toggle('menu--open');
			});
		});
	}
	if (menu.querySelector('a')) {
		menu.querySelectorAll('a').forEach(el => {
			el.addEventListener('click', () => {
				document.querySelector('body').classList.remove('lock');
				menu.classList.remove('menu--open');
			});
		});
	}
}