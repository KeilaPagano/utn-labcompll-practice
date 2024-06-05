//PARCIAL 2- KEILA PAGANO
//botón-calcular cotización
document.getElementById("calcularBtn").addEventListener("click", function () {
    let tipoReactor = document.getElementById("tipoReactor").value;
    let cantidad = parseInt(document.getElementById("cantidad").value); 
    let pais = document.getElementById("pais").value;
    let precios = { PWR: 5000, BWR: 5500, PHWR: 4500, LWGR: 6000 };

//validacion de cantidad 
if(cantidad<=0||isNaN(cantidad)){
    document.getElementById("cantidad").style.backgroundColor="red";
    alert("Seleccione una cantidad de reactores valida");
    return;}
    else{
        document.getElementById("cantidad").style.backgroundColor="white";
    }
    let costoTotal = precios[tipoReactor] * cantidad;

    //alerta de cantidad de stock
    if(cantidad>3||cantidad<=0){
        alert("Para más de 3 reactores, consultar stock antes de comprar.");
        document.getElementById("resultado").textContent = "";
        document.getElementById("resultado").style.backgroundColor = "white";
    } else{
        //objeto de datos del cotizador
    let cotizacion={
        tipoReactor:tipoReactor,
        cantidad:cantidad,
        pais:pais,
        costoTotal:costoTotal
    };
    console.log(cotizacion);

    //muestra objeto por mensaje
    document.getElementById("resultado").textContent=cantidad+" reactor (es) de tipo: "+tipoReactor+" en "+pais+" es de: $ "+costoTotal+" millones ";}
    });

//color respecto a la cantidad
document.getElementById("cantidad").addEventListener("input", function (){
    let cantidad=parseInt(document.getElementById("cantidad").value);
    //validacion de codigo exclusivamente numerico mayor a 0
    if (cantidad>0&&!isNaN(cantidad)) {
        document.getElementById("cantidad").style.backgroundColor="white";
    }else{document.getElementById("cantidad").style.backgroundColor="red";}});

//color de fondo c/2seg al resultado
let inter=setInterval(function () {
    let resultado=document.getElementById("resultado");
    if(resultado.textContent.trim()!==""){
        resultado.style.backgroundColor=resultado.style.backgroundColor==="green" ? "red" : "green";}},2000);