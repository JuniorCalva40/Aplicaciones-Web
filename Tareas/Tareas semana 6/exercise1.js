let may, med, min;
let num1 = parseInt(prompt("Ingrese el primer número "));
let num2 = parseInt(prompt("Ingrese el segundo número "));
let num3 = parseInt(prompt("Ingrese el tercer número "));

if (num1 > num2 && num1 > num3) {
    may = num1;
        if (num2 > num3) {
        med = num2;
        min = num3;
        } else {
        med = num3;
        min = num2;
        } 
}
if (num2 > num1 && num1 > num3){
    may = num2;
        if (num1 > num3) {
        med = num1;
        min = num3;
        } else {
        med = num3;
        min = num1;
        } 
}
if (num3 > num1 && num3 > num2){
    may = num3;
        if (num1 > num2) {
        med = num1;
        min = num2;
        } else {
        med = num2;
        min = num1;
        } 
}
console.log("El mayor es : " + may + "\nEl medio es:"+ med + "\nY el menor es:"+min);

