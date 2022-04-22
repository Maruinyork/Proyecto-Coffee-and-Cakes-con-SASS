let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', function (){
    'use strict';
    menu.classList.toggle('mostrar');
});
/*en Css creamos la clase mostrar tambien, para poder aplicar esto*/
/*creamos dos variables, y le digo que cuando haga click en el boton menu, se aplique la clase mostrar. La clase mostrar dice la altura que tendra cuando se aplique para que se muestren todas las opciones*/
