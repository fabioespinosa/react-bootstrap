#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all components from the src/index.tsx file
const indexPath = path.join(__dirname, '../src/index.tsx');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Extract component names from export statements
const componentExports = indexContent
  .split('\n')
  .filter((line) => line.startsWith('export { default as'))
  .map((line) => {
    const match = line.match(/export \{ default as (\w+) \}/);
    return match ? match[1] : null;
  })
  .filter(Boolean);

console.log('Creating component packages for:', componentExports);

// Create individual component folders inside lib directory
componentExports.forEach((component) => {
  const componentDir = path.join(__dirname, '..', 'lib', component);

  // Create directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  // Create package.json for this component
  const packageJson = {
    name: `react-bootstrap-3-only-modal/${component}`,
    private: true,
    main: `../cjs/${component}.js`,
    module: `../esm/${component}.js`,
    types: `../esm/${component}.d.ts`,
  };

  const packageJsonPath = path.join(componentDir, 'package.json');
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n',
  );

  console.log(`✅ Created lib/${component}/package.json`);
});

console.log('\n🎉 All component packages created successfully!');
