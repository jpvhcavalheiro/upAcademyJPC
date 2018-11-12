var factura
function getConteudoAddArtigo() {
    return `<h1 class="text-center"> Deseja adicionar novo artigo?</h1>
    <br
    <label for="pedido">Digite o pedido: </label>
    <input type="text" id="pedido">
    <br>
    <label for="extra">Digite o extra: </label>
    <input type="text" id="extra">
    <div id="n_art">
    </div>
    <br>
    <button onclick="adicionarNovaFatura()" id="btn1" class="btn btn-primary"> Submeter fatura </button>
    <br>`;
}





function adicionarNovaFactura(){
    var pessoa = $("#pessoa").val()
    var pedido = $("#pedido").val()
    var extra = $("#extra").val()
    var artigo= new Artigo(pedido,extra)
    var factura=new Factura(pessoa,artigo)
    //console.log(factura)
    //console.log("ola")
    addFacturaDB(factura)
    $("#conteudo").html(getConteudoAddArtigo())
}


// console.log("ola2") //para debug
// $( document ).ready(function() {
//     console.log( "ready!" );
//     $("#btn1").click(function () {
//         console.log("ola") //para debug
//         var nomeArtigo = $("#nomeArtigo").val()
//         console.log(nomeArtigo) //para debug
//         var extra = $("#extra").val()
//         novoArtigo = new Artigo(nomeArtigo,extra)
//         console.log(novoArtigo) //para debug
        
//     })
// });

