
$("#maisArtigos").hide()
$("#procurarPorId").hide()
var facturas = []
var artigos = []
var nome = ""
$("#maisArtigosBtn").click(function () {
    console.log($("#pedido").val())
    artigos = []
    nome = ""
    let artigo1 = new Artigo($("#pedido").val(), $("#extra").val())
    $("#pedido").val("")
    $("#extra").val("")
    artigos.push(artigo1)
    console.log(artigos)
    nome = $("#pessoa").val()
    $("#pessoa").val("")
    $("#maisArtigos").show()
    $("#novaFactura").hide()
    $("#procurarPorId").hide()
});
$("#submeterArtigo").click(function () {
    var artigo2 = new Artigo($("#pedidoAdicional").val(), $("#extraPedidoAdicional").val())
    $("#pedidoAdicional").val("")
    $("#extraPedidoAdicional").val("")
    artigos.push(artigo2)
    console.log(artigos)
    console.log(nome)
});
$("#submeterFactura").click(function(){
    console.log(artigos)
    console.log(nome)
    var factura1 = new Factura(nome, artigos)
    console.log(factura1)
    facturas.push(factura1)
    console.log(facturas)
    $("#maisArtigos").hide()
    $("#novaFactura").show()
    $("#procurarPorId").hide()
})







$("#procurarPorIdBtn").click(function () {
    $("#maisArtigos").hide()
    $("#novaFactura").hide()
    $("#procurarPorId").show()
});


