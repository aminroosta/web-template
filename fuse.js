const { fusebox, pluginSass } = require('fuse-box');

const [,,arg] = process.argv;

const run_dev = arg === 'run-dev';

const fb = fusebox({
  plugins: [pluginSass()],
  target: 'browser',
  entry: 'src/index.ts',
  webIndex: {
    template: 'index.html',
  },
  devServer: run_dev
});

run_dev ? fb.runDev() : fb.runProd();
