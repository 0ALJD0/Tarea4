
function ConverDecimal(){
    var ejer1=document.getElementById("entr1").value
    ejer1=parseInt(ejer1);
    alert("El valor en decimal es: "+parseInt(ejer1,8));
    /*var ejer1=document.getElementById("entr1").value;
    var decimal=parseInt(ejer1,8);
    window.open("respuest.html");
    return decimal*/
    
    
   
}
var algo=ConverDecimal();
alert(algo);
function result1(decimal){
    
    
    document.write("<h1>El resultado de la conversión es:</h1>");
    document.write("<p>"+decimal+"</p>")
}
function calculator(){
    var ejer2=document.getElementById("entr2").value;
    var ejer2_1=document.getElementById("entr3").value;
    ejer2=parseInt(ejer2);
    ejer2_1=parseInt(ejer2_1);
    var sum, res, mul, div;
    sum=ejer2+ejer2_1;
    res=ejer2-ejer2_1;
    mul=ejer2*ejer2_1;
    div=ejer2/ejer2_1;
    alert("La suma de los numeros es: "+sum+"\n"
        +"La resta de los numeros es: "+res+"\n"
        +"La multiupliación de los numeros es: "+mul+"\n"
        +"La división de los numeros es: "+div+"\n");
}

