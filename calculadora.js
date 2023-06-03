
function criarCalculadora() {
    //     var calculadoraDiv = document.getElementById("calculadora");

    //     // Crie a estrutura HTML da calculadora
    //     var calculadoraHTML = '<input type="text" id="numero" placeholder="Número">';
    //     calculadoraHTML += '<select id="operacao">';
    //     calculadoraHTML += '<option value="soma">Somar</option>';
    //     calculadoraHTML += '<option value="subtracao">Subtrair</option>';
    //     calculadoraHTML += '<option value="divisao">Dividir</option>';
    //     calculadoraHTML += '<option value="multiplicacao">Multiplicar</option>';
    //     calculadoraHTML += '</select>';
    //     calculadoraHTML += '<button onclick="calcular()">Calcular</button>';
    //     calculadoraHTML += '<div id="resultado"></div>';

    //     // Adicione a estrutura HTML da calculadora ao elemento <div>
    //     calculadoraDiv.innerHTML = calculadoraHTML;
    // }

    // function calcular() {
    //     var numeros = document.getElementById("numero").value.split(",").map(function(num) {
    //         return parseFloat(num.trim());
    //     });
    //     var operacao = document.getElementById("operacao").value;

    //     var resultado;
    //     if (operacao === "soma") {
    //         resultado = numeros.reduce(function(acc, curr) {
    //             return acc + curr;
    //         });
    //     } else if (operacao === "subtracao") {
    //         resultado = numeros.reduce(function(acc, curr) {
    //             return acc - curr;
    //         });
    //     } else if (operacao === "divisao") {
    //         resultado = numeros.reduce(function(acc, curr) {
    //             return acc / curr;
    //         });
    //     } else if (operacao === "multiplicacao") {
    //         resultado = numeros.reduce(function(acc, curr) {
    //             return acc * curr;
    //         });
    //     }

    //     document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

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