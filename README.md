# behave-ui-konami
A Marionette Behavior that allows you to add "Konami" code functionality to any view.

## Usage:

```
npm install --save behave-ui-konami
```

Then just require and use as you would any other behavior:

```
var Konami = require('behave-ui-konami'),
    _ = require('underscore');

var View = Marionette.ItemView.extend({
    template: _.template('<h1>Konami!!</h1>'),
    behaviors: {
        Konami: {
           behaviorClass: Konami,
           options: {
                // change to any key combo
                code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
            }
        }
    },
    initialize: function() {
        this.on('konami', function() {
            // easter egg!
        });
    },
    onKonami: function() {
        // easter egg!
    }
});
```

## Dev

To setup the dev environment just run `npm install`
You can then run `grunt watch` to automagically run tests and jshint

## Test

To run tests run either `npm test` or `grunt test`, former is an alias for the latter.

## Release History

- 0.0.1 - Initial Release
- 0.0.2 - Tests added
- 0.0.3 - README updated
- 0.0.4 - README style updates