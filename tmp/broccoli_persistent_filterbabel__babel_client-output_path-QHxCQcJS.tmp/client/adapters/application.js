define('client/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        host: Ember.computed(function () {
            return 'http://localhost:8000';
        }),

        namespace: 'api'
    });
});