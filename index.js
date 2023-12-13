#!/usr/local/bin/node

require('./src/commands');

(async () => {
    require('./src/db')();
})();