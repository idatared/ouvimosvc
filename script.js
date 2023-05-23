
document.addEventListener("DOMContentLoaded", function() {
  const rateInput = document.querySelectorAll('input[name^="estrelas"]');
  const fieldsetProduto = document.getElementById("perguntas-adicionais-produto");
  const fieldsetAmbiente = document.getElementById("perguntas-adicionais-ambiente");
  // const fieldsetNome = document.getElementById("perguntas-adicionais-Nome");

  const fieldsetMusica = document.getElementById("perguntas-adicionais-musica");


  const checkboxesProduto = fieldsetProduto.querySelectorAll('input[type="checkbox"]');
  const checkboxesAmbiente = fieldsetAmbiente.querySelectorAll('input[type="checkbox"]');

  const checkboxesMusica = fieldsetMusica.querySelectorAll('input[type="checkbox"]');

  //const checkboxesNome = fieldsetNome.querySelectorAll('input[type="checkbox"]');

  rateInput.forEach(function(input) {
    input.addEventListener("change", function() {
      const selectedRating = parseInt(document.querySelector('input[name^="estrelas"]:checked').value);

      if (selectedRating <= 3) {
        fieldsetProduto.style.display = "block";
        fieldsetAmbiente.style.display = "block";
        fieldsetMusica.style.display = "block";

        // fieldsetNome.style.display = "block";
      } else {
        fieldsetProduto.style.display = "none";
        fieldsetAmbiente.style.display = "none";
        fieldsetMusica.style.display = "none";

        // fieldsetNome.style.display = "none";
        uncheckCheckboxes(checkboxesProduto);
        uncheckCheckboxes(checkboxesAmbiente);
        uncheckCheckboxes(checkboxesMusica);

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