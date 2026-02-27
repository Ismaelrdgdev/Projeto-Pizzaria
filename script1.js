
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
    cartModal.style.display = "flex"
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

    div.innerHTML = `<div class="w-full flex justify-between items-center bg-white rounded-lg h-10 md:h-20 p-2">
                        <span>${item.nome} (Qtd. ${item.quantidade})</span>
                        <strong class="text-green-500">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</strong>
                        <button onclick="removerItem(${index})" class="flex">❌</button> <br>
                        
                    </div>
                    ` ;

      //adiciono ela no carrinho
      listaCarrinho.appendChild(div)
  });

  //retorno o valor total 
  totalProduto.textContent ="R$ " + total.toFixed(2).replace('.', ',')
  console.log(carrinho.length);
  console.log(totalProduto.innerHTML)

};

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
};

//? RECUPERAR VALOR DO INPUT PARA RETIRAR ADICIONAIS

let botaoFinalizar = document.getElementById("btn-finalizar");

botaoFinalizar.onclick = (e) => {
  e.preventDefault();

  let retirar = document.getElementById("btn-retirar").value;

  Swal.fire({
    title: "Está tudo certo?",
    text: "Seria bom dar uma revisada no carrinho antes!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Revisar",
    confirmButtonText: "Sim, está correto"
  }).then((result) => {

    if (result.isConfirmed) {

      const cartItems = carrinho.map((item) => {
        return `Itens: ${item.nome}
Quantidade: ${item.quantidade}
Preço: R$${item.preco}`;
      }).join("\n");

      const total = totalProduto.innerText;

      const message = encodeURIComponent(
`${cartItems}

Valor total do pedido: R$ ${total}
Itens para retirar da pizza: ${retirar}`
      );

      const phone = "5521993308955";

      window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
      );
    }

  });

};