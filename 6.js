// Descripción: 
// Ayuda a un viajero a tomar decisiones en un paisaje nevado basándose en 
// el clima y los suministros restantes.
// Reglas:
// 1. Si hay "blizzard" (ventisca) -> "stay".
// 2. Si hay "snowy" (nevada) y menos de 3 suministros -> "gather supplies".
// 3. Cualquier otro caso -> "proceed".

function manageJourney(weatherCondition, suppliesLeft) {

    if (weatherCondition === "blizzard") {
        return "stay";
    }

    if (weatherCondition === "snowy" && suppliesLeft < 3) {
        return "gather supplies";
    }

    return "proceed";
}

console.log(manageJourney("blizzard", 10));    // Salida: "stay"
console.log(manageJourney("snowy", 2));       // Salida: "gather supplies"
console.log(manageJourney("clear", 1));       // Salida: "proceed"
console.log(manageJourney("snowy", 5));       // Salida: "proceed"
