import * as $ from 'jquery';
import * as Backbone from 'backbone';
import * as _ from 'underscore';
import DefaultCollection from '../collections/app-collection';
import { Notification, Count } from './notifications-view';

const AppView = Backbone.View.extend({
  el: $('.page'),

  events: {
    'click #button': 'showModalWin',
  },

  initialize: function () {
    this.$count = this.$('#count');
    this.$notifications = this.$('#notifications');

    this.listenTo(DefaultCollection, 'add', this.addOne);
    this.listenTo(DefaultCollection, 'remove', this.remove);
  },

  addOne: function (item) {
    var view = new Notification({ model: item });
    this.$notifications.append(view.render().el);
    this.handleCount();
  },

  addAll: function () {
    DefaultCollection.each(this.addOne, this);
  },

  remove: function () {
    this.$notifications.empty();

    if (DefaultCollection.length) {
      this.addAll();
    } else {
      this.handleCount();
    }
  },

  handleCount: function () {
    const view2 = new Count();
    this.$count.text(view2.render().$count);
  },

  showModalWin: function () {
    const darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    this.$notifications.removeClass('hidden');

    darkLayer.onclick = () => {
      darkLayer.parentNode.removeChild(darkLayer);
      this.$notifications.addClass('hidden');
    };
  },

  render: function () {
    if (DefaultCollection.length) {
      this.addAll();
    }
    return this;
  },
});

export default AppView;
