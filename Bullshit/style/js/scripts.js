/*-----------------------------------------------------------------------------------*/
/*	POSTS GRID
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($){
$("img").unveil();
var $container = $('.blog-grid');
      $container.imagesLoaded(function(){
        $container.masonry({
          itemSelector : '.post',
          columnWidth : 250
  
      });
      $container.css( 'visibility', 'visible' ).parent().removeClass( 'loading' );
    });
});

/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
    		$('.video').fitVids();
    	});	

    
/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($)  {
$("a.button, .forms fieldset .btn-submit, .logo, #commentform input#submit").css("opacity","1.0");
$("a.button, .forms fieldset .btn-submit, .logo, #commentform input#submit").hover(function () {
$(this).stop().animate({ opacity: 0.85 }, "fast");  },
function () {
$(this).stop().animate({ opacity: 1.0 }, "fast");  
}); 
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/		
		
jQuery(document).ready(function($) {	
$('.quick-flickr-item').addClass("frame");
$('.frame a').prepend('<span class="more"></span>');
});

jQuery(document).ready(function ($) {
    /*-----------------------------------FRAME-----------------------------------------*/
    $('.frame').mouseenter(function (e) {

        $(this).children('a').children('span').fadeIn(300);
    }).mouseleave(function (e) {

        $(this).children('a').children('span').fadeOut(200);
    });

});	


/*-----------------------------------------------------------------------------------*/
/*	TWITTER
/*-----------------------------------------------------------------------------------*/

////getTwitters('twitter', {
//        id: 'elemisdesign', 
//        count: 2, 
//        enableLinks: true, 
//        ignoreReplies: false,
//        template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span><br /><em class="twitterTime"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></em>',
//        newwindow: true
//});

/*-----------------------------------------------------------------------------------*/
/*	FLICKR
/*-----------------------------------------------------------------------------------*/
	
//$(document).ready(function($){
//	$('.flickr-feed').dcFlickr({
//		limit: 9, 
//        q: { 
//            id: '51789731@N07',
//			lang: 'en-us',
//			format: 'json',
//			jsoncallback: '?'
//        },
//		onLoad: function(){
//			$('.frame a').prepend('<span class="more"></span>');
//			$('.frame').mouseenter(function(e) {

//            $(this).children('a').children('span').fadeIn(300);
//        }).mouseleave(function(e) {

//            $(this).children('a').children('span').fadeOut(200);
//        });
//		}
//	});
//});	

/*-----------------------------------------------------------------------------------*/
/*	AUDIO PLAYER
/*-----------------------------------------------------------------------------------*/

//$(window).load(function(){
//		$('.blog-grid audio').mediaelementplayer({
//			audioWidth: '100%',
//			features: ['playpause','progress','tracks'],
//			videoVolume: 'horizontal'
//		});
//	});
//	
//jQuery(document).ready(function($) {
//		$('.single audio').mediaelementplayer({
//			audioWidth: '100%',
//			features: ['playpause','progress','tracks'],
//			videoVolume: 'horizontal'
//		});
//	});

///*-----------------------------------------------------------------------------------*/
///*	MENU
///*-----------------------------------------------------------------------------------*/
//	ddsmoothmenu.init({
//	    mainmenuid: "menu",
//	    orientation: 'h',
//	    classname: 'menu',
//	    contentsource: "markup"
//	});

