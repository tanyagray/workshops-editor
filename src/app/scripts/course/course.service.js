/* 
a service basically returns a set of functions 
ususaly used for API calls like list, save etc
*/

(function(){

	'use strict';

	angular.module('angular-app.course')
		.factory('courseService', courseService);

	courseService.$inject = ['$http', '$log', '$location'];

	function courseService($http, $log, $location) {
		
		const fsp = require('fs-promise');
		const yaml = require('node-yaml');

		// where 0=project and 1=course
		const courseLocation = '/Users/Tanya/Gather/{0}/_courses/{1}';

		var service = {
			loadCourse: loadCourse
		};

		activate();

		return service;



		///////////////////////////////



		function activate() { }


		/*
		Loads the project info from its index page,
		which is a Jekyll doc with YAML front matter.
		*/
		function loadCourse(course){

			var courseDirectory = courseLocation.format(course.projectId, course.id);
			var courseDataFile = courseDirectory + '/index.html';

			// load the file
			return fsp.readFile(courseDataFile, 'utf8')
				.then(createCourseFromFile)
				.then(parseFrontMatter)
				.catch(error);


			// split it into front matter and content
			function createCourseFromFile(fileString){

				var fileParts = fileString.split('---\n');

				// fileParts[0] is an empty string
				course.frontMatter = fileParts[1];
				course.content = fileParts[2];

				return course;
			}


			// parse the front matter into an object
			function parseFrontMatter(course){
				course.frontMatter = yaml.parse(course.frontMatter);
				return course;
			}


			// catch any error
			function error(err) {
                $log.error(err);
            }

		}


	}

})();