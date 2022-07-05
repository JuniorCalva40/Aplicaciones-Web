# Tarea 1.1
#### Resuelva y conteste los ejercicios propuestos en el documento adjunto.
#### Adjunte en el documento el link del repositorio de GitHub con las soluciones realizadas
#### **1. ¿Qué es un ciclo?**
#### Los ciclos o bucles de programación (también denominados estructuras de control iterativas o repetitivas) son sentencias que se utilizan para ejecutar una o varias instrucciones de forma repetitiva cuando sea necesario.
#### **2. ¿Qué tipos de ciclos existen en JavaScript?**
* Declaración **for** un ciclo for se repite hasta que una condición especificada se evalúe como false. El bucle for de JavaScript es similar al bucle for de Java y C.
* Declaración **do...while** La instrucción do...while se repite hasta que una condición especificada se evalúe como falsa.
* Declaración **while** Una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true.
 * Declaración **labeled** Una label proporciona una instrucción con un identificador que te permite hacer referencia a ella en otra parte de tu programa.
* Declaración **continue** La instrucción continue se puede usar para reiniciar un while, do-while, for, o declaración label.
* Declaración **for...in** La instrucción for...in itera una variable especificada sobre todas las propiedades enumerables de un objeto.
* Declaración for...of crea un bucle que se repite sobre objetos iterables (incluidos Array, Map, Set, objetos argumentos y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad
#### **3. ¿Qué es un ciclo infinito y por qué es un problema?**
Un ciclo infinito es que tiene una ejecución sin fin en el cual no tiene alguna condición para parar y puede ser un problema ya que puede consumir recursos de nuestra PC y en ocasiones si no paramos manualmente este proceso debemos apagar nuestro equipo.
#### **4. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while**
```javascript
for (let i = 0; i < 5; i++) {
console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
console.log("El valor de i es: " + i);
}
```
```javascript
//Ejercicio ciclo con while
     
    
     let i = 0;
     while(i < 5){
     console.log("El valor de i es: " + i);    
     i++;
     }

     let cont = 10;
     while(cont >= 2){
     console.log("El valor de cont es: " + cont);    
     cont--;
     }
```
#### **5. Escribe un código en JavaScript que le pregunte a los usuarioscuánto es 2 + 2**
#### **• Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.**
#### Pista: puedes usar la función prompt de JavaScript.
```javascript
//Ejercicio Suma JavaScript

let pregunta= prompt("Hey! ¿Cuánto es 2 + 2?");

if ( pregunta == 4){
    document.write("<h2> 🤓 Felicitaciones eres un Genio </h2>")
} else{
    document.write("<h2>  😆 Intenta de Nuevo </h2>")
}
```
#### **6. Tienes un array de productos con los siguientes atributos:**
#### • name
#### • price
#### • stock
#### **Debes agregar y calcular una nueva propiedad llamada "iva", los impuestos deben ser del 12% con base al precio base. Por ejemplo, si aplicamos el 12% de impuestos para un producto con precio de $1000 el resultado de los "IVA" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.**
```javascript
//Ejercicio IVA

let item = "Zapatos";
let price = 45;
let stock = true;
const IVA = Math.round((price * 12) / 100);

const Attributes = [item, price, stock, IVA];

console.log(Attributes);
```


