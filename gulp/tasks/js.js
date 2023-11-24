import minify from 'gulp-minify';

export const js = () => {
	return app.gulp.src([
		app.path.dev.js
	])
	.pipe(app.plugins.concat('main.js'))
	.pipe(minify({
		ext:{
			src:'.js',
			min:'.min.js'
		}
	}))
	.pipe(app.gulp.dest(app.path.src.js))
	.pipe(app.plugins.browserSync.stream())
}
