// Appel des modules
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

// Tâche "css" = Sass (source -> destination)
function css() {
	return gulp
		.src(['./assets/scss/style.scss'])
		.pipe(sass({outputStyle: 'compressed', errLogToConsole: true}))
		.pipe(gulp.dest('./assets/css'));
}

function WatchFiles() {
	gulp.watch(
		[
			'./assets/scss/**/*.css',
			'./assets/scss/**/*.scss'
		],
		css
	);
}

module.exports = {
	default : gulp.series(WatchFiles),
	css: gulp.series(css)
}
