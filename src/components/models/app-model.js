import * as Backbone from 'backbone';

const AppModel = Backbone.Model.extend({
  defaults: {
    title: '',
    text: 'text',
  },
});

export default AppModel;
