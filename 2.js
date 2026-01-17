// Localizador de Zonas Seguras para Tomar el Sol

// Desafío

// Crea una función llamada sunbathingSpot que reciba temperature y spiderCount como sus parámetros.

// La función determina si un lugar determinado en la playa es seguro para tomar el sol basándose en la temperatura y el número de arañas avistadas cerca.

// Usa los siguientes criterios para determinar la seguridad del lugar para tomar el sol:

// Si la temperatura está entre 25 y 30 (inclusive) y hay 0 arañas, devuelve "Perfect spot!"
// Si la temperatura es superior a 30, devuelve "Too hot!"
// Si la temperatura es inferior a 25, devuelve "Too cold!"
// Si hay 1 o 2 arañas, devuelve "Be cautious!"
// Si hay 3 o más arañas, devuelve "Find another spot!"
// Nota: El recuento de arañas tiene prioridad sobre la temperatura. Esto significa que, incluso si la temperatura es perfecta, la presencia de arañas afectará la decisión.

// Parámetros:

// temperature (number): La temperatura en grados Celsius. Siempre será un número entero.
// spiderCount (number): El número de arañas avistadas cerca. Siempre será un número entero no negativo.
// La función devuelve una cadena de texto que indica si es seguro tomar el sol basándose en los criterios dados.


function sunbathingSpot(temperature, spiderCount) {
    // Write code here
    let result = ""
    if(temperature >= 25 && temperature <= 30){
        if(spiderCount <= 0){
            result = "Perfect spot!";
        }else if(spiderCount >= 1 && spiderCount <= 2){
            result = "Be cautious!";
        }else{
            result = "Find another spot!";
        }
            
        }else if(temperature > 30){
            if(spiderCount > 3){
                result="Find another spot!"
            }else{
                result = "Too hot!"
            }
        }else if(temperature < 25){
            result = "Too cold!"
        }
        console.log(result);
    }

    // Caso 1: Temperatura ideal SIN arañas
sunbathingSpot(27, 0); 
// Salida esperada: "Perfect spot!"

// Caso 2: Temperatura ideal con POCAS arañas
sunbathingSpot(28, 2); 
// Salida esperada: "Be cautious!"

// Caso 3: Temperatura ideal pero MUCHAS arañas
sunbathingSpot(26, 5); 
// Salida esperada: "Find another spot!"

// Caso 4: Demasiado calor y MUCHAS arañas
sunbathingSpot(35, 10); 
// Salida esperada: "Find another spot!"

// Caso 5: Demasiado calor pero POCAS arañas
sunbathingSpot(32, 1); 
// Salida esperada: "Too hot!"

// Caso 6: Demasiado frío (no importa el número de arañas)
sunbathingSpot(20, 0); 
// Salida esperada: "Too cold!"