/* 
a service basically returns a set of functions 
ususaly used for API calls like list, save etc
*/

(function(){

	'use strict';

	angular.module('angular-app.project')
		.factory('projectService', projectService);

	projectService.$inject = ['$http', '$log'];

	function projectService($http, $log) {
		
		const fsp = require('fs-promise');
		const yaml = require('node-yaml');

		// where 0=project
		var projectLocation = '/Users/Tanya/Gather/{0}';

		var service = {
			loadProject: loadProject
		};

		activate();

		return service;

		///////////////////////////////

		function activate() {
			// like init for setup stuff (constructor)
		}


		/*
		Loads the project info from its index page,
		which is a Jekyll doc with YAML front matter.
		*/
		function loadProject(project){

			var projectDirectory = projectLocation.format(project.id);
			var projectDataFile = projectDirectory + '/index.html';

			// load the file
			return fsp.readFile(projectDataFile, 'utf8')
				.then(createProjectFromFile)
				.then(parseFrontMatter)
				.catch(error);


			// split it into front matter and content
			function createProjectFromFile(fileString){

				console.log('service: createProjectFromFile (1st)');

				var fileParts = fileString.split('---\n');

				// fileParts[0] is an empty string
				project.frontMatter = fileParts[1];
				project.content = fileParts[2];

				return project;
			}


			// parse the front matter into an object
			function parseFrontMatter(project){

				console.log('service: parseFrontMatter (2nd)');

				project.frontMatter = yaml.parse(project.frontMatter);

				return project;
			}


			// catch any error
			function error(err) {
                $log.error(err);
            }

		}


	}

})();