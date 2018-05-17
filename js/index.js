$('a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 500);
});

/*
function smoothScrollingTo(target) {
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 500);
}

$('a[href^=#]').on('click', function (event) {
    event.preventDefault();
    smoothScrollingTo(this.hash);
});
*/
