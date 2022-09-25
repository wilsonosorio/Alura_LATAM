

var textoIncial;
var textoFinal;
var contador;
const vacio = document.querySelector(".empty");
const resultado = document.querySelector(".div-resultado");
const letras = ["a","e","i","o","u"]
const letrasChange = ["ai","enter","imes","ober","ufat"]

function btnDesencriptar() {
    textoIncial = document.getElementById("input-texto").value;
    textoFinal = textoIncial.toLowerCase();
    for(i = 0; i <letras.length; i++) {
        if(textoFinal.includes(letrasChange[i])){
            textoFinal = textoFinal.replaceAll(letrasChange[i],letras[i]);
        }
    }
    mostrarTexto();
}

function btnEncriptar() {
    textoIncial = document.getElementById("input-texto").value;
    textoIncial = textoIncial.toLowerCase();
    textoFinal = "";
    for(var i = 0; i <textoIncial.length ; i++) {
        contador = comparar(textoIncial[i])
        if(contador == -1){
            textoFinal += textoIncial
            [i];
        }else{
            textoFinal += letrasChange[contador];
        }
    }
    mostrarTexto();
}

function comparar(letra){
    for(i = 0; i <letras.length; i++) {
        if(letra == letras[i]){
            return i;
        }
    }
    return -1;
}

function btnCopiar(){
    var content = document.getElementById('textoFinal');
    content.select();
    navigator.clipboard.writeText(content.value)
    content.select();
    
}

function mostrarTexto(){
    if(textoFinal == ""){
        vacio.style.display = "block";
        resultado.style.display = "none";
        return;
    }else{
        vacio.style.display = "none";
        resultado.style.display = "block";
        document.getElementById("textoFinal").innerHTML=textoFinal;
        
    }
    
}

