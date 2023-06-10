const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btncopiar = document.querySelector(".btn-copiar");
const mensaje1 = document.querySelector(".mensaje1");
const mensaje2 = document.querySelector(".mensaje2");

// La letra "e" es convertida para "enter" 
// La letra "i" es convertida para "imes" 
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober" 
// La letra "u" es convertida para "ufat"

function btnEncriptador(){
    if (textArea.value.trim() === '') {
        alert("No ingresaste ningun texto");
      } else {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.style.display = "block"
        mensaje.value= textoEncriptado
        mensaje1.style.display = "none"
        mensaje2.style.display = "none"
        btncopiar.style.display = "block"
        textArea.value="";   
        }
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase()
    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptador(){
    if (textArea.value.trim() === '') {
        alert("No ingresaste ningun texto");
     } else {
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.style.display = "block"
        mensaje.value= textoEncriptado
        mensaje1.style.display = "none"
        mensaje2.style.display = "none"
        btncopiar.style.display = "block"
        textArea.value="";   
        }
}
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase()
    for(let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiarTexto() {
    mensaje.select();
    document.execCommand('copy');
    alert("El texto se ha copiado al portapapeles.");
}