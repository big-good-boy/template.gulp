import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const ttfToWoff = () => {
	return app.gulp.src(`${app.path.dev.fonts}/*.ttf`, {})
		.pipe(fonter({
			formats: ['woff']
		}))
		.pipe(app.gulp.dest(app.path.src.fonts))

		.pipe(app.gulp.src(`${app.path.dev.fonts}/*.ttf`, {}))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.src.fonts))
}

export const fontsStyle = () => {
	let fontsFile = `${app.path.devFolder}/scss/fonts.scss`;
	fs.readdir(app.path.dev.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
			if(!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, '', cb);
				let newFileOnly;
				for (var i = 0; i < fontsFiles.length; i++) {
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontFileName = fontsFiles[i].split('.')[0];
						if (newFileOnly !== fontFileName) {
							let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
							let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
							if (fontWeight.toLowerCase() === 'thin') {
								fontWeight = 100;
							} else if (fontWeight.toLowerCase() === 'extralight') {
								fontWeight = 200;
							} else if (fontWeight.toLowerCase() === 'light') {
								fontWeight = 300;
							} else if (fontWeight.toLowerCase() === 'medium') {
								fontWeight = 500;
							} else if (fontWeight.toLowerCase() === 'semibold') {
								fontWeight = 600;
							} else if (fontWeight.toLowerCase() === 'bold') {
								fontWeight = 700;
							} else if (fontWeight.toLowerCase() === 'extrabold') {
								fontWeight = 800;
							} else if (fontWeight.toLowerCase() === 'black') {
								fontWeight = 900;
							} else {
								fontWeight = 400;
							}
							fs.appendFile(fontsFile,
								`@font-face {\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc:\n\t\turl("../fonts/${fontFileName}.woff") format("woff"),\n\t\turl("../fonts/${fontFileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
							newFileOnly =  fontFileName;
						}
					}
				}
			} else {
				console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить.");
			}
		}
	})
	return app.gulp.src(`${app.path.devFolder}`);
	function cb() {}
}
