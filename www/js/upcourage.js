// UpCourage - Encourage everyone :)
var UP = angular.module('upcourage', ['ionic']);
/**
 * All the init actions and routes
 */
UP.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
.config(function($stateProvider, $urlRouterProvider) {

    // Learn more here: https://github.com/angular-ui/ui-router
    $stateProvider

    // Shows the home startup page post tour
    .state('home', {
        url: '/home',
        views: {
            'home': {
                templateUrl: 'templates/home.html',
                controller: 'MainCtrl'
            }
        }
    })

    // shows the global 2 column feed
    .state('global', {
        url: '/global',
        views: {
            'global': {
                templateUrl: 'templates/global.html',
                controller: 'GlobalCtrl'
            }
        }
    })

    // shows the global 2 column feed
    .state('friends-feed', {
        url: '/friends',
        views: {
            'friends': {
                templateUrl: 'templates/friends-feed.html',
                controller: 'FriendsFeedCtrl'
            }
        }
    })

    // shows the creation modal screens
    .state('create', {
        url: "/create",
        abstract: true,
        templateUrl: "templates/create.html"
    })
    .state('create.customize', {
        url: '/customize',
        views: {
            'create-customize': {
                templateUrl: 'create-customize.html',
                controller: 'CreateCtrl'
            }
        }
    })

    // shows the Receive modal screens
    .state('receive', {
        url: "/receive",
        abstract: true,
        templateUrl: "templates/receive.html"
    });
    // .state('receive.schedule', {
    //     url: '/schedule',
    //     views: {
    //         'receive-schedule': {
    //             templateUrl: 'receive-schedule.html',
    //             controller: 'ReceiveCtrl'
    //         }
    //     }
    // });

    $urlRouterProvider.otherwise('/global');

});


UP.controller('FriendsFeedCtrl', function($scope) {
    
});
UP.controller('GlobalCtrl', function($scope) {
    
});
UP.controller('MainCtrl', function($scope) {
    
});

