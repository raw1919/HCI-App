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




.controller('DashCtrl', function($scope) {
      $scope.dash = {};
      // $scope.dash.profTab = false;
      // $scope.dash.studTab = false;  
      console.log("dash.studTab")
})


.controller('DashStudCtrl', function($scope) {
      $scope.dash = {};
      // $scope.dash.studTab = true;
      // $scope.dash.profTab = true;
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
