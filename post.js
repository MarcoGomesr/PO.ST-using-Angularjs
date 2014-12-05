'use strict';
angular.module('App').directive('social', function ($timeout, $http) {

  return {
    restrict: 'A',
  
          
  link: function(scope,el,attrs){
  	 var s = document.createElement('script');
	  s.type = 'text/javascript';
	  s.async = true;
	  s.src = 'http://i.po.st/share/script/post-widget.js#publisherKey='+ attrs.key;
	  var x = document.getElementsByTagName('script')[0];
	  x.parentNode.insertBefore(s, x);

    }

  };
});
