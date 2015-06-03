var app = angular.module('quoteBook');

app.service('dataService', function() {

	this.getData = function() {
		return quotes;
	};

	this.addData = function(data) {
		if (data.text && data.author){
			quotes.push(data);
		}// } else {
		// 	alert('please input Author and Quote.');
		// }
	};

	this.removeData = function(str) {
		for (var i = 0; i < quotes.length; i++) {
			if (quotes[i].text === str) {
				quotes.splice(i, 1);
				break;
			} 
		}
	}

	// this.removeData = function(str) {
	// 	var index = quotes.indexOf(str);
	// 	if (index === -1) {
	// 		alert('That quote is not in the array.');
	// 	} else {
	// 		quotes.splice(index, 1);
	// 	}
	// };

	var quotes = 
	[
		{ 
			text: 'Life isn\'t about getting and having, it\'s about giving and being.',
	    author: 'Kevin Kruse'
	  },
	  {
	  	text: 'Whatever the mind of man can conceive and believe, it can achieve.',
	  	author: 'Napolean Hill'
	  },
	  {
	  	text: 'Strive not to be a success, but rather to be of value.',
	  	author: 'Albert Einstein'
	  },
	  {
	  	text: 'Two roads diverged in a yellow wood, and I took the one less traveled by, And it has made all the difference.',
	  	author: 'Robert Frost'
	  },
	  {
	  	text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', 
	  	author: 'Amelia Earhart'
	  },
	  {
	  	text: 'Life is what happens to you while you\'re busy making other plans.',
	  	author: 'John Lennon'
	  },
	  {
	  	text: 'What even is a jQuery?',
	  	author: 'Tyler McGinnis'
	  }

	]
});