import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import mediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.dev.scss)
		.pipe(sass())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ['last 5 versions'],
			cascade: true
		}))
		.pipe(mediaQueries())
		.pipe(app.gulp.dest(app.path.src.css))

		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(app.plugins.concat('style.min.css'))
		.pipe(app.gulp.dest(app.path.src.css))

		.pipe(app.plugins.browserSync.stream())
}
