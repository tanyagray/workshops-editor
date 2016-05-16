(function(){

	'use strict';

	angular.module('angular-app.home')
		.controller('homeController', homeController);

	homeController.$inject = ['homeService', '$scope', '$location'];

	function homeController(homeService, $scope, $location) {

		/* jshint validthis:true */
		var vm = this;

		vm.projects = [];

		activate();

		///////////////////////////

		function activate() {

			// user's local jekyll version
			homeService.loadProjects()
				.then(function(data) {
					vm.projects = data;
					console.log(vm.projects);
				});
		}


		/////////////////////////////

		$scope.openProject = function(projectId) {
			var params = { 
				projectId: projectId 
			};

			$location.path('/project')
				.search(params);
		};

	}

})();