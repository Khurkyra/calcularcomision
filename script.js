//Se crea una función para calcular la comision 
function calcularComision(valorProducto, plan) {
    if (plan === "Plan 72 Horas") {
        var comision = valorProducto * 0.0259; // Comisión del 2.59%
    } else if (plan === "Plan 24 Horas") {
        var comision = valorProducto * 0.0274; // Comisión del 2.74%
    } else {
        return "Plan no válido";
    }

    comision += comision * 0.19; // Se agrega el IVA que equivale al 19%
    return comision;
}

//var valorProducto = 350000; // Valor del producto en pesos
//var plan = "Plan 24 Horas"; // Plan adquirido por el cliente

//var comision = calcularComision(valorProducto, plan);
if (typeof comision === "string") {
    console.log(comision);
} else {
    console.log("El valor de la comisión a pagar es: $" + comision.toFixed(2));
}


function setPlan(plan, rate, btnId) {
    selectedPlan = plan;
    selectedRate = rate;
    document.getElementById("plan").value = selectedPlan;

    var buttons = document.querySelectorAll('.planSeleccionado');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    var selectedButton = document.getElementById(btnId);
    selectedButton.classList.add('selected');
}
