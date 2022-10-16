let precio = 0;
let producto = 0;


let descuento = precio * 0.7;
let total = precio - descuento;


function tienda() {
    let precio = Number(document.querySelector(`.input-precio`).value);

    let producto = (document.querySelector(`.input-producto`).value);


    if(precio > 0) {
        descuento = precio * 0.07
    document.querySelector(`table tbody`).innerHTML += `<tr><td>${producto}</td><td>${precio}</td><td>${descuento}</td></tr>`; 
    }

    document.querySelector(`.suma`).innerHTML = `El precio del producto es ${precio}`
    document.querySelector(`.descuento`).innerHTML = `El descuento es ${descuento} pesos`



}

