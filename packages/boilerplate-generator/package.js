Package.describe({
  summary: "Generates the boilerplate html from program's manifest",
  version: '1.3.1'
});

Package.onUse(api => {
  api.use('ecmascript');
  api.use('underscore', 'server');
  api.mainModule('generator.js', 'server');
  api.export('Boilerplate', 'server');
});
