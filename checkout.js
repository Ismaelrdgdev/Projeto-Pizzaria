const entrega = document.getElementById("entrega");
const inputs = document.getElementById("card-carrinho");

entrega.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("item-carrinho");
  div.classList.add("m-2");

  div.innerHTML = `<div class="w-full flex justify-between items-center bg-white rounded-lg h-10 md:h-20 p-2">
                        <input type="text" name="" id="" placeholder="" class="bg-white">
                        
                    </div>
                    `;

  inputs.appendChild(div);
});

function mostrarForm() {
  // Esconde todos
  const retirada = document.getElementById("form1");
  const entrega = document.getElementById("form2");
  entrega.classList.add("gap-2")
  retirada.style.display = "none";
  entrega.style.display = "none";
  // Mostra o selecionado
  var selecionado = document.getElementById("meuSelect").value;
  if (selecionado) {
    document.getElementById(selecionado).style.display = "block";
  }
}
