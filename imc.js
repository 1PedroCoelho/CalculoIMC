function calcularNutricional() {
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const alturaCm = parseFloat(document.getElementById("altura").value);
    const atividade = parseFloat(document.getElementById("atividade").value);
    const resultado = document.getElementById("resultado");

    if (!idade || !peso || !alturaCm || !atividade || idade < 10 || alturaCm <= 0 || peso <= 0) {
        resultado.textContent = "Por favor, preencha todos os campos com valores válidos.";
        return;
    }

    // Convertendo altura de centímetros para metros
    const alturaM = alturaCm / 100;

    // Cálculo do IMC
    const imc = peso / (alturaM * alturaM);
    const imcArredondado = imc.toFixed(2);

    // Classificação do IMC
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

    resultado.innerHTML = `
        <p><strong>IMC:</strong> ${imcArredondado}</p>
        <p><strong>Classificação:</strong> ${classificacao}</p>
    `;
}
