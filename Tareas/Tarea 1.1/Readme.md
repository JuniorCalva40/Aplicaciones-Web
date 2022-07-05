# Tarea 1.1

#### **Resuelva y conteste los ejercicios propuestos en el documento adjunto.**
#### **Adjunte en el documento el link del repositorio de GitHub con lassoluciones realizadas.**
#### **1. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:**
* Nombre 
> Es String  =  **nombre**
* Apellido
> Es String =  **apellido**
* Nombre de usuario en ITI
> Es String =  **usuario**
* Edad
> Es Number =  **edad**
* Correo electrónico
> Es String =  **email**
* Mayor de edad
> Es Boolean =  **mayorEdad** 
* Dinero ahorrado
> Es Number =  **ahorros**
* Deudas
> Es Number =  **deudas**
2. Traduce a código JavaScript las variables del ejemplo anterior y
adjunta una captura.
```javascript
//Ejercicio 1 1.1

const nombre = "Junior";
const apellido = "Calva";
const usuario = "Junior Calva";
let edad = 20;
const email = "junior.calva@iti.edu.ec";
const mayorEdad = true;
let ahorros = 200;
let deudas = 0;
```
#### **3. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:**
#### • Nombre completo (nombre y apellido)
#### • Dinero real (dinero ahorrado menos deudas)

```javascript
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto); 

let dineroTotal = `${ahorros - deudas}`;
console.log(dineroTotal);
```


#### **4. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:**
```javascript
const firstName = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstName + " " + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
---
```javascript
function nombreApodo(nombre, nickname) {
    this.completeName = completeName;
    this.nickname = nickname;
    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".";
}

console.log(nombreApodo(completeName, nickname))

```
#### **5. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**

#### *if /else*
#### Por medio de if se puede indicar una condición que, de cumplirse, permite la ejecución de uno o más enunciados. Por medio de else se puede establecer una alternativa, aunque su uso es opcional.
#### *else-if* para especificar una nueva condición para probar, si la primera condición es falsa.
#### *switch*
#### Por medio de switch se puede listar una serie de bloques de enunciados que se ejecuten dependiendo del valor de una variable. La estructura de control switch permite definir casos específicos a realizar en el caso de que la variable expuesta como condición sea igual a los valores que se especifican a continuación mediante los case

#### **6. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if.**
```javascript
const tipoDeMatricula = "Basic";
switch (tipoDeMatricula) {
     case "Free":
          console.log("Solo puedes tomar los cursos gratis");
          break;
     case "Basic":
          console.log("Puedes tomar casi todos los cursos de ITI durante un mes");
          break;
     case "Expert":
          console.log("Puedes tomar casi todos los cursos de ITI durante un año");
          break;
     case "ExpertPlus":
          console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
          break;
}
```

---
```javascript
// Ejercicio 4 1.1 

const tipoDeMatricula = "Basic";
if (tipoDeMatricula == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeMatricula == "Basic") {
    console.log("Puedes tomar casi todos los cursos de ITI durante un mes");
} else if (tipoDeMatricula == "Expert") {
    console.log("Puedes tomar casi todos los cursos de ITI durante un año");
} else if (tipoDeMatricula == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
}
```


