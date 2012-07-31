var ejs = require('ejs');
var utl = require('util');

var pattern = "<% if (user) { %><h2><%= user.name %></h2><% } %>"

var tmpl = ejs.compile(pattern)

utl.debug( utl.inspect( tmpl({ 'user' : { 'name': 'john' } })  ) )
