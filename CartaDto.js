module.exports = class CartaDto {

    constructor(concatenaNaipes, somaNumeros){
        this._somaNumeros = somaNumeros;
        this._concatenaNaipes = concatenaNaipes;
    }

    get concatenaNaipes() {
        return this._concatenaNaipes;
    }
    set concatenaNaipes(_concatenaNaipes){
        this.__concatenaNaipes = _concatenaNaipes;
    }

    get somaNumeros() {
        return this._somaNumeros;
    }
    set somaNumeros(somaNumeros){
        this._somaNumeros = somaNumeros;
    }
}