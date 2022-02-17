(function () {
    const jquery_version = '3.4.1';
    const site_url = 'https://dominikk.net/';
    const static_url = site_url + 'static/';
    const min_width = 100;
    const min_height = 100;

    function bookmarklet() {
        const css = jQuery('<link>');
        css.attr({
            rel: 'stylesheet',
            type: 'text/css',
            href: static_url + 'css/bookmarklet.css?r=' + Math.floor(Math.random() * 99999999999999999999)
        });
        jQuery('head').append(css);

        const box_html = '<div id="bookmarklet"><a href="#" id="close">&times;</a><h1>Select an image to bookmark:</h1><div class="images"></div></div>';
        jQuery('body').append(box_html);

        jQuery('#bookmarklet #close').click(function () {
            jQuery('#bookmarklet').remove();
        });
        jQuery.each(jQuery('img[src$="jpg"]'), function (index, image) {
            if (jQuery(image).width() >= min_width && jQuery(image).height()
                >= min_height) {
                const image_url = jQuery(image).attr('src');
                jQuery('#bookmarklet .images').append('<a href="#"><img src="' +
                    image_url + '"  alt="Image"/></a>');
            }
        });

        jQuery('#bookmarklet .images a').click(function () {
            const selected_image = jQuery(this).children('img').attr('src');
            jQuery('#bookmarklet').hide();
            window.open(site_url + 'images/create/?url='
                + encodeURIComponent(selected_image)
                + '&title='
                + encodeURIComponent(jQuery('title').text()),
                '_blank');
        });

    }

    if (typeof window.jQuery != 'undefined') {
        bookmarklet();
    } else {
        const script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/' +
            jquery_version + '/jquery.min.js';
        document.head.appendChild(script);
        let attempts = 15;
        (function () {
            if (typeof window.jQuery == 'undefined') {
                if (--attempts > 0) {
                    window.setTimeout(arguments.callee, 250)
                } else {
                    alert('An error occurred while loading jQuery')
                }
            } else {
                bookmarklet();
            }
        })();
    }
})()
