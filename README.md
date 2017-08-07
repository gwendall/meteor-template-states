```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

Meteor Template States
=================

Template states for Blaze

Installation  
------------

``` sh
meteor add gwendall:template-states
```

Methods
----------

**template.state(key)**  
Gets a template state  

**template.state(key, value)**  
Sets a template state  

Example
-------  

Declare your states in ```onCreated``` hooks

``` javascript
Template.post.onCreated(function() {
  this.state('loading', false);
})
```  

The states are then available in your templates.  

``` javascript
Template.post.events({
  'submit form': function(e, tpl) {
    tpl.state('loading', true);
    Meteor.call('post.create', { ... }, function(err, res) {
      tpl.state('loading', false);
      // Do something else
    });
  }
})
```  

``` html
  <template name="post">
    {{#if loading}}
      Loading...
    {{/if}}
  </template>
```
