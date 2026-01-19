// Desafío

// Crea una función llamada classifyMoss que recibe mossAge como su parámetro.

// Como fotógrafo de naturaleza explorando un denso bosque, te has encontrado con varias rocas cubiertas de musgo. Tu tarea es clasificar el musgo según su edad.

// Implementa la función para que devuelva una cadena de texto que describa el tipo de musgo según la siguiente clasificación:

// 0-5 años: "Young Moss"
// 6-20 años: "Mature Moss"
// 21-50 años: "Old Moss"
// 51-100 años: "Ancient Moss"
// Más de 100 años: "Legendary Moss"
// Parámetro:

// mossAge (número): Un entero que representa la edad del musgo en años.
// La función devuelve una cadena de texto que representa la clasificación del musgo.




function classifyMoss(mossAge) {
    // Write code here
    if(mossAge <= 5){
        result="Young Moss"
    }else if(mossAge >= 6 && mossAge <=20){
        result="Mature Moss"
    }else if(mossAge >= 21 && mossAge <=50){
        result="Old Moss"
    }else if(mossAge >= 51 && mossAge <=100){
        result="Ancient Moss"
    }else{
        result="Legendary Moss"
    }
    console.log(result);
}
classifyMoss(3);   // Young Moss (Dentro del rango 0-5)
classifyMoss(5);   // Young Moss (Límite superior)
classifyMoss(6);   // Mature Moss (Límite inferior)
classifyMoss(20);  // Mature Moss (Límite superior)
classifyMoss(21);  // Old Moss (Límite inferior)
classifyMoss(50);  // Old Moss (Límite superior)
classifyMoss(51);  // Ancient Moss (Límite inferior)
classifyMoss(101); // Legendary Moss (Cualquier número mayor a 100)