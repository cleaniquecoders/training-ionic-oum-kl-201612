angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) {
	console.log('hi');
	var posOptions = {timeout: 10000, enableHighAccuracy: false};
	  $cordovaGeolocation
	    .getCurrentPosition(posOptions)
	    .then(function (position) {
	      var lat  = position.coords.latitude
	      var long = position.coords.longitude
	      alert('You current latitude is ' + lat + ' and your longitude is ' + long);
	    }, function(err) {
	      // error
	    });
}])
 