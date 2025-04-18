#!/usr/bin/env node

'use strict';

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});

try {
  // Import and run the CLI
  require('../dist/index.js').run(process.argv.slice(2));
} catch (err) {
  console.error('Unexpected error:', err);
  process.exit(1);
}
