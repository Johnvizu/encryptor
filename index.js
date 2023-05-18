function encriptar() {
    const textoElement = document.getElementById("texto");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");
  
    const texto = textoElement.value.trim();
    const textoCifrado = encriptarTexto(texto);
  
    if (texto.length !== 0) {
      textoElement.value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/encriptado.jpg";
    } else {
      mostrarMensajeError(muñeco, tituloMensaje, parrafo, "Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar");
    }
  }
  
  function desencriptar() {
    const textoElement = document.getElementById("texto");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");
  
    const texto = textoElement.value.trim();
    const textoDesencriptado = desencriptarTexto(texto);
  
    if (texto.length !== 0) {
      textoElement.value = textoDesencriptado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/desencriptado.jpg";
    } else {
      mostrarMensajeError(muñeco, tituloMensaje, parrafo, "Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar");
    }
  }
  
  function encriptarTexto(texto) {
    return texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  }
  
  function desencriptarTexto(texto) {
    return texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  }
  
  function mostrarMensajeError(muñeco, tituloMensaje, parrafo, titulo, mensaje) {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = titulo;
    parrafo.textContent = mensaje;
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
  