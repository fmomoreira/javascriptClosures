# Closures

Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.


# Escopo léxico
Considere a função abaixo:

function init() {
  var name = "Mozilla"; // name é uma variável local criada pelo init
  function displayName() {
    // displayName() é a função interna, uma closure
    console.log(name); // usa a variável declarada na função pai
  }
  displayName();
}
init();


A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (uma closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.

Rode o código e veja que isso funciona. Este é um exemplo de escopo léxico: em JavaScript, o escopo de uma variável é definido por sua localização dentro do código fonte (isto é aparentemente léxico) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.

Saiba mais conferindo diretamente da documentação: 
Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
