let numeroMenor = 0;
let numeroMayor = 0;
let numeroigual = 0;




function datos() {
    let numero = Number(document.querySelector(`.input-numero`).value);
    document.querySelector(`table tbody`).innerHTML += `<tr><td>${numero}</td></tr>`;

    if (numero > 0) {
        numeroMayor++
    }

    if (numero == 0) {
        numeroigual++
    }

    if (numero < 0) {
        numeroMenor++
    }

    document.querySelector(`.menoracero`).innerHTML = `La cantidad de numeros menores a cero es ${numeroMenor}`
    document.querySelector(`.mayoracero`).innerHTML = `La cantidad de numeros mayores a cero es ${numeroMayor}`
    document.querySelector(`.igualacero`).innerHTML = `La cantidad de numeros iguales a cero es ${numeroigual}`

}

