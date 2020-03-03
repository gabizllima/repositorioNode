const Carta = require("./Carta");
const CartaDto = require("./CartaDto");
const cartasJson = require('./cartas.json');

module.exports = class Service {

    //prop "quantidade" vem no corpo da requisição
    retornaCartasAleatorias({quantidade}) {
        let arrayCartas = [];

        //"enquanto houver cartas no monte"
        while (quantidade > 0) {

            //Add no array de cartas uma nova instancia de Carta, pegando pelo index
            arrayCartas.push(new Carta(this.pegaCartaAleatoria()));
            quantidade--;
        }
        
        //retorna a concatenação dos naipes e a soma dos números 
        return new CartaDto(this.concatenaNaipes(arrayCartas), this.somaNumeroCartas(arrayCartas));
    }
    
    pegaCartaAleatoria() {
        // retorna um número aleatório arredondado (pra baixo) para inteiro
        return cartasJson[Math.floor(Math.random() * 10)];
    }   
    
    concatenaNaipes(arrayCartas) {
        return arrayCartas.map(carta => carta.naipe).join('')
    }

    somaNumeroCartas(arrayCartas) {
        return arrayCartas.map(c => c.numero).reduce((a,b) => a + b, 0);
    }
}