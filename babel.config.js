module.exports = {
	'presets': [
		[
			'@babel/preset-env',
			{
				'modules': false,
				'targets': {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
				},
        "corejs": "2", // 指定编译的corejs版本，否则构建线上环境时会报警告
			}
		]
	],
	'plugins': [
		'@babel/plugin-transform-runtime'
	]
}
