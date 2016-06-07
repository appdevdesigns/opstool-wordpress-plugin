/**
 * ThemeController
 *
 * @description :: Server-side logic for managing themes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
var path = require('path');

module.exports = {


	theme: function(req, res) {
		// url:  get /opstool-wordpress-plugin/theme 
		// return the list of all currently available themes in our wordpress plugin.
		// eg: 
		// 	{
		// 		"status":"success",
		// 		"data":[
		// 			{ 
		// 				"path":"/styles/opsportal-theme-wp-1",
		// 				"name":"opsportal-theme-wp-1"
		// 			}
		// 		]
		// 	}

		var themes = [];
		fs.readdir(path.join(__dirname,'..', '..', 'assets', 'styles'), function(err, files){

			if (err) {
				res.AD.error(err);
			} else {
				files.forEach(function(f){

					var name = f.split('.')[0];
					themes.push({ path:'styles/'+name, name:name })
				})
				res.AD.success( themes );
			}
		})


	}
	
};

