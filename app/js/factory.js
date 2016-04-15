angular.module('app.factory', [])

.factory('TaskList', function($http){

	var codeFac = {};

// Create post factory to post data to api
	codeFac.updateEntry = function(updateEntry){
		
		return	$http.post('http://boiling-mesa-13925.herokuapp.com//api/task-manager/update', updateEntry);
	}

// Create get factory to retrieve data from api
	codeFac.all = function(){
		return	$http.get('http://boiling-mesa-13925.herokuapp.com//api/task-manager');
	}

	return	codeFac;

})

