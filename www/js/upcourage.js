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


    // TODO: SCRAP THESE ROUTES
    .state('create', {
        url: '/create',
        views: {
            'create': {
                templateUrl: 'templates/create.html',
                controller: 'CreateCtrl'
            }
        }
    })
    .state('receive', {
        url: '/receive',
        views: {
            'receive': {
                templateUrl: 'templates/receive.html',
                controller: 'ReceiveCtrl'
            }
        }
    })
    .state('mood', {
        url: '/mood',
        views: {
            'mood': {
                templateUrl: 'templates/mood.html',
                controller: 'MoodCtrl'
            }
        }
    })

    // // shows the creation modal screens
    // .state('create', {
    //     url: "/create",
    //     abstract: true,
    //     templateUrl: "templates/create.html"
    // })
    // .state('create.customize', {
    //     url: '/customize',
    //     views: {
    //         'create-customize': {
    //             templateUrl: 'create-customize.html',
    //             controller: 'CreateCtrl'
    //         }
    //     }
    // })

    // // shows the Receive modal screens
    // .state('receive', {
    //     url: "/receive",
    //     abstract: true,
    //     templateUrl: "templates/receive.html"
    // });
    // .state('receive.schedule', {
    //     url: '/schedule',
    //     views: {
    //         'receive-schedule': {
    //             templateUrl: 'receive-schedule.html',
    //             controller: 'ReceiveCtrl'
    //         }
    //     }
    // });
    ;

    $urlRouterProvider.otherwise('/global');

});


UP.controller('CreateCtrl', function($scope) {
    
});
UP.controller('FriendsFeedCtrl', function($scope) {
    
});
UP.controller('GlobalCtrl', function($scope) {
    
});
UP.controller('MainCtrl', function($scope) {
    
});
UP.controller('MoodCtrl', function($scope) {
    
});
UP.controller('ReceiveCtrl', function($scope) {
    
});

/**
* A service for pulling feed data
*/
UP.factory('Feeds', function() {
    // fake testing data
    var feeds = [
        { id: 0, name: 'Scruff McGruff' },
        { id: 1, name: 'G.I. Joe' },
        { id: 2, name: 'Miss Frizzle' },
        { id: 3, name: 'Ash Ketchum' }
    ];

    return {
        all: function() {
            return feeds;
        }
    };
});
