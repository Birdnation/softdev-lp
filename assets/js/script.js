$(document).ready(function () {
    var bar = new ldBar('.ldBar')
    var valor = 0;
    for (let i = 0; i < 101; i++) {
        bar.set(i);
        valor = i;
    }
    $(".main").hide();
    $('.loading').delay(2000).fadeOut(500);
    $('.main').delay(2500).fadeIn(2000);
    $('.carousel').carousel({
        interval: 2000
    })
})


