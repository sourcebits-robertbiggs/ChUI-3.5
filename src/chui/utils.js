(function($) {
  'use strict';

  $.extend({
    ///////////////
    // Create Uuid:
    ///////////////
    Uuid : function() {
      var date;
      date = Date.now();
      return date.toString(36);
    },

    ///////////////////////////
    // Concat array of strings:
    ///////////////////////////
    concat : function ( args ) {
      if (args instanceof Array) {
        return args.join('');
      } else {
        args = Array.prototype.slice.apply(arguments);
        return String.prototype.concat.apply(args.join(''));
      }
    }
  });

  $.fn.extend({
    //////////////////////
    // Return element that 
    // matches selector:
    //////////////////////
    iz : function ( selector ) {
      var ret = $();
      this.each(function(idx, ctx) {
        if ($(ctx).is(selector)) {
          ret.push(ctx);
        }
      });
      return ret;
    },

    //////////////////////////////
    // Return element that doesn't 
    // match selector:
    //////////////////////////////
    iznt : function ( selector ) {
      return this.not(selector);
    },
 
    ///////////////////////////////////
    // Return element whose descendants 
    // match selector:
    ///////////////////////////////////
    haz : function ( selector ) {
      return this.has(selector);
    },
 
    ///////////////////////////////////
    // Return element whose descendants 
    // don't match selector:
    ///////////////////////////////////
    haznt : function ( selector ) {
      var ret = $();
      this.each(function(idx, ctx) {
        if (!$(ctx).has(selector)[0]) {
          ret.push(ctx);
        }
      });
      return ret;
    },

    //////////////////////////////////////
    // Return element that has class name:
    //////////////////////////////////////
    hazClass : function ( className ) {
      var ret = $();
      this.each(function(idx, ctx) {
        if ($(ctx).hasClass(className)) {
          ret.push(ctx);
        }
      });
      return ret;
    },

    //////////////////////////////
    // Return element that doesn't 
    // have class name:
    //////////////////////////////
    hazntClass : function ( className ) {
      var ret = $();
      this.each(function(idx, ctx) {
        if (!$(ctx).hasClass(className)) {
          ret.push(ctx);
        }
      });
      return ret;
    },

    /////////////////////////////////////
    // Return element that has attribute:
    /////////////////////////////////////
    hazAttr : function ( property ) {
      var ret = $();
      this.each(function(idx, ctx){
        if (ctx.hasAttribute(property)) {
          ret.push(ctx);
        }
      });
      return ret;
    },

    //////////////////////////
    // Return element that 
    // doesn't have attribute:
    //////////////////////////
    hazntAttr : function ( property ) {
      var ret = $();
      this.each(function(idx, ctx){
        if (!ctx.hasAttribute(property)) {
          ret.push(ctx);
        }
      });
      return ret;
    }
  });
})(window.jQuery);
