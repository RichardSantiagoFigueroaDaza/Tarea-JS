let nombre = 0;
let cedula = 0;
let vagon = 1;


function tren() {
    let nombre = document.querySelector(`.input-nombre`).value;
    let cedula = document.querySelector(`.input-cédula`).value;
    let vagon = Number(document.querySelector(`.input-vagón`).value);
    if (vagon <=10) {
        document.querySelector(`table tbody`).innerHTML += `<tr><td>${nombre}</td><td>${cedula}</td><td>${vagon}</td></tr>`
    } else {
        alert(`La cantidad de vagones máxima es 10`)
    }
}

function borrar() {
    document.querySelector(`table tbody${vagon}-${cedula}-${nombre}`).innerHTML = ""
}

