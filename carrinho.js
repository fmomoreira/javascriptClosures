function carrinho() {
    const sacola = [];
  
    function encontrarItemIndex(nomeItem) {
      return sacola.findIndex(produto => produto.name === nomeItem);
    }
  
    function addProduto(produto) {
      const index = encontrarItemIndex(produto.name);
      if (index !== -1) {
        sacola[index].quantidade += produto.quantidade;
      } else {
        sacola.push({
          id: sacola.length + 1,
          name: produto.name,
          description: produto.description,
          quantidade: produto.quantidade,
          preco: produto.preco,
        });
      }
    }
  
    function getSacola() {
      return sacola;
    }
  
    function calcularTotal() {
      let total = 0;
      for (const produto of sacola) {
        total += produto.preco * produto.quantidade;
      }
      return total;
    }
  
    return {
      addProduto: addProduto,
      getSacola: getSacola,
      calcularTotal: calcularTotal,
    };
  }
  
  const minhaSacola = carrinho();
  
  minhaSacola.addProduto({
    name: "x-salada",
    description: "Delicious salad burger",
    quantidade: 1,
    preco: 5.99,
  });
  
  minhaSacola.addProduto({
    name: "x-burger",
    description: "Delicious burger",
    quantidade: 2,
    preco: 7.99,
  });
  
  minhaSacola.addProduto({
    name: "x-salada",
    description: "Delicious salad burger",
    quantidade: 1,
    preco: 5.99,
  });

  minhaSacola.addProduto({
    name: "x-salada",
    description: "Delicious salad burger",
    quantidade: 1,
    preco: 5.99,
  });

  minhaSacola.addProduto({
    name: "x-salada",
    description: "Delicious salad burger",
    quantidade: 1,
    preco: 5.99,
  });

  minhaSacola.addProduto({
    name: "x-salada",
    description: "Delicious salad burger",
    quantidade: 1,
    preco: 5.99,
  });

  minhaSacola.addProduto({
    name: "x-salada",
    description: "Delicious salad burger",
    quantidade: 1,
    preco: 5.99,
  });
  
  console.log(minhaSacola.getSacola()); // Imprime o conteúdo da sacola
  console.log("Total da sacola: R$" + minhaSacola.calcularTotal().toFixed(2)); // Imprime o total da sacola
  
