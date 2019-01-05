define('client/routes/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        title: 'Monkey Adventure',
        description: 'A tale of high seas monkey adventure.'
      }, {
        title: 'Island Strife',
        description: 'Life in paradise takes a turn for Monkey.'
      }, {
        title: 'The Ball',
        description: 'Monkey encounters a ball. What to do?'
      }, {
        title: 'Simple Pleasures of the South',
        description: 'Monkey reminisces on a life well lived.'
      }, {
        title: 'Big City Monkey',
        description: 'Toronto! Tall buildings and busy people!'
      }];
    }
  });
});