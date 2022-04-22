let imagenes = document.querySelectorAll('.gallery__img'); /*abarca todas las imagenes de la galeria*/
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

/*todas las imagenes de la galeria las guardo en la variable imagenes*/
for (let i = 0; i < imagenes.length; i++) {
imagenes[i].addEventListener('click', function(e){
  modal.classList.toggle("modal--open");
  let src = e.target.src;
  img.setAttribute("src", src);
});
}

/*for va a hacer un recorrido por las imagenes, la cantidad de veces que haya imagenes, en este caso 8*/
/*al metodo modal se le agrega el modal open, para que este se muestre*/
/*cuando le de click a cualquiera de las imagenes, se va ejecutar una funcion, se le va a agregar una clase al elemento modal*/
/*let src, le estoy diciendo obten la ruta de la imagen y guardala en la variable src. */
/*a img le paso el atributo src y el valor de src*/

boton.addEventListener('click',function(){
    modal.classList.toggle("modal--open");
}); /*cuando le de clic al boton, a la clase modal se le agregara modal open*/
/*cuando le di click al principio a la clase modal, se le agrego, ahora en este momento se le quita. Se cierra la imagen*/


