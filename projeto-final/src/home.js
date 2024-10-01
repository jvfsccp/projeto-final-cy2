function pesquisar() {
  let section = document.getElementById("resultados-busca");
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  
  let resultado = "";

  section.innerHTML = "";

  if (campoPesquisa === "") {
    section.classList.add("hidden"); // Oculta a seção se a pesquisa estiver vazia
    return; // Sai da função
  }

  for (let dado of dados) {
    if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase())) {
      resultado += `
       <div class="flex flex-row justify-start">
          <div class="flex-col">
            <img src="${dado.imagem}" alt="${dado.titulo}" class="w-40">
            <h2 class="text-2xl font-bold text-center">${dado.titulo}</h2>
          </div>

          <div class="flex flex-col items-center justify-center text-center gap-5 ml-10">
            <p>${dado.descricao}</p>
            <p>${dado.jogadores}</p>
            <p>Desenvolvido pela <span class="font-bold underline"><a href="${dado.link}" target="_blank">${dado.empresa}</a></span></p>
          </div>
        </div>
      `
    }
  }
  console.log("Resultados encontrados:", resultado);
  section.innerHTML = resultado
  
  
  // Remover 'hidden' apenas se houver resultados
  if (resultado !== "") {
    section.classList.remove("hidden");
    section.classList.add("flex")
  } else {
    section.classList.add("hidden")
  }
}
