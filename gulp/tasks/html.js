import fileInclude from 'gulp-file-include';
import replace from 'gulp-replace';

export const html = () => {
	return app.gulp.src(app.path.dev.html)
		.pipe(fileInclude())
		.pipe(replace('%NO_CACHE%', Date.now()))
		.pipe(app.gulp.dest(app.path.src.html))
		.pipe(app.plugins.browserSync.stream())
}
