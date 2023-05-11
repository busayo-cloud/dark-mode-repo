const innerEl = document.querySelector('input')
console.log(innerEl.checked)

const bodyEl = document.querySelector('body')

console.log(bodyEl.checked)

innerEl.checked = JSON.parse(localStorage.getItem('mode'))

function updateBody() {
  if (innerEl.checked) {
    bodyEl.style.backgroundColor = 'black'
  } else {
    bodyEl.style.backgroundColor = 'white'
  }
}
updateBody()

innerEl.addEventListener('click', updateBody)

function updateLocalstorage() {
  localStorage.setItem('mode', JSON.stringify(innerEl.checked))
}
