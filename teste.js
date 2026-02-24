const botoes = document.querySelectorAll(".produto-btn");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");

let carrinho = [];

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const nome = botao.dataset.nome;
    const preco = parseFloat(botao.dataset.preco);

    const produtoExistente = carrinho.find(item => item.nome === nome);

    if (produtoExistente) {
      produtoExistente.quantidade++;
    } else {
      carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco * item.quantidade;

    const div = document.createElement("div");
    div.classList.add("item-carrinho");

    div.innerHTML = `
      <span>${item.nome} (x${item.quantidade})</span>
      <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
      <button onclick="removerItem(${index})">❌</button>
    `;

    listaCarrinho.appendChild(div);
  });

  totalElemento.textContent = total.toFixed(2);
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}