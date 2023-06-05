const cart = {
  items: [],

  addItem(item) {
    this.items.push(item)
  },

  removeItem(item) {
    const index = this.items.indexOf(item)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  },

  clearCart() {
    this.items = []
  },
}

// Находим все элементы контролов и текущих значений
const minusButtons = document.querySelectorAll('[data-action="minus"]')
const plusButtons = document.querySelectorAll('[data-action="plus"]')
const counters = document.querySelectorAll('[data-counter="minus"]')

// Устанавливаем обработчики событий для всех кнопок
minusButtons.forEach((button) => {
  button.addEventListener('click', decreaseCounter)
})

plusButtons.forEach((button) => {
  button.addEventListener('click', increaseCounter)
})

// Функция уменьшения значения счетчика и добавления товара в корзину
function decreaseCounter(event) {
  const counter = event.target.nextElementSibling
  const currentValue = parseInt(counter.textContent)
  if (currentValue > 1) {
    counter.textContent = currentValue - 1
    const card = event.target.closest('.card')
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.card-img-top').getAttribute('src'),
      title: card.querySelector('.card-title').innerText,
    }
    cart.addItem(productInfo)
  }
}

// Функция увеличения значения счетчика и добавления товара в корзину
function increaseCounter(event) {
  const counter = event.target.previousElementSibling
  const currentValue = parseInt(counter.textContent)
  counter.textContent = currentValue + 1
  const card = event.target.closest('.card')
  const productInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.card-img-top').getAttribute('src'),
    title: card.querySelector('.card-title').innerText,
  }
  cart.addItem(productInfo)
}
