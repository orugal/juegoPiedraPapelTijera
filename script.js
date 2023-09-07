//Renombre las variables al idioma inglés

var options = ['piedra','papel','tijera'];
/*
Nueva variable "victim":
Contiene el indice de la victima correspondiente a
los valores de la matriz "options". Es decir; 
  
    La victima de "piedra" es el indice "2(tijera)"
    La victima de "papel" es el indice "0(piedra)"
    La victima de "tijera" es el indice "1(papel)"
*/
var victim = [2,0,1];
var userScore = 0;
var cpuScore = 0;


//El párametro anteriormente nombrado "opcion" ahora recibe un indice
function juega(userChoiceIndex){
    //Variable anteriormente nombrada "aleatorio"
    let cpuChoiceIndex = Math.floor(Math.random() * options.length);

    //Equivalente al valor de la variable anteriormente nombrada "opcion"
    let userChoice = options[userChoiceIndex];
    //Equivalente al valor de la variable anteriormente nombrada "opcionMaquina"
    let cpuChoice = options[cpuChoiceIndex];
    //Use la sintaxis de plantilla de cadena para definir el mensaje
    let texto = `Usuario juega con: ${userChoice}, Maquina juega con: ${cpuChoice}`;

    //validamos.

    if(userChoiceIndex === cpuChoiceIndex) {//Si el indice del usuario y la máquina son iguales
        alert(texto + ". Empate");
    } else if (victim[userChoiceIndex] === cpuChoiceIndex) {//Si la victima es la máquina
        alert(texto + ". Gana el usuario");
        userScore++;
    } else { //Por defecto
        alert(texto + ". Gana la máquina");
        cpuScore++;
    }

    document.getElementById("pu").innerHTML = userScore;
    document.getElementById("pm").innerHTML = cpuScore;
}