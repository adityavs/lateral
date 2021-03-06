(function () {
  "use strict";

  var Lateral = require('./lateral').Lateral
    , lateral
    ;

  lateral = Lateral.create(function (complete, item, i) {
    var timeout = Math.round(100 + (Math.random() * 1000));
    setTimeout(function () {
      console.log(item, i, timeout);
      complete();
    }, timeout);
  }, 4);

  lateral.add('abcdefghijklmnopqrstuvwxyz'.split('')).then(function () {
    console.log('finished lowercase batch');
  });

  lateral.add('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')).then(function () {
    console.log('finished UPPERCASE batch');
  });
}());
