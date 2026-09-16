const WHATSAPP = "5548998390024";

// Links de WhatsApp com mensagem pronta por botão
document.querySelectorAll(".wa").forEach((el) => {
  const msg = el.dataset.msg || "Oi Ju! Vi o site e quero saber mais.";
  el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Conversa do hero: pergunta, digitando, resposta
const root = document.documentElement;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced) {
  root.classList.add("js", "step-1", "step-3");
} else {
  root.classList.add("js");
  setTimeout(() => root.classList.add("step-1"), 250);
  setTimeout(() => root.classList.add("step-2"), 900);
  setTimeout(() => root.classList.add("step-3"), 2100);
}

// Depoimentos reais do Google
const reviews = [
  ["O atendimento é maravilhoso desde o primeiro contato até o pós venda. A Juliana traz uma genética incrível com cachorrinhos muito carinhosos e dóceis.", "Gisele G."],
  ["Tivemos uma experiência ótima, adquirimos uma linda filhote na coloração merle de altíssima linhagem, ótimo atendimento, canil muito confiável.", "Karina K."],
  ["Comprei meu primeiro Spitz, o Benício, e não demorou comprei outro, o Benjamin. São os filhotes mais lindos, e ela deposita todo o amor em cada um.", "Sabrina P."],
  ["Canil maravilhoso! Os cães são tratados com todo amor e carinho, e não ficam presos. Comprei meu Lulu há dois anos, genética incrível.", "Viviane D."],
  ["Super recomendo esse canil, filhotes lindos, cheios de saúde, excelente atendimento. Meu Frederico é lindo, super brincalhão.", "Manuela A."],
  ["Os bebês são únicos e maravilhosos, tanto que eu não resisti e comprei logo 3. A Juliana sempre cuida muito bem deles.", "Milena C."],
  ["Filhotes de altíssima linhagem, gostei tanto que depois de alguns meses peguei minha segunda filhote de lá.", "Carol W., Local Guide"],
  ["As instalações são novas, muito bem cuidadas e o local estava brilhando de tão limpo. Perfeito para quem valoriza conforto e organização.", "Marilanji F."],
  ["O trabalho da Ju é maravilhoso! Tenho duas Lulus que ficam no Hotel sempre que viajo. Não troco o serviço da Ju por nenhum outro lugar.", "Taciane D., Local Guide"],
  ["Excelente atendimento, amor pelo que faz, filhotes de excelente linhagem, criados com amor, carinho e dedicação.", "Keilaa S."],
  ["Fomos super bem atendidos, pet super saudável.", "Fabrício B."],
  ["Minha pequena chega limpinha e cheirosa e com um rabinho rosa maravilhosa.", "Fernanda M., Local Guide"],
  ["Lugar maravilhoso, limpinho, cheiroso. O atendimento nota mil, tudo perfeito.", "Solange R."],
  ["A melhor, com certeza. Super indico, excelência e qualidade.", "Amanda V."],
];

const track = document.getElementById("reviews");
const card = ([text, who], hidden) => {
  const li = document.createElement("li");
  li.className = "review";
  if (hidden) li.setAttribute("aria-hidden", "true");
  const p = document.createElement("p");
  p.textContent = `“${text}”`;
  const f = document.createElement("footer");
  f.innerHTML = `<span class="stars" aria-label="5 estrelas">★★★★★</span><b></b>, Google`;
  f.querySelector("b").textContent = who;
  li.append(p, f);
  return li;
};
reviews.forEach((r) => track.append(card(r, false)));
// Duplica a lista para o loop contínuo; sem movimento, fica rolagem manual
if (!reduced) {
  reviews.forEach((r) => track.append(card(r, true)));
  track.parentElement.classList.add("auto");
}

// Botão flutuante aparece depois do hero
const floatWa = document.getElementById("floatWa");
const hero = document.querySelector(".hero");
new IntersectionObserver(([e]) => floatWa.classList.toggle("show", !e.isIntersecting)).observe(hero);
