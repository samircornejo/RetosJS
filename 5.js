// Crea una función llamada updatePlantGrowth que reciba plantInfo como parámetro.
// Estás trabajando en un centro de investigación agrícola donde los científicos estudian la embriología de las plantas. Tu tarea es crear un sistema que rastree las etapas de crecimiento de varias plantas.
// La función debe tomar una cadena de entrada que represente el nombre de una planta y su etapa de crecimiento actual, luego devolver una cadena modificada con una etapa de crecimiento actualizada y una descripción del nuevo estado de la planta.

// Parámetros:

// plantInfo (string): Una cadena en el formato "PlantName:Stage", donde PlantName es el nombre de la planta y Stage es un número de un solo dígito del 0 al 9 que representa su etapa de crecimiento actual.
// La función debe realizar las siguientes operaciones:

// Extraer el nombre de la planta y la etapa actual de la cadena de entrada.
// Incrementar la etapa de crecimiento en 1, a menos que ya esté en 9 (completamente desarrollada).
// Añadir una descripción del nuevo estado de la planta basándose en el número de etapa actualizado.
// Devolver la cadena actualizada en el formato "PlantName:NewStage - Description".
// Usa las siguientes descripciones para cada etapa:

// 0 - Seed
// 1 - Germination
// 2 - Seedling
// 3 - Vegetative
// 4 - Budding
// 5 - Flowering
// 6 - Pollination
// 7 - Fruit development
// 8 - Ripening
// 9 - Harvest-ready
// La función devuelve una cadena que representa la información actualizada de la planta con su nueva etapa de crecimiento y descripción.

function updatePlantGrowth(plantInfo) {
  const [plantName, stageStr] = plantInfo.split(":");
  let stage = parseInt(stageStr, 10);

  if (stage < 9) {
    stage += 1;
  }

  const descriptions = [
    "Seed",
    "Germination",
    "Seedling",
    "Vegetative",
    "Budding",
    "Flowering",
    "Pollination",
    "Fruit development",
    "Ripening",
    "Harvest-ready"
  ];

  const description = descriptions[stage];
  return `${plantName}:${stage} - ${description}`;
}

console.log(updatePlantGrowth("Tomato:3")); // Output: "Tomato:4 - Budding"
console.log(updatePlantGrowth("Corn:9")); // Output: "Corn:9 - Harvest-ready"
