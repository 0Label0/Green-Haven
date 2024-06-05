const userName = form1.name;
const userMail = form1.mail;
const userTel = form1.tel;
const checkbox = form1.checkbox;

const submitButton = document.getElementById('button-submit');

let messageError = document.getElementById('message-error');

// Pone el foco en el nombre al cargar la página
userName.focus();


function visualError(user, errorMessage) {

    // Vuelve a seleccionar el campo
    user.select();

    // Lanza el mensaje de error
    messageError.textContent = errorMessage;

    // Crea una alerta visual en el input
    user.classList.add('error_validation');

    // Quita la alerta visual pasados dos segundo
    setTimeout( () => {

        user.classList.remove('error_validation');

    },2000);
}

function validate() {

    // Expresiones regulares, las uso para validar los campos correctamente
    const regexPhone = /^(?:(?:\+|00)([1-9]\d{0,2}))?[\s.\/-]?\(?(0?\d{1,4})\)?[\s.\/-]?(\d{2,4})[\s.\/-]?(\d{2,4})[\s.\/-]?(\d{2,4})$/;
    const regexMail = /[a-z0-9._%\+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const regexName = /^[a-zA-Z ]+$/;

    /*
    * Primero combruebo que el campo no esté vacío, si lo está devuelve false y activa visualError
    * En caso de que sí lo esté se pasa al siguiente requerimiento
    * Compruebo de que el regex sea incorrecto
    * Compruebo que el checkbox esté pulsado
    * Si todos los campos son correctos se devuelve true 
    */
   
    if (userName.value === '') {

        visualError(userName, 'Campo requerido');
        return false;

    }else if (!regexName.test(userName.value)){

        visualError(userName,'Formato del nombre es incorrecto')
        return false;

    }else if (userMail.value === '') {

        visualError(userMail, 'Campo requerido');
        return false;

    }else if (!regexMail.test(userMail.value)) {

        visualError(userMail, 'Correo electrónico inválido');
        return false;

    }else if (userTel.value === '') {

        visualError(userTel, 'Campo requerido');
        return false;

    }else if (!regexPhone.test(userTel.value)) {

        visualError(userTel, 'Número de teléfono inválido');
        return false;   

    }else if (!checkbox.checked) {

        messageError.textContent = 'Acepta las políticas de privacidad para continuar'
        return false;

    }else {
        return true;
    }
}



submitButton.onclick = (e) => {

    // Se previene que envíe al usuario a la página a la que se envían los datos
    e.preventDefault();

    // Si validate() es true lanza un alert avisando de que el formulario se ha enviado correctamente
    if (validate()) {

        alert('Formulario correcto');

        messageError = '';

        return true;
        
    }else { // Cuando no es correcto lanza false y ya
        return false;
    }
}
