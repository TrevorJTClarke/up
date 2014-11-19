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

    // more here: https://github.com/angular-ui/ui-router
    $stateProvider

    // Shows the home startup page post tour
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'MainCtrl'
    })

    .state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
    })

    .state('postbox', {
        url: '/postbox',
        templateUrl: 'templates/postbox.html',
        controller: 'PostboxCtrl'
    })

    .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: "templates/main.html"
    })
    // shows the global 2 column feed
    .state('main.global', {
        url: '/global',
        views: {
            'global': {
                templateUrl: 'templates/global.html',
                controller: 'GlobalCtrl'
            }
        }
    })
    // shows the friends 2 column feed
    .state('main.friends', {
        url: '/friends',
        views: {
            'friends': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            }
        }
    })


    // TODO: SCRAP THESE ROUTES
    .state('create', {
        url: '/create',
        templateUrl: 'templates/create.html'
        // controller: 'CreateCtrl'
    })
    .state('receive', {
        url: '/receive',
        templateUrl: 'templates/receive.html',
        controller: 'ReceiveCtrl'
    })
    .state('mood', {
        url: '/mood',
        templateUrl: 'templates/mood.html',
        controller: 'MoodCtrl'
    })

    
    // Standard routes
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
    })


    ;

    // $urlRouterProvider.otherwise('/main/global');
    $urlRouterProvider.otherwise('/home');

});


UP.controller('CreateCtrl', function($scope) {
    
});
UP.controller('FriendsCtrl', function($scope) {
    
});
UP.controller('GlobalCtrl', function($scope) {
    
});
UP.controller('LoginCtrl', function($scope) {
    
});
UP.controller('MainCtrl', function($scope) {
    
    $scope.hello = function () {
        alert('hello');
    };
});
UP.controller('MoodCtrl', function($scope) {
    
});
UP.controller('PostboxCtrl', function($scope) {
    
});
UP.controller('ProfileCtrl', function($scope) {
    
});
UP.controller('ReceiveCtrl', function($scope) {
    
});
UP.controller('SignupCtrl', function($scope) {
    
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
