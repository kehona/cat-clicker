
'use strict';

/**
 * handles click event on image
 */
(function() {
    let cats = [];
    function Cat(name, image) {
        this.name = name;
        this.imagePath = image;
        this.points = 0;
        this.show = false;
    }

    function createCats() {
        const cat1 = new Cat('cat1', 'resources/img/cat_big.jpg');
        cat1.show = true;
        cats.push(cat1);
        const cat2 = new Cat('cat2', 'resources/img/cat2.jpg');
        cats.push(cat2);
        const cat3 = new Cat('cat3', 'resources/img/cat3.jpg');
        cats.push(cat3);
        const cat4 = new Cat('cat4', 'resources/img/cat4.jpg');
        cats.push(cat4);
        const cat5 = new Cat('cat5', 'resources/img/cat5.jpg');
        cats.push(cat5);
    }

    function createDomElements() {
        for (const [index, cat] of cats.entries()) {    
            console.log('Hello')
            if (cat.show === true) {
                let catDom = `<div id="info">
                                <h3 id="cat-name">${cat.name}</h3>
                                <h3 id="cat-click">Clicks: <span id="points-${cat.name}">0</span></h1>
                            </div>
                            <div id="cat-image">
                                <img src=${cat.imagePath } id=${cat.name} alt="">
                            </div>`
                const parent = document.getElementById('cat');
                parent.insertAdjacentHTML('afterbegin', catDom);
            } 
            
            
        }
        
    }

    function createCatNamesDOM() {
        const ul = document.getElementById('cat-list');
        cats.forEach((cat) => {
            let catName = `<li id=${cat.name} class='name'>${cat.name}</li>`;
            ul.insertAdjacentHTML('beforeend', catName);
        });
       
    }

    function init() {
        createCats();
        createCatNamesDOM();
        createDomElements();
    }
    init();

    // let counter = 0;
    // const imagesDiv = document.querySelector('section');
    // console.log(imagesDiv)
    // let pointSpan = document.querySelector('#total-points');
    // imagesDiv.addEventListener('click', (e) => {
    //     console.log(e.target)
    //     counter++;
    //     pointSpan.innerHTML = counter;
    // });
    
    // const images = document.getElementsByClassName('image');
    // for (let i = 0; i < images.length; i++) {
    //     let count = 0;
    //     console.log(i);
    //     console.log(images[i])
    //     images[i].addEventListener('click', (function(clickCount) {
    //         let imageCount = clickCount;
    //         return function() {
    //             imageCount += 1;
    //             let catClicks = document.querySelector(`#points-cat${i + 1}`);
    //             // update image count
    //             catClicks.innerHTML = imageCount;
    //             return imageCount;
    //         }
    //     })(count));
    // }
}());


