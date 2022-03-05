import * as Backbone from 'backbone';
import AppModel from '../models/app-model';
import { defaultNotifications } from '../store/store';

const AppCollection = Backbone.Collection.extend({
  model: AppModel,
});

const DefaultCollection = new AppCollection(defaultNotifications);

export default DefaultCollection;
