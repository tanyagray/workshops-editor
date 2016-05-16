/*
The main top-level app module. All other stuff 
is in sub-modules under this.
*/
(function(){

	'use strict';

	angular.module('ngMaterial', [
			'ngRoute',
			'ngAria',
			'ngAnimate',
			'ngMessages'
		]);

	/* every module (each page module plus any others) should be listed here */
	angular.module('angular-app', [
			'ngMaterial',
			'angular-app.home',
			'angular-app.project'
		]);

})();