

function addTwoNumber(){
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;

    var x = Number(a) + Number(b);
    document.getElementById("demo").innerHTML = "Add Value: " + x;
}


function multiplyTwoNumber(){
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;

    var x = Number(a) * Number(b);
    document.getElementById("demo").innerHTML = "Add Value: " + x;
}
