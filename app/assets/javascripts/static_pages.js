var ImgDinheiro = '<img src="/assets/IconMoney2.png" class = "opaque">';

var ImgEquipe = '<img src="/assets/IconStudyHat2.png" class = "opaque">';

var ImgPacote = '<img src="/assets/IconPackage2.png">';

var ImgIdeia = '<img src="/assets/IconBubbles2.png">';

var TextoEquipe = '<h2>Nossas Equipes:</h2><p>Cada pessoa tem um bagagem de conhecimentos e experiências única, e essas bagagens podem se complementar e oferecer resultados muito produtivos. Acreditamos que, principalmente falando de inovação, quando juntarmos pessoas com backgrounds diferentes teremos algo muito maior que a soma dos participantes. Por isso, no QueroPronto teremos <span class = "highlight"> 6 equipes</span> de <span class = "highlight"> 6 pessoas </span> com habilidades complementares para que juntos possam desenolver algo que não conseguiriam sozinhos.</p>';

var TextoPacote = '<h2>Soluções Inovadoras</h2><p>Brainstorming traz muitas ideias, mas apenas a ideia não realmente resolve um problema. No QueroPronto, teremos um volume grande de ideias, mas também contará muito pro resultado a <span class = "highlight"> viabilidade e a prototipação</span>. Para garantir isso, teremos vários apoiadores que irão ajudar as equipes a desenvolver bons resultados, incluindo as empresas que irão estar no evento, para ajudar a direcionar as equipes para soluções aplicáveis</p>';

var TextoIdeia = '<h2>Ideias para demandas reais</h2><p>As equipes trabalham em cima de <span class = "highlight"> desafios reais das empresas </span> que apoiam o evento. Faz parte do desafio tentar chegar em um <span class = "highlight">grande número de soluções</span>, com isso incentivamos um brainstorming em cima de problemas da indústria, com o qual muitas ideias inovadoras podem surgir. Ideias que serão discutidas por várias cabeças com backgrounds diferentes que podem se complementar e gerar muito valor.</p>';

var TextoDinheiro = '<h2>Pensando como negócio</h2><p>Todos os participantes da equipe vão estar trabalhando em cima de demandas reais de empresas, criando produtos os quais eles já sabem que tem clientes que querem comprar. O objetivo de todo esse ambiente é que eles vejam que <span class = "highlight"> existem oportunidades </span> a serem exploradas e que tanto as empresas quanto os participantes enxerguem a força da <span class = "highlight"> união indústria e academia </span></p>';

function changeText(id,text,imgName)
{
  unactive('Pacote');
  unactiveImg('iconPackage')
  unactive('Equipe');
  unactiveImg('iconHat')
  unactive('Ideia');
  unactiveImg('iconBubbles')
  unactive('Dinheiro');
  unactiveImg('iconMoney')
  document.getElementById('textoMudado').innerHTML= text;
  document.getElementById(imgName).style.display= "block";
  document.getElementById(id).className = "active";
}

function unactive (id)
{
  document.getElementById(id).className = "";
}

function unactiveImg (id)
{
  document.getElementById(id).style.display = "none";
}
