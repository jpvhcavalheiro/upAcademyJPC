function ordenarTresAlgarismos(numero) {

    /* Ordenar os numeros feito por mim (nao funciona)*/


    // num0 = parseInt(numero[0])
    // num1 = parseInt(numero[1])
    // num2 = parseInt(numero[2])
    // if (num0 < num1 && num0 < num2 && num1 < num2) {
    //     character0=num0.toString()
    //     character1=num1.toString()        
    //     character2=num2.toString()
    //     numeroOrdenado = character2 + character1 + character0
    // } else if (num0 < num1 && num0 < num2 && num1 > num2) {
    //     character0=num0.toString()
    //     character1=num1.toString()        
    //     character2=num2.toString()
    //     numeroOrdenado = character1 + character2 + character0
    // } else if (num0 < num1 && num0 > num2 && num1 > num2) {
    //     character0=num0.toString()
    //     character1=num1.toString()        
    //     character2=num2.toString()
    //     numeroOrdenado = character1 + character0 + character2
    // } else if (num0 > num1 && num0 < num2 && num1 < num2) {
    //     character0=num0.toString()
    //     character1=num1.toString()        
    //     character2=num2.toString()
    //     numeroOrdenado = character2 + character0 + character1
    // } else if (num0 > num1 && num0 > num2 && num1 > num2) {
    //     character0=num0.toString()
    //     character1=num1.toString()        
    //     character2=num2.toString()
    //     numeroOrdenado = character0 + character1 + character2
    // } else if (num0 > num1 && num0 > num2 && num1 < num2) {
    //     character0=num0.toString()
    //     character1=num1.toString()        
    //     character2=num2.toString()
    //     numeroOrdenado = chracter0 + character2 + character1 

var num=numero.split('');
var temp='';
    for (let j = 0; j < num.length - 1; j++) {
        // console.log("priemrio for");
        
        for (let i = 0; i < num.length; i++) {
            // console.log("segundo for");
            if (parseInt(num[i]) < parseInt(num[i + 1])) {
                // console.log("IF");
                temp = num[i];
                num[i] = num[i + 1]; 
                num[i + 1] = temp;
            }
        }
    }
    return num;
}
function mostrar() {

    var naosei = document.getElementById("tresNumeros").value;
    console.log(naosei);
    
    document.getElementById("result").innerHTML = "O numero ordenado por ordem decrescente fica " + ordenarTresAlgarismos(naosei);
}