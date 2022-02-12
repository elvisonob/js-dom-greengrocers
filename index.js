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

const Add = 'Add to Cart'
const showTheFruits = document.querySelector('ul')

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
            state.cart.push(state.items[i])
            renderCart(state.items[i])
        })

    }

}
console.log(state.cart)
renderStore()
const cart = document.querySelector('.cart--item-list')

function renderCart(item) {

    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = `assets/icons/${item.id}.svg`
    img.alt = `${item.name}`
    img.setAttribute('class', "cart--item-icon")
    const p = document.createElement('p')
    p.innerText = `${item.name}`
    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'quantity-btn remove-btn center')
    removeButton.innerText = '-'
    const span = document.createElement('span')
    span.setAttribute('class', "quantity-text center")
    span.innerText = '1'
    const addButton = document.createElement('button')
    addButton.setAttribute('class', 'quantity-btn add-btn center')
    addButton.innerText = '+'
    cart.append(li)
    li.append(img, p, removeButton, span, addButton)



}

//renderCart()







console.log(showTheFruits)