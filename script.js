function criptografar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let textoCriptografado = texto.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
    document.getElementById("outputText").textContent = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let textoDescriptografado = texto.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");
    document.getElementById("outputText").textContent = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}