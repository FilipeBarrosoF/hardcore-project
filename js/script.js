//Seleção de elementos que serão manipulados
//Seleção de DOM

var btn = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var links = document.querySelectorAll('.menu a')

console.log(btn);
console.log(menu)

//console.log(btn);
//console.log(menu);

function menuSite(){
    //console.log('função acionada');
    //Add/Remove a classe menu-open]
    menu.classList.toggle('menu-open');
    btn.classList.toggle('x');
}

//Evento -> Ação do usuário

btn.addEventListener('click' , menuSite);
//menu.addEventListener('click', menuSite);

links.forEach(function(links){
    //console.log(links);
    links.addEventListener('click', menuSite)
})

//console.log(links.length); retorna o número de itens de uma lista
// for(var i=0; i<links.length; i++){
//     links[i].addEventListener('click', menuSite);
// }