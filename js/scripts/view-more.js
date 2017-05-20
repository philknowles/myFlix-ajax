//Setting the more button so content displays in increments
$('.btn-more').on('click', function () {
    $('#card-container #card-filter:hidden').slice(0, 3).slideDown();
    if ($('#card-container #card-filter:hidden').length == 0) {
        $('.btn-more').fadeOut('slow');
    }
});