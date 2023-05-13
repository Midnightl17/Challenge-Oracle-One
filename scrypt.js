const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        const regex = new RegExp(matrizCodigo[i][0],"ig");
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replace(regex,matrizCodigo[i][1]);            
        }
    }
    
    return stringEncriptado;
    
}

function desencriptar(stringEncriptado){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        const regex = new RegExp(matrizCodigo[i][1],"ig");
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replace(regex,matrizCodigo[i][0]);            
        }
}
    
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(imagenes/Muñeco.png)";
}

console.log(inputTexto.value)