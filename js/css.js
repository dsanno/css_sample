(function() {
    'user strict';
    /**
     * set css
     * 
     * @param {object} element jQuery element.
     * @param {string} name CSS name.
     * @param {string} value CSS value.
     * @param {boolean} [prefix=false] true if prefix is necessary, false otherwise.
     */
    var setCss = function(element, name, value, prefix) {
        element.css(name, value);
        if (prefix === true) {
            element.css('-webkit-' + name, value);
            element.css('-moz-' + name, value);
            element.css('-ms-' + name, value);
        }
    };
    $(function() {
        var data = {
            cssTable: CS.table
        };
        var html = new EJS({
            text: $('#template').text()
        }).render(data);
        $('#list').html(html);
        $('input[type=radio]').each(function() {
            var self = $(this);
            var prefix = Boolean($('input[type="hidden"][name=' + self.attr('name') + ']').val());
            self.parent().find('select,input[type!="radio"]').on('change', function() {
                $('input[type=radio][name=' + self.attr('name') + ']').val([self.val()]);
                var target = $('#target');
                setCss(target, self.attr('name'), $(this).val(), prefix);
            });
        });
        $('input[type=radio]').on('change', function() {
            var self = $(this);
            var target = $('#target');
            var element = self.parent().find('select,input[type!="radio"]');
            var prefix = Boolean($('input[type="hidden"][name=' + self.attr('name') + ']').val());
            if (element.length > 0) {
                setCss(target, self.attr('name'), element.val(), prefix);
            } else {
                setCss(target, self.attr('name'), '', prefix);
            }
        });
    });
}).call(this);
