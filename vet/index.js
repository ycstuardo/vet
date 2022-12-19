const { registro, leer } = require("./operaciones");

const [nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (comando === "registro") {
  if ((nombre, edad, animal, color, enfermedad)) {
    return;
  } else if (isNaN(edad)) {
    return;
  }

  registro(nombre, edad, animal, color, enfermedad);
} else if (comando === "leer") {
  leer();
} 
