describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));


  it('only returns people whose favorite food is ice cream', function() {
    var array = [{
      name: 'Person 1',
      favoriteFood: 'ice cream'
    }, {
      name: 'Person 2',
      favoriteFood: 'cake'
    },
    {
      name: 'Person 3',
      favoriteFood: 'ice cream'
    }];

    var results = $filter('favoriteFood')(array, 'ice cream')

    expect(results.length).toBe(2);
    expect(results[0].name).toBe('Person 1');
  }) 
	
});
