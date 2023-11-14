import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.dev.scss)
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ['last 5 versions'],
			cascade: true
		}))
		.pipe(sass())                          // css без сжатия
		.pipe(app.gulp.dest(app.path.src.css)) // css без сжатия
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(app.plugins.concat('style.min.css'))
		.pipe(app.gulp.dest(app.path.src.css))
		.pipe(app.plugins.browserSync.stream())
}
