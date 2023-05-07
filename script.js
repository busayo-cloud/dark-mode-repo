const innerEl = document.querySelector('.input')
console.log(innerEl.checked)

const bodyEl = document.querySelector('body')
console.log(bodyEl.checked)

innerEl.checked = JSON.parse(localStorage.getItem('mode'))

function myFunction() {
  if (innerEl.checked) {
    bodyEl.style.backgroundColor = 'black'
  } else {
    bodyEl.style.backgroundColor = 'white'
  }
}
myFunction()
innerEl.addEventListener('input', () => {
  myFunction()
  localStorage()
})

function LocalStorage() {
  localStorage.setItem('mode', JSON.stringify(innerEl.checked))
}
