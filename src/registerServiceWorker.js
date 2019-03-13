/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App-a! Service workert használ hogy offline is tudjon működni.\n'
        + 'Részletek: https://goo.gl/AFskqB',
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Offline a weboldal, jee!');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content was available, SKIPPED WAITING -> refresh to update.');
    },
    offline() {
      console.log('No internet , no problem. App-a! is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
