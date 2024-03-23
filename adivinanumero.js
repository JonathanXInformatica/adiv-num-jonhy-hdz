let max = 100;
let min = 1;

function reiniciar(){
    max = 100;
    min = 1;
    document.getElementById("adivinaNumero").innerHTML = `Piensa en un numero del 1 al 100`;
    const botonrespuestasi = document.getElementById("botonrespuestasi");
    botonrespuestasi.disabled = true;
    const botonrespuestano = document.getElementById("botonrespuestano");
    botonrespuestano.disabled = true;
}

const generarAleatorio = (valormin = 1, valormax = 100) =>{
    return Math.floor(Math.random() * (valormax - valormin)) + valormin;
}

function iniciarJuego(){
    
    const numeroAleatorio = generarAleatorio(); 
    adivinaNumero(numeroAleatorio);
    const botonrespuestasi = document.getElementById("botonrespuestasi");
    botonrespuestasi.disabled = false;
    const botonrespuestano = document.getElementById("botonrespuestano");
    botonrespuestano.disabled = false;
}

const adivinaNumero = (numeroAleatorio) => {
    document.getElementById("adivinaNumero").innerHTML = `${numeroAleatorio}`;
}

const botonrespuestasi = () => {
    const numeroCorrecto = document.getElementById("adivinaNumero").innerHTML;
    alert(`Tu numero es ${numeroCorrecto}`);
    const botonrespuestasi = document.getElementById("botonrespuestasi");
    botonrespuestasi.disabled = true;
    const botonrespuestano = document.getElementById("botonrespuestano");
    botonrespuestano.disabled = true;


}