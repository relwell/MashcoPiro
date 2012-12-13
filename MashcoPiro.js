var killGuide = function() {
    jQuery('#guide').remove();
    jQuery('.site-left-aligned.guide-enabled .watch7-playlist, .site-left-aligned.guide-enabled #watch7-video-container, .site-left-aligned.guide-enabled #watch7-main-container').css('padding-left', '25px');
};

jQuery(document).ready(function(){killGuide();});