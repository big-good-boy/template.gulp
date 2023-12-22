import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import favicons from 'gulp-favicons';
import filter from 'gulp-filter';

export const images = () => {
	return app.gulp.src([
		`${app.path.dev.images}/**/*.{jpg,jpeg,png,gif,webp}`,
		`!${app.path.dev.images}/favicon/*.*`
	])
	.pipe(app.plugins.newer(app.path.src.images))
	.pipe(webp())
	.pipe(app.gulp.dest(app.path.src.images))

	.pipe(app.gulp.src([
		`${app.path.dev.images}/*.{jpg,jpeg,png,gif,webp}`,
		`!${app.path.dev.images}/favicon/*.*`
	]))
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

	.pipe(app.gulp.src(`${app.path.dev.images}/favicon/favicon.svg`))
	.pipe(favicons({
		icons: {
			favicons: true,
			appleIcon: ['apple-touch-icon.png'],
			android: false,
			appleStartup: false,
			windows: false,
			yandex: false,
			coast: false,
		}
	}))
	.pipe(app.gulp.dest(`${app.path.src.images}/favicon`))
	.pipe(filter('favicon.ico'))
	.pipe(app.gulp.dest(app.path.src.html))

	.pipe(app.plugins.browserSync.stream())
}
