/* 
a service basically returns a set of functions 
ususaly used for API calls like list, save etc
*/

(function(){

	'use strict';

	angular.module('angular-app.home')
		.factory('homeService', homeService);

	homeService.$inject = ['$http', '$log'];

	function homeService($http, $log) {
		
		const shelljs = require('shelljs');
		const fsp = require('fs-promise');

		var projectsPath = '/Users/Tanya/Gather';

		var service = {
			loadProjects: getProjects
		};

		activate();

		return service;

		///////////////////////////////

		function activate() {
			// like init for setup stuff (constructor)
		}


		/**
		 * Loads all the project folders in the projects path.
		 */
		function getProjects(){

			return fsp.readdir(projectsPath)
                .then(complete)
                .catch(error);

            function complete(dirList) {

                var projects = getProjectsFromDirectoryList(dirList);
				return projects;
            }

            function error(err) {
                $log.error(err);
            }

		}


		function getProjectsFromDirectoryList(dirList) {

			var projects = [];

			angular.forEach(dirList, function(folderName){

            	var fullDirectoryPath = projectsPath + '/' + folderName;
            	
            	if( fsp.lstatSync(fullDirectoryPath).isDirectory() ){
            		
            		var project = {
            			id: folderName,
            			title: folderName.replace('-', ' '),
            			directory: fullDirectoryPath
            		};

            		projects.push(project);
            	}
            });

            return projects;
		}

	}

})();