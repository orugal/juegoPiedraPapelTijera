var options = ['piedra','papel','tijera'];
var victim = [2,0,1];
var userScore = 0;
var cpuScore = 0;

function juega(userChoiceIndex){
    let cpuChoiceIndex = Math.floor(Math.random() * options.length);

    let userChoice = options[userChoiceIndex];
    let cpuChoice = options[cpuChoiceIndex];
    
    let texto = `Usuario juega con: ${userChoice}, Maquina juega con: ${cpuChoice}`;

    //validamos.

    if(userChoiceIndex === cpuChoiceIndex) {
        alert(texto + ". Empate");
    } else if (victim[userChoiceIndex] === cpuChoiceIndex) {
        alert(texto + ". Gana el usuario");
        userScore++;
    } else {
        alert(texto + ". Gana la máquina");
        cpuScore++;
    }

    document.getElementById("pu").innerHTML = userScore;
    document.getElementById("pm").innerHTML = cpuScore;
}