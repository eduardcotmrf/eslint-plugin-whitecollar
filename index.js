module.exports = {
	configs: {
	  recommended: {
		plugins: ['whitecollar'],
		rules: {
		  "whitecollar/no-get-balcon": "error"
		}
	  }
	},
	rules: {
	  'no-get-balcon': require('./rules/no-get-balcon')
	}
  };