/**
 * JONNU menu
 */

if (typeof SKYPE == 'undefined') {
    var JONNU = {};
}

JONNU.menu = function () {

    var _sections = $('#menu > li > ul'),
        _options  = { closeSelf: false, closeOthers: false };

    return {
        init: function ($, options) {

            _options = $.extend(_options, options || {});

            $('#menu').on('click', 'li > a', function (event) {
                event.preventDefault();
                JONNU.menu.onClick($(this));
            });

            this.reset();
        },
        onClick: function (item, closeOthers, closeSelf) {
            closeOthers = closeOthers || _options.closeOthers;
            closeSelf   = closeSelf   || _options.closeSelf;
            sectionItem = item.siblings('ul');

            if (sectionItem.hasClass('open') && closeSelf) {
                this.close(sectionItem);
            }
            else {
                this.open(sectionItem);
            }

            if (closeOthers) {
                this.close(_sections.not(sectionItem));
            }
        },
        setTransition: function (type, properties) {
            _transitions.type = properties;
        },
        open: function (item) {
            item.removeClass('closed');
            item.slideDown();
            item.addClass('open');
        },
        close: function (item) {
            item.removeClass('open');
            item.slideUp();
            item.addClass('closed');
        },
        reset: function () {
            _sections.addClass('closed');
        }
    };
}();
