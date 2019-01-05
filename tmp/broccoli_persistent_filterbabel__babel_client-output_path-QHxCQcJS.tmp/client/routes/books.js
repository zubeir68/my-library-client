define('client/routes/books', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        store: Ember.inject.service(),

        model() {
            const store = this.get('store');
            return store.findAll('book');
        }
    });
});