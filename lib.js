Blaze.TemplateInstance.prototype.state = function(key, value) {
  if (!key) return;
  var tpl = this || {};
  if (typeof value === 'undefined') {
    return tpl[key] && tpl[key].get && tpl[key].get();
  } else {
    if (tpl[key]) {
      tpl[key].set(value);
    } else {
      tpl[key] = new ReactiveVar(value);
      var tplName = tpl.view.name.split('.').splice(1).join('.');
      attachTemplateHelper(tplName, key);
    }
  }
}

var attachTemplateHelper = function(tplName, key) {
  var helpers = {};
  helpers[key] = function() {
    var tpl = Template.instance() || {};
    return tpl[key] && tpl[key].get && tpl[key].get();
  }
  Template[tplName].helpers(helpers);
}
