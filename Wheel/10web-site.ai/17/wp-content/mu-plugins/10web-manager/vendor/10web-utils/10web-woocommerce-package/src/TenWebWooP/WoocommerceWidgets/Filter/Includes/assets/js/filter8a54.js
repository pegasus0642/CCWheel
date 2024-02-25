jQuery(document).ready(function() {
    jQuery('.js-example-basic-multiple').select2();
    jQuery('.twwf_field_header').click(function (){
        let twwf_open_close_field = jQuery(this).find('.twwf_open_close_field');
        let field_id = twwf_open_close_field.data('field_id');
        let field = jQuery('#'+field_id);
        if(twwf_open_close_field.hasClass('twwf_close')){
            twwf_open_close_field.removeClass('twwf_close');
            field.removeClass('twwf_hide_field');
        }else{
            twwf_open_close_field.addClass('twwf_close');
            field.addClass('twwf_hide_field');
        }
        twwf_calculate_form_height();
    });

});