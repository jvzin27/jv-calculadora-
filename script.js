function calcular() {

    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").textContent =
            "Digite os dois números!";
        return;
    }

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    const operacao = document.getElementById("operacao").value;

    let resultado;

    if (operacao === "adicao") {

        resultado = n1 + n2;

    } else if (operacao === "subtracao") {

        resultado = n1 - n2;

    } else if (operacao === "multiplicacao") {

        resultado = n1 * n2;

    } else if (operacao === "divisao") {

        if (n2 === 0) {
            resultado = "Não é possível dividir por zero!";
        } else {
            resultado = n1 / n2;
        }
    }

    document.getElementById("resultado").textContent = resultado;
}
```