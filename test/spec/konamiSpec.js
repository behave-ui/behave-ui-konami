var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    Konami = require('../../src/behave-ui-konami'),
    View;

View = Marionette.ItemView.extend({
    template: _.template('<h1>Konami Behavior</h1>'),
    behaviors: {
        Konami: {
            behaviorClass: Konami,
            code: [1,2,3]
        }
    },
    onKonami: function() {}
});

describe('Konami Behavior', function() {
    var behavior;

    beforeEach(function() {
        this.view = new View();
        behavior = this.view._behaviors[0];
    });

    it('has a default `code` property that is an array containing the key codes for konami cheat', function() {
        expect(behavior.options.code).toBeDefined();
        expect(Konami.prototype.defaults.code).toEqual([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]);
    });

    it('has a `cache` property that is created when initialized', function() {
        expect(behavior.cache).toBeDefined();
    });

    it('has a `_konami` method that is called on it\'s view\'s keyup event', function() {
        expect(behavior._konami).toBeDefined();
    });

    describe('the `_konami` method', function() {
        it('will cache a keycode if the length of the cache is less than the length of the code', function() {
            behavior._konami({ which: 1 });
            expect(behavior.cache.length).toEqual(1);
        });

        it('will shift out the first key code in the cache if the length of the cache exceeds the length of the code', function() {
            behavior.cache = [1, 3, 4];
            behavior._konami({ which: 5 });
            expect(behavior.cache.length).toEqual(3);
            expect(behavior.cache[0]).toEqual(3);
        });

        describe('when the cache matches the code', function() {
            it('will trigger a `konami` event, and call a `onKonami` method if one is found on the view ', function() {
                spyOn(this.view, 'trigger');
                spyOn(this.view, 'onKonami');
                behavior.cache = [1, 2];
                behavior._konami({ which: 3 });
                expect(this.view.trigger).toHaveBeenCalledWith('konami');
                expect(this.view.onKonami).toHaveBeenCalled();
            });
        });
    });
});
