let $headerSiteEl = $('.container');

cheet('a n d r e', function() {
    $headerSiteEl.css('transition', '.5s');

    $headerSiteEl.animate({
        opacity: 0
    }, 1000, function() {
        $headerSiteEl.css('opacity', '1');
    });

    $headerSiteEl.animate({
        opacity: 0
    }, 1000, function() {
        $headerSiteEl.css('opacity', '1');
    });

    $headerSiteEl.animate({
        opacity: 0
    }, 300, function() {
        $headerSiteEl.css('opacity', '1');
    });

    $headerSiteEl.animate({
        opacity: 0
    }, 2000, function() {
        $headerSiteEl.css('opacity', '1');
    });


    let audioAndre = new Audio('audios/' + 'andré' + '.mp3');
    audioAndre.play();

});

cheet('f r a n c i s c o', function() {
    $headerSiteEl.css('transition', '.5s');

    $headerSiteEl.animate({
        opacity: 0
    }, 1000, function() {
        $headerSiteEl.css('opacity', '1');
    });

    $headerSiteEl.animate({
        opacity: 0
    }, 1000, function() {
        $headerSiteEl.css('opacity', '1');
    });

    $headerSiteEl.animate({
        opacity: 0
    }, 300, function() {
        $headerSiteEl.css('opacity', '1');
    });

    $headerSiteEl.animate({
        opacity: 0
    }, 2000, function() {
        $headerSiteEl.css('opacity', '1');
    });

    let audioFran = new Audio('audios/' + 'fran' + '.ogg');
    audioFran.play();
});