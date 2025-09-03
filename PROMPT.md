# Colocar imagens diferentes para cada card de relatorio na página de pesquisa

Na página "/#/relatorio-mensal" todos os cards estão com a mesma imagem. O certo é pegar a imagem daquele relatório.

Os cards que eu estou falando é:

```
<CardRelatorio
    key={index}
    index={index}
    imagem={relatorio.imagem || relatorio.featured_image}
    titulo={relatorio.post_title}
    descricao={`Confira aqui o Relatório Mensal Pilotage do mês de ${mes} de ${ano} e veja nossas análises sobre\n` +
        "economia internacional, economia brasileira e como estamos atuando neste período.\n" +
        "A Pilotage publica mensalmente este relatório no site.\n" +
        "Use a barra de controle para ampliar ou reduzir, virar páginas ou visualizar o relatório em tela\n" +
        "cheia."}
    link={relatorio.guid}
    mes={mes}
    ano={ano}
/>
```

A capa desses relatórios seria a primeira página do pdf.