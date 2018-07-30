
'use strict';

/**
 * handles click event on image
 */
(function() {
    let counter = 0;
    const imagesDiv = document.querySelector('section');
    console.log(imagesDiv)
    let pointSpan = document.querySelector('#points');
    imagesDiv.addEventListener('click', (e) => {
        console.log(e.target)
        counter++;
        pointSpan.innerHTML = counter;
    });
    
    const images = document.getElementsByClassName('image');
    for (let i = 0; i < images.length; i++) {
        let count = 0;
        console.log(i);
        console.log(images[i])
        images[i].addEventListener('click', (function(clickCount) {
            let imageCount = clickCount;
            return function() {
                imageCount += 1;
                let catClicks = document.querySelector(`#points-cat${i + 1}`);
                // update image count
                catClicks.innerHTML = imageCount;
                return imageCount;
            }
        })(count));
    }
}());


