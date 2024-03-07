/* 
  CREAR UN SCRIPT QUE PIDA EL NOMBRE DEL ESTUDIANTE Y LAS NOTAS DE 3 MATERIAS: HTML, CSS Y
JAVASCRIPT, ADEMÁS, CALCULE EL PROMEDIO DE LAS NOTAS. SI EL PROMEDIO ES MAYOR O IGUAL A
60, DEBE MOSTRAR EL SIGUIENTE MENSAJE:
Hola, estudiante. Su nota en HTML es de n puntos, en CSS es de n puntos y en JAVASCRIPT es de n puntos.
Por lo tanto, su promedio final es de n puntos por lo que usted CALIFICA.

PERO, SI EL PROMEDIO ES MENOR A 60, DEBE MOSTRAR EL SIGUIENTE MENSAJE:
Hola, estudiante. Su nota en HTML es de n puntos, en CSS es de n puntos y en JAVASCRIPT es de n puntos.
Por lo tanto, su promedio final es de n puntos por lo que usted NO CALIFICA.
*/ 



var nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
var notaHTML = parseInt(prompt("Ingrese su nota en HTML:"));
var notaCSS = parseInt(prompt("Ingrese su nota en CSS:"));
var notaJavaScritp = parseInt(prompt("Ingrese su nota en JavaScritp:"));

var promedio = (notaHTML + notaCSS + notaJavaScritp) /3;
if(promedio >= 60) {
    alert("Hola, " + nombreEstudiante + ". Su nota en HTML es de " + notaHTML + " puntos, en CSS es de "
    + notaCSS + " puntos y en JavaScritp es de " + notaJavaScritp + " puntos. Por lo tanto, su promedio final es de " + promedio +
     " puntos por lo que usted CALIFICA.");

}else {
    alert("Hola, " + nombreEstudiante + ". Su nota en HTML es de " + notaHTML + " puntos, en CSS es de "
    + notaCSS + " puntos y en JavaScritp es de " + notaJavaScritp + " puntos. Por lo tanto, su promedio final es de " + promedio +
     " puntos por lo que usted NO CALIFICA.");
}