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


function generateGoals(){
    return Math.floor(Math.random() * 10);
}

console.log('===== OCTAVOS DE FINAL ====');
let winnersOf16 = [];
function playRoundOf16() {
    let goals = [];
    for (let i = 0; i < teams.length; i++) {
        goals[i] = generateGoals();
    }
    
    for (let i = 0; i < teams.length; i++) {
        if (i % 2 === 0) {
            console.log(`${teams[i]} ${goals[i]} - ${teams[i+1]} ${goals[i+1]}`);
            
            if (goals[i] > goals[i+1]) {
                winnersOf16.push(teams[i]);
                console.log(`${teams[i]} pasa de ronda`);
                console.log(winnersOf16);
                console.log('');
            }
            if (goals[i] < goals[i+1]) {
                winnersOf16.push(teams[i+1]);
                console.log(`${teams[i+1]} pasa de ronda`);
                console.log(winnersOf16);
                console.log('');
                
            }
            if (goals[i] === goals[i+1]) {
                console.log('Hubo un empate. Jugamos la prórroga')
                goals[i] = generateGoals();
                goals[i+1] = generateGoals();
                console.log(`${teams[i]} ${goals[i]} - ${teams[i+1]} ${goals[i+1]}`);
                if (goals[i] > goals[i+1]) {
                    winnersOf16.push(teams[i]);
                    console.log(`${teams[i]} pasa de ronda`);
                    console.log(winnersOf16);
                    console.log('');
                }
                if (goals[i] < goals[i+1]) {
                    winnersOf16.push(teams[i+1]);
                    console.log(`${teams[i+1]} pasa de ronda`);
                    console.log(winnersOf16);
                    console.log('');
                }
                if (goals[i] === goals[i+1]) {
                    console.log('Hubo otro empate en la prórroga. Jugamos los penaltis')
                    goals[i] = generateGoals();
                    goals[i+1] = generateGoals();
                    console.log(`${teams[i]} ${goals[i]} - ${teams[i+1]} ${goals[i+1]}`);
                    if (goals[i] > goals[i+1]) {
                        winnersOf16.push(teams[i]);
                        console.log(`${teams[i]} pasa de ronda`);
                        console.log(winnersOf16);
                        console.log('');
                    }
                    if (goals[i] < goals[i+1]) {
                        winnersOf16.push(teams[i+1]);
                        console.log(`${teams[i+1]} pasa de ronda`);
                        console.log(winnersOf16);
                        console.log('');
                    }
                    if (goals[i] === goals[i+1]) {
                        console.log('Hubo otro empate en los penaltis. Pasa el equipo local');
                        winnersOf16.push(teams[i]);
                        console.log(`${teams[i]} pasa de ronda`);
                        console.log(winnersOf16);
                        console.log('');
                    }
                }
            } 
        }
    }
    return winnersOf16;  
}

playRoundOf16();
console.log(winnersOf16);

console.log('===== CUARTOS DE FINAL ====');
let winnersOf8 = [];
function playRoundOf8() {
    let goals = [];
    for (let i = 0; i < winnersOf16.length; i++) {
        goals[i] = generateGoals();
    }
    
    for (let i = 0; i < winnersOf16.length; i++) {
        if (i % 2 === 0) {
            console.log(`${winnersOf16[i]} ${goals[i]} - ${winnersOf16[i+1]} ${goals[i+1]}`);
            
            if (goals[i] > goals[i+1]) {
                winnersOf8.push(winnersOf16[i]);
                console.log(`${winnersOf16[i]} pasa de ronda`);
                console.log(winnersOf8);
                console.log('');
            }
            if (goals[i] < goals[i+1]) {
                winnersOf8.push(winnersOf16[i+1]);
                console.log(`${winnersOf16[i+1]} pasa de ronda`);
                console.log(winnersOf8);
                console.log('');
                
            }
            if (goals[i] === goals[i+1]) {
                console.log('Hubo un empate. Jugamos la prórroga')
                goals[i] = generateGoals();
                goals[i+1] = generateGoals();
                console.log(`${winnersOf16[i]} ${goals[i]} - ${winnersOf16[i+1]} ${goals[i+1]}`);
                if (goals[i] > goals[i+1]) {
                    winnersOf8.push(winnersOf16[i]);
                    console.log(`${winnersOf16[i]} pasa de ronda`);
                    console.log(winnersOf8);
                    console.log('');
                }
                if (goals[i] < goals[i+1]) {
                    winnersOf8.push(winnersOf16[i+1]);
                    console.log(`${winnersOf16[i+1]} pasa de ronda`);
                    console.log(winnersOf8);
                    console.log('');
                }
                if (goals[i] === goals[i+1]) {
                    console.log('Hubo otro empate en la prórroga. Jugamos los penaltis')
                    goals[i] = generateGoals();
                    goals[i+1] = generateGoals();
                    console.log(`${winnersOf16[i]} ${goals[i]} - ${winnersOf16[i+1]} ${goals[i+1]}`);
                    if (goals[i] > goals[i+1]) {
                        winnersOf8.push(winnersOf16[i]);
                        console.log(`${winnersOf16[i]} pasa de ronda`);
                        console.log(winnersOf8);
                        console.log('');
                    }
                    if (goals[i] < goals[i+1]) {
                        winnersOf8.push(winnersOf16[i+1]);
                        console.log(`${winnersOf16[i+1]} pasa de ronda`);
                        console.log(winnersOf8);
                        console.log('');
                    }
                    if (goals[i] === goals[i+1]) {
                        console.log('Hubo otro empate en los penaltis. Pasa el equipo local');
                        winnersOf8.push(winnersOf16[i]);
                        console.log(`${winnersOf16[i]} pasa de ronda`);
                        console.log(winnersOf8);
                        console.log('');
                    }
                }
            } 
        }
    }
    return winnersOf8;  
}

playRoundOf8();
console.log(winnersOf8);



