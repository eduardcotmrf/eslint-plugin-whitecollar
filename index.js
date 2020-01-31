module.exports = {
	configs: {
	  recommended: {
		plugins: ['whitecollar'],
		rules: {
		  "no-get-balcon": "error"
		}
	  }
	},
	rules: {
	  'no-get-balcon': require('./rules/no-get-balcon')
	}
  };