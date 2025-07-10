#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Adjust package.json for publishing from lib directory
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Create a copy for the lib directory with adjusted paths
const libPackageJson = {
  ...packageJson,
  main: 'cjs/index.js',
  module: 'esm/index.js',
  types: 'esm/index.d.ts',
  exports: {
    './package.json': './package.json',
    '.': {
      require: {
        types: './cjs/index.d.ts',
        default: './cjs/index.js',
      },
      import: {
        types: './esm/index.d.ts',
        default: './esm/index.js',
      },
    },
    './*': {
      require: {
        types: './cjs/*.d.ts',
        default: './cjs/*.js',
      },
      import: {
        types: './esm/*.d.ts',
        default: './esm/*.js',
      },
    },
  },
};

// Write the adjusted package.json to lib directory
const libPackageJsonPath = path.join(__dirname, '..', 'lib', 'package.json');
fs.writeFileSync(
  libPackageJsonPath,
  JSON.stringify(libPackageJson, null, 2) + '\n',
);

console.log('✅ Created lib/package.json for publishing');
