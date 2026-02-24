
  

//Fechar o modal com o botao FECHAR
const botaoFecharCarrinho = document.getElementById("btn-fechar");
botaoFecharCarrinho.addEventListener("click", function(){
    cartModal.style.display = "none"
})
//todo FECHAR CLICANDO FORA
const cartModal = document.getElementById("cart-modal")
cartModal.addEventListener("click", function(event){
if(event.target === cartModal){
    cartModal.style.display = "none"
}
})

// Abrir o modal do carrinho
const botaoAbrirCarrinho = document.getElementById("btn-abrir");
botaoAbrirCarrinho.addEventListener("click", function(){
  if (carrinho == ''){
    alert("O carrinho está vazio, adicione produtos para ver...")
     
  } else{
    cartModal.style.display = "flex"
  }
  atualizarCarrinho();
    
})


//! ADICIONAR UM NOVO ELEMENTO NO CARRINHO
//pego todos os botões existentes
const botaoAdicionar = document.querySelectorAll(".produto-btn");
// recupero o espaço vazio no meu carrinho
const listaCarrinho = document.getElementById("card-carrinho");

//recupero a variavel que vai dar o valor
const totalProduto = document.getElementById("total");

//inicio o meu carrinho vazio
let carrinho = [];
console.log(carrinho);


//recupero os produtos pelo botão adicionar
botaoAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const nome = botao.dataset.nome;
    const preco = parseFloat(botao.dataset.preco);

    //verifico se o produto já está no carrinho (Pelo nome)
    const produtoExiste = carrinho.find((item) => item.nome === nome);

    //se existir ele incrementa na quantidade
    if (produtoExiste) {
      produtoExiste.quantidade++;
    } else {
      carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();
  });
});


function atualizarCarrinho(){
  //inicio a minha lista vazia
  listaCarrinho.innerHTML = '';
  let total = 0;


  //faco o calculo dos produtos
  carrinho.forEach((item, index) => {
    total += item.preco * item.quantidade

    //crio a div de apresentação 
    const div = document.createElement("div");
    div.classList.add("item-carrinho")
    div.classList.add("m-2")

    div.innerHTML = `<div class="w-full flex justify-around items-center bg-white rounded-lg h-20">
                        <span>${item.nome} (Qtd. ${item.quantidade})</span>
                        <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
                        <button onclick="removerItem(${index})" class="flex">❌</button>
                    </div>` ;

      //adiciono ela no carrinho
      listaCarrinho.appendChild(div)
  });

  //retorno o valor total 
  totalProduto.textContent ="R$ " + total.toFixed(2).replace('.', ',')
  console.log(carrinho.length);

};

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
