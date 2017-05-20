//By Default All selected checkboxes have the class active assigned to them.
//if ($('#filter-all').is(':checked')) {
//    $('#filter-all').parent().next().addClass('active');
//} else {
//    $('#filter-all').parent().next().removeClass('active');
//}

//Alternate class when checkbox is checked or unchecked
//$('.filter').each(function () {
//    $(this).click(function () {
//        if ($(this).is(':checked')) {
//            $(this).parent().next().toggleClass('active');
//        }
//    });
//});
//$('.navbar-toggle').on('click', function () {
//    $('.bs__side-nav').slideToggle();
//});
$(document).ready(function () {
    $('#card-container #card-filter').slice(0, 12).show();

    //if the claims reviews to show all, check all boxes
    $('#filter-all').on('click', function () {
        $('#card-container #card-filter').slice(0, 12).show();
        if ($('#filter-all').is(":checked")) {
            $('.filter-container input:checkbox').prop('checked', false);
            $('.filter-container').show();
            $(this).prop('checked', true);
            $('#card-container div[class*="filter"]').show();
        } else {
            $('input[type="checkbox"]').prop('checked', false);
            $('#card-container div[class*="filter"]').slice(12).hide();
        }
    });

    //$('div.filter-container').find('input:checkbox').on('click', function () {
    //    $('#card-container > #card-filter').hide(); // Hide cards by default

    //    $('div.filter-container').find('input:checked').each(function () {
    //        $('#card-container > div.' + $(this).attr('rel')).show();
    //    });  // Filter through the cards based on the checkbox


    //    //If all specialty checkboxes are not selected, the all claim review filter is checked by default
    //    if ($(this).is(":checked")) {
    //        console.log('checked');
    //        $('#filter-all').prop('checked', false);
    //    } else {
    //        $('#filter-all').prop('checked', true);
    //        $('#card-container > #card-filter').show();
    //    }
    //});

    $('div.filter-container').find('input:checkbox').on('click', function () {
        var card = '.' + this.id;
        $('#card-container #card-filter').hide();
        if ($(this).is(':checked')) {
            $('input:checkbox').not(this).prop('checked', false);
            console.log(card);
            $(card).slice(0, 12).show();
        } else if (!$(this).is(":checked")) {
            $('#filter-all').prop('checked', true);
            $('#card-container #card-filter').show();
        }
    });

});

$(document).ready(function () {
    $('#modal-book').on('mouseenter mouseleave', function (e) {
        if (e.type === 'mouseenter') {
            $('.modal-book').show(300);
        } else {
            $('.modal-book').hide(500);
        }
    });

    $('#modal-audio').on('mouseenter mouseleave', function (e) {
        if (e.type === 'mouseenter') {
            $('.modal-audio').show(300);
        } else {
            $('.modal-audio').hide(500);
        }
    });

    $('#modal-video').on('mouseenter mouseleave', function (e) {
        if (e.type === 'mouseenter') {
            $('.modal-video').show(300);
        } else {
            $('.modal-video').hide(500);
        }
    });
});

//Setting the more button so content displays in increments
$('.btn-more').on('click', function () {
    $('#card-container #card-filter:hidden').slice(0, 3).slideDown();
    if ($('#card-container #card-filter:hidden').length == 0) {
        $('.btn-more').fadeOut('slow');
    }
});