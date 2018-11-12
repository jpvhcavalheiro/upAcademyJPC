/** 
 * description
 * @param {String} combustivel .
 * @param {String} cor .
 * @param {number} numeroRodas .
 * 
 * 
*/

class Veículo {
    constructor(combustível, cor, numeroRodas = 2) {
        this.combustivel = combustível;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.contaQuilometros = 0;
    }
    andar(distancia = 1) {
        this.contaQuilometros += distancia;
        return "andou " + distancia;
    }
}

var v1 = new Veículo("gasoleo", "red", 4);

v1.andar(10)
console.log("v1 contaQuilometros", v1.contaQuilometros);

class Automovel extends Veículo {
    constructor(combustivel, cor, numeroAssentos, numeroPortas) {
        super(combustivel, cor, 4)
        this.numeroAssentos = numeroAssentos;
        this.numeroPortas = numeroPortas;
        this.numeroVolantes = 1;
        this.litrosDeposito = 10
    }
    porCombustivel(litros) {
        this.litrosDeposito += litros
    }
    tirarCombustivel(litros) {
        this.litrosDeposito -= litros;
        return this.litrosDeposito
    }
    andar(distancia = 1) {
        super.andar();
        this.litrosDeposito -= distancia
        return "Gastou "+distancia+" litros"
    }
}

var auto1 = new Automovel("Gasolina95", "Preto", 2, 4)

