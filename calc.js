$(document).ready(function(){
	$(window).bind("resize", resizeWindow);
		function resizeWindow(e){
		var newWindowWidth = $(window).width();

		// If width width is below 600px, switch to the mobile stylesheet
		if(newWindowWidth < 600){        
		$("link[rel=stylesheet]").attr({href : "mobilecalc.css"});        
		}      
		// Else if width is above 600px, switch to the large stylesheet      
		else if(newWindowWidth > 600){
			$("link[rel=stylesheet]").attr({href : "calc.css"});
		}
    }
	
});
