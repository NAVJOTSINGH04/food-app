var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider                                       // route define  kiya hai jis se pta chle ga ki home page kab ana hai or restaurant id kab chalni hai
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
foodieApp.controller('loginController',function($scope,$location) { //login controller dine kiya hai and scope   is object over here
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})

foodieApp.controller('mainController',function($scope) { // maincontroller is define and sare restaurant define kiya hai
  $scope.restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
    id:1

  },

	{
		name: 'deep Cafe',
		address: 'SECTOR 42, Block A ,S.C.O.-26, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.3',
		cuisines: 'Modern Indian',
		cost: '2000',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://oakbaybeachhotel.com/wp-content/uploads/2015/05/KatesCafe.jpg',
		id:2

	},
	{
		name: 'sam pizza',
		address: ',sector 7, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.5',
		cuisines: 'Modern Indian',
		cost: '800',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'http://diningplus.in/adminr/MerchantLogos/Sams%20Pizza.JPG',
		id:3

	},
	{
		name: 'purple frog',
		address: 'sec 26  Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2500',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://img-cdn.eveningflavors.com/EvfImages/Restaurant/Chandigarh/27637/base/profileBase/GFht4TnGad.jpg',
		id:4

	},


  {
  	name: '5 degree ',
  	address: 'Sector 5,  Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.9',
  	cuisines: 'Modern Indian',
  	cost: '1100',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://img1.nbstatic.in/la-l/576b7f9cc9e77c000c912ad0.jpg',
    id:5

  },


];

})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http)  {// restaurant controller define kiya hai
	$scope.restaurantId = $routeParams.id;
  var restaurants =
  [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
    bestDish: {
  	name: 'Corn salad',
  	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
  }
  },

	{
		name: 'deep Cafe ',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		bestDish: {
		name: 'Corn Pizza',
		image: 'https://grofers.com/recipe/wp-content/uploads/2017/01/78-1.jpg?x84191'
	}
	},
	{
		name: 'sam pizza',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		bestDish: {
		name: 'Corn Pizza',
		image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	}
	},
	{
		name: 'purple frog',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		bestDish: {
		name: 'Corn Pizza',
		image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	}
	},



  {
  	name: '5 degree ',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',

  },



];
	$scope.restaurant = restaurants[$routeParams.id - 1];

$scope.getIngredients = function(url) {
  var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}' // catination is done
$http({
	'method': 'POST',
	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	'headers': {
		'Authorization': 'Key b83ec072ecba44d791dd9e43596904a9',
		'Content-Type': 'application/json'
	},
	'data': data,
  }).then(function(response) {
  var ingredients= response.data.outputs[0].data.concepts;
  $scope.ingredients = [];
  var list = '';
  for (var i =0;i < ingredients.length;i++) {
  $scope.ingredients.push(ingredients[i].name);
  			}
         $('.ingredients').html(list);
      //  console.log(list);
  }, function (xhr) {
        	console.log(xhr);
        });

  	//success: function (response) {
  		//var ingredients = response.outputs[0].data.concepts;
  			//var list = '';
  			//for (var i =0;i < ingredients.length ;i++) {
  				//list += 'div class="ingredient">' + ingredients[i].name + ''
  			//}
  		//$('.ingredients').html(list);
      //},
      //error: function (xhr) {
      	//console.log(xhr);
      //}


//do Something
}

})
