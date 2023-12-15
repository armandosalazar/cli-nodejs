#!/usr/bin/env node

require('./src/commands');

(async () => {
  require('./src/db')();
})();