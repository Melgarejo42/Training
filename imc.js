document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("calcularButton").addEventListener("click", function() {

    // Guarda os dados fornecidos pelo usuário em formato Float
    let altura = parseFloat(document.getElementById("alturaInput").value);
    let peso = parseFloat(document.getElementById("pesoInput").value);

    // Variável imc será igual ao resultado da função calcularIMC
    let imc = calcularIMC(altura, peso);

    // Mensagem exibida ao usuário após o cálculo, de acordo com os dados fornecidos
    let mensagem;
       if (imc < 18.5) {
           mensagem = "Abaixo do peso.";
       } else if (imc < 25) {
           mensagem = "Peso ideal.";
       } else if (imc < 30) {
           mensagem = "Sobrepeso.";    
       } else if (imc < 35) {
           mensagem = "Obesidade grau I.";
       } else if (imc < 40) {
           mensagem = "Obesidade grau II (severa).";
       } else {
           mensagem = "Obesidade grau III (mórbida).";
       }

       document.getElementById("resultadoIMC").innerText = "Seu IMC é " + imc.toFixed(1) + "\n\n Classificação: " + mensagem;

       // Função para classificar o resultado
    function classificacao(imc) {
        if (imc < 18.5) {
            return "abaixoDoPeso";
        } else if (imc < 25) {
            return "pesoIdeal";
        } else if (imc < 30) {
            return "sobrepeso";    
        } else if (imc < 35) {
            return "obesidadeI";
        } else if (imc < 40) {
            return "obesidadeII";
        } else {
            return "obesidadeIII";
        }
    }

    // Limpa os destaques anteriores
    clearHighlights();

    // Determinar o ID da linha correspondente à classificação do IMC
    let linhaID = classificacao(imc);
    console.log("Linha ID:", linhaID);

    // Adiciona classe de destaque à linha correspondente
    let linha = document.getElementById(linhaID);
       if (linha) {
           linha.classList.add("destaque");
       }

    // Exibe a tabela
    document.getElementById("tabelaResultado").style.display = "inline-table";
});

    // Função para calculo do IMC (peso dividido pela altura ao quadrado)
   function calcularIMC(altura, peso) {
       let alturaMetros = altura / 100;
       let imc = peso / (alturaMetros * alturaMetros);
       return imc;
   }

   // Função para limpar os destaques anteriores
   function clearHighlights() {
        let linha = document.querySelectorAll("#tabelaResultado tr");
        linha.forEach(function(linha) {
            linha.classList.remove("destaque");
        });
   }
});
