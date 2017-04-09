$(function() {
    /*$('.bxslider').bxSlider({
		  auto: false,
		  pager:false,
		   
});*/
    /* Login page js starts here */
	
	$('body').on('click','.my_queue_list_area ul li', function(){
		
		window.location.href = 'myqueue_transaction.htm';
		
		});
    if ($('.login-form').hasClass('login-active')) { //alert('hasClass');
        $('.login-field').find('input[type=text],input[type=password],select').removeAttr('disabled');
        $('.top-cabinet-field').css('display', 'none');
        $('.cabinet-field-down').removeClass('disabled-select');
        $('.top-cabinet-field').find('select').attr('disabled', 'disabled');
        $('.arrow_box').css('visibility', 'hidden');
    } else { //alert('find');
        $('.login-field').find('input[type=text],input[type=password],select').attr('disabled', 'disabled');
        $('.top-cabinet-field').css('display', 'block');
        $('.cabinet-field-down').addClass('disabled-select');
        $('.top-cabinet-field').find('select').removeAttr('disabled');
        $('.arrow_box').css('visibility', 'visible');
    }
    $('.top-cabinet-field').find('select').change(function() {
        $('.login-field').find('input[type=text],input[type=password],select').removeAttr('disabled');
        $('.cabinet-field-down').removeClass('disabled-select');
    });
    /* Login page js ends here */
    $('.form_row #Name').select();
    $('.search-input').focus(function() {
        $('.search-section i').show('fast');
    });
    $(".modal").on('shown.bs.modal', function() {
        $('.editfolder-input #myTextInput').select();
    });
    $('.search-input').blur(function() {
        $('.search-section i').hide('fast');
    });
    $('#Add_Remark').click(function() {
        $(this).hide();
        $('#Textarea_Remarks').show();
    });
    $('#Data_Class').change(function() {
        $('.outer_form').show(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                showOn: "button",
                buttonImage: "images/calendar.gif",
                buttonImageOnly: true,
                buttonText: "Select date"
            });
        });
    });
    $('.more_folder ul li.prop').click(function() {
        $('.more_folder').toggleClass('active');
    });
    $('.inside_folder').click(function() {
        location.href = "search_tab.htm";
    });
    $('.Passport_img').click(function() {
        location.href = "preview-image.html";
    });
    $('.back_arrow').click(function() {
        $('.preview_edit').fadeOut(1000);
    });
    $('.preview-edit-icon').click(function() {
        $('.preview_edit').fadeIn(1000);
    });
    $('.preview-search-icon').click(function() {
        $('.filter-icon,.dropdown,.back-icon').css('visibility', 'hidden');
        $('.menu-icon,.header-heading').fadeOut('fast');
        $('.preview-search-icon').animate({
            'left': '20px'
        }).fadeIn(function() {
            $('.search_area').delay('100').fadeIn();
        });
        $('.pull-right .swipe li').parent().parent('.pull-right').removeClass('active');
        $('.pull-right .swipe li').parent().parent('.pull-right').siblings('.pull-left').removeClass('active');
        //$('.search_area').fadeIn();
    });
    $('.search_right a').click(function() {
        $('.filter-icon,.dropdown,.back-icon').css('visibility', 'visible');
        $('.menu-icon,.header-heading').fadeIn();
        $('.preview-search-icon').animate({
            'right': '141px',
            'left': 'auto'
        }).fadeIn(function() {
            $('.search_area').delay('fast').fadeOut();
        });
        //$('.search_area').fadeIn();
    });
    if ($(window).width() <= 480) {
        $('.search_right a').click(function() {
            $('.preview-search-icon').animate({
                'right': '69px'
            }).fadeIn(function() {
                $('.search_area').delay('fast').fadeOut();
            });
            //$('.search_area').fadeIn();
        });
        $('.preview-search-icon').click(function() {
            $('.search_top strong img').attr('src', 'images/preview-search-icon-small.png');
        });
    }
    var imgHeight = $('.swiper-wrapper img').height();
    $('.swiper-wrapper').css('height', imgHeight);
    $('.swiper-wrapper').find('img.active').next('img').css({
        'left': 'auto',
        'right': '-103%',
        'display': 'block'
    });
    $('.swiper-wrapper').find('img.active').prev('img').css({
        'left': '-103%',
        'display': 'block'
    });
    $('.left_arrow').click(function() {
        $('.swiper-wrapper').find('img.active').css('display', 'none');
        $('.swiper-wrapper').find('img.active').prevAll('img').removeClass('active');
        $('.swiper-wrapper').find('img.active').nextAll('img').removeClass('active').css({
            'left': 'auto',
            'right': '0',
            'display': 'none'
        });
        $('.swiper-wrapper').find('img.active').removeClass('active').prev('img').css({
            'left': 'auto',
            'right': '0',
            'display': 'block'
        }).addClass('active').next('img').css({
            'left': 'auto',
            'right': '-103%',
            'display': 'block'
        });
    });
    $('.right_arrow').click(function() {
        $('.swiper-wrapper').find('img.active').css('display', 'none');
        $('.swiper-wrapper').find('img.active').prevAll('img').removeClass('active');
        $('.swiper-wrapper').find('img.active').nextAll('img').removeClass('active');
        $('.swiper-wrapper').find('img.active').removeClass('active').next('img').css({
            'left': 'auto',
            'right': '0',
            'display': 'block'
        }).addClass('active').next('img').css({
            'left': 'auto',
            'right': '-103%',
            'display': 'block'
        });
    });
    $('.wheel-button').click(function() {
        $(this).parents('#rightdown-menu-view').toggleClass('active');
        $('.wheel-button').toggleClass('active');
        $('#rightdown-menu-view ul').toggleClass('active');
        $('.pull-right .swipe li').parent().parent('.pull-right').removeClass('active');
        $('.pull-right .swipe li').parent().parent('.pull-right').siblings('.pull-left').removeClass('active');
    });
    /* Datepicker js starts here*/
    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        buttonImage: "images/calendar.gif",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    $("#from").datepicker({
        showOn: "button",
        buttonImage: "images/calendar-icon_enable.png",
        buttonImageOnly: true,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function(selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#to").datepicker({
        showOn: "button",
        buttonImage: "images/calendar-icon_enable.png",
        buttonImageOnly: true,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function(selectedDate) {
            $("#from").datepicker("option", "maxDate", selectedDate);
        }
    });
    $("#fromFolder").datepicker({
        showOn: "button",
        buttonImage: "images/calendar-icon_enable.png",
        buttonImageOnly: true,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function(selectedDate) {
            $("#toFolder").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#toFolder").datepicker({
        showOn: "button",
        buttonImage: "images/calendar-icon_enable.png",
        buttonImageOnly: true,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function(selectedDate) {
            $("#fromFolder").datepicker("option", "maxDate", selectedDate);
        }
    });
    /* Datepicker js ends here*/
    /* tab js starts here*/
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs01 li:first a").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content
    $(".tab_content01").hide(); //Hide all content
    $("ul.tabs02 li:first a").addClass("active").show(); //Activate first tab
    $(".tab_content01:first").show(); //Show first tab content
    $(".tab_content02").hide(); //Hide all content
    $("ul.tabs03 li:first a").addClass("active").show(); //Activate first tab
    $(".tab_content02:first").show(); //Show first tab content
    //On Click Event
    $("ul.tabs01 li a").click(function() {
        $('.dropdown').removeClass('open');
        $('aside,.menu-icon').removeClass('active');
        $("ul.tabs01 li a").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        $('aside,.menu-icon').removeClass('active');
        $('.pull-right .swipe li').parent().parent('.pull-right').removeClass('active');
        $('.pull-right .swipe li').parent().parent('.pull-right').siblings('.pull-left').removeClass('active');
        return false;
    });
    $("ul.tabs02 li a").click(function() {
        $('.dropdown').removeClass('open');
        $('aside,.menu-icon').removeClass('active');
        $("ul.tabs02 li a").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content01").hide(); //Hide all tab content
        var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        $('aside,.menu-icon').removeClass('active');
        return false;
    });
    $("ul.tabs03 li a").click(function() {
        $('.dropdown').removeClass('open');
        $('aside,.menu-icon').removeClass('active');
        $("ul.tabs03 li a").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content02").hide(); //Hide all tab content
        var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        $('aside,.menu-icon').removeClass('active');
        return false;
    });
    /* tab js ends here*/
    $('.search-star').click(function() {
        $('.saved_searched_criteria').slideDown();
    });
    $('.saved_searched_criteria_header a').click(function() {
        $('.saved_searched_criteria').slideUp();
    });
    $('.modal-text input[value=Done]').click(function() {
        $('.search_criteria').fadeIn().delay('1000').fadeOut();
    });
    $('.form_search,#page-container-view,.tab_area').click(function() {
        $('.saved_searched_criteria').slideUp();
    });
    $('#DatePeriod,label[for=DatePeriod],#DatePeriodFolder,label[for=DatePeriodFolder]').click(function() {
        $('.date_period').find('select').removeAttr('disabled').css('color', '#313131');
        $("#from,#to,#fromFolder,#toFolder").datepicker("destroy");
        $('.disable_icon').css('display', 'block');
        $('.field_container .date_section input[type=text]').addClass('disabled_date');
    });
    $('#DateRange,label[for=DateRange],#DateRangeFolder,label[for=DateRangeFolder]').click(function() {
        if ($('.date_section .select_row').hasClass('select_mandatory')) {
            $('.select_row').removeClass('select_mandatory');
        }
        $('.date_period').find('select').attr('disabled', 'disabled').css('color', '#797979');
        $('.disable_icon').css('display', 'none');
        $('.field_container .date_section input[type=text]').removeClass('disabled_date');
        /* Datepicker js starts here*/
        $("#from").datepicker({
            showOn: "button",
            buttonImage: "images/calendar-icon_enable.png",
            buttonImageOnly: true,
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function(selectedDate) {
                $("#to").datepicker("option", "minDate", selectedDate);
            }
        });
        $("#to").datepicker({
            showOn: "button",
            buttonImage: "images/calendar-icon_enable.png",
            buttonImageOnly: true,
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function(selectedDate) {
                $("#from").datepicker("option", "maxDate", selectedDate);
            }
        });
        $("#fromFolder").datepicker({
            showOn: "button",
            buttonImage: "images/calendar-icon_enable.png",
            buttonImageOnly: true,
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function(selectedDate) {
                $("#toFolder").datepicker("option", "minDate", selectedDate);
            }
        });
        $("#toFolder").datepicker({
            showOn: "button",
            buttonImage: "images/calendar-icon_enable.png",
            buttonImageOnly: true,
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function(selectedDate) {
                $("#fromFolder").datepicker("option", "maxDate", selectedDate);
            }
        });
        /* Datepicker js ends here*/
    });
    $('.tab_area .tab_section  input[type=text]').focus(function() {
        $(this).addClass('mandatory');
        $('.select_row').removeClass('select_mandatory');
        if ($('.date_section input[type=text]').hasClass('disabled_date')) {
            $('.date_section input[type=text]').removeClass('mandatory');
        }
    });
    $('.tab_area .tab_section  input[type=text]').blur(function() {
        $(this).removeClass('mandatory');
    });
    $('.select_row select').change(function() {
        $(this).parents('.field_container').find('.select_row').removeClass('select_mandatory');
        $(this).parent('.select_row').addClass('select_mandatory');
    });
    $(".datepicker_text").datepicker();
});