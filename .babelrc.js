module.exports = (api) => {
  const env = api.env();

  let dev = false;
  let setUseClient = false;
  let modules;

  switch (env) {
    case 'docs':
    case 'test':
    case 'dist-dev':
      dev = true;
      modules = false;
      break;
    case 'dist-prod':
      modules = false;
      break;
    case 'esm':
      modules = false;
      setUseClient = true;
      break;
    case 'cjs':
    default:
      modules = 'commonjs';
      setUseClient = true;
      break;
  }

  const plugins = [env === 'test' && 'istanbul'].filter(Boolean);

  // Add module resolver for ESM builds to handle dom-helpers imports
  if (env === 'esm') {
    plugins.push([
      'module-resolver',
      {
        alias: {
          'dom-helpers/canUseDOM': 'dom-helpers/esm/canUseDOM.js',
          'dom-helpers/ownerDocument': 'dom-helpers/esm/ownerDocument.js',
          'dom-helpers/scrollbarSize': 'dom-helpers/esm/scrollbarSize.js',
          'dom-helpers/transitionEnd': 'dom-helpers/esm/transitionEnd.js',
          'dom-helpers/camelize': 'dom-helpers/esm/camelize.js',
          'dom-helpers/css': 'dom-helpers/esm/css.js',
          'dom-helpers/querySelectorAll': 'dom-helpers/esm/querySelectorAll.js',
        },
      },
    ]);
  }

  return {
    presets: [
      [
        '@react-bootstrap',
        {
          dev,
          modules,
          removePropTypes: !dev,
          setUseClient,
          customClientImports: [
            'useBootstrapPrefix',
            'createWithBsPrefix',
            'useCol',
          ],
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins,
  };
};
