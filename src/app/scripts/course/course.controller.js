(function(){

	'use strict';

	angular.module('angular-app.course')
		.controller('courseController', courseController);

	courseController.$inject = ['courseService', '$scope', '$location'];

	function courseController(courseService, $scope, $location) {

		/* jshint validthis:true */
		var vm = this;

		vm.course;

		activate();



		///////////////////////////



		function activate() {

			// get the project and course from the url
			vm.course = {
				id: $location.search().courseId,
				projectId: $location.search().projectId
			};

			// load the project using its ID
			courseService.loadCourse(vm.course)
				.then(function(course) {

					$scope.$apply(function(){
			        	vm.course = course;
			        });

				});
		}



		/////////////////////////////



		$scope.openChapter = function(chapterId) {

			var params = {
				projectId: vm.course.projectId,
				courseId: vm.course.id,
				chapterId: chapterId
			};

			$location.path('/chapter')
				.search(params);
		};

	}

})();