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