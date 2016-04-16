angular.module('app.controllers',['app.factory'])

// Main Controller
.controller('mainCtrl', ['$scope', 'TaskList',  function($scope, TaskList){

  $scope.archiveTog = false;


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


// Update entry function
   $scope.update = function(e){

    TaskList.updateEntry(this.entry);
    location.reload();
}


// Delete entry function
$scope.delete = function(){
  if (confirm("Delete?") == true) {
  TaskList.deleteEntry(this.entry);
  location.reload();
  console.log("delete");
  }
}

// Archive entry function
$scope.archive = function(){

  if (confirm("Archive?") == true) {
   TaskList.archiveEntry(this.entry);
   location.reload();
   console.log("archived");
 }
 
}

// New entry function
$scope.new = function(){
var newEntry = prompt("New task");

if (newEntry != "" && newEntry != null) {
  TaskList.saveEntry(newEntry);
    location.reload();
} else {}
   

 }


// Toggle Archived tasks
 $scope.toggleArchive = function(e){

  if($scope.archiveTog == "true") {
    $scope.archiveTog = "false";
  } else {
    $scope.archiveTog = "true";
  }



}














}]);


