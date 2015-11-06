angular.module('skateApp')

	.service('mainService', function () {

		this.skateparks = [
			{
				name: 'The Cove',
				state: 'California',
				address: '1401 Olympic Blvd, Santa Monica, CA 90404',
				pic: 'images/TheCoveSantaMonica.jpg'
			},
			{
				name: 'Alga Norte',
				state: 'California',				
				address: '6565 Alicante Rd, Carlsbad, CA 92009',
				pic: 'images/AlgaNorteCarlsbad.jpg'
			},
			{
				name: 'Craig Ranch',
				state: 'Nevada',				
				address: '628 W Craig Rd, North Las Vegas, NV 89032',
				pic: 'images/CraigRanchSkatePark.jpg'
			},
			{
				name: 'Anthem Skate Park',
				state: 'Nevada',				
				address: '2300 Reunion Dr, Henderson, NV 89052',
				pic: 'images/AnthemSkatePark.jpg'
			},
			{
				name: 'Herriman Skate Park',
				state: 'Utah',				
				address: '5900 West 13400 South, Herriman, UT 84096',
				pic: 'images/HerrimanSkatePark.jpg'
			},
			{
				name: 'Richard L. Guthrie Skate Park',
				state: 'Utah',				
				address: '2414 East Bengal Blvd, Cottonwood Heights, UT 84121',
				pic: 'images/GuthSkatePark.jpg'
			}

		];







	});