
function criarCalculadora() {
    
    var resultadoInput = document.getElementById("resultado");
    var numeroAtual = "";
    var operadorAtual = "";

    function adicionarNumero(numero) {
        numeroAtual += numero;
        resultadoInput.value = numeroAtual;
    }

    function adicionarOperador(operador) {
        operadorAtual = operador;
        numeroAtual = "";
    }

    function calcular() {
        var numero1 = parseFloat(resultadoInput.value);
        var numero2 = parseFloat(numeroAtual);
        var resultado;

        switch (operadorAtual) {
            case "+":
                resultado = numero1 + numero2;
                break;
            case "-":
                resultado = numero1 - numero2;
                break;
            case "*":
                resultado = numero1 * numero2;
                break;
            case "/":
                resultado = numero1 / numero2;
                break;
            default:
                resultado = 0;
        }

        resultadoInput.value = resultado;
        numeroAtual = "";
        operadorAtual = "";
    }

    function adicionarDecimal() {
        if (!numeroAtual.includes(".")) {
            numeroAtual += ".";
            resultadoInput.value = numeroAtual;
        }
    }
}
criarCalculadora()