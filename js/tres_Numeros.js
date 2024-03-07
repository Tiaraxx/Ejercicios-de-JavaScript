 // Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

        var num1 = parseInt(prompt("Ingrese el primer numero:"));
        var num2 = parseInt(prompt("Ingrese el segundo numero:"));
        var num3 = parseInt(prompt("Ingrese el tercer numero:"));
        if (num1 > num2 && num1 > num3) {
            alert("El numero mayor es " + num1);

        }else if (num2 > num3) {
            alert("El numero mayor es " + num2);

        }else {
            alert("El numero mayor es " + num3);
        }
             

        // Otra forma

        var n1 = prompt("Escribe un número");
        var n2 = prompt("Escribe otro número");
        var n3 = prompt("Escribe otro número");
        if (n1 > n2 && n1 > n3) {
        document.write(n1);

        } else if (n2 > n3) {
        document.write(n2);

        } else {
        document.write(n3);
        }