import gulp from 'gulp'; // Основной модуль

import { path } from './gulp/config/path.js'; // Импорт путей
import { plugins } from './gulp/config/plugins.js'; // Импорт общих плагинов

// передаём значения глобальной переменной
global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins
}

// импорт задач
import { clearing } from './gulp/tasks/clearing.js';
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';

// сценарии выполнения задач
const dev = [
	html,
	scss,
	js,
	images
];

// наблюдение за файлами
function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// сценарий по умолчанию
gulp.task('default', gulp.series(clearing, ttfToWoff, fontsStyle, dev, gulp.parallel(watcher, server)));
