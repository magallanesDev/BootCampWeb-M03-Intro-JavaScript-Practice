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


function generateGoals(){
    return Math.floor(Math.random() * 10);
}

console.log('');
console.log('');
console.log('===== OCTAVOS DE FINAL ====');
console.log('');
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
                console.log('');
            }
            if (goals[i] < goals[i+1]) {
                winnersOf16.push(teams[i+1]);
                console.log(`${teams[i+1]} pasa de ronda`);
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
                    console.log('');
                }
                if (goals[i] < goals[i+1]) {
                    winnersOf16.push(teams[i+1]);
                    console.log(`${teams[i+1]} pasa de ronda`);
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
                        console.log('');
                    }
                    if (goals[i] < goals[i+1]) {
                        winnersOf16.push(teams[i+1]);
                        console.log(`${teams[i+1]} pasa de ronda`);
                        console.log('');
                    }
                    if (goals[i] === goals[i+1]) {
                        console.log('Hubo otro empate en los penaltis. Pasa el equipo local');
                        winnersOf16.push(teams[i]);
                        console.log(`${teams[i]} pasa de ronda`);
                        console.log('');
                    }
                }
            } 
        }
    } 
}

playRoundOf16();


console.log('');
console.log('');
console.log('===== CUARTOS DE FINAL ====');
console.log('');
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
                console.log('');
            }
            if (goals[i] < goals[i+1]) {
                winnersOf8.push(winnersOf16[i+1]);
                console.log(`${winnersOf16[i+1]} pasa de ronda`);
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
                    console.log('');
                }
                if (goals[i] < goals[i+1]) {
                    winnersOf8.push(winnersOf16[i+1]);
                    console.log(`${winnersOf16[i+1]} pasa de ronda`);
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
                        console.log('');
                    }
                    if (goals[i] < goals[i+1]) {
                        winnersOf8.push(winnersOf16[i+1]);
                        console.log(`${winnersOf16[i+1]} pasa de ronda`);
                        console.log('');
                    }
                    if (goals[i] === goals[i+1]) {
                        console.log('Hubo otro empate en los penaltis. Pasa el equipo local');
                        winnersOf8.push(winnersOf16[i]);
                        console.log(`${winnersOf16[i]} pasa de ronda`);
                        console.log('');
                    }
                }
            } 
        }
    } 
}

playRoundOf8();


console.log('');
console.log('');
console.log('===== SEMIFINALES ====');
console.log('');
let winnersOf4 = [];
let losersOf4 = [];
function playRoundOf4() {
    let goals = [];
    for (let i = 0; i < winnersOf8.length; i++) {
        goals[i] = generateGoals();
    }
    
    for (let i = 0; i < winnersOf8.length; i++) {
        if (i % 2 === 0) {
            console.log(`${winnersOf8[i]} ${goals[i]} - ${winnersOf8[i+1]} ${goals[i+1]}`);
            
            if (goals[i] > goals[i+1]) {
                winnersOf4.push(winnersOf8[i]);
                losersOf4.push(winnersOf8[i+1]);
                console.log(`${winnersOf8[i]} pasa de ronda y juega la gran final`);
                console.log(`${winnersOf8[i+1]} juega la final de consolación`);
                console.log('');
            }
            if (goals[i] < goals[i+1]) {
                winnersOf4.push(winnersOf8[i+1]);
                losersOf4.push(winnersOf8[i]);
                console.log(`${winnersOf8[i+1]} pasa de ronda y juega la gran final`);
                console.log(`${winnersOf8[i]} juega la final de consolación`);
                console.log('');  
            }
            if (goals[i] === goals[i+1]) {
                console.log('Hubo un empate. Jugamos la prórroga')
                goals[i] = generateGoals();
                goals[i+1] = generateGoals();
                console.log(`${winnersOf8[i]} ${goals[i]} - ${winnersOf8[i+1]} ${goals[i+1]}`);
                if (goals[i] > goals[i+1]) {
                    winnersOf4.push(winnersOf8[i]);
                    losersOf4.push(winnersOf8[i+1]);
                    console.log(`${winnersOf8[i]} pasa de ronda y juega la gran final`);
                    console.log(`${winnersOf8[i+1]} juega la final de consolación`);
                    console.log('');
                }
                if (goals[i] < goals[i+1]) {
                    winnersOf4.push(winnersOf8[i+1]);
                    losersOf4.push(winnersOf8[i]);
                    console.log(`${winnersOf8[i+1]} pasa de ronda y juega la gran final`);
                    console.log(`${winnersOf8[i]} juega la final de consolación`);
                    console.log('');
                }
                if (goals[i] === goals[i+1]) {
                    console.log('Hubo otro empate en la prórroga. Jugamos los penaltis')
                    goals[i] = generateGoals();
                    goals[i+1] = generateGoals();
                    console.log(`${winnersOf8[i]} ${goals[i]} - ${winnersOf8[i+1]} ${goals[i+1]}`);
                    if (goals[i] > goals[i+1]) {
                        winnersOf4.push(winnersOf8[i]);
                        losersOf4.push(winnersOf8[i+1]);
                        console.log(`${winnersOf8[i]} pasa de ronda y juega la gran final`);
                        console.log(`${winnersOf8[i+1]} juega la final de consolación`);
                        console.log('');
                    }
                    if (goals[i] < goals[i+1]) {
                        winnersOf4.push(winnersOf8[i+1]);
                        losersOf4.push(winnersOf8[i]);
                        console.log(`${winnersOf8[i+1]} pasa de ronda y juega la gran final`);
                        console.log(`${winnersOf8[i]} juega la final de consolación`);
                        console.log('');
                    }
                    if (goals[i] === goals[i+1]) {
                        console.log('Hubo otro empate en los penaltis. Pasa el equipo local');
                        winnersOf4.push(winnersOf8[i]);
                        losersOf4.push(winnersOf8[i+1]);
                        console.log(`${winnersOf8[i]} pasa de ronda y juega la gran final`);
                        console.log(`${winnersOf8[i+1]} juega la final de consolación`);
                        console.log('');
                    }
                }
            } 
        }
    }
}

