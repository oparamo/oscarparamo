"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('oscarparamo/app', ['exports', 'ember', 'oscarparamo/resolver', 'ember-load-initializers', 'oscarparamo/config/environment'], function (exports, _ember, _oscarparamoResolver, _emberLoadInitializers, _oscarparamoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _oscarparamoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _oscarparamoConfigEnvironment['default'].podModulePrefix,
    Resolver: _oscarparamoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _oscarparamoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('oscarparamo/helpers/app-version', ['exports', 'ember', 'oscarparamo/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _oscarparamoConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _oscarparamoConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('oscarparamo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('oscarparamo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('oscarparamo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'oscarparamo/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _oscarparamoConfigEnvironment) {
  var _config$APP = _oscarparamoConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('oscarparamo/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('oscarparamo/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('oscarparamo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('oscarparamo/initializers/export-application-global', ['exports', 'ember', 'oscarparamo/config/environment'], function (exports, _ember, _oscarparamoConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_oscarparamoConfigEnvironment['default'].exportApplicationGlobal !== false) {
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

      var value = _oscarparamoConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_oscarparamoConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('oscarparamo/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('oscarparamo/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('oscarparamo/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("oscarparamo/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('oscarparamo/mixins/google-pageview', ['exports', 'ember', 'oscarparamo/config/environment'], function (exports, _ember, _oscarparamoConfigEnvironment) {
  exports['default'] = _ember['default'].Mixin.create({
    pageviewToGA: (function (page, title) {
      page = page ? page : this.get('url');
      title = title ? title : this.get('url');

      if (_ember['default'].get(_oscarparamoConfigEnvironment['default'], 'googleAnalytics.webPropertyId') != null) {
        var trackerType = _ember['default'].getWithDefault(_oscarparamoConfigEnvironment['default'], 'googleAnalytics.tracker', 'analytics.js');

        if (trackerType === 'analytics.js') {
          var globalVariable = _ember['default'].getWithDefault(_oscarparamoConfigEnvironment['default'], 'googleAnalytics.globalVariable', 'ga');

          window[globalVariable]('send', 'pageview', {
            page: page,
            title: title
          });
        } else if (trackerType === 'ga.js') {
          window._gaq.push(['_trackPageview']);
        }
      }
    }).on('didTransition')
  });
});
define('oscarparamo/pods/about/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("oscarparamo/pods/about/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RAG7VMMy", "block": "{\"statements\":[[\"block\",[\"paper-card\"],null,[[\"title\",\"class\"],[\"About Me\",\"about-me\"]],22],[\"block\",[\"paper-card\"],null,[[\"title\",\"class\"],[\"Employment\",\"employment\"]],21],[\"block\",[\"paper-card\"],null,[[\"title\",\"class\"],[\"Education\",\"education\"]],20],[\"block\",[\"paper-card\"],null,[[\"title\",\"class\"],[\"Experience\",\"experience\"]],19],[\"block\",[\"paper-card\"],null,[[\"title\",\"class\"],[\"Interests\",\"interests\"]],3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://steamcommunity.com/id/oparamo\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/steam.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Video Games\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I love playing video games so much I've made it one of my goals to make at least one simple game in the future.\\n  Recently, I built a gaming PC and have been playing a lot of games on Steam. If you're interested, you can add me on\\n  Steam by clicking on the icon! I'm competitive when it comes to Pokémon and Super Smash Bros, so email me if you want\\n  to exchange Friend Codes. 😈\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.omegadeltaphi.com/\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/odp.svg\"],[\"static-attr\",\"class\",\"odp\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Omega Delta Phi\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Omega Delta Phi is a multicultural service/social fraternity that I became a part of in the Spring of 2012. Our goals\\n  are to help graduate our members and give back to our communities. Thanks to my Fraternity, I've learned how to work\\n  in a team of diverse people. My chapter is recognized for our community service and also for being one of top\\n  performing ODPhi chapters. One of the best experiences in my life has been serving as our chapter president at UT\\n  Dallas. I'm currently getting involved as an alumni by helping in our national technology cabinet. \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/mlh.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Hacking\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"By \\\"hacking\\\" I mean building or tinkering with things related to tech, not in the \\\"computer hacker\\\" kind of way. My\\n  favorite places to hack at are \\\"hackathons.\\\" Hackathons are events where a bunch of people build things together as\\n  fast as they can, usually in a time window of 24 hours. Hackathons are hard but it's also fun to build and break\\n  things!\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"icon-badge\"],null,[[\"class\"],[\"interest\"]],2],[\"block\",[\"icon-badge\"],null,[[\"class\"],[\"interest\"]],1],[\"block\",[\"icon-badge\"],null,[[\"class\"],[\"interest\"]],0]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Unix\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"90\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/spring.svg\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Spring Boot\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"80\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Sass\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"90\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Python\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"70\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"PostgreSQL\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"70\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Node.js\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"95\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"MongoDB\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"80\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"JavaScript\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"90\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Java\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"90\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"HTML5\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"95\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/hapi.svg\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Hapi.js\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"80\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/ember.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Ember.js\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"70\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Git\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"95\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Docker\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"90\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"CSS3\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"xp-bar\"],null,[[\"xp\"],[\"100\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-css3-plain colored\",\"skill\"]],18],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-docker-plain colored\",\"skill\"]],17],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-git-plain colored\",\"skill\"]],16],[\"block\",[\"icon-badge\"],null,[[\"class\"],[\"skill\"]],15],[\"block\",[\"icon-badge\"],null,[[\"class\"],[\"skill\"]],14],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-html5-plain colored\",\"skill\"]],13],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-java-plain colored\",\"skill\"]],12],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-javascript-plain colored\",\"skill\"]],11],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-mongodb-plain colored\",\"skill\"]],10],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-nodejs-plain colored\",\"skill\"]],9],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-postgresql-plain colored\",\"skill\"]],8],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-python-plain colored\",\"skill\"]],7],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"devicon\",\"devicon-sass-plain colored\",\"skill\"]],6],[\"block\",[\"icon-badge\"],null,[[\"class\"],[\"skill\"]],5],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"class\"],[\"op\",\"op-terminal\",\"skill\"]],4]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"entry\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/utd.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"University of Texas at Dallas\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"2011 - 2014\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I graduated from the University of Texas at Dallas in the Fall of 2014 with a B.S in Computer Science. During my\\n      time as a student at UTD I was an AES recipient and was heavily involved in the Omega Delta Phi Fraternity. I was\\n      also a member of CSG, a group where we learned about computer security concepts. I'm no expert at computer\\n      security, but it was fun learning and doing small exercises like script injection.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Academic Excellence Scholarship - Recipient\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Omega Delta Phi - Alpha Omicron Chapter President\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Computer Security Group - Member\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"entry\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/cssi.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Google Computer Science Summer Institute\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Summer 2011\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Google CSSI is a program hosted at Google's Mountain View campus for graduating high school seniors. The purpose\\n      of the program is to get students more interested in computer science and help those students develop technical\\n      skills. This was the first time I was exposed to programming and also when I decided computer science was the\\n      career for me. My CSSI class was taught programming fundamentals by using Google's App Inventor to build simple\\n      Android applications. We then graduated to learning to write in Python so we could build web applications using\\n      Google's App Engine service. I learned how powerful programming and web applications could be.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Tools - Google App Inventor, Google App Engine\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Programming Languages - Python, JavaScript\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Web Technologies - HTML5, CSS3\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"entry\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/toyota-connected.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Toyota Connected - Software Engineer\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"2017 - Present\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Toyota Connected was created as a subsidiary to Toyota with the goal of delivering solutions in an agile way. One\\n      of my favorite things about working at Toyota Connected is that I've participated in some key architectural\\n      discussions; they've given me a deeper understanding of how to make microservices work best and how to design a\\n      system as a whole. I'm also getting to solidify my experience with Java, RESTful APIs, Docker, CI/CD, and Scrum\\n      practices every day.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I've always enjoyed passing on what I've learned to others, so it was awesome to have the opportunity to mentor\\n      some of our Summer 2017 interns! It was rewarding to be a part of their experience and watching them grow as\\n      engineers.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Tools - Git, Docker, GitLab, CircleCI, DataDog\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Programming Languages - Java, JavaScript, Golang\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Web Technologies - Spring Boot, MongoDB, Service Bus, Kubernetes\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"entry\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/vinli.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Vinli - Software Engineer\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"2016 - 2017\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Vinli is a Dallas based startup that has created the first truly open platform for the connected car. I was a\\n      part of the 4-member Platform Team that built and maintained the 60+ microservices that made up the Vinli\\n      Platform. My main responsibilities were exposing and manipulating vehicle data through our microservices' RESTful\\n      APIs. It was empowering to be responsible for my code from start to finish, we were able to push our new features\\n      and changes at a moment's notice with little to no downtime! To ensure I was writing high quality code, I also\\n      wrote useful unit/integration tests and tested my changes in our production-like development stack. I had a blast\\n      working with one of the most talented teams in the world, and gained invaluable experience at Vinli!\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Tools - Git, Docker, CircleCI\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Programming Languages - JavaScript\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Web Technologies - Node.js, Hapi.js, PostgreSQL, RabbitMQ\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"entry\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/nectarom.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"NOM - Software Developer Intern\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Jan - Aug of 2015\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"NectarOM offers a suite of tools to help clients with marketing personalization. As an intern, I interacted\\n      directly with some of our clients and built on top of our web application tools. Some of my tasks were writing\\n      marketing emails in HTML and writing MongoDB query scripts with Node.js to generate customer reports for our\\n      clients. My favorite part of working at NectarOM was helping rebuild our architecture by moving our services to\\n      RESTful APIs using hapi.js and refactoring our PHP web apps to Ember CLI. I love how APIs allow you to decouple\\n      your server technologies from client side applications.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Tools - Git, Docker, Ansible\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Programming Languages - JavaScript, Python\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Web Technologies - Node.js, Ember.js, Hapi.js, MongoDB\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I'm a computer scientist who loves web development! Think of this page as a more interesting form of my resume, most\\n  of the information here is about my technical experience with some extra personal stuff about me. If you want a\\n  traditional resume (without my phone number) \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"/resume.pdf\"],[\"flush-element\"],[\"text\",\"click here\"],[\"close-element\"],[\"text\",\". If you want more information that\\n  isn't already provided here, feel free to \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:oscar.paramo@me.com\"],[\"flush-element\"],[\"text\",\"email me!\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/about/template.hbs" } });
});
define('oscarparamo/pods/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("oscarparamo/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "b7lCB7sj", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"wrapper\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"page-header\"],null,[[\"class\"],[\"header\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"main\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"push\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"page-footer\"],null,[[\"class\"],[\"footer\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/application/template.hbs" } });
});
define('oscarparamo/pods/components/icon-badge/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("oscarparamo/pods/components/icon-badge/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DnzfKma5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"icon-badge\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"iconSet\"]]],null,3,2],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"yield\",\"default\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"url\"]],\"hover\"],null],null],[\"dynamic-attr\",\"href\",[\"unknown\",[\"url\"]],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"iconSet\"]],\" \",[\"unknown\",[\"iconClass\"]]]]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n  \"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"iconClass\"]]],null,1]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"url\"]],\"hover\"],null],null],[\"dynamic-attr\",\"href\",[\"unknown\",[\"url\"]],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"iconSet\"]],\" \",[\"unknown\",[\"iconClass\"]]]]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/components/icon-badge/template.hbs" } });
});
define('oscarparamo/pods/components/page-footer/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("oscarparamo/pods/components/page-footer/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Yo9Xas/d", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"primary-text\"],[\"flush-element\"],[\"text\",\"Made from scratch, with love\\n  \"],[\"append\",[\"helper\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"url\"],[\"op\",\"op-heart\",\"https://github.com/oparamo/oscarparamo\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"copy\"],[\"flush-element\"],[\"text\",\"©2020 Oscar Páramo\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/components/page-footer/template.hbs" } });
});
define('oscarparamo/pods/components/page-header/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("oscarparamo/pods/components/page-header/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "f1PruPlZ", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"triangilify\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"oscar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"primary-text\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Oscar Páramo\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Computer Scientist\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Dallas, Texas\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"nav\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"comment\",\" <a {{action 'scrollUp'}} href=\\\"#\\\" class=\\\"logo\\\">OP</a> \"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"logo icon-text\"],[\"flush-element\"],[\"text\",\"OP\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"primary-text\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"index\"],null,1],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"about\"],null,0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"About Me\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Home\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/components/page-header/template.hbs" } });
});
define('oscarparamo/pods/components/paper-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("oscarparamo/pods/components/paper-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "V+SoGq/3", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"paper-card\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"primary-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"primary-text\"],[\"flush-element\"],[\"yield\",\"default\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/components/paper-card/template.hbs" } });
});
define('oscarparamo/pods/components/xp-bar/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("oscarparamo/pods/components/xp-bar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "axCNKsPf", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"xp-bar\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"style\",[\"concat\",[\"width: \",[\"unknown\",[\"xp\"]],\"%;\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"xp\"]],false],[\"text\",\" / 100\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/components/xp-bar/template.hbs" } });
});
define('oscarparamo/pods/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("oscarparamo/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Vr7lI5zE", "block": "{\"statements\":[[\"block\",[\"paper-card\"],null,[[\"title\",\"class\"],[\"Home\",\"home\"]],6],[\"text\",\"\\n\"],[\"block\",[\"paper-card\"],null,[[\"title\",\"class\"],[\"Follow Me\",\"follow\"]],5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"LinkedIn\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"GitHub\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Twitter\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Instagram\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Want to keep in touch? Then follow up with me at any of the places below!\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"icon-set\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"url\"],[\"op\",\"op-instagram\",\"https://instagram.com/oscaritoman/\"]],4],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"url\"],[\"op\",\"op-twitter\",\"https://twitter.com/OscarParamo1\"]],3],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"url\"],[\"op\",\"op-github\",\"https://github.com/oparamo\"]],2],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"url\"],[\"op\",\"op-linkedin\",\"https://www.linkedin.com/in/oparamo\"]],1],[\"block\",[\"icon-badge\"],null,[[\"iconSet\",\"iconClass\",\"url\"],[\"op\",\"op-envelope\",\"mailto:oscar.paramo@me.com\"]],0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Welcome to my personal website and development playground! I built this website so I could have a place to share information about myself and anything I've worked on. I plan to link or host any future projects here, so check in whenever you'd like.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I had a lot of fun building this website and learned a lot in the process, so the first thing I'll be sharing here is my website's source code! If you're interested, there's a link at the bottom that'll take you to my GitHub page.\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "oscarparamo/pods/index/template.hbs" } });
});
define('oscarparamo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('oscarparamo/router', ['exports', 'ember', 'oscarparamo/config/environment', 'oscarparamo/mixins/google-pageview'], function (exports, _ember, _oscarparamoConfigEnvironment, _oscarparamoMixinsGooglePageview) {

  var Router = _ember['default'].Router.extend(_oscarparamoMixinsGooglePageview['default'], {
    location: _oscarparamoConfigEnvironment['default'].locationType,
    rootURL: _oscarparamoConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
  });

  exports['default'] = Router;
});
define('oscarparamo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('oscarparamo/config/environment', ['ember'], function(Ember) {
  var prefix = 'oscarparamo';
/* jshint ignore:start */

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

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("oscarparamo/app")["default"].create({"name":"oscarparamo","version":"2.1.1+e284cc1b"});
}

/* jshint ignore:end */
//# sourceMappingURL=oscarparamo.map
