document.addEventListener('DOMContentLoaded', () => {
//card options
    const cardArray = [
     {
        name: 'fries',
        img:'images/fries.png'
    },

    {
        name: 'fries',
        img:'images/fries.png'   
    },

    {
        name: 'burger',
        img :'images/burger.png'
    },

    {
        name: 'burger',
        img :'images/burger.png'
    },

    {
        name: 'hotdog',
        img :'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img :'images/hotdog.png'
    },

    {
        name: 'milkshake',
        img :'images/milkshake.png'
    },

    {
        name: 'milkshake',
        img :'images/milkshake.png'
    },


    {
       name: 'pizza',
        img :'images/pizza.png'
    },
    
    {
        name: 'pizza',
         img :'images/pizza.png'
     }


]

})
 const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
 //creating board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {

        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)

        grid.appendChild(card)
    }
    
    //check for matches
    function checkForMatch()  {
        var cards = document .querySelector('img') 
        const optionOneId = cardsChosenId[0]
         const optionTwoId = cardsChosenId[1]

         if (cardsChosen[0] === cardsChosen[1]) {
             cards[optionOneId].setAttribute('src', 'images/white.png')
             cardsWon.push(cardsChosen)
         }else
         {
             cards[optionOneId].setAttribute('src', 'images/blank.png')
         }

     }



}

//flipping card

function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
    }
    cards[optionOneId].setAttribute('src', 'images/white.png')
}

createBoard()

