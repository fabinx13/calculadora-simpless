let visor = document.getElementById("visor");

function adicionarNum(num) {
    visor.value += num;
}

function limpar() {
    visor.value = "";
}

function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (e) {
        visor.value = "Erro";
    }
}
