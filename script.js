function operar(tecla){
    var pantalla= document.getElementsByClassName('modulo');
    var textoP = pantalla[0].firstChild;
    switch (tecla) {
      case 'c':
        textoP.nodeValue= ' ';
        break;
      case '=':
        resultado = eval(textoP.nodeValue);
        textoP.nodeValue= resultado;
        break;
      default:
        textoP.nodeValue= textoP.nodeValue+ tecla;
        break;
    }
  }



var r = $('.ripple'),
  p = $('.pantalla');


// 