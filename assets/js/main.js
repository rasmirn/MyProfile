jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
	
	$("#changeColor").on("click",function(){
		var num=Math.floor(Math.random() * 6) + 1  ;
		 //$('link[href="style1.css"]').attr('href','style2.css');
		var style='assets/css/styles-'+num+".css";
		console.log("Style "+ style);
		$("#theme-style").attr("href", style);
	});
   
    $(window).load(function(){
		$(".loadingImage").fadeOut(3000);
	});

});