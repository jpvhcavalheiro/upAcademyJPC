/**
 * description:
 * @param {String} nome .
 * @param {String} extra .
 * @param {number} id .
 * @param {String} nome .
 * @param {array} pedido .
 */
class Artigo {
    constructor(nome, extra = undefined) {
        this.nome = nome;
        this.extra = extra;
    }
}
class Factura {
    constructor(pessoa, pedido) {
        this.id = new Date().getTime();
        this.pessoa = pessoa;
        this.pedidos = [pedido];
    }
    addArtigo(artigo) {
        this.pedidos.push(artigo);
    }
}