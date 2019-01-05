QUnit.module('TemplateLint');

QUnit.test('client/templates/application.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'client/templates/application.hbs should pass TemplateLint.\n\nclient/templates/application.hbs\n  3:3  error  Incorrect indentation for `<i>` beginning at L3:C3. Expected `<i>` to be at an indentation of 4 but was found at 3.  block-indentation\n  4:3  error  Incorrect indentation for `<div>` beginning at L4:C3. Expected `<div>` to be at an indentation of 4 but was found at 3.  block-indentation\n  4:24  error  Incorrect indentation for `\n    My Library\n    ` beginning at L4:C24. Expected `\n    My Library\n    ` to be at an indentation of 5 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `<div>` beginning at L6:C4. Expected `<div>` to be at an indentation of 5 but was found at 4.  block-indentation\n');
});

QUnit.test('client/templates/book.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'client/templates/book.hbs should pass TemplateLint.\n\nclient/templates/book.hbs\n  4:4  error  Closing tag `h1` (on line 4) did not match last open tag `h2` (on line 4).  undefined\n');
});

QUnit.test('client/templates/books.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'client/templates/books.hbs should pass TemplateLint.\n\nclient/templates/books.hbs\n  9:17  error  Incorrect indentation for `ui-accordion` beginning at L2:C2. Expected `{{/ui-accordion}}` ending at L9:C17 to be at an indentation of 2 but was found at 0.  block-indentation\n');
});

