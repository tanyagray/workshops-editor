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
            .when('/projects/:projectId', {
                templateUrl: '/src/app/scripts/project/project.tpl.html',
                controller: 'projectController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });

        
    }

})();