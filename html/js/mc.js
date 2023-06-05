// Получаем кнопку "Mcdonalds"
const mcdonaldsButton = document.querySelector('[data-cart="cafe"]')

// Добавляем обработчик события клика на кнопку "Mcdonalds"
mcdonaldsButton.addEventListener('click', function () {
  // Получаем все карточки
  const cards = document.querySelectorAll('.card')

  // Проверяем текущее состояние кнопки
  const isHidden = mcdonaldsButton.getAttribute('data-hidden')

  // Если карточки скрыты, отображаем их
  if (isHidden === 'true') {
    cards.forEach(function (card) {
      card.style.display = 'block'
    })

    // Обновляем атрибут кнопки для отображения
    mcdonaldsButton.setAttribute('data-hidden', 'false')
  } else {
    // Если карточки отображены, скрываем их
    cards.forEach(function (card) {
      const dataId = card.getAttribute('data-id')
      if (dataId === '05' || dataId === '06') {
        card.style.display = 'none'
      }
    })

    // Обновляем атрибут кнопки для скрытия
    mcdonaldsButton.setAttribute('data-hidden', 'true')
  }
})
