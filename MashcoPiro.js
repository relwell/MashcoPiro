var killGuide = function() {
    jQuery('#guide').remove();
    jQuery('#player,#watch7-main-container').css('padding-left', '25px');
};

jQuery(document).ready(function(){killGuide();});