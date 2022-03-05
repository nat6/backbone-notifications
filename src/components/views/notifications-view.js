import * as $ from 'jquery';
import * as Backbone from 'backbone';
import * as _ from 'underscore';
import DefaultCollection from '../collections/app-collection';

export const Notification = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#template').html()),

  events: {
    'click .notification__remove': 'remove',
  },

  remove: function () {
    this.model.destroy();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

export const Count = Backbone.View.extend({
  el: $('#count'),

  render: function () {
    if (!DefaultCollection.length) {
      this.$el.addClass('hidden');
    }
    this.$el.html(DefaultCollection.length);
    return this;
  },
});
