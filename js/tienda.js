const counterProduct = document.getElementById('counter-products');
const carritos = document.querySelectorAll('.carrito');

/* 
* El contador representa las veces que se han pulsado los botones
* Lo normal sería que contase los objetos que hay dentro, pero es solo para tener el ejemplo visual
*/
let counter = 1;

// Se itera sobre carritos 
carritos.forEach((carrito)=> {

    // Cuando el cooldown está desactivado:
    if (!carrito.disabled) {

        carrito.addEventListener("click", () => {

            // Cambia de color a verde claro y pone las letras en negro, con una transición mínima
            carrito.style.background = '#A4F4B8';
            carrito.style.color = '#000';
            carrito.style.transition = 'background .2s, color .2s';

            // Se muestra el contador
            counterProduct.textContent = counter;

            // Esto es el cooldown que existe entre un click y otro sobre el mismo producto
            carrito.disabled = true;

            // Se aumenta el contador
            counter++;

            // Cuando se acaba el cooldown deja las cosas como estaba
            setTimeout(()=> {

                carrito.disabled = false;

                carrito.style.background = '';
                carrito.style.color = '#fff';
                carrito.style.transition = 'background .3s, color .3s';

            },1000);

        });
    }  
});


carritos.forEach((carrito)=> {

    // Mientras estés manteniendo presionado cambia a color verde oscuro
    carrito.addEventListener("mousedown", ()=> {

        carrito.style.background = '#090';

    });
});
