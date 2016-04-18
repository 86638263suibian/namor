import test from 'ava'
import * as generate from '../src/generate'

// -----------------------------------------------------------------------------
// generate()
// -----------------------------------------------------------------------------

test('generate()', (t) => {
  const string1 = generate.default()
  t.is(typeof string1, 'string')
  t.truthy(string1.match(/-/g).length === 2)

  const string2 = generate.default({ words: 3 })
  t.is(typeof string2, 'string')
  t.truthy(string2.match(/-/g).length === 3)

  const string3 = generate.default({ words: 4 })
  t.is(typeof string3, 'string')
  t.truthy(string3.match(/-/g).length === 4)

  const string4 = generate.default({ words: 1 })
  t.is(typeof string4, 'string')
  t.truthy(string4.match(/-/g).length === 1)

  const string5 = generate.default({ words: 1, numLen: 0 })
  t.is(typeof string5, 'string')
  t.falsy(string5.match(/-/g))

  const string6 = generate.default({ words: 3, numLen: 0 })
  t.is(typeof string6, 'string')
  t.truthy(string6.match(/-/g).length === 2)

  const string7 = generate.default({ words: 3, numLen: 10 })
  t.is(typeof string7, 'string')
  t.truthy(parseInt(string7.slice(-10), 10) > 999999999)

  const string8 = generate.default({ words: 2, numLen: 2 })
  t.is(typeof string8, 'string')
  t.truthy(parseInt(string8.slice(-2), 10) > 9)

  const string9 = generate.default({ manly: true })
  t.is(typeof string9, 'string')
  t.truthy(string9.match(/-/g).length === 2)

  t.throws(() => generate.default({ words: 5 }))
  t.throws(() => generate.default({ words: 0 }))
  t.throws(() => generate.default({ words: -1 }))
  t.throws(() => generate.default({ words: 2, numLen: -1 }))
})
