
'use strict';

/**
 * handles click event on image
 */
(function() {
    let counter = 0;
    const imagesDiv = document.querySelector('section');
    console.log(imagesDiv)
    let pointSpan = document.querySelector('#points');
    imagesDiv.addEventListener('click', () => {
        counter++;
        pointSpan.innerHTML = counter;
    });
}());

