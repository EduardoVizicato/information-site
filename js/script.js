const pag2 = document.getElementById('main-second-page')
const nextpage = document.getElementById('nextpage')
const pag1 = document.getElementById('pag1')
const lastpage = document.getElementById('lastpage')
nextpage.addEventListener('click', () =>{
    pag1.style.left = '-1300px'
    pag2.style.left = '0px'
})
lastpage.addEventListener('click', ()=>{
    pag1.style.left = '0px'
    pag2.style.left = '1300px'
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});