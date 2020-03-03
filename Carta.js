module.exports = class Carta {
    
    constructor({naipe, numero}){
        this._numero = numero;
        this._naipe = naipe;
    }

    get naipe() {
        return this._naipe;
    }
    set naipe(naipe){
        this._naipe = naipe;
    }

    get numero() {
        return this._numero;
    }
    set numero(numero){
        this._numero = numero;
    }
}