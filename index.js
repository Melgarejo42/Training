document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("calcularButton").addEventListener("click", function() {
       let altura = parseFloat(document.getElementById("alturaInput").value);
       let peso = parseFloat(document.getElementById("pesoInput").value);
       let imc = calcularIMC(altura, peso);

       // Mensagem exibida ao usuário após o cálculo
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

       // Determinar o ID da linha correspondente à classificação do IMC
       let linhaID = classificacao(imc);
       console.log("Linha ID:", linhaID);

       // Adicionar classe de destaque à linha correspondente
       let linha = document.getElementById(linhaID);
       console.log("Linha:", linha);
       if (linha) {
           linha.classList.add("destaque");
       }

       // Exibir a tabela
       document.getElementById("tabelaResultado").style.display = "inline-table";
   });

   function calcularIMC(altura, peso) {
       let alturaMetros = altura / 100;
       let imc = peso / (alturaMetros * alturaMetros);
       return imc;
   }
});

let teste;