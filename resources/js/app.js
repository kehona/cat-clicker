
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
        images[i].addEventListener('click', (function(clickCount) {
            let imageCount = clickCount;
            let totalCount = 0;
            // update total points
            let pointSpan = document.querySelector('#points');
            // update points for image 1
            console.log('hello')
            if (i === 0) {
                return function() {
                    imageCount += 1;
                    let cat1Clicks = document.querySelector('#points-cat1');
                    // update image count
                    cat1Clicks.innerHTML = imageCount;
                    return imageCount;
                }
                // update points for image 2
            } else if (i === 1) {
                return function() {
                    imageCount += 1
                    let cat2Clicks = document.querySelector('#points-cat2');
                    cat2Clicks.innerHTML = imageCount;
                    return imageCount;
                }
            } 
        })(count));
    }
}());


