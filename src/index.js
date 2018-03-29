
import text from './examples/text';
import clock from './examples/clock';
import paint from './examples/paint';
import pattern from './examples/pattern';
import shadow from './examples/shadow';

import * as extract from './core/extract';

const version = '__PKG_VERSION__';
function hello() {
  console.log('hello world');
}

export {
  shadow,
  pattern,
  extract,
  paint,
  text,
  clock,
  version,
  hello
};
