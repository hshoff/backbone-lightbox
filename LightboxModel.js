(function(exports, Backbone){

  exports.Backpack = exports.Backpack || {};
  exports.Backpack.Models = exports.Backpack.Models || {};

  LightboxModel = Backbone.Model.extend({

    defaults: {
      'open': false,
      'lock': false,
      'backgroundColor': 'rgba(0,0,0,0.9)'
    },

    setContent: function(content){
      this.set('content', content);
    },

    open: function(){
      this.set('open', true);
    },

    close: function(){
      this.set('open', false);
    },

    dismiss: function(){
      if (!this.get('lock')) {
        this.close();
      }
    },

    lock: function(){
      this.set('lock', true);
    },

    unlock: function(){
      this.set('lock', false);
    },

    color: function(color){
      this.set('backgroundColor', color);
    }

  });

  exports.Backpack.Models.Lightbox = LightboxModel;

})(window, Backbone);