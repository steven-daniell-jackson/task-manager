angular.module('app.factory', [])

.factory('TaskList', function($http){

	var codeFac = {};

// Create post factory to post data to api
codeFac.updateEntry = function(updateEntry){
	console.log(updateEntry);
	return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/task-manager/update', updateEntry);
}

// Create post factory to post data to api
codeFac.archiveEntry = function(archiveEntry){

	return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/task-manager/archive', archiveEntry);
}
	// Create post factory to post data to api
	codeFac.deleteEntry = function(deleteEntry){
		
		return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/task-manager/delete', deleteEntry);
	}

	// Create post factory to post data to api
	codeFac.saveEntry = function(newEntry){


		var newEntryObj = {
			'taskTitle' : newEntry,
			'checked' : 'false',
			'archived' : 'false'
		};

		// console.log(newEntryObj)
		return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/new-task-manager', newEntryObj);
	}

// Create get factory to retrieve data from api
codeFac.all = function(){
	return	$http.get('http://boiling-mesa-13925.herokuapp.com/api/task-manager');
}

return	codeFac;

})

