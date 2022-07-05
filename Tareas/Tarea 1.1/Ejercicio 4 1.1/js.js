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