const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const builtins = require('rollup-plugin-node-builtins');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');


gulp.task('js', () => {
	rollup.rollup({
		input: './src/js/main.jsx',
		plugins: [
			builtins(),
			resolve({
				extensions: ['.js', '.jsx']
			}),
			replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
			commonjs(),
			babel({
				exclude: 'node_modules/**',
				babelrc: false,
				presets: [
					['env', { 'modules': false }]
				],
				plugins: [
					'external-helpers',
					'transform-react-jsx',
					'transform-object-rest-spread'
				]
			})
		]
	}).then(bundle => {
		return bundle.write({
			file: './build/scripts/main.js',
			format: 'iife',
			name: 'main',
			sourcemap: true
		});
	});
});

gulp.task('html', ['js', 'img', 'css'], () => {
	gulp.src('./src/html/*.html')
		.pipe(gulp.dest('./build'));
});

gulp.task('img', () => {
	gulp.src('./src/img/**/*')
		.pipe(gulp.dest('./build/img'));
});

gulp.task('css', () => (
	gulp.src('./src/css/main.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('./build/css'))
));

gulp.task('compress', () => {
	gulp.src('./build/scripts/main.js')
		.pipe(minify())
		.pipe(gulp.dest('./build/scripts'));
});
