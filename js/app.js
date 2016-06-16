var ngbookmark = angular.module('ngbookmark', []);

ngbookmark.controller('BookmarkControler', function BookmarkControler($scope){

	$scope.bookmarks = [
		{
			id: 'g1',
			url: 'http://g1.globo.com/',
			img: 'https://pbs.twimg.com/profile_images/652253314210467840/gdCnHsYD_400x400.jpg',
			name: 'G1'
		},
		{
			id: 'github',
			url: 'http://github.com/',
			img: 'bora',
			name: 'github'
		}
	];

});

