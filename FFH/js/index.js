
const sessionPage = new fullpage('#fullpage', {
    autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,
    navigation: true,
	menu: '#navbar-nav',
	anchors: ['inicio', 'productos', 'contacto', 'footer'],
	navigationTooltips: ['Inicio', 'Productos', 'Contacto', 'footer'],
	showActiveTooltip: false,
	sectionsColor : ['#000', '#c2c2c2', '#000'],
})


let body = document.querySelector('body');

const crearNieve = () => {
    let copo = document.createElement('i');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 8) + 2;
    let speed = Math.random() * 5;
    let anima = (Math.random() * 10) + 5;

    copo.style.left = x + 'px';
    copo.style.width = size + 'px';
    copo.style.height = size + 'px';
    copo.style.animationDelay = speed + 'px';
    copo.style.animationDuration = anima + 'px';


    body.appendChild(copo);

    setTimeout(() => {
        copo.remove();
    }, anima * 1000)

}

setInterval(crearNieve, 500)




let game1 = document.getElementById('game1');
let infoGame = document.getElementById('infogame1');
infoGame.style.display = 'none';

game1.addEventListener('click', () => {
    if (infoGame.style.display == 'none'){
        infoGame.style.display = 'flex';
        infoGame.classList.add('animate__bounceIn')
    }
    else{
        infoGame.style.display = 'none';
        infoGame.classList.remove('animate__bounceIn')

    }
})

