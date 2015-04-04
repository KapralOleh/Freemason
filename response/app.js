var myApp = angular.module("myApp", ["firebase"]);

      myApp.controller("MyController", ["$scope", "$firebaseArray",
        function($scope, $firebaseArray) {
          //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://fiery-fire-9202.firebaseio.com/");

          // GET MESSAGES AS AN ARRAY
          $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

            
              var name = $scope.name || "anonymous";

              //ADD TO FIREBASE
              $scope.messages.$add({
                from: name,
                body: $scope.msg,
                createdOn: Date.now()
              });

              //RESET MESSAGE
              $scope.msg = "";
            
          }
        }
      ]);