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