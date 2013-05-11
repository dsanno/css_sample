(function() {
    'use strict';
    $(function() {
        var styles = {};
        var apply;
        var update;
        apply = function(exp, name, str) {
            var css = {};
            css[name] = str;
            css['-webkit-' + name] = str;
            css['-moz-' + name] = str;
            css['-ms-' + name] = str;
            $(exp).css(css);
            if (!styles[exp]) {
                styles[exp] = {};
            }
            styles[exp][name] = str;
        };
        update = function() {
            var el = $('#css');
            var array = [];
            var str;
            var exp, name;
            for (exp in styles) {
                array.push(exp + ' {');
                for (name in styles[exp]) {
                    str = styles[exp][name];
                    array.push(name + ': ' + str + ';');
                    array.push('-webkit-' + name + ': ' + str + ';');
                    array.push('-moz-' + name + ': ' + str + ';');
                    array.push('-ms-' + name + ': ' + str + ';');
                }
                array.push('}');
            }
            el.html(array.join('<br>'));
        };
        $('#transformLeft').on('keydown', function(event) {
            switch (event.which) {
            case Sample.KeyCode.ENTER:
                apply('#left', 'transform', $('#transformLeft').val());
                update();
            }
        });
        $('#originLeft').on('keydown', function(event) {
            switch (event.which) {
            case Sample.KeyCode.ENTER:
                apply('#left', 'transform-origin', $('#originLeft').val());
                update();
            }
        });
        $('#transformRight').on('keydown', function(event) {
            switch (event.which) {
            case Sample.KeyCode.ENTER:
                apply('#right', 'transform', $('#transformRight').val());
                update();
            }
        });
        $('#originRight').on('keydown', function(event) {
            switch (event.which) {
            case Sample.KeyCode.ENTER:
                apply('#right', 'transform-origin', $('#originRight').val());
                update();
            }
        });
    });
}).call(this);
