(function($) {
  'use strict'; 
 
  $.extend({
    ////////////////////////////
    // Initialize Deletable List
    ////////////////////////////
    UIDeletable : function ( options ) {
      /*
        options = {
          list: selector,
          editLabel : labelName || Edit,
          doneLabel : labelName || Done,
          deleteLabel : labelName || Delete,
          placement: left || right,
          callback : callback
        }
      */
      if (!options || !options.list || !options instanceof Array) {
        return;
      }
      var list = $(options.list);
      var editLabel = options.editLabel || 'Edit';
      var doneLabel = options.doneLabel || 'Done';
      var deleteLabel = options.deleteLabel || 'Delete';
      var placement = options.placement || 'right';
      var callback = options.callback || $.noop;
      var deleteButton;
      var editButton;
      var deletionIndicator;
      var button;
      // Windows uses an icon for the delete button:
      if ($.isWin) deleteLabel = '';
      if (list[0].classList.contains('deletable')) return;
      var height = $('li').eq(1)[0].clientHeight;
      deleteButton = $.concat('<a href="javascript:void(null)" class="button delete">', deleteLabel, '</a>');
      editButton = $.concat('<a href="javascript:void(null)" class="button edit">', editLabel, '</a>');
      deletionIndicator = '<span class="deletion-indicator"></span>';
      if (placement === 'left') {
        list.closest('article').prev().prepend(editButton);
      } else {
        list.closest('article').prev().append(editButton);
        list.closest('article').prev().find('h1').addClass('buttonOnRight');
        list.closest('article').prev().find('.edit').addClass('align-flush');
        button = list.closest('article').prev().find('.edit');
      }
      list.find('li').prepend(deletionIndicator);
      list.find('li').append(deleteButton);
      $('li').find('.delete').each(function(ctx, idx) {
        if (window && window.jQuery && $ === window.jQuery) ctx = idx;
        if ($.isiOS || $.isSafari) $(ctx).css({height: height + 'px'});
      });
      var setupDeletability = function(callback, list, button) {
        var deleteSlide;
        console.dir(button);
        if ($.isiOS) {
          deleteSlide = '100px';
        } else if ($.isAndroid) {
          deleteSlide = '140px';
        }
        $(function() {
          button.on('singletap', function() {
            var $this = this;
            if (this.classList.contains('edit')) {
              list.addClass('deletable');
              setTimeout(function() {
                $this.classList.remove('edit');
                $this.classList.add('done');
                $($this).text(doneLabel);
                $(list).addClass('showIndicators');
              });
            } else if (this.classList.contains('done')) {
              list.removeClass('deletable');
              setTimeout(function() {
                $this.classList.remove('done');
                $this.classList.add('edit');
                $($this).text(editLabel);
                $(list).removeClass('showIndicators');
                $(list).find('li').removeClass('selected');
              });            
            }
          });
          $(list).on('singletap', '.deletion-indicator', function() {
            if ($(this).closest('li')[0].classList.contains('selected')) {
              $(this).closest('li').removeClass('selected');
              return;
            } else {
              $(this).closest('li').addClass('selected');
            }
          });
        
          if ($.isiOS || $.isSafari) {
            $(list).on('swiperight', 'li', function() {
              $(this).removeClass('selected');
            });
          }
          $(list).on('singletap', '.delete', function() {
            var $this = this;
            $(this).siblings().css({'-webkit-transform': 'translate3d(-1000%,0,0)', '-webkit-transition': 'all 1s ease-out'});
            setTimeout(function() {
              callback.call(callback, $this);
              $($this).parent().remove();
            }, 500);
          });
        });    
      };
      return setupDeletability(callback, list, button);
      //return list;
    }
  });
})(window.jQuery);