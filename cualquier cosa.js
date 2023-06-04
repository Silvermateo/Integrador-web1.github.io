var imagenes = ["img-plantas/Amor seco.jpg","img-plantas/Marcela.jpg","img-plantas/Malva.jpg","Img-plantas/Cedron.jpeg"];
var cont = 0;

function imgAnt () {
    if ( cont > 0){
        cont-- ;
    }    
    else{
        cont = imagenes.length-1;
    }
    fotoactual();
}
function imgSig () {
    if ( cont < imagenes.length-1){
        cont++ ;
    }    
    else{
        cont = 0;
    }
    fotoactual();
}
function fotoactual (){
    var contimg = document.getElementById ("foto-carrusel");
    contimg.src = imagenes [cont];
}

let patter6= /^\w+@\w+(\.\w{2,4})+$/;
let patter5= /^[a-zA-Z]+$/;

function validarInput (){
    let email = document.querySelector("#email");
    email.classList.remove("error");

    let nombre = document.querySelector("#nombre");
    nombre.classList.remove("error");

    let apellido = document.querySelector("#apellido");
    apellido.classList.remove("error");

    let consulta = document.querySelector("#consulta");
    consulta.classList.remove("error");

    let textarea = document.querySelector("#textarea");
    textarea.classList.remove("error");
    
    let errorInput = document.querySelector("#errorInput");
    errorInput.innerHTML= "";
    errorInput.style.display = none;

    let repuesta = document.querySelector("#repuesta");
    var verificador = false;



    if(!patter6.test(email.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente el mail";
        email.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (email.value = ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese un mail para continuar";
        email.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }



    if(!patter5.test(nombre.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente el Nombre";
        nombre.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (nombre.value = ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Nombre para continuar";
        nombre.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }



    if(!patter5.test(Apellido.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente su Apellido";
        Apellido.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (Apellido.value = ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Apellido para continuar";
        Apellido.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }


    if(!patter5.test(consulta.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente el Motivo de la consulta";
        consulta.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (consulta.value = ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Motivo de consulta para continuar";
        consulta.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }



    if (textarea.value = ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Motivo de consulta para continuar";
        textarea.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }

    if(verificador){
        errorInput.style.display="initial";
        return false;
    }else{
        let titulo = document.createElement("h2");
        titulo.innerHTML= "Se envio su consulta correctamente";
        let email = document.createElement("p");
        email.innerHTML= "Email: "+ email.value;
        let nombre = document.createElement("p");
        nombre.innerHTML= "Nombre: "+ nombre.value;
        let Apellido = document.createElement("p");
        apellido.innerHTML= "Apellido: "+ apellido.value;
        let consulta = document.createElement("p");
        consulta.innerHTML= "Su motivo de consulta: "+ consulta.value;
        let textarea = document.createElement("p");
        textarea.innerHTML= "Su consulta: "+ textarea.value;

        repuesta.appendChild(titulo);
        repuesta.appendChild(email);
        repuesta.appendChild(nombre);
        repuesta.appendChild(consulta);
        repuesta.appendChild(textarea);
    }
    return false;
}