/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-scss-to-css-variable',
    /*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */

    
    Declaration (decl, postcss) {
		console.log(decl);
	}
    
    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  }
}

module.exports.postcss = true
