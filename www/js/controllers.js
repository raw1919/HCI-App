angular.module('starter.controllers', [])



.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};

  $scope.login = function() {
      LoginService.loginUser($scope.data.benutzer, $scope.data.passwort).success(function(data) {

        if ($scope.data.benutzer == 'lehrer'){
          $state.go('tab.dash');
        }
        if ($scope.data.benutzer == 'schueler'){
          $state.go('tab.dashSchueler');
        }
      }).error(function(data) {
          var alertPopup = $ionicPopup.alert({
              title: 'Login failed!',
              template: 'Please check your credentials!'
          });
      });
  }
})

.controller('AbstractCtrl', function($scope) {
  $scope.dash = {};
  $scope.prof = "ng-show";
  $scope.student = "ng-show";

  $scope.hideView = function(view) {
    if (view == "prof") {
      $scope.prof = "ng-hide";
      $scope.student = "ng-show";
    }
    else if (view == "student") {
      $scope.prof = "ng-show";
      $scope.student = "ng-hide";
    }
  };
})

.controller('DashCtrl', function($scope, $stateParams) {
  $scope.dash = {};
  $scope.hideView("student");
})

.controller('DashStudCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};
  $scope.hideView("prof");
})

.controller('VokabelCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};

  $scope.smallTalkContainer = [
        {english:'How are you?',german:'Wie geht es dir?'},
        {english:'What is your name?',german:'Wie heisst du?'},
        {english:'My name is ...',german:'Ich heisse ...'},
        {english:'What time is it?',german:'Wie spät ist es?'}
  ];

  $scope.animalContainer = [
        {english:'dog',german:'Hund'},
        {english:'cat',german:'Katze'},
        {english:'mouse',german:'Maus'},
        {english:'elephant',german:'Elefant'}
  ];

  $scope.smallTalk = false;   
  $scope.animals = false;
  $scope.arrowSmallTalk = "ion-chevron-right"; 
  $scope.arrowAnimal = "ion-chevron-right"; 
  
  $scope.changeArrow = function (section, value) {
    switch (section) {
      case "smallTalk": {
        if (value) {
          $scope.arrowSmallTalk = "ion-chevron-down";}
        else {
          $scope.arrowSmallTalk = "ion-chevron-right";
        } 
        break;
      }
      case "animals": {
        if (value) {
          $scope.arrowAnimal = "ion-chevron-down";}
        else {
          $scope.arrowAnimal = "ion-chevron-right";
        } 
        break;
      }
    }

  }; 
})

.controller('DashStuddetailCtrl', function($scope ,$stateParams) {
  console.log("hola")
})

.controller('tabCtrl', function($scope) {
  $scope.dash = {};
  $scope.dash.st = true;
  $scope.dash.profTab = false;
})



.controller('ChatsCtrl', function($scope, Chats) {


  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
