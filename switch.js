 var signo = prompt('Estas listo?')

 switch (signo) {
     case 'si':
     case 'Si':
         console.log('Eres un pro')
         break;
    case 'no':
    case 'No':
          console.log('No eres un pro')
          break;
    default:
         console.log('Eres tonto?')
         break;
 }