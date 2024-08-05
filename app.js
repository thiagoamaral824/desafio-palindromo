essaPalavraEUmPalindromo();
function essaPalavraEUmPalindromo() {
    var palavra = prompt("Digite uma palavra");
    var separandoAsLetrasDaPalavras = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavras.reverse("");
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        alert (`A palavra ${palavra} é um palíndromo!`);
    }else{
        alert (`A palavra ${palavra} não é um palíndromo!`);
    }
}