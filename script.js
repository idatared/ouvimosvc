
document.addEventListener("DOMContentLoaded", function() {
  const rateInput = document.querySelectorAll('input[name^="estrelas"]');
  const fieldsetProduto = document.getElementById("perguntas-adicionais-produto");
  const fieldsetAmbiente = document.getElementById("perguntas-adicionais-ambiente");
  const fieldsetAtendimento = document.getElementById("perguntas-adicionais-atendimento");
  const fieldsetTempo = document.getElementById("perguntas-adicionais-tempo");
  const fieldsetPreço = document.getElementById("perguntas-adicionais-preço");
  const fieldsetSobre = document.getElementById("perguntas-adicionais-sobre");

  // const fieldsetNome = document.getElementById("perguntas-adicionais-Nome");

  


  const checkboxesProduto = fieldsetProduto.querySelectorAll('input[type="checkbox"]');
  const checkboxesAmbiente = fieldsetAmbiente.querySelectorAll('input[type="checkbox"]');
  const checkboxesAtendimento = fieldsetAtendimento.querySelectorAll('input[type="checkbox"]');
  const checkboxesTempo = fieldsetTempo.querySelectorAll('input[type="checkbox"]');
  const checkboxesPreço = fieldsetPreço.querySelectorAll('input[type="checkbox"]');
  const checkboxesSobre = fieldsetSobre.querySelectorAll('input[type="checkbox"]');

  //const checkboxesNome = fieldsetNome.querySelectorAll('input[type="checkbox"]');

  rateInput.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name^="estrelas"]:checked').value);

      if (selectedRating <= 4) {
        fieldsetProduto.style.display = "block";
        fieldsetAmbiente.style.display = "block";
        fieldsetAtendimento.style.display = "block";
        fieldsetTempo.style.display = "block";
        fieldsetPreço.style.display = "block";
        fieldsetSobre.style.display = "block";

        // fieldsetNome.style.display = "block";
      } else {
        fieldsetProduto.style.display = "none";
        fieldsetAmbiente.style.display = "none";
        fieldsetAtendimento.style.display = "none";
        fieldsetTempo.style.display = "none";
        fieldsetPreço.style.display = "none";
        fieldsetSobre.style.display = "none";

        // fieldsetNome.style.display = "none";
        uncheckCheckboxes(checkboxesProduto);
        uncheckCheckboxes(checkboxesAmbiente);
        uncheckCheckboxes(checkboxesAtendimento);
        uncheckCheckboxes(checkboxesTempo);
        uncheckCheckboxes(checkboxesPreço);
        uncheckCheckboxes(checkboxesSobre);

        // uncheckCheckboxes(checkboxesNome);
      }
    });
  });

  function uncheckCheckboxes(checkboxes) {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  }
});


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