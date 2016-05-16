(function(){

	'use strict';

	angular.module('angular-app.project')
		.controller('projectController', projectController);

	projectController.$inject = ['projectService', '$scope', '$routeParams'];

	function projectController(projectService, $scope, $routeParams) {

		/* jshint validthis:true */
		var vm = this;

		vm.project;

		activate();



		///////////////////////////



		function activate() {

			// get the project id from the url
			var projectId = $routeParams.param;

			// load the project using its ID
			projectService.loadProject(projectId)
				.then(function(project) {

					console.log("controller:activate (should be last)");

					$scope.$apply(function(){
						project.projectId = projectId;
			        	vm.project = project;
			        });
				});
		}



		/////////////////////////////



		$scope.openCourse = function(courseId) {
			console.log('open ' + vm.project.projectId);
			$location.path('/projects/' + vm.project.projectId + '/' + courseId);
		};

	}

})();