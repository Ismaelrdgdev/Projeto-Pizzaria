export const catalogo = [
    
{
    id: 0,
    name: "Pizza de Calabresa",
    value: 35.99,
    ingredients: "Massa, molho de tomate, linguiça",
    image:'pizza-calabresa.jpg'
},

{
    id: 1,
    name: "Pizza de Catupiry",
    value: 35.99,
    ingredients: "Massa, molho de tomate, catupiry e frango",
    image:'pizza-pizzaria.jpg'
}
];

console.log(catalogo)
let index = 1

function adicionarProduto(){
    index++
    let nomeProduto = document.getElementById("nomeProduto").value
    let imagemProduto = document.getElementById("imagem").value   
    let precoProduto = document.getElementById("precoProduto").value
    let ingredientsProduto = document.getElementById("igredientesProduto").value

    let produto = {
        id: index,
        name: nomeProduto,
        image: imagemProduto,
        value: parseFloat(precoProduto),
        ingredients:ingredientsProduto
    }

    catalogo.push(produto)
    console.log(catalogo)
}


function renderizarCatalogoNoCarrinho(){
    for(const produtoCatalogo of catalogo){
        let catalogoRender = `
        
            <div id= "${produtoCatalogo.id}">
            <p> ${produtoCatalogo.name} </p>
            <img width= "100px" src= "./imagens/${produtoCatalogo.image}"></img>
            <h3> ${produtoCatalogo.value} </h3>
            <p> ${produtoCatalogo.ingredients} </p>
            <button >Adicionar</button>
            </div>
    
        `
    
        document.getElementById("catalogo").innerHTML += catalogoRender
    };
};