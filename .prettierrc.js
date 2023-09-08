module.exports = {
	tabWidth: 2,
	jsxSingleQuote: true,
	jsxBracketSameLine: true,
	printWidth: 120,
	singleQuote: true,
	endOfLine: 'auto',
	semi: false,
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 200,
			},
		},
	],
	arrowParens: 'always',
}
