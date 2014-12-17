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