
'use strict';

/**
 * handles click event on image
 */
(function() {
    let counter = 0;
    const image = document.querySelector('img');
    let pointSpan = document.querySelector('#points');
    image.addEventListener('click', () => {
        counter++;
        pointSpan.innerHTML = counter;
    });
}());

