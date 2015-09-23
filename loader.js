(function ($) {
    var el;
    var initStyles;
    $.fn.loaderOn = function(options) {
        el = $(this);

        var settings = $.extend({
            parent: $(this).parent(),
            timeToHide: null, // Default Time to hide loader
            zIndex: '100',  // Default zIndex 
            bgColor: 'rgba(255, 255, 255, 0.5)', // Default background color
            spinner:'spinner1', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"></div>'; 
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 

        if (typeof settings.parent === 'string') {
            settings.parent = $(settings.parent).first();
        }

        var elWidth = settings.parent.width(),
            elHeight = settings.parent.height();

        initStyles = {
            'position': 'absolute',
            'background-color': settings.bgColor,
            'width':settings.parent.width(),
            'height':settings.parent.height(),
            'top':settings.parent.offset().top,
            'left':settings.parent.offset().left
        };

        el.css(initStyles);

        el.each(function() {
            var a = settings.spinner;
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }

                if (settings.imagePath !='') {
                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
                    centerLoader(initStyles);
                }
        });

        if (settings.timeToHide) {
           setTimeout(function(){
               $(el).fadeOut().remove();
           }, settings.timeToHide); 
        }
        
        centerLoader({width: initStyles.width, height:initStyles.height});
    }; 
    
    $.fn.loaderOff = function() {
        $(el).fadeOut().remove();
    }

    function centerLoader(style) {
        var winW = style.width;
        var winH = style.height;

        var spinnerW = $('.fl').outerWidth();
        var spinnerH = $('.fl').outerHeight();

        $('.fl').css({
            'position':'relation',
            'left':(winW/2)-(spinnerW/2),
            'top':(winH/2)-(spinnerH/2)
        });
    }
}(jQuery));