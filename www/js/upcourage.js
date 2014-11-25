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
    // Creation flow
    .state('main.create', {
        url: '/create',
        views: {
            'create': {
                templateUrl: 'templates/create.html',
                controller: 'CreateCtrl'
            }
        }
    })
    // Receive flow
    .state('main.receive', {
        url: '/receive',
        views: {
            'receive': {
                templateUrl: 'templates/receive.html',
                controller: 'ReceiveCtrl'
            }
        }
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
UP.controller('MainCtrl', function($scope, $state, $ionicModal, Moods) {
    
    $scope.hello = function () {
        alert('hello');
    };

    /**
     * Mood Logic
     */
    $scope.moods = Moods;
    $scope.currentMood = Moods[4]; //normal
    $scope.changeMood = function ( idx ) {
        $scope.currentMood = Moods[idx];
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
/**
* A service for pulling feed data
*/
UP.value('Moods', [{
    name: "Happy",
    color: "happy", // blue #0D58FF
    positive: true,
    info: {
        description: "enjoying or characterized by well-being and contentment.",
        pronounce: "hap-ee"
    }
},{
    name: "Excited",
    color: "excited", // red #E84721
    positive: true,
    info: {
        description: "to cause feelings of enthusiasm in (someone).",
        pronounce: "ik-sahy-tid"
    }
},{
    name: "Calm",
    color: "calm", // lightteal #0BF5FF
    positive: true,
    info: {
        description: "free from excitement or passion; tranquil.",
        pronounce: "kahlm"
    }
},{
    name: "Imaginitive",
    color: "imaginative", // yellow #FFF73B
    positive: true,
    info: {
        description: "a conception or mental creation, often a fanciful one.",
        pronounce: "ih-maj-uh-nuh-tiv"
    }
},{
    name: "Normal",
    color: "normal", // green #56E85A
    positive: true,
    info: {
        description: "conforming to the standard or the common type; usual.",
        pronounce: "nawr-muh-l"
    }
},{
    name: "Stressed",
    color: "stressed", // black
    positive: false,
    info: {
        description: "pressure, pull, or other force exerted on one thing by another; strain.",
        pronounce: "stres"
    }
},{
    name: "Unsettled",
    color: "unsettled", // orange #E8B426
    positive: false,
    info: {
        description: "continuously moving or changing; not situated in one place.",
        pronounce: "uhn-set-ld"
    }
},{
    name: "Nervous",
    color: "nervous", // grey #444444
    positive: false,
    info: {
        description: "highly excitable; unnaturally or acutely uneasy or apprehensive.",
        pronounce: "nur-vuh-s"
    }
},{
    name: "Fearful",
    color: "fearful", // pink #FF40A2
    positive: false,
    info: {
        description: "feeling dread, apprehension, or solicitude.",
        pronounce: "feer-fuh-l"
    }
},{
    name: "Restless",
    color: "restless", // brown #5E3615
    positive: false,
    info: {
        description: "unceasingly active; averse to quiet or inaction, as persons.",
        pronounce: "rest-lis"
    }
}]);
