// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// random trypophobia - changes everytime you load it!
// by Ritchse
// instagram.com/ritchse
function r(min = 0, max = 1) {
	return Math.random() * (max - min) + min;
}
solid(1, 1, 1)
	.diff(shape([5.166, 4, 2.92, 24].smooth()
			.fast(0.27), r(0.6, 0.93), .09)
		.repeat(18.818, 10))
	.modulateScale(osc(8)
		.rotate(r(-.5, .5)), .52)
	.add(src(o0)
		.scale(0.965)
		.rotate(0.013 * Math.round(r(-2, 1)))
		.color(r(), r(), r())
		.modulateRotate(o0, r(0, 0.451))
		.brightness(0.216), .7)
	.out();
