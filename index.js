const state = {
    items: [{
            id: "001-beetroot",
            name: "beetroot",
            price: 0.35
        },
        {
            id: "002-carrot",
            name: "carrot",
            price: 0.35
        },
        {
            id: "003-apple",
            name: "apple",
            price: 0.35
        },
        {
            id: "004-apricot",
            name: "apricot",
            price: 0.35
        },
        {
            id: "005-avocado",
            name: "avocado",
            price: 0.35
        },
        {
            id: "006-bananas",
            name: "bananas",
            price: 0.35
        },
        {
            id: "007-bell-pepper",
            name: "bell pepper",
            price: 0.35
        },
        {
            id: "008-berry",
            name: "berry",
            price: 0.35
        },
        {
            id: "009-blueberry",
            name: "blueberry",
            price: 0.35
        },
        {
            id: "010-eggplant",
            name: "eggplant",
            price: 0.35
        }
    ],
    cart: []
};


function render() {
    clear()
    renderStore()
    renderCart()
}

function clear() {
    //Removing all the li items from the items list ul
    showTheFruits.innerHTML = ''
        //Removing all the li items from the order list ul
    cart.innerHTML = ''
}

const Add = 'Add to Cart'
const showTheFruits = document.querySelector('ul')

function renderCart() {
    for (let i = 0; i < state.cart.length; i++) {
        const cartItem = state.cart[i]
        renderCartItem(cartItem)
        calculateTotal()

    }
}

function renderStore() {
    for (let i = 0; i < state.items.length; i++) {
        const li = document.createElement('li')
        showTheFruits.append(li)
        const div = document.createElement('div')
        div.setAttribute('class', "store--item-icon")
        li.append(div)
        const img = document.createElement('img')
        img.src = `assets/icons/${state.items[i].id}.svg`
        img.alt = `${state.items[i].name}`
        div.append(img)
        const button = document.createElement('button')
        li.append(button)
        button.innerText = Add
        button.addEventListener('click', function() {
            const cartItem = {
                item: state.items[i],
                quantity: 1
            }

            state.cart.push(cartItem)

            render()

        })

    }

}

renderStore()
const cart = document.querySelector('.cart--item-list')

function renderCartItem(item) {
    console.log(item)
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = `assets/icons/${item.item.id}.svg`
    img.alt = `${item.item.name}`
    img.setAttribute('class', "cart--item-icon")
    const p = document.createElement('p')
    p.innerText = `${item.item.name}`
    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'quantity-btn remove-btn center')
    removeButton.innerText = '-'
    removeButton.addEventListener('click', function() {
        item.quantity--
            if (item.quantity === 0) {
                state.cart = state.cart.filter(item => item.quantity > 0)
            }

        render()

    })

    const span = document.createElement('span')
    span.setAttribute('class', "quantity-text center")
    span.innerText = item.quantity
    const addButton = document.createElement('button')
    addButton.setAttribute('class', 'quantity-btn add-btn center')
    addButton.innerText = '+'
        //add an event listener for the addbutton, when button is clicked, i want to update the quantity of the item in the cart. and then call my render function
    addButton.addEventListener('click', function() {
        item.quantity++
            render()
    })


    cart.append(li)
    li.append(img, p, removeButton, span, addButton)


}


//renderCart()



const cartTotal = document.querySelector('#totalNumber')


function calculateTotal() {
    let total = 0
    for (let i = 0; i < state.cart.length; i++) {
        total = total + state.cart[i].price
        cartTotal.innerText = total
    }
}









console.log(showTheFruits)