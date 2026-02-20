/*
Programa: Gestión del último día de venta del taller

El programa recibe:
1. Los pies cuadrados del taller.
2. El año en que expira el contrato de arrendamiento.
3. El total de horas de estacionamiento usadas por los clientes.

Debe calcular:
- La ocupación máxima (10 pies cuadrados por persona).
- Si el año del contrato es bisiesto.
- El costo total del estacionamiento ($3 por hora).

Debe imprimir:
1. Ocupación máxima
2. "Yes" si es año bisiesto, "No" si no lo es
3. Costo total del estacionamiento
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().split('\n');

const squareFootage = parseInt(input[0]);
const leaseYear = parseInt(input[1]);
const parkingHours = parseInt(input[2]);

const maxOccupancy = Math.floor(squareFootage / 10);

let isLeapYear;
if ((leaseYear % 4 === 0 && leaseYear % 100 !== 0) || (leaseYear % 400 === 0)) {
    isLeapYear = "Yes";
} else {
    isLeapYear = "No";
}

const parkingFee = parkingHours * 3;

console.log(maxOccupancy);
console.log(isLeapYear);
console.log(parkingFee);
