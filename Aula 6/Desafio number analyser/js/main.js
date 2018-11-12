/* a funçao idParesEImpares recebe um sequência de numeros (string) e devolve outro numero colocando
um "-" entre cada dois numeros pares e um "#" entre cada dois numeros impares*/

function idParesEImpares(numero) {
    var num = numero.split('');
    var num2 = [];
    num2.push(num[0])
    for (let index = 1; index < num.length; index++) {
        if (num[index] % 2 === 0 && num[index - 1] % 2 === 0) {
            console.log("ola");
            num2.push("-");
            num2.push(num[index]);
        } else if (num[index] % 2 != 0 && num[index - 1] % 2 != 0) {
            num2.push("#");
            num2.push(num[index]);
        } else {
            num2.push(num[index]);
        }
    }
    num2=num2.join("")
    return num2
}

function mostrar() {
    var input = document.getElementById("seqNum").value;
    document.getElementById("result").innerHTML = idParesEImpares(input);
    console.log("adeus");
}
