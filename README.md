
# round-string

Round numbers with arbitrary precision.

## Usage

```js
round('149', 3)
// => 149

round('149', 2)
// => 15

round('149', 1)
// => 1

round('99', 1)
// => throws
```

## Installation

```js
$ npm install round-string
```

## API

### round(num, len)

## Reasoning

This module operates on strings instead of numbers, because JavaScript numbers don't support arbitrary precision. Strings however can be as long as you want.

## License

  MIT
