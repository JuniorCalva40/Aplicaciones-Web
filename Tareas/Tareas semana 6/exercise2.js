// AÑO BISIESTO
/*Construir un programa que pida un año y luego determine si el
año es bisiesto o no. Tenga en cuenta que los años bisiestos son
los números múltiplos de 4, pero que no son múltiplos de 100 y si
son múltiplos de 100 y múltiplos de 400 sí son bisiestos.*/

let year =parseInt(prompt("Ingrese el año para verificar si es bisiesto:"));
   
    if((year % 4 ==0)&&(year %100 !==0 || year%400==0)){
    console.log(`El año ${year} es bisiesto`);
    }else{
    console.log(`El año ${year} no es bisiesto`);
    }
