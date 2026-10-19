function calcular() {
    // 1. Captura os elementos do DOM
    const input1 = document.getElementById("numero1");
    const input2 = document.getElementById("numero2");
    const selectOperacao = document.getElementById("operacao");
    const elementoResultado = document.getElementById("resultado");

    // 2. Valida se os elementos realmente existem na tela para evitar erros no console
    if (!input1 || !input2 || !selectOperacao || !elementoResultado) {
        console.error("Um ou mais elementos HTML não foram encontrados. Verifique os IDs.");
        return;
    }

    // 3. Pega os valores e limpa espaços em branco
    const valor1 = input1.value.trim();
    const valor2 = input2.value.trim();

    // 4. Valida se os campos estão vazios
    if (valor1 === "" || valor2 === "") {
        exibirResultado(elementoResultado, "Digite os dois números!");
        return;
    }

    // 5. Converte para número de forma segura
    const n1 = Number(valor1);
    const n2 = Number(valor2);

    // Valida se o usuário digitou letras ou caracteres inválidos
    if (isNaN(n1) || isNaN(n2)) {
        exibirResultado(elementoResultado, "Por favor, digite apenas números válidos!");
        return;
    }

    const operacao = selectOperacao.value;
    let resultado;

    // 6. Executa a operação matemática utilizando um Switch (mais limpo que múltiplos IFs)
    switch (operacao) {
        case "adicao":
            resultado = n1 + n2;
            break;
        case "subtracao":
            resultado = n1 - n2;
            break;
        case "multiplicacao":
            resultado = n1 * n2;
            break;
        case "divisao":
            if (n2 === 0) {
                resultado = "Não é possível dividir por zero!";
            } else {
                resultado = n1 / n2;
            }
            break;
        default:
            resultado = "Operação inválida!";
    }

    // 7. Exibe o resultado final de forma inteligente
    exibirResultado(elementoResultado, resultado);
}

// Função auxiliar para garantir que o resultado apareça seja o elemento um Input, Span ou Div
function exibirResultado(elemento, mensagem) {
    if (elemento.tagName === "INPUT" || elemento.tagName === "TEXTAREA") {
        elemento.value = mensagem;
    } else {
        elemento.textContent = mensagem;
    }
}
