'use strict';

define('oscarparamo/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('oscarparamo/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('oscarparamo/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('oscarparamo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'oscarparamo/tests/helpers/start-app', 'oscarparamo/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _oscarparamoTestsHelpersStartApp, _oscarparamoTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _oscarparamoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _oscarparamoTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('oscarparamo/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('oscarparamo/tests/helpers/resolver', ['exports', 'oscarparamo/resolver', 'oscarparamo/config/environment'], function (exports, _oscarparamoResolver, _oscarparamoConfigEnvironment) {

  var resolver = _oscarparamoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _oscarparamoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _oscarparamoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('oscarparamo/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('oscarparamo/tests/helpers/start-app', ['exports', 'ember', 'oscarparamo/app', 'oscarparamo/config/environment'], function (exports, _ember, _oscarparamoApp, _oscarparamoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _oscarparamoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _oscarparamoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('oscarparamo/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('oscarparamo/tests/integration/pods/components/icon-badge/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('icon-badge', 'Integration | Component | icon badge', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'g/hjbYyq',
      'block': '{"statements":[["append",["unknown",["icon-badge"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '/8DjkYoC',
      'block': '{"statements":[["text","\\n"],["block",["icon-badge"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('oscarparamo/tests/integration/pods/components/icon-badge/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/icon-badge/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/icon-badge/component-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/integration/pods/components/page-footer/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('page-footer', 'Integration | Component | page footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'DppdQg5Y',
      'block': '{"statements":[["append",["unknown",["page-footer"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'LMJTr2C8',
      'block': '{"statements":[["text","\\n"],["block",["page-footer"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('oscarparamo/tests/integration/pods/components/page-footer/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/page-footer/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/page-footer/component-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/integration/pods/components/page-header/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('page-header', 'Integration | Component | page header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'K/+Aaca4',
      'block': '{"statements":[["append",["unknown",["page-header"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'icHOx7nm',
      'block': '{"statements":[["text","\\n"],["block",["page-header"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('oscarparamo/tests/integration/pods/components/page-header/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/page-header/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/page-header/component-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/integration/pods/components/paper-card/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('paper-card', 'Integration | Component | paper card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'IBw3uSKP',
      'block': '{"statements":[["append",["unknown",["paper-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'YZlfyDTu',
      'block': '{"statements":[["text","\\n"],["block",["paper-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('oscarparamo/tests/integration/pods/components/paper-card/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/paper-card/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/paper-card/component-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/integration/pods/components/xp-bar/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('xp-bar', 'Integration | Component | xp bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '2ZWvpKPK',
      'block': '{"statements":[["append",["unknown",["xp-bar"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'OI6roLNP',
      'block': '{"statements":[["text","\\n"],["block",["xp-bar"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('oscarparamo/tests/integration/pods/components/xp-bar/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/xp-bar/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/xp-bar/component-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/mixins/google-pageview.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/google-pageview.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/google-pageview.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/about/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/about/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/about/route.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/application/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/components/icon-badge/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/icon-badge/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/icon-badge/component.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/components/page-footer/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/page-footer/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/page-footer/component.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/components/page-header/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/page-header/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/page-header/component.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/components/paper-card/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/paper-card/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/paper-card/component.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/components/xp-bar/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/xp-bar/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/xp-bar/component.js should pass jshint.');
  });
});
define('oscarparamo/tests/pods/index/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass jshint.');
  });
});
define('oscarparamo/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('oscarparamo/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('oscarparamo/tests/test-helper', ['exports', 'oscarparamo/tests/helpers/resolver', 'ember-qunit'], function (exports, _oscarparamoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_oscarparamoTestsHelpersResolver['default']);
});
define('oscarparamo/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('oscarparamo/tests/unit/mixins/google-pageview-test', ['exports', 'ember', 'oscarparamo/mixins/google-pageview', 'qunit'], function (exports, _ember, _oscarparamoMixinsGooglePageview, _qunit) {

  (0, _qunit.module)('Unit | Mixin | google pageview');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var GooglePageviewObject = _ember['default'].Object.extend(_oscarparamoMixinsGooglePageview['default']);
    var subject = GooglePageviewObject.create();
    assert.ok(subject);
  });
});
define('oscarparamo/tests/unit/mixins/google-pageview-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/google-pageview-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/google-pageview-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/unit/pods/about/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('oscarparamo/tests/unit/pods/about/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/about/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/about/route-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/unit/pods/application/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('oscarparamo/tests/unit/pods/application/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/application/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass jshint.');
  });
});
define('oscarparamo/tests/unit/pods/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('oscarparamo/tests/unit/pods/index/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/index/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('oscarparamo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
