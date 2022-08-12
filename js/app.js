let form = document.getElementById("form-product");
form.addEventListener("submit",function(e){
    e.preventDefault();


    let Descripcion = document.getElementById("Descripcion");
    let Cantidad = document.getElementById("Cantidad");
    let Precio = document.getElementById("Precio");
    let lista = document.getElementById("list-product");

    let div = document.createElement("div");
    div.classList.add("row")
    div.classList.add('mb-1')
    div.innerHTML = `
    <div class="card text-center col-md-11">
        <div class="card-body">
            <b>Descripcion:</b> ${descripcion.value}
            <b>Cantidad:</b> ${Cantidad.value}
            <b>Precio:</b> ${precio.value}
        </div>
    </div>
    <button

    class= "btn btn-danger text-center col-md-1"
    name="delete">
    <i class="fa-solid fa-trash-can"></i>
    </button>
    `;

    if( descripcion.value!="" && precio.value!="" && Cantidad.value!=""){
        lista.appendChild(div);
        mensaje("El Mensaje ha sido Agregado", 'success');
        form.reset();
    }
    
});
let borrar = document.querySelector(".row")
borrar.addEventListener("click",function(e){
    if(e.target.name === "delete"){
        e.target.parentElement.remove();
         mensaje("El Mensaje ha sido Eliminado", 'danger');
         form.reset();
       
    }
})

const mensaje = function(msj, color){
    container = document.querySelector(".container");
    app = document.querySelector("#app");
    div = document.createElement("div");
    
    div.innerHTML =`
    <div class="alert alert-${color} mt-5">${msj}</div>
    `;

    container.insertBefore(div ,app);
    setTimeout(() => {
        div.remove();
    }, 3000);


}