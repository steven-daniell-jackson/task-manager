angular.module('app.factory', [])

.factory('TaskList', function($http){

	var codeFac = {};

// Create post factory to post data to api
	codeFac.create = function(codeData){

		// return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/new-code',codeData)
	}


// Create get factory to retrieve data from api
	codeFac.all = function(){
		return	$http.get('http://localhost:3000/api/task-manager');
	}

	return	codeFac;

})

