import { teams } from './teams.js';
import { setupArrays } from './utils/index.js';

setupArrays();

console.log('');
console.log('===============================================');
console.log('===== COMIENZO DE LA FASE DE ELIMINATORIAS ====');
console.log('===============================================');
console.log('');
console.log('Equipos que van a participar en el playoff (octavos de final):');
console.log('');
teams.shuffle().forEach(element => {console.log(element)});
console.log('');
console.log('===== OCTAVOS DE FINAL ====');
console.log('');
console.log('===== CUARTOS DE FINAL ====');
console.log('');
console.log('===== SEMIFINALES ====');
console.log('');
console.log('===== FINAL ====');
console.log('');
console.log('');
console.log('===============================================');
console.log('¡********** CAMPEÓN DEL MUNDO!');
console.log('===============================================');
console.log('');
