(function(exports, $, _, Backbone){
  var Lightbox;

  exports.Backpack = exports.Backpack || {};
  exports.Backpack.Models = exports.Backpack.Models || {};

  Lightbox = Backbone.View.extend({

    template:  _.template(
      "<div class='lightbox-inner'>" +
        "<div class='content'></div>" +
      "</div>"),
    className: 'lightbox',
    events: {
      'click': 'dismiss',
      'click .content': 'noop',
      'click [data-lightbox-close]': 'close'
    },

    bindings: function(){
      this.model.on('change:open', this.toggle, this);
      this.model.on('change:content', this.updateContent, this);
      this.model.on('change:backgroundColor', this.updateColor, this);
    },

    initialize: function(){
      this.model = new Backpack.Models.Lightbox;
      this.bindings();
      this.toggle();
      this.append();
      if (this.options.content) {
        this.content(this.options.content);
      }
    },

    render: function(){
      var template = this.template();
      this.$el.html(template);
      return this;
    },

    content: function(content){
      this.model.setContent(content);
      return this;
    },

    updateContent: function(){
      var content = this.model.get('content');
      var el = content.render().el;
      this.$content = this.$el.find('.content');
      this.$content.html(el);
    },

    updateColor: function(){
      var color = this.model.get('backgroundColor');
      this.$el.css('background-color', color);
    },

    color: function(color){
      this.model.color(color);
    },

    append: function(){
      this.render();
      $('body').append(this.$el);
    },

    toggle: function(){
      var open = this.model.get('open');
      this.$el.toggle(open);
    },

    lock: function(){
      this.model.lock();
      return this;
    },

    unlock: function(){
      this.model.unlock();
      return this;
    },

    open: function(event){
      this.model.open();
      return this;
    },

    close: function(event){
      this.model.close();
      return this;
    },

    dismiss: function(event){
      this.model.dismiss();
      return this;
    },

    noop: function(event){
      event.stopPropagation();
    }

  });

  exports.Backpack.Lightbox = Lightbox;

})(window, jQuery, _, Backbone);
