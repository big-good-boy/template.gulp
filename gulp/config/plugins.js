import browserSync from 'browser-sync';
import concat from 'gulp-concat'; // конкатенация и переименование
import newer from 'gulp-newer'; // проверка файлов на изменение

export const plugins = {
	browserSync: browserSync,
	concat: concat,
	newer: newer
}
