let edadMenor = 1000;
let edadMayor = 0;
let nombreMayor = 0;
let nombreMenor = 0;



function datos() {
    let nombre = document.querySelector(`.input-nombre`).value;
    let edad = Number(document.querySelector(`.input-edad`).value);
    document.querySelector(`table tbody`).innerHTML += `<tr><td>${nombre}</td><td>${edad}</td></tr>`;

    if (edad > edadMayor) {
        edadMayor = edad
        nombreMayor = nombre
    }

    if (edad < edadMenor) {
        edadMenor = edad
        nombreMenor = nombre
    }

    document.querySelector(`.menor`).innerHTML = `La persona con menor edad es ${nombreMenor} y tiene ${edadMenor} años`
    document.querySelector(`.mayor`).innerHTML = `La persona con mayor edad es ${nombreMayor} y tiene ${edadMayor} años`

}

