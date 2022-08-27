//Sumar Iva a producto
function CalcularIVA (precioCosto){
    return (precioCosto * 0.21)
}
var iva = CalcularIva(precioCosto);
ivaM= iva.toFixed(2);

alert("El IVA del producto es: "+ivaM);
console.log("El IVA del producto es: "+ivaM);
