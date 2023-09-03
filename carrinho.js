(function(){


function carrinho(){
    const sacola = [];
    function addProduto(produto){
        const index = encontrarItemIndex(produto.name)
        if(index !== -1){
            sacola[index].amount += produto.amount
        } else {
            sacola.push({
                id: sacola.length + 1,
                name:  produto.name,
                description: produto.description,
                amount: produto.amount,
                price: produto.price
            })
        }
        atualizarCarrinho();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Produto adicionado na sacola!',
            showConfirmButton: false,
            timer:3000
        })

    }

    function calcularTotal() {
        let total = 0;
        for(const produto of sacola){
            total += produto.price * produto.amount
        }
        return total
    }

    function getSacola() {
       return sacola;
    }
    function encontrarItemIndex(nomeItem){
        return sacola.findIndex(produto => produto.name == nomeItem)
    }

    return {
        addProduto: addProduto,
        getSacola: getSacola,
        calcularTotal: calcularTotal
    }
}

const minhaSacola = carrinho();


const addBtns = document.querySelectorAll(".add-btn");

addBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const nomeItem = btn.getAttribute("data-name");
        const precoItem = parseFloat(btn.getAttribute("data-preco"))
        minhaSacola.addProduto({
            name: nomeItem,
            price: precoItem,
            amount: 1
        })
    })
})

function atualizarCarrinho() {
    const carrinhoItensDiv = document.getElementById("carrinho-itens");
    const totalCarrinhoDiv = document.getElementById("total-carrinho");

    carrinhoItensDiv.innerHTML = ""
    totalCarrinhoDiv.textContent = ""

    let total = 0;
        minhaSacola.getSacola().forEach(item =>{
            total += item.price * item.amount;
            carrinhoItensDiv.innerHTML +=
            `<div class="dropdown-item">${item.name} Qtd: ${item.amount} - R$ ${item.price.toFixed(2)}</div>`;
        })

        totalCarrinhoDiv.textContent = `Total: R$ ${total.toFixed(2)}`

}

})();
