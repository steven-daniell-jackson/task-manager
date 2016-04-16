angular.module('app.factory', [])

.factory('TaskList', function($http){

	var codeFac = {};

// Create post factory to post data to api
	codeFac.updateEntry = function(updateEntry){

		return	$http.post('http://localhost:3000/api/task-manager/update', updateEntry);
	}

// Create post factory to post data to api
	codeFac.archiveEntry = function(archiveEntry){
		
		return	$http.post('http://localhost:3000/api/task-manager/archive', archiveEntry);
	}

// Create get factory to retrieve data from api
	codeFac.all = function(){
		return	$http.get('http://localhost:3000/api/task-manager');
	}

	return	codeFac;

})

