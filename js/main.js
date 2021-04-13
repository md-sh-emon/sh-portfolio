jQuery(document).ready(function(){
    jQuery('.portfolio-menu').on('click', 'li', function(){
        jQuery(this).addClass('active').siblings().removeClass('active');
    });
    var mixer = mixitup('.portfolio-gallery-container');
});