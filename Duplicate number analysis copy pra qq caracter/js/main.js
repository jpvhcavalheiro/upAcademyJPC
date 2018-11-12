$(document).ready(function () {
    console.log("ready!"); //para debug
    console.log("ready2!"); //para debug

});
function clickar() {
    console.log("adeus"); //para debug
    var ipt1 = $("#ipt1").val();
    console.log("adeus2"); //para debug
    var obj = {};
    for (let i = 0; i < ipt1.length; i++) {
        if (obj[ipt1[i]] == undefined) {
            obj[ipt1[i]] = 1
        } else {
            obj[ipt1[i]]++
        }
    }; console.log("Hello world!")
    console.log(obj) //para debug
    var key = "";
    var value = "";
    console.log("ready3!"); //para debug
    console.log("primeira key é " + Object.keys(obj)[0]); //para debug
    console.log("primeiro value é " + obj[Object.keys(obj)[0]]); //para debug

    function ObjectLength(obj) {
        var length = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                ++length;
            }
        }
        return length;
    };
    length = ObjectLength(obj)
    console.log("o objecto tem " + length + " items"); //para debug
    for (let index = 0; index < length; index++) {
        console.log("ready4!"); //para debug
        key = Object.keys(obj)[index];
        value = obj[key];
        var markup = "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
        $("table tbody").append(markup);
    }
}