 // Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
        
        var num1 = parseInt(prompt("Ingrese el primer numero:"));
        var num2 = parseInt(prompt("Ingrese el segundo numero:"));
        if (num1 > num2) {
        alert("El numero mayor es " + num1);
       } else {
        alert("El numero mayor es " + num2);
       }

       // Otra forma

       
       var n1 = prompt("Escribe un número");
       var n2 = prompt("Escribe otro número");
       if (n1 > n2) {
       document.write(n1);

       } else {
       document.write(n2);
       }