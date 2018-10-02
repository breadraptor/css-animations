$(function() {
	//using jquery because it will work on hover on browser, and on tap on mobile
  	$('.option').hover( //.option is the class of all 3 elements
  		function(){
  			//first function called on tap/hover
  			$('.option').removeClass('highlighted');
  			$(this).addClass('highlighted');
  		},
  		function(){
  			//second function called on exit (tapped something else or moved mouse away)
  			$(this).removeClass('highlighted');
  			setTimeout(function(){
  				if (!$('.option.highlighted').length){
  					$('.option.featured').addClass('highlighted');
  				}
  			}, 500)
  		}
	);
});