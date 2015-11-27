/**
* @class Zyro
*/
Zyro = function() {
    this.initiate();
};

/**
* @function Zyro.prototype.initiate
* @description Start executing functions
*/
Zyro.prototype.initiate = function() {
    this.setupCarousel();
    this.collectGoogleAnalytics();
};

/**
* @function Zyro.prototype.setupCarousel
* @description Start executing functions
*/

Zyro.prototype.setupCarousel = function() {
    $('#myCarousel').carousel({
        interval: false
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
            clickEvent = true;
            $('.nav li').removeClass('active');
            $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.nav').children().length -1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
};

Zyro.prototype.collectGoogleAnalytics = function() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    var _gaq = _gaq || [];
    ga('create', 'UA-69564612-1', 'auto');
    ga('send', 'pageview');
    $('.trackerClass').click(function() {
        var selId = $(this).attr('id');
        _gaq.push(['_trackEvent', 'Interactions', 'Click', selId]);
    });
}
