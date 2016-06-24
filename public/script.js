var $card = document.querySelector('.card');
var $image = $card.querySelector('.cover');
var $shadow = $card.querySelector('.shadow');
var colorThief = new ColorThief();
var audio = new Audio();

function buildCard(imageSrc) {
    var image = new Image();
    $image.src = imageSrc;
    image.src = imageSrc;
    image.width = 500;
    image.onload = function () {
        var palette = colorThief.getPalette(image);
        var color = palette[1];
        var cssColor = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        $card.style.background = cssColor;
        $shadow.style.boxShadow = 'inset 0px -20px 50px 20px ' + cssColor;
    };
}
function playAudio(audioSrc) {
    audio.src = audioSrc;
    audio.play();
}

$('[data-initialize-card]').each(function () {
    var initial = $(this).data('initialize-card');
    buildCard(initial);
});

function cleanUp() {
    $('.action-button').each(function() {
        $(this).removeClass('fa-pause-circle');
        $(this).addClass('fa-play-circle');
        $(this).removeClass('active');
    });
}


function playDrake(song, event) {
    cleanUp();
    buildCard(song.cover);
    playAudio(song.audio);
    console.log('event', event);
    event.target.classList.remove('fa-play-circle');
    event.target.classList.add('fa-pause-circle');
    event.target.classList.add('active');
}