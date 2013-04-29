(function() {
    'user strict';
    /**
     * @param {object} element jQuery element.
     * @param {string} name CSS name.
     * @param {string} value CSS value.
     * @param {boolean} [prefix=false] true if prefix is necessary, false otherwise.
     */
    var css = function(element, name, value, prefix) {
        element.css(name, value);
        if (prefix === true) {
            element.css('-webkit-' + name, value);
            element.css('-moz-' + name, value);
            element.css('-ms-' + name, value);
        }
    };
    $(function() {
        var target = $('#target');
        var data = {
            cssTable: CS.table
        };
        var html = new EJS({
            url: 'ejs/sample.ejs'
        }).render(data);
        $('#list').html(html);
        $('input[type=radio]').each(function() {
            var self = $(this);
            self.parent().find('select,input[type!="radio"]').on('change', function() {
                self.attr({
                    checked: 'checked'
                });
                target.css(self.attr('name'), $(this).val());
            });
        });
        $('input[type=radio]').on('change', function() {
            var self = $(this);
            var element = self.parent().find('select,input[type!="radio"]');
            var prefix = ('input[type="hidden"][name=' + self.attr('name') + ']');
            if (element.length > 0) {
                css(target, self.attr('name'), element.val(), prefix);
            } else {
                css(target, self.attr('name'), null, prefix);
            }
        });
    });
}).call(this);
