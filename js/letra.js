 // Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

        var frase = prompt("Ingrese una frase");
        var contador = 0;
        
        for (var i = 0; i < frase.length; i++) {
        if (frase[i] === "a") {
        contador++;
        }
    }
      alert("La letra 'a' aparece " + contador + " veces en la frase.");