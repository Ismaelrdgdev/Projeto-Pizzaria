function fecharCarrinho(){
  const botaoFecharCarrinho = document.getElementById("btn-fechar");

  botaoFecharCarrinho.addEventListener('click',() => {
    const cardBotao = document.getElementById("card-carrinho")
    cardBotao.classList.add('hidden')
  })
}

function abrirCarrinho(){
    const botaoAbrirCarrinho = document.getElementById("btn-abrir");

    botaoAbrirCarrinho.addEventListener('click', () => {
        const cardBotao = document.getElementById("card-carrinho")
        cardBotao.classList.remove('hidden')
    })
}


 let produto = document.getElementById("visorQtd").value

function incrementarItens (){
  produto++
  produto = document.getElementById("visorQtd").value = produto
  console.log(produto)
}

function decrementarItens(){
  produto--
  produto = document.getElementById("visorQtd").value = produto
  if(produto < 1){
    alert("Você deve remover o produto do carrinho.")
    produto = document.getElementById("visorQtd").value = 0
  }
  console.log(produto)
}


//! ADICIONAR UM NOVO ELEMENTO NO CARRINHO


