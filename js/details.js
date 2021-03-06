﻿var apiKey = 'bfb94ae6dba3bb6d845da2c9830f097b';
var id = window.location.href.split('id=').pop();

$(document).ready(function () {
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + apiKey + '&append_to_response=videos,images,credits,reviews,similar'
    })
    .error(function (e) {
        console.log(e.message);
    })
    .done(function (data) {
        console.log(data);
        $('.hero').append('<img class="backdrop" src="http://image.tmdb.org/t/p/w780/' + data.backdrop_path + '"/>');
        $('#poster').append('<img src="http://image.tmdb.org/t/p/w500/' + data.poster_path + '"/>');
        $('#trailer').append('<iframe class="trailer" src="https://www.youtube.com/embed/' + data.videos.results[0].key + '" frameborder="0" allowfullscreen></iframe>');
        $('#details').append('<h3>' + data.title + '</h3><h4 class="tagline">' + data.tagline + '</h4><h4>Date</h4><p>' + data.release_date + '</p><h4>Overview</h4><p>' + data.overview + '</p><h4>Genres</h4><p>' + data.genres[0].name + ', ' + data.genres[1].name + ', ' + data.genres[2].name + '</p></div>');
        for (var i = 0; i < data.similar.results.length; i++) {
            $('#similar').append('<div class="col-xs-12 col-md-6 movie-card"><div class="col-xs-12 col-md-5 col-lg-4"><a href="details.html?id=' + data.similar.results[i].id + '"><img src="http://image.tmdb.org/t/p/w185/' + data.similar.results[i].poster_path + '"/></a></div><div class="col-xs-12 col-md-7 col-lg-8"><h3>' + data.similar.results[i].title + '</h3>' + '<p><span class="release-date">' + data.similar.results[i].release_date + '</span><span class="overview">' + data.similar.results[i].overview + '</span></p><p><a href="details.html?id=' + data.similar.results[i].id + '">View Movie Details</a></div></div>');
        }
    });
    $('a#back').on('click', function () {
        location.href = document.referrer;
    });
});
