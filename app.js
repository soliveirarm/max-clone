const prices = document.querySelectorAll(".prices__price")
const pricesTotal = document.querySelectorAll(".prices__price-container p")
const monthlyBtn = document.querySelector("#monthly")
const yearlyBtn = document.querySelector("#yearly")

const priceOptions = {
  monthly: [29.9, 39.9, 55.9],
  yearly: [18.9, 29.9, 39.9],
}

function formatPrice(price) {
  return `R$${String(price).padEnd(5, "0").replace(".", ",")}`
}

function changePrices(array) {
  array.map((el, i) => {
    if (array == priceOptions.yearly) {
      let yearlyTotal = String((el * 12).toFixed(2)).replace(".", ",")

      prices[i].textContent = "12x " + formatPrice(el)

      pricesTotal[i].textContent = `Preço total anual R$${yearlyTotal}`
    } else {
      prices[i].textContent = formatPrice(el)
      pricesTotal[i].textContent = ""
    }
  })
}

function switchBtnStyle(add, remove) {
  add.classList.add("pressed")
  remove.classList.remove("pressed")
}

yearlyBtn.addEventListener("click", () => {
  switchBtnStyle(yearlyBtn, monthlyBtn)
  changePrices(priceOptions.yearly)
})

monthlyBtn.addEventListener("click", () => {
  switchBtnStyle(monthlyBtn, yearlyBtn)
  changePrices(priceOptions.monthly)
})
