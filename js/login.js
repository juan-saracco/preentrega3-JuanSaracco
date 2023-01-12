//accesos al DOM
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const iniciarSesion = document.querySelector("#enter");
const rememberMe = document.querySelector("#remember");
const createAcc = document.querySelector("#create");
const registrarse = document.querySelector("#registrarse");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const userMail = document.querySelector("#userMail");
const userPass = document.querySelector("#userPass");


//registro de usuario


//creo mi variable 'usuarios', si tiene algo en el LS se lo guardo en 'usuarios' y si esta vacio lo guardo como un array vacio
let usuarios;

if(localStorage.getItem("usuarios")){
    //parseo el usuarios con el JSON.parse
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}else{
    usuarios = [];
}

//creo la clase constructora de usuario
class usuario{
    constructor(nombre, apellido, mail, contra){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.contra = contra;
   }
}

//guardo el usuario
function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

//lo guardo en localStorage
function guardarEnLocal(elemento){
    //asigno un valor
    return localStorage.setItem("usuarios", JSON.stringify(elemento));
}

//creo una funcion para limpiar los cmapos
function limpiar() {
    nombre.value = "";
    apellido.value = "";
    userMail.value = "";
    userPass.value = "";
    
}

//eventos
registrarse.addEventListener('click', (e)=>{
    e.preventDefault()
    let newUser = new usuario(nombre.value, apellido.value, userMail.value, userPass.value);
    console.log(newUser);
    limpiar();
    guardarUsuario(newUser);
    guardarEnLocal(usuarios);
})

//inicio de sesion

function inicioSesion(usuarios) {
    let userFound = usuarios.find(usuario=>{
        return usuario.nombre == email.value && pass.pass == pass.value;
    });
    //si encuentra el usuario, inicio sesion
    if(userFound){
        window.location.href = "./index.html";
    }else{
        document.querySelector("#notFound").innerText = "Usuario no encotrado";
    }
}

function recuperarLS() {
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

//ejecuto la funcion
const usuariosLS = recuperarLS();

//listener

iniciarSesion.addEventListener('click', (e)=>{
    e.preventDefault()
    inicioSesion(usuariosLS);
})
