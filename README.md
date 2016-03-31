<div align="center">
<img src="https://github.com/jsonmaur/namor/raw/master/assets/namor.png">
</div>
<br> <br>

[![Build Status](https://travis-ci.org/jsonmaur/namor.svg?branch=master)](https://travis-ci.org/jsonmaur/namor)
[![Coverage Status](https://coveralls.io/repos/github/jsonmaur/namor/badge.svg?branch=master)](https://coveralls.io/github/jsonmaur/namor?branch=master)

A name generator for Javascript that generates random, url-friendly names. This comes in handy if you need to generate unique subdomains (like Heroku does), or unique names for anything else. You can also specify a "manly" mode, which only generates names of a rugged nature. Works in Node.js and web browsers.

> *Please Note: Generated names are not guaranteed to always be unique. To reduce the chances of collision, you can increase the length of the trailing number (see below). Always make sure you check your database before assuming a generated value is unique.*

## Getting Started

```bash
npm install namor --save
```

```javascript
var namor = require('namor')

/* defaults to two words and 4 trailing numbers */
var name = namor.generate()

/* generate with 3 words and no numbers */
var name = namor.generate({ words: 3, numLen: 0 })

/* generate manly names */
var name = namor.generate({ manly: true })
```

If you prefer UMD, you can also link directly to the build using [npmcdn](https://npmcdn.com).

```html
<script src="https://npmcdn.com/namor/namor.min.js"></script>
```

#### Some Examples

```bash
# Regular Names
pricey-note-4568
soggy-sock-2003
wing-command-4446
paper-rely-1152
historical-team-4142
goat-catch-8858
dapper-rat-3125
neat-mist-1260
open-experience-2643
marvelous-belief
holiday-steer
tearful-texture
pretty-ship
chivalrous-look
enchanting-plant

# Manly Names
bronco-brimstone-3314
pure-fireball-2782
carnal-glory-10756
saber-strike-5734
ballistic-iron-4512
hardened-jerky-4148
potent-bourbon-3517
avenged-falcon-7282
almighty-dog-run
deep-flames-dread
fiery-forge-conquer
pummeled-brawn-triumph
primal-attack-kick
```

## API

#### .generate (options = {})

- `options`
  - `words` `[default: 2, min: 1, max: 4]` - The number of words to include in the generated name. Must be a positive integer no higher than 4.
  - `numLen` `[default: 4]` - The length of the random trailing number. Must be a positive integer. It can also be set to `0` to exclude a trailing number.
  - `manly` `[default: false]` - If set to true, manly mode will be enabled which will generate names of a rugged nature.

## Testing and Contributing

```bash
git clone https://github.com/jsonmaur/namor.git
cd namor
npm install

npm test
npm run build
```

If you want to contribute or come across an issue that you know how to fix, [just do it](https://www.youtube.com/watch?v=ZXsQAXx_ao0). Pull requests are better than issues.
