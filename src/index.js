import './styles.scss';
import * as $ from 'jquery';
import * as _ from 'underscore';
import { delayedNotifications } from './components/store/store';

import DefaultCollection from './components/collections/app-collection';
import AppView from './components/views/app-view';

$(function () {
  const app = new AppView();
  app.render();

  const delay = (time) => {
    return new Promise((res) => {
      let tm = setTimeout(() => res(tm), time);
    });
  };

  const addNotifications = async () => {
    const notifications = delayedNotifications;

    for (let i = 0; i < notifications.length; i++) {
      await delay(1000);
      DefaultCollection.add(notifications[i]);
    }
  };

  addNotifications();
});
