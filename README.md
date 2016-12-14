# Installation

Clone / Download this project

## ngCordova

For Linux / Mac

```
sudo bower install ngCordova --allow-root
```

For Windows

```
bower install ngCordova
```

Open up `www/index.html`, add in the following before `cordova.js` script. 

```html
<script src="lib/ngCordova/dist/ng-cordova.min.js"></script>
```

Inject `ngCordova` in `www/js/app.js`.

```javascript
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova'])...
```

# ngCordova - GeoLocation

## Installation

```
sudo cordova plugin add cordova-plugin-geolocation --allow-root
```

## Usage

Add the following in one of your controller

```javascript
angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$cordovaGeolocation',
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
```