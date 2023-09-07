var opciones = ['piedra','papel','tijera'];
var puntajeUsuario = 0;
var puntajeMaquina = 0;

function juega(opcion){
    var aleatorio = Math.floor(Math.random() * opciones.length);
    var opcionMaquina = opciones[aleatorio];
    var texto = "";
    texto = "Usuario juega con: "+opcion+", Maquina juega con: "+opcionMaquina;
    //validamos.
    if(opcion=='piedra' && opcionMaquina== 'piedra'){
        alert(texto+". Empate")
    }
    else if(opcion == 'piedra' && opcionMaquina == 'papel'){
        puntajeMaquina++;
        alert(texto+". Gana la maquina.")
    }
    else if(opcion == 'piedra' && opcionMaquina == 'tijera'){
        puntajeUsuario++;
        alert(texto+". Gana usuario");
    }
    else if(opcion == 'papel' && opcionMaquina == 'papel'){
        alert(texto+". Empate")
    }
    else if(opcion == 'papel' && opcionMaquina == 'piedra'){
        puntajeUsuario++;
        alert(texto+". Gana usuario")
    }
    else if(opcion == 'papel' && opcionMaquina == 'tijera'){
        puntajeMaquina++;
        alert(texto+". Gana maquina")
    }
    else if(opcion == 'tijera' && opcionMaquina == 'tijera'){
        alert(texto+". Empate")
    }
    else if(opcion == 'tijera' && opcionMaquina == 'piedra'){
        puntajeMaquina++;
        alert(texto+". Gana maquina")
    }
    else if(opcion == 'tijera' && opcionMaquina == 'papel'){
        puntajeUsuario++;
        alert(texto+". Gana usuario")
    }

    document.getElementById("pu").innerHTML = puntajeUsuario;
    document.getElementById("pm").innerHTML = puntajeMaquina;
}