document.addEventListener("DOMContentLoaded", function () {
    // Função para criar um elemento de texto
    function createTextElement(textContent) {
      return document.createTextNode(textContent);
    }
  
    // Função para carregar o conteúdo principal
    function loadMainContent() {
      // Criação do header
        const cabecalho = document.querySelector("header");
        const cabecalhoTitulo = document.createElement("h1");
        cabecalhoTitulo.appendChild(createTextElement("Squirtle"));
        cabecalho.appendChild(cabecalhoTitulo);
  
      // Criação da navegação principal
        const navegacao = document.querySelector("nav");
        const listaNavegacao = document.createElement("ul");
    
        const linkInfo = document.createElement("li");
        const anchorInfo = document.createElement("a");
        anchorInfo.href = "#info-squirtle";
        anchorInfo.appendChild(createTextElement("Informações sobre Squirtle"));
        linkInfo.appendChild(anchorInfo);
        listaNavegacao.appendChild(linkInfo);

        const linkCarac = document.createElement("li");
        const anchorCarac = document.createElement("a");
        anchorCarac.href = "#caracteristicas";
        anchorCarac.appendChild(createTextElement("Características"));
        linkCarac.appendChild(anchorCarac);
        listaNavegacao.appendChild(linkCarac);

        const linkCuriosidades = document.createElement("li");
        const anchorCuriosidades = document.createElement("a");
        anchorCuriosidades.href = "#curiosidades";
        anchorCuriosidades.appendChild(createTextElement("Curiosidades"));
        linkCuriosidades.appendChild(anchorCuriosidades);
        listaNavegacao.appendChild(linkCuriosidades);

        const linkArtigo = document.createElement("li");
        const anchorArtigo = document.createElement("a");
        anchorArtigo.href = "#artigo-squirtle";
        anchorArtigo.appendChild(createTextElement("Artigo sobre Squirtle"));
        linkArtigo.appendChild(anchorArtigo);
        listaNavegacao.appendChild(linkArtigo);

        const linkRecurso = document.createElement("li");
        const anchorRecurso = document.createElement("a");
        anchorRecurso.href = "#recurso";
        anchorRecurso.appendChild(createTextElement("Recursos Adicionais"));
        linkRecurso.appendChild(anchorRecurso);
        listaNavegacao.appendChild(linkRecurso);

        const linkEvolucao = document.createElement("li");
        const anchorEvolucao = document.createElement("a");
        anchorEvolucao.href = "#evolucao";
        anchorEvolucao.appendChild(createTextElement("Evoluções"));
        linkEvolucao.appendChild(anchorEvolucao);
        listaNavegacao.appendChild(linkEvolucao);

    
        navegacao.appendChild(listaNavegacao);
    
        // Criação do main
        const principal = document.querySelector("main");
    
        const secaoInfo = document.createElement("section");
        secaoInfo.id = "info-squirtle";
    
        const tituloInfo = document.createElement("h2");
        tituloInfo.appendChild(createTextElement("Informações sobre Squirtle"));
        secaoInfo.appendChild(tituloInfo);
        
        const divInfo = document.createElement("div");
        const imagemSquirtle1 = document.createElement("img");
        imagemSquirtle1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png";
        imagemSquirtle1.alt = "Squirtle";
        divInfo.appendChild(imagemSquirtle1);

        const imagemSquirtle2 = document.createElement("img");
        imagemSquirtle2.src = "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png";
        imagemSquirtle2.alt = "Squirtle";
        divInfo.appendChild(imagemSquirtle2);
        secaoInfo.appendChild(divInfo);

        const paragrafoInfo1 = document.createElement("p");
        paragrafoInfo1.appendChild(createTextElement("Squirtle é um Pokémon do tipo água. É o Pokémon inicial da região de Kanto e evolui para Wartortle"));
        secaoInfo.appendChild(paragrafoInfo1);
    
        principal.appendChild(secaoInfo);


        // Características
        const secaoCarac = document.createElement("section");
        secaoCarac.id = "caracteristicas";

        const tituloCarac = document.createElement("h2");
        tituloCarac.appendChild(createTextElement("Características"));
        secaoCarac.appendChild(tituloCarac);
    
        const descricaoCarac = document.createElement("p");
        descricaoCarac.appendChild(createTextElement("Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos como Water Gun e Hydro Pump."));

        secaoCarac.appendChild(descricaoCarac);
        principal.appendChild(secaoCarac);


        // Curiosidades
        const artigoCuriosidades = document.createElement("article");
        artigoCuriosidades.id = "curiosidades";
    
        const tituloCuriosidades = document.createElement("h2");
        tituloCuriosidades.appendChild(createTextElement("Curiosidades"));
        artigoCuriosidades.appendChild(tituloCuriosidades);
    
        const listaCuriosidades = document.createElement("ul");
    
        const itemCuriosidade1 = document.createElement("li");
        itemCuriosidade1.appendChild(createTextElement("Squirtle é um dos Pokémon mais populares e adoráveis."));
        listaCuriosidades.appendChild(itemCuriosidade1);
    
        const itemCuriosidade2 = document.createElement("li");
        itemCuriosidade2.appendChild(createTextElement("Seu nome se deriva da palavra squirrel (esquilo) e turtle (tartaruga)."));
        listaCuriosidades.appendChild(itemCuriosidade2);

        const itemCuriosidade3 = document.createElement("li");
        itemCuriosidade3.appendChild(createTextElement("Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."));
        listaCuriosidades.appendChild(itemCuriosidade3);
    
        artigoCuriosidades.appendChild(listaCuriosidades);
        principal.appendChild(artigoCuriosidades);


        // Artigo sobre Squirtle
        const artigoSobreSquirtle = document.createElement("article");
        artigoSobreSquirtle.id = "artigo-squirtle";

        const tituloSobreSquirtle = document.createElement("h2");
        tituloSobreSquirtle.appendChild(createTextElement("Squirtle: O Amigo Aquático"));
        artigoSobreSquirtle.appendChild(tituloSobreSquirtle);
            
        const listaSobreSquirtle = document.createElement("ul");
    
        const itemSobreSquirtle1 = document.createElement("p");
        itemSobreSquirtle1.appendChild(createTextElement("Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes."));
        listaSobreSquirtle.appendChild(itemSobreSquirtle1);
    
        const itemSobreSquirtle2 = document.createElement("p");
        itemSobreSquirtle2.appendChild(createTextElement("Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas."));
        listaSobreSquirtle.appendChild(itemSobreSquirtle2);

        const itemSobreSquirtle3 = document.createElement("p");
        itemSobreSquirtle3.appendChild(createTextElement("Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas."));
        listaSobreSquirtle.appendChild(itemSobreSquirtle3);
    
        artigoSobreSquirtle.appendChild(listaSobreSquirtle);
        principal.appendChild(artigoSobreSquirtle);


        // Recursos Adicionais
        const secaoRecursos = document.createElement("section");
        secaoRecursos.id = "recurso";

        const tituloRecursos = document.createElement("h2");
        tituloRecursos.appendChild(createTextElement("Recursos Adicionais"));
        secaoRecursos.appendChild(tituloRecursos);

        const listaRecursos = document.createElement("ul");

        const itemRecurso1 = document.createElement("li");
        const anchorRecurso1 = document.createElement("a");
        anchorRecurso1.href = "https://www.pokemon.com/br/pokedex/squirtle";
        anchorRecurso1.appendChild(createTextElement("Pokédex - Squirtle"));
        itemRecurso1.appendChild(anchorRecurso1);
        listaRecursos.appendChild(itemRecurso1);


        const itemRecurso2 = document.createElement("li");
        const anchorRecurso2 = document.createElement("a");
        anchorRecurso2.href = "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)";
        anchorRecurso2.appendChild(createTextElement("Bulbapedia - Squirtle"));
        itemRecurso2.appendChild(anchorRecurso2);
        listaRecursos.appendChild(itemRecurso2);

        secaoRecursos.appendChild(listaRecursos);
        principal.appendChild(secaoRecursos);


        // Evolução
        const secaoEvolucao = document.createElement("section");
        secaoEvolucao.id = "evolucao";
    
        const tituloEvolucao = document.createElement("h2");
        tituloEvolucao.appendChild(createTextElement("Evoluções"));
        secaoEvolucao.appendChild(tituloEvolucao);
    
        const listaEvolucao = document.createElement("ul");
    
        const itemSquirtle = document.createElement("li");
        const anchorSquirtle = document.createElement("a");
        anchorSquirtle.href = "#";
        itemSquirtle.appendChild(anchorSquirtle);
    
        const imagemEvolucaoSquirtle = document.createElement("img");
        imagemEvolucaoSquirtle.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png";
        imagemEvolucaoSquirtle.alt = "Squirtle";
        itemSquirtle.appendChild(imagemEvolucaoSquirtle);
    
        const legendaSquirtle = document.createElement("figcaption");
        legendaSquirtle.appendChild(createTextElement("1. Squirtle"));
        itemSquirtle.appendChild(legendaSquirtle);
    
        listaEvolucao.appendChild(itemSquirtle);
    
        const itemWartortle = document.createElement("li");
        const anchorWartortle = document.createElement("a");
        anchorWartortle.href = "#";
        itemWartortle.appendChild(anchorWartortle);
    
        const imagemEvolucaoWartortle = document.createElement("img");
        imagemEvolucaoWartortle.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png";
        imagemEvolucaoWartortle.alt = "Wartortle";
        itemWartortle.appendChild(imagemEvolucaoWartortle);
    
        const legendaWartortle = document.createElement("figcaption");
        legendaWartortle.appendChild(createTextElement("2. Wartortle"));
        itemWartortle.appendChild(legendaWartortle);
    
        listaEvolucao.appendChild(itemWartortle);
    
        const itemBlastoise = document.createElement("li");
        const anchorBlastoise = document.createElement("a");
        anchorBlastoise.href = "#";
        itemBlastoise.appendChild(anchorBlastoise);
    
        const imagemEvolucaoBlastoise = document.createElement("img");
        imagemEvolucaoBlastoise.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png";
        imagemEvolucaoBlastoise.alt = "Blastoise";
        itemBlastoise.appendChild(imagemEvolucaoBlastoise);
    
        const legendaBlastoise = document.createElement("figcaption");
        legendaBlastoise.appendChild(createTextElement("3. Blastoise"));
        itemBlastoise.appendChild(legendaBlastoise);
    
        listaEvolucao.appendChild(itemBlastoise);
    
        secaoEvolucao.appendChild(listaEvolucao);
        principal.appendChild(secaoEvolucao);
    
        // Criação do rodapé

        const rodape = document.querySelector("footer");

        const rodapeParagrafo1 = document.createElement("p");
        rodapeParagrafo1.appendChild(createTextElement("© 2024 Página do Pokémon Squirtle. Todos os direitos reservados."));
        rodape.appendChild(rodapeParagrafo1);

        const rodapeParagrafo2 = document.createElement("p");
        rodapeParagrafo2.appendChild(createTextElement("Voltar para o topo"));
        rodape.appendChild(rodapeParagrafo2);

        const rodapeParagrafo3 = document.createElement("p");
        const rodapeAnchor3 = document.createElement("a");
        rodapeAnchor3.href ='mailto';
        rodapeAnchor3.appendChild(createTextElement("Contato via e-mail"));
        rodape.appendChild(rodapeAnchor3);
        rodape.appendChild(rodapeParagrafo3);

        const rodapeParagrafo4 = document.createElement("p");
        const rodapeAnchor4 = document.createElement("a");
        rodapeAnchor4.href ='tel';
        rodapeAnchor4.appendChild(createTextElement("Telefone: (55) 5555-5555"));
        rodape.appendChild(rodapeAnchor4);
        rodape.appendChild(rodapeParagrafo4);
    }

    // Chama a função para carregar o conteúdo principal
    loadMainContent();

    // Impedindo a navegação ao clicar nas evoluções
    const evolutionLinks = document.querySelectorAll("#evolucao a");
    evolutionLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });
});
