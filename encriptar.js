var inspectTexto;

//Revisar texto//
function checkText(){
    var text = document.getElementById("box1").value;

    if (/[A-Z]|\d|[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(text)) {
        alert("Sólo se permite ingresar letras minúsculas sin acentos");
        inspectTexto = false;
    }
    else if (/[a-z]/.test(text)) {
        inspectTexto = true;
    }
}

//Encriptado//
function encrypt() {
    var text = document.getElementById("box1").value;
    checkText();
    if (inspectTexto == true) {
        let box1 = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById("box2").value = box1;
        document.getElementById("box1").value = "";
    }
}

//Desencriptado//
function decrypt() {
    var text = document.getElementById("box1").value;
    checkText();
    if (inspectTexto == true) {
        let box1 = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("box2").value = box1;
        document.getElementById("box1").value = "";
    }
}

//Copiar//
function copy() {
    var message = document.getElementById("box2");
    if (message.value == "") {
        alert("No se encuentra un mensaje");
    }
    else {
        message.select();
        navigator.clipboard.writeText(message.value);
        alert("Mensaje copiado");
    }
}