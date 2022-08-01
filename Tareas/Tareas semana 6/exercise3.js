//  DESCUENTOS
/*Un almacén de escritorios hace los siguientes descuentos: si el
cliente compra menos de 5 unidades se le da un descuento del 10%
sobre la compra;si el número de unidades es mayor o igual a cinco,
pero menos de 10 se le otorga un 20% y, si son 10 o más se le da un 40%.*/

let cant = parseInt(prompt("Ingrese cuantos escritorios desea comprar"));
let price = parseFloat(prompt("Ingrese el precio de los Escritorios"));
let desc,total;

if (cant < 5){
  desc= price*5/100;
  total= price-desc;
  console.log(`Tu descuento es de un 10% te ahorras ${desc} $ y el total a pagar es: ${total} dólares `);
}
else if (cant >= 5 && cant < 10) {
    desc=price*20/100;
    total=price-desc;
    console.log(`Tu descuento es de un 20% te ahorras ${desc} $ y el total a pagar es: ${total} dólares `);
}
else if(cant > 10){
    desc=price*40/100;
    total=price-desc;
    console.log(`Tu descuento es de un 40%  te ahorras${desc} $ y el total a pagar es: ${total}dólares `);
}


