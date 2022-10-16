function valor() {
    let cantidad = document.querySelector('.input-valor1').value;
    let inicio = 1;
    let fin = 1;

      for (let i = 1; i < cantidad; i++) {
        let resultado = fin + inicio;
        inicio = fin
        fin = resultado 
    document.querySelector('.table').innerHTML += `<tr><td>${resultado}</td></tr>`
      }
}