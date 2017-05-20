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
