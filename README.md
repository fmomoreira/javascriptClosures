# Closures

Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.


# Escopo léxico
Considere a função abaixo:

<img src="https://codepontotech.com.br/imagensCode/closureJs.png" alt="image of code">


A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (uma closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.

Rode o código e veja que isso funciona. Este é um exemplo de escopo léxico: em JavaScript, o escopo de uma variável é definido por sua localização dentro do código fonte (isto é aparentemente léxico) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.

Saiba mais conferindo diretamente da documentação: 
Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures


<h1>Desafio</h1>

Neste repositório, você encontra os arquivos que fizemos em aula.

Você deve implementar um botal dentro da area onde estao os items do carrinho e o total do carrinho, após clicar neste botão, o usuário será redirecionado para a pagina  de "dados para entrega". 

A tela deve ser dividida ao meio, ao lado esquedo, deve ter o resumo do pedido com o total, do lado direito, deve ter um formulario de "dados para entrega" e um botão de "Finalizar pagamento". No mobile deve aparecer primeiro o formulado de dados para entrega, e abaixo no final o resumo do pedido e um botão, "Finalizar pagamento".


<h2>Critério de aceite</h2>

-Na tela inicial, quando o carrinho estiver vazio, deve exibir a seguinte menssagem, "Carrinho vazio"

-O sistema deve guardar as informações do carrinho para ser exibidas na pagina de "dados para entrega", caso o usuario volte a pagina, os itens do carrinho deve estao la no carrinho ainda.

-O usuario deve conseguir ver na tela dados para entrega o resumo do pedido

-O sistema deve ser responsivo

-Ao final deve ser criado um repositorio e usar o github pages para hospedar seu projeto, gerar uma url de acesso.

#Entregas adicionais

- Exibir ao lado do dropdown um iconi com o numero de items no carrinho.
- Implementar a opção de remover item do carrinho
- implementar a opção de alterar quantidade de um item para mais ou menos, se 0, remova o item do carrinho
- no formulario de cadastro de dados para entrega implementar validação nos inputs e nao enviar o formulario se nao estiver tudo validado


<h3>Boa sorte, bons estudos!</h3>




