$(document).ready(function(){

	$('#DP').mouseover(function(){
		$('#DP').css({'color': '#000', 'background': '#FFFFCC'});
		$('#DP').mouseleave(function(){
			$('#DP').css({'color': '#FFFFCC'});
			$('#DP').css('background','url(images/button_background.jpg)');
		});
	});
	

	
	$('#DR').mouseover(function(){
		$('#DR').css({'color': '#000', 'background': '#FFFFCC'});
		$('#DR').mouseleave(function(){
			$('#DR').css({'color': '#FFFFCC'});
			$('#DR').css('background','url(images/button_background.jpg)');
		});
	});
	
	$('#map').mouseover(function(){
		$('#map').css({'color': '#000', 'background': '#FFFFCC'});
		$('#map').mouseleave(function(){
			$('#map').css({'color': '#FFFFCC'});
			$('#map').css('background','url(images/button_background.jpg)');
			/*$('#map').css({'background-size': '180px' '100px'});*/
		});
	});
	
	$('#DP').click(function(){
		('#DP_timeline').slidedown("slow");
	});
	
}); 