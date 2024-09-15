const rangeSlider = document.getElementById('slider')
const inputMin = document.getElementById('input-min')
const inputMax = document.getElementById('input-max')
const inputs=[inputMin,inputMax]

noUiSlider.create(rangeSlider, {
	start: [1850, 27330],
	connect: true,
	step: 100,
	range: {
		min: 1850,
		max: 27330,
	},
})


rangeSlider.noUiSlider.on('update', function(values, handles){
    inputs[handles].value = Math.round(values[handles])
})






