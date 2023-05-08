

const d = document;

//Variables para la Calculadora
function calcularArea() {
  const $base = d.getElementById("base"),
        $altura = d.getElementById("altura"),
        $calcular = d.getElementById("calcular"),
        $resultado = d.getElementById("resultado");

  $calcular.addEventListener("click", e=>{
    let area = (parseInt($base.value) * parseInt($altura.value)) / 2;
    $resultado.innerHTML = `El área del triángulo es: <b>${area}</b>`
  })
}

calcularArea();






