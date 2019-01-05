'use strict';



;define('client/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
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
;define('client/app', ['exports', 'client/resolver', 'ember-load-initializers', 'client/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('client/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _uiAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiAccordion.default;
    }
  });
});
;define('client/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _uiCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
;define('client/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _uiDimmer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDimmer.default;
    }
  });
});
;define('client/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _uiDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDropdown.default;
    }
  });
});
;define('client/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _uiEmbed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiEmbed.default;
    }
  });
});
;define('client/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _uiModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
;define('client/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _uiNag) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiNag.default;
    }
  });
});
;define('client/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _uiPopup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
;define('client/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _uiProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
;define('client/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _uiRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
;define('client/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _uiRating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRating.default;
    }
  });
});
;define('client/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _uiSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSearch.default;
    }
  });
});
;define('client/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _uiShape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiShape.default;
    }
  });
});
;define('client/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _uiSidebar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSidebar.default;
    }
  });
});
;define('client/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _uiSticky) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSticky.default;
    }
  });
});
;define('client/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('client/controllers/book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        form: Ember.computed(function () {
            const model = this.get('model');
            return {
                title: model.get('title'),
                author: model.get('author'),
                description: model.get('description')
            };
        })
    });
});
;define('client/controllers/create-book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        form: Ember.computed(function () {
            return {
                title: '',
                author: '',
                description: ''
            };
        })
    });
});
;define('client/helpers/app-version', ['exports', 'client/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('client/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _mapValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapValue.default;
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function () {
      return _mapValue.mapValue;
    }
  });
});
;define('client/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('client/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'client/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('client/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('client/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('client/initializers/export-application-global', ['exports', 'client/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('client/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('client/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
;define('client/models/book', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        title: _emberData.default.attr(),
        author: _emberData.default.attr(),
        description: _emberData.default.attr()
    });
});
;define('client/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('client/router', ['exports', 'client/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('books');
    this.route('book', { path: 'books/:book_id' });
    this.route('create-book');
  });

  exports.default = Router;
});
;define('client/routes/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        redirect() {
            this.transitionTo('books');
        }
    });
});
;define('client/routes/book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        store: Ember.inject.service(),

        model(book) {
            return this.get('store').peekRecord('book', book.book_id);
        },

        setupController(controller, model) {
            this._super(controller, model);
            this.controller.set('confirmingDelete', false);
            this.controller.set('isEditing', false);
            this.controller.set('form.title', model.get('title'));
            this.controller.set('form.author', model.get('author'));
            this.controller.set('form.description', model.get('description'));
        },

        actions: {
            delete(book) {
                book.deleteRecord();
                book.save().then(() => {
                    this.transitionTo('books');
                });
            },

            update(book) {
                const form = this.controller.get('form');

                book.set('title', form.title);
                book.set('author', form.author);
                book.set('description', form.description);

                book.save().then(() => {
                    this.controller.set('isEditing', false);
                });
            }
        }
    });
});
;define('client/routes/books', ['exports'], function (exports) {
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
;define('client/routes/create-book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        store: Ember.inject.service(),

        setupController(controller, model) {
            this._super(controller, model);
            this.controller.set('form.title', '');
            this.controller.set('form.author', '');
            this.controller.set('form.description', '');
        },

        actions: {

            create() {
                const form = this.controller.get('form');
                const store = this.get('store');

                const newBook = store.createRecord('book', {
                    title: form.title,
                    author: form.author,
                    description: form.description
                });

                newBook.save().then(() => {
                    this.transitionTo('books');
                });
            },

            cancel() {
                this.transitionTo('books');
            }
        }
    });
});
;define('client/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("client/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DOJPFMED", "block": "{\"symbols\":[],\"statements\":[[7,\"a\"],[11,\"href\",\"/books\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"navbar\"],[11,\"class\",\"ui segment\"],[9],[0,\"\\n    \"],[7,\"h2\"],[11,\"class\",\"ui header\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"book icon\"],[9],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"content\"],[9],[0,\"\\n        My Library\\n        \"],[7,\"div\"],[11,\"class\",\"sub header\"],[9],[0,\"Ember X Django Project\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "client/templates/application.hbs" } });
});
;define("client/templates/book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vQG4KkpP", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"isEditing\"]]],null,{\"statements\":[[7,\"div\"],[11,\"class\",\"ui large header\"],[11,\"style\",\"margin-left: 1em\"],[9],[0,\"Edit\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui form\"],[11,\"style\",\"margin-left: 3vw\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"inline field\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Title\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"value\",\"name\",\"autocomplete\",\"id\"],[[23,[\"form\",\"title\"]],\"title\",\"off\",\"form-title\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui form\"],[11,\"style\",\"margin-left: 3vw\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"inline field\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Author\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"value\",\"name\",\"autocomplete\",\"id\"],[[23,[\"form\",\"author\"]],\"author\",\"off\",\"form\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"h2\"],[11,\"class\",\"ui header\"],[11,\"style\",\"margin-left: 3vw; font-size: 15px;\"],[9],[0,\"Description\"],[10],[0,\"\\n\"],[1,[27,\"textarea\",null,[[\"value\",\"id\",\"rows\"],[[23,[\"form\",\"description\"]],\"form-description\",\"5\"]]],false],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"margin-left: 2em\"],[3,\"action\",[[22,0,[]],\"update\",[23,[\"model\"]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Update\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"redo icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[3,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"isEditing\"]]],null],false]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Cancel\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"level up alternate icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui segment\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n  \"],[7,\"h2\"],[11,\"class\",\"ui header\"],[9],[0,\"\\n    \"],[1,[23,[\"model\",\"title\"]],false],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"sub header\"],[9],[1,[23,[\"model\",\"author\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[1,[23,[\"model\",\"description\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"confirmingDelete\"]]],null,{\"statements\":[[7,\"div\"],[11,\"class\",\"ui red large header\"],[9],[0,\"\\n  Are you sure you want to delete this book?\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"margin-left: 2em\"],[3,\"action\",[[22,0,[]],\"delete\",[23,[\"model\"]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Delete\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"trash icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"margin-left: 2em\"],[3,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"confirmingDelete\"]]],null],false]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Cancel\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"level up alternate icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"margin-left: 2em\"],[3,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"confirmingDelete\"]]],null],true]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Delete\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"trash icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[3,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"isEditing\"]]],null],true]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Edit\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"edit icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"books\"],null,{\"statements\":[[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Back\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"level up alternate icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "client/templates/book.hbs" } });
});
;define("client/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "U19eTl+n", "block": "{\"symbols\":[\"book\"],\"statements\":[[7,\"br\"],[9],[10],[0,\"\\n\"],[4,\"link-to\",[\"create-book\"],[[\"id\"],[\"button\"]],{\"statements\":[[0,\"   \"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"font-size: 13px; margin-left: 2vw\"],[9],[0,\"\\n     \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n       Add Book\\n     \"],[10],[0,\"\\n     \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n       \"],[7,\"i\"],[11,\"class\",\"plus icon\"],[9],[10],[0,\"\\n     \"],[10],[0,\"\\n   \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[4,\"link-to\",[\"book\",[22,1,[\"id\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"margin-left:2vw\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n        \"],[1,[22,1,[\"title\"]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"info circle icon\"],[9],[10],[0,\"More info\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "client/templates/books.hbs" } });
});
;define("client/templates/create-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "c0WGiagc", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[11,\"class\",\"ui large header\"],[11,\"style\",\"margin-left: 3vw;\"],[9],[0,\"\\n  Add a new book\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui form\"],[11,\"style\",\"margin-left: 3vw\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"inline field\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Title\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"value\",\"name\",\"autocomplete\",\"id\"],[[23,[\"form\",\"title\"]],\"title\",\"off\",\"form-title\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"ui form\"],[11,\"style\",\"margin-left: 3vw\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"inline field\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Author\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"value\",\"name\",\"autocomplete\",\"id\"],[[23,[\"form\",\"author\"]],\"author\",\"off\",\"form\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"h2\"],[11,\"class\",\"ui header\"],[11,\"style\",\"margin-left: 3vw; font-size: 15px;\"],[9],[0,\"Description\"],[10],[0,\"\\n\"],[1,[27,\"textarea\",null,[[\"value\",\"id\",\"rows\"],[[23,[\"form\",\"description\"]],\"form-description\",\"5\"]]],false],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui hidden divider\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"font-size: 13px; margin-left: 2vw\"],[3,\"action\",[[22,0,[]],\"create\"]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Create\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"plus icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"title\"],[11,\"class\",\"ui animated fade circular button\"],[11,\"style\",\"font-size: 13px; margin-left: 2vw\"],[3,\"action\",[[22,0,[]],\"cancel\"]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"visible content\"],[9],[0,\"\\n    Cancel\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"hidden content\"],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"trash alternate icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "client/templates/create-book.hbs" } });
});
;

;define('client/config/environment', [], function() {
  var prefix = 'client';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("client/app")["default"].create({"name":"client","version":"0.0.0"});
          }
        
//# sourceMappingURL=client.map
