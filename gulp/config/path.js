import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); // Получаем имя папки проекта

const devFolder = './dev';
const srcFolder = './src';

export const path = {
	// здесь ведётся разработка
	dev: {
		html: `${devFolder}/html/*.html`,
		scss: `${devFolder}/scss/style.scss`,
		js: `${devFolder}/js/main.js`,
		images: `${devFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${devFolder}/img/**/*.svg`,
		fonts: `${devFolder}/fonts`,
	},
	// сюда компилируется результат для liveServer'а
	src: {
		html: `${srcFolder}/`,
		css: `${srcFolder}/`,
		js: `${srcFolder}/`,
		images: `${srcFolder}/img/`,
		fonts: `${srcFolder}/fonts`,
	},
	watch: {
		html: `${devFolder}/html/**/*.html`,
		scss: `${devFolder}/scss/**/*.scss`,
		js: `${devFolder}/js/main.js`,
		images: `${devFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`
	},
	clean: srcFolder,
	devFolder: devFolder // для fonts.scss
}
