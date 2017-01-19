import data from '../data.json'
import { randomFromArray, randomNumber } from './random'

/**
 * generate a random name
 * @param {int} wordCount - The number of words to include
 * @param {int} numCount - The length of the appended number
 */
export default function (opts = {}) {
  /* start deprecations */
  if (opts.numLen) {
    console.log('namor: "numLen" is now deprecated, use "numCount" instead')
    opts.numCount = opts.numLen
  }
  if (opts.words) {
    console.log('namor: "words" is now depcrecated, use "wordCount" instead')
    opts.wordCount = opts.words
  }
  /* end deprecations */

  opts.numCount = !opts.numCount && opts.numCount !== 0
    ? 4 : parseInt(opts.numCount, 10)

  opts.wordCount = !opts.wordCount && opts.wordCount !== 0
    ? 2 : parseInt(opts.wordCount, 10)

  if (opts.wordCount < 1) {
    throw new Error('word count must be above 0')
  }
  if (opts.wordCount > 4) {
    throw new Error('word count cannot be above 4')
  }
  if (opts.numCount < 0) {
    throw new Error('number length must be above 0')
  }

  let pattern
  switch (opts.wordCount) {
    case 1:
      pattern = 'noun'
      break
    case 2:
    default:
      pattern = randomFromArray(['adjective|noun', 'noun|verb'])
      break
    case 3:
      pattern = 'adjective|noun|verb'
      break
    case 4:
      pattern = 'adjective|noun|noun|verb'
      break
  }

  let name = ''
  const splitPattern = pattern.split('|')

  for (let i = 0; i < splitPattern.length; i++) {
    const wordsToChooseFrom = opts.manly
      ? data.manly[`${splitPattern[i]}s`]
      : data[`${splitPattern[i]}s`]

    name += randomFromArray(wordsToChooseFrom) + '-'
  }

  name += opts.numCount ? randomNumber(opts.numCount) : ''
  /* remove trailing dash */
  if (name.slice(-1) === '-') name = name.slice(0, -1)

  return name
}
