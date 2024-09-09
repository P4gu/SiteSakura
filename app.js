function pesquisar() 
{
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (campoPesquisa == "") 
    {
        section.innerHTML = "Ah, mas que coisa! Sem palavras mágicas, não posso te levar em uma aventura!"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) 
    {
       nome = dado.nome.toLocaleLowerCase()
       descricao = dado.descricao.toLocaleLowerCase()
       tags = dado.tags.toLocaleLowerCase()

        if (nome.includes(campoPesquisa) ||(descricao.includes(campoPesquisa) ||(tags.includes(campoPesquisa)))) {

        
            console.log(dado.nome.includes(campoPesquisa))

        resultados += `
        <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <h3>Poderes e Habilidades:</h3>
            <p>${dado.poderes}</p>
            <h3>Simbolismo:</h3>
            <p>${dado.simbolismo}</p>
        </div>`;
        }
    }

    if (!resultados)
        {
            resultados = "Hummm... Será que essa palavra perdida guarda algum segredo sobre as Cartas Clow? Preciso investigar isso com mais cuidado!"
    }
    
    section.innerHTML = resultados
}



