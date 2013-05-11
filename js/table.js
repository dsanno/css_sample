(function() {
    'use strict';
    CS = this.CS = {};
    CS.table = [
        {
            name: 'color',
            values: ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'maroon', 'olive', 'lime', 'teal', 'aqua', 'navy', 'fuchsia', 'gray', 'silver'],
            types: ['color string']
        },
        {
            name: 'writing-mode',
            values: ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
            prefix: true
        },
        {
            name: 'line-break',
            values: ['auto', 'loose', 'normal', 'strict']
        },
        {
            name: 'word-break',
            values: ['normal', 'break-all', 'keep-all', 'keep-words']
        },
        {
            name: 'text-align',
            values: ['left', 'right', 'center', 'justify', 'start', 'end', 'match-parent'],
        },
        {
            name: 'text-align-last',
            values: ['auto', 'left', 'right', 'center', 'justify', 'start', 'end'],
            prefix: true
        },
        {
            name: 'text-autospace',
            values: ['none', 'ideograph-numeric', 'ideograph-alpha', 'punctuation'],
            prefix: true
        },
        {
            name: 'text-underline-position',
            values: ['auto', 'alphabetic', 'below-left', 'below-right'],
            prefix: true
        }
    ];
}).call(this);
