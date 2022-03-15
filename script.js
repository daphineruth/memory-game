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

 //creating board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {

        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)

        grid.appendChild(card)
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
}

createBoard()

