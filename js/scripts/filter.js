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
