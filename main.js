document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    calcular();
});

function calcular() {
    const pegaValorTotal = document.getElementById("total");
    const pegaValorTaxa = document.getElementById("taxa");
    const pegaClientes = document.getElementById("pessoas");
    const somaValores = parseInt(pegaValorTotal.value) + parseInt(pegaValorTaxa.value);
    const calcularValor = somaValores / parseInt(pegaClientes.value);

    document.getElementById("resultado").textContent = "Para cada um é R$ " + calcularValor.toFixed(2);
}
