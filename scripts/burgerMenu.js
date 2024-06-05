const menu = document.querySelector('nav div');
const icon = document.querySelector('nav span svg');
const links = document.querySelectorAll('.link');

// Sí es false el menú está oculto, si es true el menú está 
let t = false;

function desplegarMenu() {

    if (t){

        menu.classList.add('no-hidden');
        icon.classList.add('icon-transition');

        setTimeout( () => {

            icon.classList.remove('icon-transition');

        },400);

    }else {

        menu.classList.remove('no-hidden'); 
        icon.classList.add('icon-transition2');

        setTimeout( () => {

            icon.classList.remove('icon-transition2');

        },400);
        
    }

}

function ocultarMenu() {

    // Almacena la posición del scroll anterior
    let lastScrollTop = 0;

    // Se agrega un evento de tipo scroll que se activa cada vez que deslizamos la página
    window.addEventListener('scroll', function() {

        // Se obtiene la ubicación actual del scroll
        let currentScroll = document.documentElement.scrollTop;

        // Si la posición actual es mayor que la posición anterior, significa que se está deslizando hacia abajo
        if (currentScroll > lastScrollTop && currentScroll > 500) {

            // El usuario está desplazando hacia abajo
            icon.classList.add('hidden-icon');
            menu.classList.add('hidden-menu');

        } else { // En caso contrarion se está deslizando hacia arriba

            // El usuario está desplazando hacia arriba
            icon.classList.remove('hidden-icon');
            menu.classList.remove('hidden-menu');

        }

        // para asegurarse que es mayor a 0 en todos los dispositivos
        lastScrollTop = Math.max(currentScroll, 0);

    });
}

ocultarMenu();

// Despliega el menú cuando se hace click en el ícono
icon.addEventListener("click",()=> {

    t = !t;
    desplegarMenu();
    
});