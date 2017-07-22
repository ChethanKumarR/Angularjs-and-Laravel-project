var app = angular.module('myapp', ['ngResource']);
	   	       app.factory('Entrydetails' , function($resource)
	   	       {
	   	       	  return $resource('../api/public/api/internship/:internship' ,{internship:'@internship'},
	   	       	  	{
	                         'update':{
	                         	       method:'PUT',
	                         	       url:'http://localhost/InternshipPortal/api/public/api/internship/:internship'
	                         	
	                                 }

	   	       	  	});
	   	       });
	   	       app.controller('internshipcontroller',internshipcontrollerFunc);
	   	       function internshipcontrollerFunc($scope ,Entrydetails)
	   	       {
	   	       	    $scope.id =1;
	
	                $scope.fetch = function(id) {
		 		    $scope.internship = Entrydetails.get({internship:$scope.id});
		 	        };
	
			 	    $scope.edit = function(id) {
			 	    $scope.id = id;
			 		$scope.studentinternship = Entrydetails.get({internship : $scope.id});
			 		console.log($scope.studentinternship);
		 	       };
	
		 	       $scope.update = function()	
		 	       {
                      alert("updating the existing record successfully");
		 	       	  var updateinternship = Entrydetails.get({id:$scope.id});
		 	       	  console.log(updateinternship);
		 	       	  updateinternship.internship_title = $scope.studentinternships.internship_title;
		 	       	  updateinternship.description = $scope.studentinternship.internship_description;
		 	       	  console.log(updateinternship);
		 	       	  /*updateinternship.$update({ id:$scope.id }) ;*/
		 	       };
	
	                 $scope.post = function()
	                 {
	                     //echo "post function is called";
	                     alert("creating the new record successfully");
	                 	 var postinternship = new Entrydetails();
	                 	 postinternship.internship_title = $scope.internship_title;
	                 	 postinternship.internship_description = $scope.internship_description;
	                 	 console.log(postinternship);
	                 	 postinternship.$save();
	                 };
	
	
	                 $scope.deleteinternship =  function()
	                 {
	                 	console.log("deleting the internship");
	                 	/*Entrydetails.delete({id:$scope.id},function() {
		 			    alert("comment delete request sent");
		 		      })*/
	                 };
	
	                $scope.fetchAll = function()
	                {
	                	$scope.interndetails = Entrydetails .query();
	                };
	
	   	       };	
	   