# retext-preset-github

GitHub prose style.

[Learn more about presets in unified’s docs][docs].

## Installation

```sh
npm install retext-preset-github --save
```

## Checks

###### Natural Language

* Two [spaces][] between sentences
* Checks ["indefinite articles"][articles]: "a" or "an"
* Checks [quotes and apostrophes][quotes] (`“”` > `""`)
* Checks accidental [repeated words][repeated]
* Checks [diacritics][]
* Checks [redundant acronyms][ras]
* Checks incorrectly placed apostrophes in [contractions][]

## Related

* [`remark-preset-github`](https://github.com/niftylettuce/remark-preset-github) - GitHub markdown style

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[spaces]: https://github.com/wooorm/retext-sentence-spacing

[articles]: https://github.com/wooorm/retext-indefinite-article

[quotes]: https://github.com/wooorm/retext-quotes

[repeated]: https://github.com/wooorm/retext-repeated-words

[contractions]: https://github.com/wooorm/retext-contractions

[diacritics]: https://github.com/wooorm/retext-diacritics

[ras]: https://github.com/wooorm/retext-redundant-acronyms

[docs]: https://github.com/unifiedjs/unified#preset
