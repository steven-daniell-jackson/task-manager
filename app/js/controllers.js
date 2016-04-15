angular.module('app.controllers',['app.factory'])

// Main Controller
  .controller('mainCtrl', ['$scope', 'TaskList',  function($scope, TaskList){

   // Access factory and assign the returned data
TaskList.all()
.success(function(data) {
    
            $scope.entries = data;
            // $scope.preloader = false;
           $scope.message = data.message;
           console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

$scope.update = function(e){

  console.log(this.entry);
}


  }]);
  
  
  