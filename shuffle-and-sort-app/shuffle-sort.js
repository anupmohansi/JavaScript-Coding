var maersk = (function () {
    "use strict";

    let cardsParent = document.getElementsByClassName("m-grid-layout");
    let cardsNodeObject = document.createDocumentFragment();

    return {
        shuffleCards: function() {

            let cardBox = cardsParent[0].children[0].children;
            while (cardBox.length) {
                cardsNodeObject.appendChild(cardBox[Math.floor(Math.random() * cardBox.length)]);
            }

            cardsParent[0].children[0].appendChild(cardsNodeObject);
        },
    
        sortCards: function() {

            let cardBox = cardsParent[0].children[0].children;    
            cardBox = Array.prototype.slice.call(cardBox);

            cardBox.sort((firstValue, secondValue) => {
                return (+firstValue.getAttribute('value')) - (+secondValue.getAttribute('value'));
            });
    
            cardBox.forEach(card => {
                cardsNodeObject.appendChild(card);
            });
    
            cardsParent[0].children[0].appendChild(cardsNodeObject);
        }
    }

}());
