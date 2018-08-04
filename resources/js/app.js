
'use strict';

/**
 * handles click event on image
 */
(function() {

    let model = {
        cats: [{
                'name': 'cat1',
                'imagePath': 'resources/img/cat_big.jpg',
                'points': 0,
            },
            {
                'name': 'cat2',
                'imagePath': 'resources/img/cat2.jpg',
                'points': 0,
            },
            {
                'name': 'cat3',
                'imagePath': 'resources/img/cat3.jpg',
                'points': 0,
            },
            {
                'name': 'cat4',
                'imagePath': 'resources/img/cat4.jpg',
                'points': 0,
            },
            {
                'name': 'cat5',
                'imagePath': 'resources/img/cat5.jpg',
                'points': 0,
            },
        ],
        selectedCat: null
    }

    let octopus = {
        getSelectedCat: function() {
            return model.selectedCat;
        },
        updateSelectCat: function(cat) {
           model.selectedCat = cat;
        },
        getAllCats: function() {
            return model.cats;
        },
        init: function() {
            model.selectedCat = model.cats[0];
            viewList.init();
            viewImage.init();
        }
    }


    let viewList = {
        init: function() {
            // load the cat names
            this.catName = document.getElementById('cat-name');
            this.catPoints = document.getElementById('cat-points');
            this.catImage = document.getElementById('cat-image');

            const cats = octopus.getAllCats();
            const ul = document.getElementById('cat-list');
            //
            cats.forEach((cat) => {
                let li = document.createElement('li');
                li.id = cat.name;
                li.className = 'name';
                li.innerText = cat.name;
                li.addEventListener('click', function(){
                    let id = this.getAttribute('id');  // get the id of the selected cat
                    let index = Number.parseInt(id.slice(-1)); // get the last digit in the id and convert to number
                    let selectedCat = cats[index - 1];
                    // update the selected cat
                    octopus.updateSelectCat(selectedCat);
                    viewList.render();
                    // set current item and render.
                });
                ul.appendChild(li);
            });
            viewList.render(); 
        },
        render: function() {
            let selectedCat = octopus.getSelectedCat();
            this.catName.innerHTML = selectedCat.name;
            this.catPoints.innerHTML = selectedCat.points;
            this.catImage.innerHTML = `<img src=${selectedCat.imagePath } id=${selectedCat.name} alt="">`
        }
    }  

    let viewImage = {
        init: function() {
            this.catName = document.getElementById('cat-name');
            this.catPoints = document.getElementById('cat-points');
            this.catImage = document.getElementById('cat-image');
            
            const imageDiv = document.getElementById('cat-image');
            imageDiv.addEventListener('click', () => {
                let selected = octopus.getSelectedCat();
                selected.points += 1;

                viewImage.render();
            });
        },
        render: function() {
            let selectedCat = octopus.getSelectedCat();
            console.log(selectedCat)
            this.catName.innerHTML = selectedCat.name;
            this.catPoints.innerHTML = selectedCat.points;
            this.catImage.innerHTML = `<img src=${selectedCat.imagePath } id=${selectedCat.name} alt="">`
        }
    }

    octopus.init();

}());


