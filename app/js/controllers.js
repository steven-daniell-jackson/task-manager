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

TaskList.updateEntry(this.entry);
 location.reload();
  // console.log(this.entry);

}

$scope.delete = function(){
  TaskList.deleteEntry(this.entry);
   location.reload();
  console.log("delete");
}

$scope.archive = function(){

if (confirm("Archive?") == true) {
   TaskList.archiveEntry(this.entry);
   location.reload();
  console.log("archived");
}

 
}













  }]);
  
  
  