'use strict';
window.onload = function () {
    let images = document.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
};

function showAnswer(eventObj) {
    let image = eventObj.target;
    image.src = 'img/' + image.id + '.jpg';

    setTimeout(reblur, 2000);

    function reblur() {
        image.src = 'img/' + image.id + 'blur.jpg';
    }
}
