'use strict';

module.exports = (num, len) => {
  num = String(num);
  let bump;

  for (let i = len; i >= 0 && i <= num.length - 1; i--) {
    if (i === len) {
      if (Number(num[i]) > 5) bump = true;
    } else if (bump) {
      let n = Number(num[i]) + 1;
      num = num.substr(0, i) + String(n % 10) + num.substr(i + 1);
      if (n >= 10) {
        bump = true;
      } else {
        bump = false;
      }
    }
  }

  if (bump) throw new Error('Overflow!');

  return num.slice(0, len);
}

if (!module.parent) require('tap').test(t => {
  const round = module.exports;

  t.equal(round('129', 4), '129');
  t.equal(round('129', 3), '129');
  t.equal(round('129', 2), '13');
  t.equal(round('129', 1), '1');
  t.equal(round('149', 1), '1');
  t.throws(() => round('99', 1));
  
  t.end();
});
