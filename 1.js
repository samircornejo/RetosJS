
/* Desafío
Crea una función llamada forestHikeDecision que recibe weather, energyLevel y daylight como sus parámetros.

Tu tarea es ayudar a un grupo de excursionistas a navegar por un bosque antiguo y misterioso tomando decisiones basadas en las condiciones actuales. 
La función debe devolver una cadena de texto sugiriendo el mejor curso de acción para los excursionistas.

Usa declaraciones condicionales y operadores lógicos para determinar la sugerencia apropiada basándote en las siguientes condiciones:

Si el clima es "sunny" y el nivel de energía es superior a 70, sugiere "Continue hiking"
Si el clima es "rainy" y no hay luz diurna, sugiere "Set up camp"
Si el nivel de energía es inferior a 30, independientemente de otras condiciones, sugiere "Take a break"
Si el clima es "foggy" y hay luz diurna, sugiere "Proceed with caution"
Para cualquier otra combinación de condiciones, sugiere "Assess the situation"
Parámetros:

weather (cadena de texto): La condición climática actual. Los valores posibles son "sunny", "rainy", "foggy", o cualquier otra condición climática.
energyLevel (número): Un número entero que representa el nivel de energía actual de los excursionistas, en un rango de 0 a 100.
daylight (booleano): Indica si hay luz diurna o no. true si hay luz diurna, false en caso contrario.
La función debe devolver una cadena de texto con la acción sugerida para los excursionistas. */


function forestHikeDecision(weather, energyLevel, daylight) {

    if (energyLevel < 30) {
        return "Take a break";
    }
 
    if (weather === "sunny" && energyLevel > 70) {
        return "Continue hiking";
    }

    if (weather === "rainy" && !daylight) {
        return "Set up camp";
    }
    
    if (weather === "foggy" && daylight) {
        return "Proceed with caution";
    }
    return "Assess the situation";
}

console.log("Resultado 1:", forestHikeDecision("sunny", 20, true)); 
// Salida esperada: "Take a break"

console.log("Resultado 2:", forestHikeDecision("sunny", 85, true)); 
// Salida esperada: "Continue hiking"

console.log("Resultado 3:", forestHikeDecision("rainy", 50, false)); 
// Salida esperada: "Set up camp"

console.log("Resultado 4:", forestHikeDecision("foggy", 60, true)); 
// Salida esperada: "Proceed with caution"

console.log("Resultado 5:", forestHikeDecision("cloudy", 55, true)); 
// Salida esperada: "Assess the situation"

