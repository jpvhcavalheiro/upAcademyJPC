

function contar(frase) {
    var cont = 0
    for (let index = 0; index < frase.length; index++) {
        if (frase[index] === " ") {
            cont = cont + 1
        } else {
            continue
        }
    }
    return cont
}




function mostrar() {
    // var num1=prompt ("De me um numero?")
    // num1=parseInt(num1)
    // var resultado=num1+10
    // alert("Resultado: "+resultado);

    // var input1=document.getElementById('ipt1').value;
    // console.log(input1)
    // document.getElementById("result").innerHTML=input1
    // alert("Li"+input1)

    // var inputValue=document.getElementById("ipt1").value;
    // document.getElementById("result").innerHTML=inputValue;
    // document.getElementById("btn1").style.display="none";
    var naosei = document.getElementById("ipt1").value;
    var naosei2 = document.getElementById("ipt2").value;
    





    document.getElementById("result").innerHTML = "No 1o paragrafo estavam " + contar(naosei) + " espacos";
    document.getElementById("result2").innerHTML = "No 2o paragrafo estavam " + contar(naosei2) + " espacos";

}




// mostrar();