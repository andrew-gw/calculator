//
//  Keyboard Functions
//
//  The keyboard functions of the calculator
//

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Escape':
      event.preventDefault() // Disable Safari exit fullscreen
      clear()
      break;
    // case '+/-':
    //   sign()
    //   break;
    case '%':
      percentage()
      break;
    case '+':
      add()
      break;
    case '-':
      subtract()
      break;
    case '*':
      multiply()
      break;
    case '/':
      event.preventDefault() // Disable Firefox Quick find
      divide()
      break;
    case '=':
      sum()
      break;
    case 'Enter':
      sum()
      break;
    case '.':
      point()
      break;
    default:
      if (isFinite(event.key) && event.key !== ' ') {
        // Number
        output(event.key)
      }
      break;
  }
})
