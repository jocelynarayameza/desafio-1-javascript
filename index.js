precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidadSpan = document.querySelector(".cantidad");
let cantidad = 0
let valorTotal = document.querySelector(".valor-total")

function incrementar() {
    cantidad = cantidad + 1
    cantidadSpan.innerHTML = cantidad
    valorTotal.innerHTML = cantidad * precio
}

function decrementar() {
    cantidad = cantidad - 1
    cantidadSpan.innerHTML = cantidad
    valorTotal.innerHTML = cantidad * precio

}


