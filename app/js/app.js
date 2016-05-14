
angular.module('kaApp', ['ui.router'])
.config(['$injector', '$logProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', 
	function($injector, $logProvider, $stateProvider, $urlRouterProvider, $locationProvider){
    var $log = angular.injector(['ng']).get('$log');
    $log.debug("Bay Area Info App Admin View Entered");
    
    $stateProvider
	    .state('root', {
	    url: '/',
	    views:{
	    	'header@': {
	    		templateUrl: 'js/templates/header.tpl.html'
	    	}
	    }
	}).state('404Page', {
            parent: 'root',
            url: '/404',
            templateUrl: 'js/common/404Page.tpl.html'
        })

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
}])