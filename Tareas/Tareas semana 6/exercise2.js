// AÑO BISIESTO
let year =parseInt(prompt("Ingrese el año para verificar si es bisiesto:"));
   
    if((year % 4 ==0)&&(year %100 !==0 || year%400==0)){
    console.log(`El año ${year} es bisiesto`);
    }else{
    console.log(`El año ${year} no es bisiesto`);
    }
