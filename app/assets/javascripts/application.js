// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery.easing.1.3
//= require jquery.isotope.min
//= require jquery.stellar.min
//= require waypoints
//= require sorting
//= require jquery.fancybox
//= require_tree .



$(document).ready(function() {
    options = {
        placement: 'bottom',
        trigger : 'hover'
        
    }
    $('[rel="popover"]').popover(options);
});



jQuery(document).ready(function($) {
    
    /*
     *  Open manually
     */
    
    $("#fancybox-manual-a").click(function() {
        $.fancybox.open('/assets/img/1_b.jpg');
    });
    
    $("#fancybox-manual-b").click(function() {
        $.fancybox.open({
            href: '/home/web_design',
            type : 'iframe',
            padding : 5
        });
    });
    
    $("#fancybox-manual-c").click(function() {
        $.fancybox.open([
        {
            href : '1_b.jpg',
            title : 'My title'
        }, {
            href : '2_b.jpg',
            title : '2nd title'
        }, {
            href : '3_b.jpg'
        }
        ], {
            helpers : {
                thumbs : {
                    width: 75,
                    height: 50
                }
            }
        });
    });
    
    
});
  
  
  
  
  
  
/*
   *  for scrolling on clicking menu
   */
  
  
jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.nav').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.nav li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.nav li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.nav li[data-slide="1"]').addClass('active');
            $('.nav li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
	
	
    jQuery('#mycarousel').jcarousel({
        auto: 1000,
        scroll: 1,
        wrap: 'circular'
    });
	
	
    $("a[rel^='prettyPhoto']").prettyPhoto();

	
    $(".hover_img").live('mouseover',function(){
        var info=$(this).find("img");
        info.stop().animate({
            opacity:0.21
        },300);
        $(".preloader").css({
            'background':'none'
        });
    }
    );
    $(".hover_img").live('mouseout',function(){
        var info=$(this).find("img");
        info.stop().animate({
            opacity:1
        },300);
        $(".preloader").css({
            'background':'none'
        });
    }
    );
		
	
});





