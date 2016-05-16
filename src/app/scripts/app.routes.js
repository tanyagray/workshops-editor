/*
Define all view routes here.
*/
(function(){

	'use strict';

	angular.module('angular-app')
		.config(config);

	config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/src/app/scripts/home/home.tpl.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .when('/project', {
                templateUrl: '/src/app/scripts/project/project.tpl.html',
                controller: 'projectController',
                controllerAs: 'vm'
            })
            .when('/course', {
                templateUrl: '/src/app/scripts/course/course.tpl.html',
                controller: 'courseController',
                controllerAs: 'vm'
            })
            .when('/chapter', {
                templateUrl: '/src/app/scripts/chapter/chapter.tpl.html',
                controller: 'chapterController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });

        
    }

})();