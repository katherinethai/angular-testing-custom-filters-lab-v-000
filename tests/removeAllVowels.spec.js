describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('removes all vowels from the string', function() {
    var string = 'Hello world!';

    var result = $filter('removeAllVowels')(string);

    expect(result).toBe('Hll wrld!');
  });
});
