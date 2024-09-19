const cargar=async(user, id)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let res = await response.json();
    let div = ``;
    let num=1;
    res.map(post=>{
        if(post.userId==id){
            div += `<h6> ${num} ${post.title}</h6>`;
            num++
        }
    })
    document.getElementById("listaPost"+user).innerHTML=div;
}

const getUsers2= async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    let res = await response.json();
    let div = ``;
    res.map(user=>{
        div+=`<div class="accordion-item"  style=" background: linear-gradient(90deg,darkolivegreen, #0b5132);">
        <h2 class="accordion-header"  style=" background: linear-gradient(90deg,#0b5132 , darkred);">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${user.username} aria-expanded="false" aria-controls="collapse${user.username}"  style=" background: linear-gradient(90deg,red , darkred);">
        ${user.name.toUpperCase()}
        </button>
        </h2>
        <div id="collapse${user.username} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body" id="listaPost${user.username}">
        </div>
        </div>
        </div>`
        cargar(user.username, user.id);
    })
    document.getElementById("divUsers").innerHTML=div;
}

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    let res = await response.json();
    let div = ``;
    var fila = 1;
    res.map(user => {
        if (fila == 1) {
            div += `<div class="row">`
        }
        div += `<div class="col m-5">
                <div class="card border shadow">
                    <div class="card-body">
                        <p>${user.id}</p>
                        <p>${user.name}</p>
                        <p>${user.address.city}</p>
                        <p>${user.address.street}</p>
                        <p>${user.address.suite}</p>
                        <p>${user.address.zipcode}</p>
                        <p>${user.company.bs}</p>
                        <p>${user.company.catchPhrase}</p>
                        <p>${user.company.name}</p>
                        <p>${user.email}</p>
                        <p>${user.phone}</p>
                        <p>${user.name}</p>

                        <a target="_blank" class="btn" style="background: linear-gradient(90deg,#0b5132 , darkred);" 
                        href="https://www.google.com/maps/@${user.address.geo.lat},${user.address.geo.lng},16.5z">UBICACIÓN</a>
                    </div>
                </div>
            </div>`
        if (fila == 5) {
            div += `</div>`;
            fila = 0;
        }
        fila++;
    })
    document.getElementById("divUsers").innerHTML = div;
}

const getFoto=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/photos');
let res = await response.json();
let div=``;
var fila=1;
res.map(foto=>{
    if(fila==1){
        div+=`<div class="row">`
    }
    div+=`<div clas="col m-3">
            <div class="card border shadow>
                <div class="card-body">
                    <p>${foto.title}</p>
                    <img src="${foto.url}" width="100px" heigth="100px">
                    </div>
                    </div>
                    </div>`
                    if(fila==5){
                        div+=`</div>`;
                        fila=0
                    }
                    fila++;
});
document.getElementById("divUsers").innerHTML=div;

}
