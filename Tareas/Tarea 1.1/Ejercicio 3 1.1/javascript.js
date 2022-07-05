// Ejercicio 3 1.1 Function
const firstName = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstName + " " + lastname;
const nickname = "juandc";
function nombreApodo(nombre, nickname) {
    this.completeName = completeName;
    this.nickname = nickname;
    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".";
}

console.log(nombreApodo(completeName, nickname))