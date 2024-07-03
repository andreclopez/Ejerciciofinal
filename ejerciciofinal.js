const usuarios = [
    { nombre: "Andrea", apellido: "López", pin: "1234", saldo: 10000 },
    { nombre: "Valeria", apellido: "Monzón", pin: "2938", saldo: 60000 },
    { nombre: "Gabriela", apellido: "Ruiz", pin: "1949", saldo: 100000 }
];

// Creo una función que solicita nombre de usuario y PIN, busca en el array si existe un objeto con el mismo 
// nombre de usuario y PIN ingresados. Si encuentra un usuario, muestra un mensaje de bienvenida; de lo contrario, 
// muestra un mensaje de error. Agrego el while para que en caso de error vuelva a solicitar nombre de usuario y PIN.

function login() {
    let usuarioEncontrado;

    while (!usuarioEncontrado) {
        const nombreUsuario = prompt("Por favor, ingrese su nombre de usuario");
        const pinUsuario = prompt("Por favor, ingrese su PIN");

        usuarioEncontrado = usuarios.find(usuario => 
            usuario.nombre === nombreUsuario && usuario.pin === pinUsuario
        );

        if (usuarioEncontrado) {
            alert("Bienvenido(a) " + usuarioEncontrado.nombre);
            return usuarioEncontrado;
        } else {
            alert("Usuario o PIN incorrecto. Por favor, intente nuevamente");
        }
    }

    return null;
}


// Paso a crear la funcion de extraccion que solicita al usuario el monto a retirar.
// Lo primero que verifica si el monto es válido. Si el saldo del usuario es suficiente,
// resta el monto y muestra el mensaje de extracción exitosa. Si no hay suficiente saldo, 
// muestra un mensaje de saldo insuficiente. Agrego el while para que en caso de error, solicte nuevamente 
// el monto de la extracción.

function extraccion (usuario) {
    let montoExtraccion;

    while (true) {
        montoExtraccion = parseFloat(prompt("Por favor, ingrese el monto a retirar"));

        if (montoExtraccion <= 0 || isNaN(montoExtraccion)) {
            alert("El monto ingresado no es válido. Por favor, verifique y reintente la operación");
        } else if (usuario.saldo >= montoExtraccion) {
            usuario.saldo -= montoExtraccion;
            alert("Su retiro fue exitoso. Su saldo actual es: $" + usuario.saldo);
            break;
        } else {
            alert("Lo sentimos, su saldo es insuficiente para el monto solicitado. Su saldo disponible es: $" + usuario.saldo);
        }
    }
}

// Paso a crear una función para el deposito, similar a la de extracción. Aquí le solicito al usuario el monto a depositar.
// Verifica si el monto es válido y de ser así suma el monto al saldo del usuario y muestra un mensaje de éxito. 
// Caso contrario, solicito verificar y reintentar la operación. Agrego el while para que en caso de error, se le vuelva
// a solicitar al cliente el monto a depositar.

function deposito (usuario) {

    let deposito;

    while (true) {

        deposito = parseFloat(prompt("Por favor, ingrese el monto a depositar"));

        if (deposito <= 0 || isNaN(deposito)) {
            alert("El monto ingresado no es válido. Por favor, verifique y reintente la operación.")
        } else {
            usuario.saldo = usuario.saldo + deposito;

            alert("Su depósito fue realizado de forma exitosa. Su saldo actual es de: " + usuario.saldo);
            break;
        }
    }
    
}

// Por último, paso a crear una función que muestre al cliente un menú principal, en caso de que este se haya
// logueado correctamente. Aquí visualizamos 3 opciones para que el usuario opte por la deseada.

function menu (usuario) {
    let menuPrincipal;

    while (true) {
        menuPrincipal = prompt("Por favor, seleccione una operación: Opción 1: Extracción. Opción 2: Deposito. Opción 3: Salir.");
        
        if (menuPrincipal == 1) {
            extraccion(usuario);
        } else if (menuPrincipal == 2) {
            deposito(usuario);
        } else if (menuPrincipal == 3) {
            alert("Gracias por operar con nuestra red.");
            break;
        } else {
            alert("Por favor, elija una opción válida");
        }
    }
}

const usuarioLogueado = login();
menu(usuarioLogueado);
