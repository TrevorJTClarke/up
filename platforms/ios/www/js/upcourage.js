// UpCourage - Encourage everyone :)
var UP = angular.module('upcourage', ['ionic', 'ionic.contrib.ui.cards']);
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
            // StatusBar.styleDefault();
            StatusBar.hide();
        }
    });
})
.config(function($stateProvider, $urlRouterProvider) {

    // more here: https://github.com/angular-ui/ui-router
    $stateProvider

    // Shows the home startup page post tour
    .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'MainCtrl'
    })

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
    // $urlRouterProvider.otherwise('/welcome');

});


UP.controller('CreateCtrl', function($scope) {
    
});
UP.controller('FriendsCtrl', function($scope, Demo) {
    $scope.friends = Demo.friends;
});
UP.controller('GlobalCtrl', function($scope, Demo) {
    $scope.global = Demo.global;
    
});
UP.controller('LoginCtrl', function($scope) {
    
});
UP.controller('MainCtrl', function($scope, $state, $ionicModal, Moods, $ionicSwipeCardDelegate, Demo) {
    
    $scope.hello = function () {
        alert('hello');
    };

    /**
     * Mood Logic
     */
    $scope.showMoodPicker = false;
    $scope.moods = Moods;
    $scope.currentMood = Moods[4]; //normal
    $scope.changeMood = function ( idx ) {
        $scope.currentMood = Moods[idx];
    };

    $scope.toggleMoodPicker = function () {
        $scope.showMoodPicker = !$scope.showMoodPicker;
    };
    $scope.hideMoodPicker = function () {
        $scope.showMoodPicker = false;
    };

    var cardTypes = Demo.global;

    $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

    $scope.cardSwiped = function(index) {
        $scope.addCard();
    };

    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
    };

    $scope.addCard = function() {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    };
    $scope.addCard();

});


UP.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  };
})


.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate, Demo) {
  // var cardTypes = [{
  //   image: 'img/pic.png'
  // }, {
  //   image: 'img/pic.png'
  // }, {
  //   image: 'img/pic2.png'
  // }, {
  //   image: 'img/pic3.png'
  // }, {
  //   image: 'img/pic4.png'
  // }];
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };
});
UP.controller('MoodCtrl', function($scope) {
    
});
UP.controller('PostboxCtrl', function($scope, Demo) {
    $scope.postbox = Demo.postbox;
});
UP.controller('ProfileCtrl', function($scope) {
    
});
UP.controller('ReceiveCtrl', function($scope) {
    
});
UP.controller('SignupCtrl', function($scope) {
    
});

/**
* A service for pulling demo data
*/
UP.value('Demo', {
    global: [{
        poster: "img/demo/1.jpg"
    },{
        poster: "img/demo/2.jpg"
    },{
        poster: "img/demo/3.jpg"
    },{
        poster: "img/demo/4.jpg"
    },{
        poster: "img/demo/5.jpg"
    },{
        poster: "img/demo/6.jpg"
    },{
        poster: "img/demo/7.jpg"
    },{
        poster: "img/demo/8.jpg"
    },{
        poster: "img/demo/9.jpg"
    },{
        poster: "img/demo/10.jpg"
    }],
    friends: [{
        poster: "img/demo/2.jpg"
    },{
        poster: "img/demo/3.jpg"
    },{
        poster: "img/demo/4.jpg"
    },{
        poster: "img/demo/5.jpg"
    },{
        poster: "img/demo/6.jpg"
    },{
        poster: "img/demo/7.jpg"
    },{
        poster: "img/demo/8.jpg"
    },{
        poster: "img/demo/9.jpg"
    },{
        poster: "img/demo/10.jpg"
    }],
    postbox: [{
        poster: "img/demo/2.jpg"
    },{
        poster: "img/demo/3.jpg"
    },{
        poster: "img/demo/4.jpg"
    },{
        poster: "img/demo/5.jpg"
    }]
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
