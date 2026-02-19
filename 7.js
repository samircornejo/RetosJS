/**
 * DESAFÍO: Fácil - calculateHikeScore
 * * Descripción:
 * Calcula la puntuación de un excursionista basándose en colinas, 
 * distancia y su respuesta al silbato del guardabosques.
 * * Reglas de puntuación:
 * 1. Puntuación base: 10 pts por colina.
 * 2. Bonificación distancia: 5 pts por cada km completo.
 * 3. Silbato: +50 pts si respondió (true).
 * 4. Resistencia: +100 pts extra si escaló más de 10 colinas.
 * 5. Penalización: -20 pts si la distancia es menor a 5 km.
 */

function calculateHikeScore(hills, distance, whistleResponse) {

    let score = 0;
    score += hills * 10;
    score += Math.floor(distance) * 5;

    if (whistleResponse === true) {
        score += 50;
    }

    if (hills > 10) {
        score += 100;
    }

    if (distance < 5) {
        score -= 20;
    }

    return score;
}
// Ejemplos de prueba:
console.log(calculateHikeScore(12, 6.5, true));  
console.log(calculateHikeScore(3, 2, false));   
