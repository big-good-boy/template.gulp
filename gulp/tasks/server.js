export const server = () => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.src.html}`
		},
		notify: false
	})
}
