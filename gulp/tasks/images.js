import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
	return app.gulp.src(app.path.dev.images)
	.pipe(app.plugins.newer(app.path.src.images))
	.pipe(webp())
	.pipe(app.gulp.dest(app.path.src.images))

	.pipe(app.gulp.src(app.path.dev.images))
	.pipe(app.plugins.newer(app.path.src.images))
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{ removeViewBox: false }],
		interlaced: true,
		optimizationLevel: 3
	}))
	.pipe(app.gulp.dest(app.path.src.images))

	.pipe(app.gulp.src(app.path.dev.svg))
	.pipe(app.gulp.dest(app.path.src.images))

	.pipe(app.plugins.browserSync.stream())
}
