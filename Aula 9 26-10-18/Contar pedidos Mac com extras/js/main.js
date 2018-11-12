var pedidoConcreto1_conta1 = { nome: "Big-Tasty", extra: "sem-ketchup" };
var pedidoConcreto2_conta1 = { nome: "Sunday-de-chocolate", extra: "com-amendoa" };
var pedidoConcreto_conta1 = [pedidoConcreto1_conta1, pedidoConcreto2_conta1];
var conta1 = { id: 1, nome: "Luis-Nariz", pedidoConcreto: pedidoConcreto_conta1 };
//console.log(conta1); //para debug
var pedidoConcreto1_conta2 = { nome: "Duplo-cheeseburguer" };
var pedidoConcreto2_conta2 = { nome: "Coca-cola" };
var pedidoConcreto3_conta2 = { nome: "profiteroles de chocolate" };
var pedidoConcreto_conta2 = [pedidoConcreto1_conta2, pedidoConcreto2_conta2, pedidoConcreto3_conta2];
var conta2 = { id: 2, nome: "Hermenegildo-Gervasio", pedidoConcreto: pedidoConcreto_conta2 };
//console.log(conta2); //para debug
var pedidoConcreto1_conta3 = { nome: "salada-de-atum" }
var pedidoConcreto2_conta3 = { nome: "coca-cola-zero" }
var pedidoConcreto3_conta3 = { nome: "abacaxi", extra: "molho-de-chocolate" }
var pedidoConcreto_conta3 = [pedidoConcreto1_conta3, pedidoConcreto2_conta3, pedidoConcreto3_conta3]
var conta3 = { id: 3, nome: "Maria-Supermodel-Gulosa", pedidoConcreto: pedidoConcreto_conta3 }
//console.log(conta3) //para debug
var pedidoConcreto1_conta4 = { nome: "batatas-fritas" }
var pedidoConcreto_conta4 = [pedidoConcreto1_conta4]
var conta4 = { id: 4, nome: "Carlos-Ferreira", pedidoConcreto: pedidoConcreto_conta4 }
//console.log(conta4) //para debug
var pedidoConcreto1_conta5 = { nome: "Garrafa-de-agua", extra: "rodela de limao" }
var pedidoConcreto2_conta5 = { nome: "Garrafao-de-agua", extra: "limao" }
var pedidoConcreto_conta5 = [pedidoConcreto1_conta5]
var conta5 = { id: 5, nome: "Branca-de-Neve", pedidoConcreto: pedidoConcreto_conta5 }
//console.log(conta5) //para debug
var pedidos = [];
//console.log(pedidos) //para debug
pedidos.push(conta1);
pedidos.push(conta2);
pedidos.push(conta3);
pedidos.push(conta4);
pedidos.push(conta5);
console.log(pedidos);

/*A funcao pedidosComExtras recebe um array de objectos (as contas) em que cada objecto contem 
as seguintes keys: Id, Nome de quem pede e o pedido em si (array) que inclui os pedidos especificos 
(objectos) e em que cada pedido especifico inclui o nome e potenciais extras e devolve os Ids dos 
pedidos com extras */

function pedidosComExtras(pedidos) {
    var array1 = []
    for (let index = 0; index < pedidos.length; index++) {
        //console.log(pedidos[index].pedidoConcreto.length) //para debug
        for (let i = 0; i < pedidos[index].pedidoConcreto.length; i++) {
            //console.log(pedidos[index].pedidoConcreto[i]) //para debug
            //console.log(Object.keys(pedidos[index].pedidoConcreto[i]).length) //para debug
            if (Object.keys(pedidos[index].pedidoConcreto[i]).length > 1) {
                array1.push(pedidos[index].id);
                break
            }
        }
    }return array1
}
console.log(pedidosComExtras(pedidos))
