Package.describe({
  name: 'gwendall:template-states',
  summary: 'Template states for Blaze',
  git: 'https://github.com/gwendall/meteor-template-states.git',
  version: '0.1.1'
});

Package.onUse(function (api, where) {

  api.use([
    'blaze@2.0.4',
    'reactive-var@1.0.4'
  ], 'client');

  api.addFiles([
    'lib.js',
  ], 'client');

});
