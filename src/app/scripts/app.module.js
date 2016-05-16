/*
The main top-level app module. All other stuff 
is in sub-modules under this.
*/
(function(){

	'use strict';

	/* every module (each page module plus any others) should be listed here */
	angular.module('angular-app', [
			'ngMaterial',
			'ngRoute',
			'ngAria',
			'ngAnimate',
			'ngMessages',
			'angular-app.home',
			'angular-app.project',
			'angular-app.course'
		]);

})();