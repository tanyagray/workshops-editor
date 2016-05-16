(function(){

	'use strict';

	angular.module('angular-app.project')
		.controller('projectController', projectController);

	projectController.$inject = ['projectService', '$scope', '$location'];

	function projectController(projectService, $scope, $location) {

		/* jshint validthis:true */
		var vm = this;

		vm.project;

		activate();



		///////////////////////////



		function activate() {

			// get the project id from the url
			vm.project = {
				id: $location.search().projectId
			};

			// load the project using its known data
			projectService.loadProject(vm.project)
				.then(function(project) {

					$scope.$apply(function(){
			        	vm.project = project;
			        });
			        
				});
		}



		/////////////////////////////



		$scope.openCourse = function(courseId) {
			
			var params = {
				projectId: vm.project.id,
				courseId: courseId
			};

			$location.path('/course')
				.search(params);
		};

	}

})();