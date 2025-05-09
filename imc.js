document.getElementById("botaoconta").addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const resultado = document.getElementById("resultado");

    if (!peso || !altura || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    const imcArredondado = imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc < 24.9) {
        classificacao = "Normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 39.9) {
        classificacao = "Obesidade";
    } else {
        classificacao = "Obesidade grave";
    }

    resultado.textContent = `Seu IMC é ${imcArredondado} (${classificacao})`;
});
