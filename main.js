/* let nombres = []

for (let index = 0; index < 5; index++) {
  nombres[index] = prompt('Ingrese un nombre')
}

for (let index = 0; nombres.length; index++) {
  console.log(nombres[index])
}
 */

/* Metodos Arreglos JavaScript */

/* 
let numeros = [1,2,3,4]

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index])
}

numeros.push(5)
numeros[3] = 5

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index])
}

for (let index = 0; index < 10; index++) {
  numeros[3] = 5
  numeros[4] = 5
  numeros[5] = 5
  numeros[6] = 5
  numeros[7] = 5
  numeros[8] = 5
  numeros[9] = 5
  numeros[10] = 5
}

for (let index = 0; index < 10; index++) {
  numeros.push() = prompt('Ingrese un numero: ')
} */

const menuOpciones = () => {
  let menu = Number(
    prompt(
      "Seleccione la operacón que desea realizar \n1 - Consultar saldo \n2 - Retirar Dinero \n3 - Consignar dinero \n4 - Transferir \n5 - Salir"
    )
  );
  return menu;
};

let saldoCuenta = 0;
let valor = 0;
let repetir = true;
let usuario, contrasena

usuario = prompt("Ingrese el usuario")
if(usuario == "zapata"){
  usuario = prompt("Ingrese la contarsena")
  if(contrasena=="zapata"){
    while (repetir) {
      let opcion = menuOpciones();
      switch (parseInt(opcion)) {
        case 1:
          alert("Su saldo es: " + saldoCuenta);
          break;
        case 2:
          valor = Number(prompt("Inrgese el valor a retirar: "));
          if (valor > saldoCuenta) {
            alert("El saldo en su cuenta es menor al valor a retirar");
          } else {
            alert(
              "Retiro Exitoso. Su nuevo saldo es: " +
                (saldoCuenta = saldoCuenta - valor)
            );
            alert("Retiro Exitoso. Su nuevo saldo es: " + (saldoCuenta -= valor));
          }
          break;
        case 3:
          valor = Number(prompt("Inrgese el valor a retirar: "));
          saldoCuenta += valor;
          alert("El nuevo saldo de la cuenta es: " + saldoCuenta);
          break;
        case 4:
          valor = Number(prompt("Inrgese el valor a retirar: "));
          if (valor > saldoCuenta) {
            alert("El saldo en su cuenta es menor al valor a transferir");
          } else {
            alert("Retiro Exitoso. Su nuevo saldo es: " + (saldoCuenta -= valor));
          }
          break;
        case 5:
          repetir = false;
          break;
      }
    }
  } else {
    alert("Contrasena errada")
  }
} else {
  alert("Usuario no existe")
}
