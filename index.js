const card = document.querySelector('.card');
const container = document.querySelector('.container');

const photo = document.querySelector('.photo img');
const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');
const info = document.querySelector('.info');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    card.style.transform = ` rotateY(${xAxis}deg) rotateX(${yAxis}deg) `
    info.style.transform = 'translateZ(30px)';
    photo.style.transform = 'translateZ(30px)';
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = ` rotateY(0deg) rotateX(0deg) `
    info.style.transform = 'translateZ(0px)';
    photo.style.transform = 'translateZ(0px)';
});

github.addEventListener('mouseenter', (e) => {
    github.style.transform = 'rotateY(20deg)'
});

github.addEventListener('mouseleave', (e) => {
    github.style.transform = 'rotateY(0deg)'
});

linkedin.addEventListener('mouseenter', (e) => {
    linkedin.style.transform = 'rotateY(20deg)'
});

linkedin.addEventListener('mouseleave', (e) => {
    linkedin.style.transform = 'rotateY(0deg)'
});

