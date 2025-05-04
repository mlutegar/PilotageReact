const handleNossaEquipeClick = () => {
  if (isHomePage) {
    scrollToSection('nossaEquipe');
  } else {
    navigate("/?section=nossaEquipe");
  }
}

export const Banners = [
  {
    titulo: (
        <>
          Construindo seu <strong>Futuro Sólido </strong><br/>
          com <strong>Gestão Segura </strong><br/>
          e <strong>Independente.</strong>
        </>
    ),
    btnTexto: <><strong>Fale conosco</strong></>,
    imagem: "imagens/Banner1.png",
    onClick: () => scrollToSection('contato')
  },
  {
    titulo: (
        <>
          A história da <strong>Pilotage:</strong>
          <br/>10 anos de compromisso <strong>com seu futuro.</strong>
        </>
    ),
    btnTexto: <><strong>Saiba mais</strong></>,
    imagem: "imagens/Banner2.png",
    onClick: () => scrollToSection('sobreNos')
  },
  {
    titulo: (
        <>
          Encontre profissionais <strong>dedicados</strong> a cuidar do <br/>
          <strong>seu futuro financeiro.</strong>
        </>
    ),
    btnTexto: <><strong>Nossa Equipe</strong></>,
    imagem: "imagens/Banner3.png",
    onClick: handleNossaEquipeClick
  },
  {
    titulo: (
        <>
          Com a <strong>Pilotage</strong>, você investe com <strong>segurança <br/>e tranquilidade.</strong>
        </>
    ),
    btnTexto: <><strong>Como investir?</strong></>,
    imagem: "imagens/Banner4.png",
    onClick: () => scrollToSection('comoInvestir')
  },
  {
    titulo: (
        <>
          <strong>Atendimento exclusivo</strong> para entender suas <strong>necessidades</strong> e proporcionar as melhores <strong>soluções financeiras.</strong>
        </>
    ),
    btnTexto: <><strong>Como investir?</strong></>,
    imagem: "imagens/Banner5.png",
    onClick: () => scrollToSection('gestaoRecursos')
  }
];