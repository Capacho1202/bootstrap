let form = document.getElementById("form-product");
form.addEventListener("submit",function(e){
    e.preventDefault();


    let Descripcion = document.getElementById("Descripcion");
    let Cantidad = document.getElementById("Cantidad");
    let Precio = document.getElementById("Precio");
    let lista = document.getElementById("list-product");

    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card text-center row">
    <div class="card-body col-11">
        <b>Descripcion:</b> ${descripcion.value}
        <b>Cantidad:</b> ${Cantidad.value}
        <b>Precio:</b> ${precio.value}
    </div>
    <div class="cold 12"> <a href="#" 
        class="btn btn-danger"
        name="delete"> BORRAR</a>
    </div>
</div>
    `;
    lista.appendChild(div);


});