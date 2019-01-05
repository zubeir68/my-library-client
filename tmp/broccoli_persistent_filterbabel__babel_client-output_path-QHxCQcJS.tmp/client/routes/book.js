define('client/routes/book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        store: Ember.inject.service(),

        model(book) {
            return this.get('store').peekRecord('book', book.book_id);
        }
    });
});