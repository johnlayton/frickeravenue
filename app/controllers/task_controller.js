load('application');

action('error', function() { send( 403 ); });
action('show', function() { render( { title: 'show' } ); });
