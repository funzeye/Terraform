$(document).ready(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        if (this.hash != "#navigation-toggle") {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        } //added this outside IF to prevent scroll when menu appears on mobile screen size
        return false;
    });
});