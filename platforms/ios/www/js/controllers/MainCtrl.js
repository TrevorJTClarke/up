UP.controller('MainCtrl', function($scope, $state, $ionicModal, Moods) {
    
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

});