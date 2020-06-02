'use strict';

exports.plugins = [
  [require('retext-quotes'), {preferred: 'straight'}],
  require('retext-diacritics'),
  require('retext-redundant-acronyms'),
  require('retext-repeated-words'),
  require('retext-indefinite-article'),
  [require('retext-contractions'), {straight: true}]
];
