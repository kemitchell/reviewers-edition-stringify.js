This package exports a single function. The function takes a single argument of the kind returned from [reviewers-edition-parse][parse]. It returns a short string for the Reviewers Edition.

```javascript
var stringify = require('reviewers-edition-stringify')
```

[parse]: https://www.npmjs.com/packages/reviewers-edition-parse

# Examples

The following examples are also the test suite for the parser. The tests
use Node.js' built-in `assert` module.

```javascript
var assert = require('assert')

assert.equal(
  stringify({edition: 1}),
  '1e'
)

assert.equal(
  stringify({edition: 1, update: 1}),
  '1e1u'
)

assert.equal(
  stringify({edition: 1, update: 1, correction: 1}),
  '1e1u1c'
)

assert.equal(
  stringify({edition: 1, update: 1, draft: 1}),
  '1e1u1d'
)

assert.equal(
  stringify({edition: 1, update: 1, correction: 1, draft: 1}),
  '1e1u1c1d'
)

assert.equal(
  stringify({edition: 1, correction: 1}),
  '1e1c'
)

assert.equal(
  stringify({edition: 1, correction: 1, draft: 1}),
  '1e1c1d'
)

assert.equal(
  stringify({edition: 1, draft: 1}),
  '1e1d'
)
```

# reved

This package is bundled with other functions for
creating and manipulating Reviewers Editions in
[reved](https://www.npmjs.com/packages/reved).
