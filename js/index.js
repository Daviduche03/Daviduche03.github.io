const btn0 = document.querySelector('#btn0')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const li1 = document.querySelector('.li1')
const li2 = document.querySelector('.li2')
const li3 = document.querySelector('.li3')

/*btn1.addEventListener('click', ()=>{
  li1.classList.add('hide')
  li1.classList.remove('show')
  li2.classList.remove('hide')
  li2.classList.add('show')
  li3.classList.remove('show')
  li3.classList.add('hide')
})

btn0.addEventListener('click', ()=>{
  li1.classList.add('show')
  li1.classList.remove('hide')
  li2.classList.add('hide')
  li2.classList.remove('show')
  li3.classList.remove('show')
  li3.classList.add('hide')
})

btn2.addEventListener('click', ()=>{
  li1.classList.add('hide')
  li1.classList.remove('show')
  li2.classList.add('hide')
  li2.classList.remove('show')
  li3.classList.add('show')
  li3.classList.remove('hide')
})

*/
//menu navigation
const nav = document.querySelector("#nav")
const btn_nav = document.querySelector("#btn")

btn_nav.addEventListener('click', ()=>{
  nav.classList.toggle('open')
})