playRoundOf4();


console.log('');
console.log('');
console.log('===== FINAL DE CONSOLACIÓN (TERCER Y CUARTO PUESTO) ====');
console.log('');
let winnersOf2ConsolationFinal = [];
function playRoundOf2ConsolationFinal() {
    let goals = [];
    for (let i = 0; i < losersOf4.length; i++) {
        goals[i] = generateGoals();
    }
    
    for (let i = 0; i < losersOf4.length; i++) {
        if (i % 2 === 0) {
            console.log(`${losersOf4[i]} ${goals[i]} - ${losersOf4[i+1]} ${goals[i+1]}`);
            
            if (goals[i] > goals[i+1]) {
                winnersOf2ConsolationFinal.push(losersOf4[i]);
                console.log('');
                console.log(`¡${losersOf4[i]} TERCER PUESTO!`);
                console.log('');
            }
            if (goals[i] < goals[i+1]) {
                winnersOf2ConsolationFinal.push(losersOf4[i+1]);
                console.log('');
                console.log(`¡${losersOf4[i+1]} TERCER PUESTO!`);
                console.log(''); 
            }
            if (goals[i] === goals[i+1]) {
                console.log('Hubo un empate. Jugamos la prórroga')
                goals[i] = generateGoals();
                goals[i+1] = generateGoals();
                console.log(`${losersOf4[i]} ${goals[i]} - ${losersOf4[i+1]} ${goals[i+1]}`);
                if (goals[i] > goals[i+1]) {
                    winnersOf2ConsolationFinal.push(losersOf4[i]);
                    console.log('');
                    console.log(`¡${losersOf4[i]} TERCER PUESTO!`);
                    console.log('');
                }
                if (goals[i] < goals[i+1]) {
                    winnersOf2ConsolationFinal.push(losersOf4[i+1]);
                    console.log('');
                    console.log(`¡${losersOf4[i+1]} TERCER PUESTO!`);
                    console.log('');
                }
                if (goals[i] === goals[i+1]) {
                    console.log('Hubo otro empate en la prórroga. Jugamos los penaltis')
                    goals[i] = generateGoals();
                    goals[i+1] = generateGoals();
                    console.log(`${losersOf4[i]} ${goals[i]} - ${losersOf4[i+1]} ${goals[i+1]}`);
                    if (goals[i] > goals[i+1]) {
                        winnersOf2ConsolationFinal.push(losersOf4[i]);
                        console.log('');
                        console.log(`¡${losersOf4[i]} TERCER PUESTO!`);
                        console.log('');
                    }
                    if (goals[i] < goals[i+1]) {
                        winnersOf2ConsolationFinal.push(losersOf4[i+1]);
                        console.log('');
                        console.log(`¡${losersOf4[i+1]} TERCER PUESTO!`);
                        console.log('');
                    }
                    if (goals[i] === goals[i+1]) {
                        console.log('Hubo otro empate en los penaltis. Pasa el equipo local');
                        winnersOf2ConsolationFinal.push(losersOf4[i]);
                        console.log('');
                        console.log(`¡${losersOf4[i]} TERCER PUESTO!`);
                        console.log('');
                    }
                }
            } 
        }
    } 
}

