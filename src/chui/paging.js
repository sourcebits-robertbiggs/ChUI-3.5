(function($) {
  'use strict'; 
 
  $.extend({
    ///////////////////////
    // Setup Paging Control
    ///////////////////////
    UIPaging : function ( ) {
      var currentArticle = $('.segmented.paging').closest('nav').next();
      var sections = currentArticle.children().length;
      if ($('.segmented.paging').hasClass('horizontal')) {
        currentArticle.addClass('horizontal');
      } else if ($('.segmented.paging').hasClass('vertical')) {
        currentArticle.addClass('vertical');
      }
      currentArticle.children().eq(0).addClass('current');
      currentArticle.children().eq(0).siblings().addClass('next');

      $('.segmented.paging').on($.eventStart, '.button:first-of-type', function() {
        var currentSection;
        $(this).next().removeClass('selected');
        $(this).addClass('selected');
        currentSection = $('section.current');
        if (currentSection.index() === 0) return;
        currentSection.removeClass('current').addClass('next');
        currentSection.prev().removeClass('previous').addClass('current');
      });
      $('.segmented.paging').on($.eventStart, '.button:last-of-type', function() {
        var currentSection;
        $(this).prev().removeClass('selected');
        $(this).addClass('selected');
        if (this.classList.contains('disabled')) return;
        currentSection = $('section.current');
        if (currentSection.index() === sections -1) return;
        currentSection.removeClass('current').addClass('previous');
        currentSection.next().removeClass('next').addClass('current');
      });
    }
  });
})(window.jQuery);