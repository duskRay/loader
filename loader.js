(function ($) {
    $.fn.loaderOn = function(settings) {
        var el = $(this);

        var options = $.extend({
            zIndex: '10',  // Default zIndex 
            bgColor: 'rgba(0, 0, 0, 0.3)', // Default background color
            spinner:'spinner01' // Default Spinner
        }, settings);

        var spinner = {
            spinner01: '<div class="spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
            spinner02: '<div class="spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
            spinner03: '<div class="spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
            spinner04: '<div class="spinner4"></div>', 
            spinner05: '<div class="spinner5"><div class="cube1"></div><div class="cube2"></div></div>', 
            spinner06: '<div class="spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>', 
            spinner07: '<div class="spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'
        };
        
        
        var loader = $('<div class="loader"></div>'),
            anm = $(spinner[options.spinner]);

        if (!anm) {
            return false;
        }

        loader.append(anm);
        $('body').append(loader);

        loader.css({
            'float': 'left',
            'position': 'absolute',
            'top': el.offset().top,
            'left': el.offset().left,
            'width': el.outerWidth(),
            'height': el.outerHeight(),
            'border-radius': el.css('border-radius'),
            'background-color': options.bgColor
        });
        
        anm.css({
            'position': 'absolute',
            'top':loader.height() / 2 - anm.outerHeight() / 2,
            'left':loader.width() / 2 - anm.outerWidth() / 2
        });
    }; 
    
    $.fn.loaderOff = function() {
        $(this).find('div.loader').remove();
    }
}(jQuery));