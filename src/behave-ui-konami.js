'use strict';

var Marionette = require('backbone.marionette'),
    Konami;

Konami = Marionette.Behavior.extend({
    defaults: {
        code : [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    },
    events: {
        'keyup': '_konami',
    },
    initialize: function() {
        this.cache = [];
    },
    _konami: function(e) {
        if (this.options.code.length > this.cache.push(e.which)) return;
        if (this.options.code.length < this.cache.length) this.cache.shift();
        if (this.options.code.toString() !== this.cache.toString()) return;
        this.view.trigger('konami');
        this.view.triggerMethod('konami');
    }
});

module.exports = Konami;