playRoundOf2ConsolationFinal();


console.log('');
console.log('');
console.log('===== FINAL ====');
console.log('');
let winnersOf2Final = [];
function playRoundOf2Final() {
    let goals = [];
    for (let i = 0; i < winnersOf4.length; i++) {
        goals[i] = generateGoals();
    }
    
    for (let i = 0; i < winnersOf4.length; i++) {
        if (i % 2 === 0) {
            console.log(`${winnersOf4[i]} ${goals[i]} - ${winnersOf4[i+1]} ${goals[i+1]}`);
            
            if (goals[i] > goals[i+1]) {
                winnersOf2Final.push(winnersOf4[i]);
                console.log('');
                console.log(`¡${winnersOf4[i+1]} SEGUNDO PUESTO!`);
                console.log('');
                console.log('===============================================');
                console.log(`¡${winnersOf4[i]} CAMPEÓN DEL MUNDO!`);
                console.log('===============================================');
                console.log('');
            }
            if (goals[i] < goals[i+1]) {
                winnersOf2Final.push(winnersOf4[i+1]);
                console.log('');
                console.log(`¡${winnersOf4[i]} SEGUNDO PUESTO!`);
                console.log('');
                console.log('===============================================');
                console.log(`¡${winnersOf4[i+1]} CAMPEÓN DEL MUNDO!`);
                console.log('===============================================');
                console.log(''); 
            }
            if (goals[i] === goals[i+1]) {
                console.log('Hubo un empate. Jugamos la prórroga')
                goals[i] = generateGoals();
                goals[i+1] = generateGoals();
                console.log(`${winnersOf4[i]} ${goals[i]} - ${winnersOf4[i+1]} ${goals[i+1]}`);
                if (goals[i] > goals[i+1]) {
                    winnersOf2Final.push(winnersOf4[i]);
                    console.log('');
                    console.log(`¡${winnersOf4[i+1]} SEGUNDO PUESTO!`);
                    console.log('');
                    console.log('===============================================');
                    console.log(`¡${winnersOf4[i]} CAMPEÓN DEL MUNDO!`);
                    console.log('===============================================');
                    console.log('');
                }
                if (goals[i] < goals[i+1]) {
                    winnersOf2Final.push(winnersOf4[i+1]);
                    console.log('');
                    console.log(`¡${winnersOf4[i]} SEGUNDO PUESTO!`);
                    console.log('');
                    console.log('===============================================');
                    console.log(`¡${winnersOf4[i+1]} CAMPEÓN DEL MUNDO!`);
                    console.log('===============================================');
                    console.log('');
                }
                if (goals[i] === goals[i+1]) {
                    console.log('Hubo otro empate en la prórroga. Jugamos los penaltis')
                    goals[i] = generateGoals();
                    goals[i+1] = generateGoals();
                    console.log(`${winnersOf4[i]} ${goals[i]} - ${winnersOf4[i+1]} ${goals[i+1]}`);
                    if (goals[i] > goals[i+1]) {
                        winnersOf2Final.push(winnersOf4[i]);
                        console.log('');
                        console.log(`¡${winnersOf4[i+1]} SEGUNDO PUESTO!`);
                        console.log('');
                        console.log('===============================================');
                        console.log(`¡${winnersOf4[i]} CAMPEÓN DEL MUNDO!`);
                        console.log('===============================================');
                        console.log('');
                    }
                    if (goals[i] < goals[i+1]) {
                        winnersOf2Final.push(winnersOf4[i+1]);
                        console.log('');
                        console.log(`¡${winnersOf4[i]} SEGUNDO PUESTO!`);
                        console.log('');
                        console.log('===============================================');
                        console.log(`¡${winnersOf4[i+1]} CAMPEÓN DEL MUNDO!`);
                        console.log('===============================================');
                        console.log('');
                    }
                    if (goals[i] === goals[i+1]) {
                        console.log('Hubo otro empate en los penaltis. Pasa el equipo local');
                        winnersOf2Final.push(winnersOf4[i]);
                        console.log('');
                        console.log(`¡${winnersOf4[i+1]} SEGUNDO PUESTO!`);
                        console.log('');
                        console.log('===============================================');
                        console.log(`¡${winnersOf4[i]} CAMPEÓN DEL MUNDO!`);
                        console.log('===============================================');
                        console.log('');
                    }
                }
            } 
        }
    }
}

playRoundOf2Final();
