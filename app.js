function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let estrutura = "";
    let descricao = "";
    let tags = "";
    let campoPesquisa = document.getElementById("campo_pesquisa").value
        
     if (!campoPesquisa){
      section.innerHTML =  "<p>Ops, o alvo de pesquisa não foi digitado! </p>"  
      return;

     }

     campoPesquisa = campoPesquisa.toLowerCase()

    // Itera sobre cada dado na lista de resultados
    for (let dado of dados) {
     estrutura = dado.estrutura.toLowerCase()
     descricao = dado.descricao.toLowerCase()
     tags = dado.tags.toLowerCase()
      if (estrutura.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)){
      // Cria uma nova div para cada resultado, formatando o HTML
      resultados += `
        <div class="item-resultado">
          <h2 class="descricao-meta">${dado.estrutura}</h2>
          <p style="text-align: center;">${dado.descricao}</p>
          <style>
            img {
              border: 2px solid rgb(8, 8, 8);
            }
          </style>
          <a href=${dado.link1} target="_blank">
            <div style="text-align: center;">
              <img src=${dado.imagem} alt="Estrutura CE2" width="600" height="300">
              <p>${dado.chamada1}</p>
            </div>
          </a>
          <a href=${dado.link2} target="_blank">
            <div style="text-align: center;">
              <p>${dado.chamada2}</p>
            </div>
          </a>
        </div>
      `;
    }
  }
    if(!resultados){
      section.innerHTML =  "<p>Esssa estrutura ou equipamento ainda não foi cadastrado(a)! </p>"  
      return;
    }

  
    // Atribui o HTML formatado à seção de resultados
    section.innerHTML = resultados;
  }