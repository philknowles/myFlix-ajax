var apiKey = 'bfb94ae6dba3bb6d845da2c9830f097b';
var url = 'http://api.themoviedb.org/3/',
    mode = 'search/movie?query=',
    input,
    movieName,
    page = 0;


//Main Display of data
$(document).ready(function () {

    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=' + apiKey + '&append_to_response=videos,images' //General popular movies
        //url: url + mode + input + apiKey,
    })
    .error(function (e) {
        console.log(e.message);
    })
    .success(function (data) {
        console.log(data);
        $('.hero').append('<img class="backdrop" src="http://image.tmdb.org/t/p/w780/' + data.results[2].backdrop_path + '"/>');
        $('.hero').append('<div class="col-md-12"><div class="col-md-7 intro"><h3>' + data.results[2].title + '</h3><p class="overview">' + data.results[2].overview + '<br/><br/><a class="btn-featured" href="details.html?id=' + data.results[2].id + '">Movie Details</a></p></div><div class="col-md-5 text-right"><a href="details.html?id=' + data.results[2].id + '"><img class=" hero-poster" src="http://image.tmdb.org/t/p/w300/' + data.results[2].poster_path + '"/></a></div></div>')
        for (var i = 0; i < data.results.length; i++) {
            $('#search_results').append('<div class="col-xs-12 col-md-6 movie-card"><div class="col-xs-12 col-md-5 col-lg-4"><a href="details.html?id=' + data.results[i].id + '"><img src="http://image.tmdb.org/t/p/w185/' + data.results[i].poster_path + '"/></a></div><div class="col-xs-12 col-md-7 col-lg-8"><h3>' + data.results[i].title + '</h3>' + '<p><span class="release-date">' + data.results[i].release_date + '</span><span class="overview">' + data.results[i].overview + '</span></p><p><a href="details.html?id=' + data.results[i].id + '">View Movie Details</a></div></div>');
            $('.pagination').append('<li><a href="https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&page=' + ++page + '">' + page + '</a></li>');
        }
    });
});

//Search Data
$(document).ready(function () {
    $('.btn-search').on('click', function () {
        var input = $('#searchMovies').val();
        $.ajax({
            type: 'GET',
            url: 'http://api.themoviedb.org/3/search/movie?api_key=bfb94ae6dba3bb6d845da2c9830f097b&query=' + input + '&include_image_language=en,null',
            async: false,
            jsonCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
        })
        .error(function (e) {
            console.log(e.message);
        })
        .success(function (data) {
            console.dir(data);
            //$('#search_results').prepend('<img src="http://image.tmdb.org/t/p/w185/' + response.results[0].poster_path + '"/>');
            for (var i = 0; i < data.results.length; i++) {
                $('#search_results').prepend('<div class="col-xs-12 col-md-6 movie-card"><div class="col-xs-12 col-md-5 col-lg-3"><a href="details.html?id=' + data.results[i].id + '"><img src="http://image.tmdb.org/t/p/w185/' + data.results[i].poster_path + '"/></a></div><div class="col-xs-12 col-md-7 col-lg-9"><h3>' + data.results[i].title + '</h3>' + '<p><span class="release-date">' + data.results[i].release_date + '</span><span class="overview">' + data.results[i].overview + '</span></p><p><a href="details.html?id="' + data.results[i].id + '">View Movie Details</a></div></div>');
                $('img[src*="null"]').replaceWith('<img src="images/noimage.png" />');

            }

        });
    });
});

//Show Search Feature
$('.icon-search').on('click', function () {
    $('.search').slideToggle();
});

