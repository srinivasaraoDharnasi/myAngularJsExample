var module = angular.module('angular-google-maps', [ 'google-maps' ]);
		function mapController($scope) {
			$scope.map = {
					markerproperties : {
						lat: 17.48888,
						lng: 78.8978
					},
				center : {
					latitude : 17.48888,
					longitude :78.8978
				},
				zoom : 10,
				options : {			       
				        mapTypeId     : google.maps.MapTypeId.ROADMAP,
				        mapTypeControl: true,
				        mapTypeControlOptions: {
				            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				            position: google.maps.ControlPosition.BOTTOM_CENTER
				        },
				        zoomControl   : true,
				        zoomControlOptions: {
				            style: google.maps.ZoomControlStyle.LARGE,
				            position: google.maps.ControlPosition.RIGHT_TOP
				        },
				        scaleControl  : true,
				        scaleControlOptions: {
				            position: google.maps.ControlPosition.RIGHT_TOP
				        },
				        panControl    : true,
				        panControlOptions: {
				            position: google.maps.ControlPosition.RIGHT_TOP
				        },
				        streetViewControl: true,
				        streetViewControlOptions: {
				            position: google.maps.ControlPosition.RIGHT_TOP
				        }
				}
			}
		};