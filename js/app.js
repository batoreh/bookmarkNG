var ngbookmark = angular.module('ngbookmark', []);

ngbookmark.controller('BookmarkControler', function BookmarkControler($scope){

	$scope.bookmarks = [
		{
			id: 'g1',
			url: 'http://g1.globo.com/',
			img: 'https://pbs.twimg.com/profile_images/652253314210467840/gdCnHsYD_400x400.jpg',
			name: 'G1'
		}, {
			id: 'github',
			url: 'http://github.com/',
			img: 'bora',
			name: 'github'
		}, {
			id: 'wjblog',
			url: 'https://willianjusten.com.br/',
			img: 'bora',
			name: 'wilian justen blog'
		}, {
			id: 'apblog',
			url: 'http://afonsopacifer.com/',
			img: 'bora',
			name: 'Afonso Pacifer blog'
		}, {
			id: 'hwblog',
			url: 'http://www.heydonworks.com/',
			img: 'bora',
			name: 'heydonworks blog'
		}

	];

});
