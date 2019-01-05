QUnit.test('client/templates/book.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'client/templates/book.hbs should pass TemplateLint.\n\nclient/templates/book.hbs\n  4:4  error  Closing tag `h1` (on line 4) did not match last open tag `h2` (on line 4).  undefined\n');
});
