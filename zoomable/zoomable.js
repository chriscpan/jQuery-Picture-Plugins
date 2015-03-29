$.fn.zoomable = function() {
  return this.each(function() {
    new $.Zoomable(this);
  });
};

$.fn.Zoomable = function(el) {
  this.$el = $(el);
  this.boxSize = 50;
  this.$el.on('mouseenter', this.showFocusBox);
  this.$el.on('mouseleave', this.removeFocusBox);
};

Zoo
