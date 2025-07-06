
const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')

h1.addEventListener('click',()=>{
    p.forEach(p =>{
        p.classList.toggle('color')
    })
})