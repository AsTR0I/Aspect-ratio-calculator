let ratioWidth = document.getElementById('ratio-width')
let ratioHeight = document.getElementById('ratio-height')
let width = document.getElementById('width')
let height = document.getElementById('height')

let calculateWidth = () => {
  // value — задает начальное значение для элемента. Для input — это значение элемента формы
  let aspectRatio = ratioWidth.value / ratioHeight.value
  console.dir(aspectRatio)
  // Метод parseFloat преобразует строковый аргумент в число с плавающей точкой.

  //Метод toFixed() форматирует число, используя запись с фиксированной запятой.
  width.value = parseFloat((height.value * aspectRatio).toFixed(2))
}
let calculateHeight = () => {
  let aspectRatio = ratioWidth.value / ratioHeight.value
  console.dir(aspectRatio)
  height.value = parseFloat((width.value / aspectRatio).toFixed(2))
}

height.addEventListener('input', calculateWidth)
width.addEventListener('input', calculateHeight)
ratioHeight.addEventListener('input', calculateWidth)
ratioWidth.addEventListener('input', calculateHeight)
