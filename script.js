document.addEventListener("DOMContentLoaded", function() {
  const rateInputProduto = document.querySelectorAll('input[name="estrelas-produto"]');
  const fieldsetProduto = document.getElementById("perguntas-adicionais-produto");

  const rateInputAmbiente = document.querySelectorAll('input[name="estrelas-ambiente"]');
  const fieldsetAmbiente = document.getElementById("perguntas-adicionais-ambiente");

  const rateInputAtendimento = document.querySelectorAll('input[name="estrelas-atendimento"]');
  const fieldsetAtendimento = document.getElementById("perguntas-adicionais-atendimento");

  const rateInputTempo = document.querySelectorAll('input[name="estrelas-tempo"]');
  const fieldsetTempo = document.getElementById("perguntas-adicionais-tempo");

  const rateInputPreço = document.querySelectorAll('input[name="estrelas-preço"]');
  const fieldsetPreço = document.getElementById("perguntas-adicionais-preço");

  const rateInputSobre = document.querySelectorAll('input[name="estrelas-sobre"]');
  const fieldsetSobre = document.getElementById("perguntas-adicionais-sobre");






  const checkboxesProduto = fieldsetProduto.querySelectorAll('input[type="checkbox"]');
  const checkboxesAmbiente = fieldsetAmbiente.querySelectorAll('input[type="checkbox"]');
  const checkboxesAtendimento = fieldsetAtendimento.querySelectorAll('input[type="checkbox"]');
  const checkboxesTempo = fieldsetTempo.querySelectorAll('input[type="checkbox"]');
  const checkboxesPreço = fieldsetPreço.querySelectorAll('input[type="checkbox"]');
  const checkboxesSobre = fieldsetSobre.querySelectorAll('input[type="checkbox"]');





  rateInputProduto.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name="estrelas-produto"]:checked').value);

      if (selectedRating <= 3) {
        fieldsetProduto.style.display = "block";
        uncheckCheckboxes(checkboxesProduto);
      } else {
        fieldsetProduto.style.display = "none";
        uncheckCheckboxes(checkboxesProduto);
      }
    });
  });

  rateInputAmbiente.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name="estrelas-ambiente"]:checked').value);

      if (selectedRating <= 3) {
        fieldsetAmbiente.style.display = "block";
        uncheckCheckboxes(checkboxesAmbiente);
      } else {
        fieldsetAmbiente.style.display = "none";
        uncheckCheckboxes(checkboxesAmbiente);
      }
    });
  });

  rateInputAtendimento.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name="estrelas-atendimento"]:checked').value);

      if (selectedRating <= 3) {
        fieldsetAtendimento.style.display = "block";
        uncheckCheckboxes(checkboxesAtendimento);
      } else {
        fieldsetAtendimento.style.display = "none";
        uncheckCheckboxes(checkboxesAtendimento);
      }
    });
  });

  rateInputTempo.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name="estrelas-tempo"]:checked').value);

      if (selectedRating <= 3) {
        fieldsetTempo.style.display = "block";
        uncheckCheckboxes(checkboxesTempo);
      } else {
        fieldsetTempo.style.display = "none";
        uncheckCheckboxes(checkboxesTempo);
      }
    });
  });

  rateInputPreço.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name="estrelas-preço"]:checked').value);

      if (selectedRating <= 3) {
        fieldsetPreço.style.display = "block";
        uncheckCheckboxes(checkboxesPreço);
      } else {
        fieldsetPreço.style.display = "none";
        uncheckCheckboxes(checkboxesPreço);
      }
    });
  });

  rateInputSobre.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name="estrelas-sobre"]:checked').value);

      if (selectedRating <= 3) {
        fieldsetSobre.style.display = "block";
        uncheckCheckboxes(checkboxesSobre);
      } else {
        fieldsetSobre.style.display = "none";
        uncheckCheckboxes(checkboxesSobre);
      }
    });
  });

  

  function uncheckCheckboxes(checkboxes) {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  }
});

function exibirValorSelecionado() {
  var range = document.getElementById("numero");
  var valorSelecionado = document.getElementById("valor-selecionado");
  var emoji = document.getElementById("emoji");

  var valor = range.value;
  valorSelecionado.innerHTML = valor;
  if (valor == 0){
    emoji.innerHTML = "😡";
  }
    else if (valor == 1 ) {
      emoji.innerHTML = "😠"; 
  } else if (valor == 2 ) {
      emoji.innerHTML = "😢";    
  } else if (valor == 3 ) {
    emoji.innerHTML = "😕";  
  }else if (valor == 4){
      emoji.innerHTML = "🫤"; 
  } else if (valor == 5){
    emoji.innerHTML = "😐";
  }
  else if (valor == 6){
    emoji.innerHTML = "🙂";
  }
  else if (valor == 7){
    emoji.innerHTML = "😊";
  }
  else if (valor == 8){
    emoji.innerHTML = "😃";
  }
  else if (valor == 9){
    emoji.innerHTML = "😍";
  }
  else if (valor == 10){
    emoji.innerHTML = "🥳";
  } 
}
// Obtém o elemento de entrada
const input = document.querySelector("#datahora");

// Obtém a data e hora atuais
const now = new Date();

// Obtém a diferença em minutos entre o fuso horário local e o UTC
const timezoneOffset = now.getTimezoneOffset();

// Adiciona a diferença de minutos ao horário atual para obter o horário local
now.setMinutes(now.getMinutes() + timezoneOffset);

// Retira 3 horas ao horário atual (fuso)
now.setHours(now.getHours() - 3);

// Obtém o horário local no formato hh:mm
const currentHours = now.getHours().toString().padStart(2, "0");
const currentMinutes = now.getMinutes().toString().padStart(2, "0");
const currentTimeString = `${currentHours}:${currentMinutes}`;

// Obtém a data no formato yyyy-mm-dd
const currentDateString = now.toISOString().slice(0, 10);

// Atribui a data e hora ao elemento de entrada
input.value = `${currentDateString}T${currentTimeString}`;