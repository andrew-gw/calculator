//
//  Mouse Events
//
//  The mouse functions of the calculator
//

document.addEventListener('click', () => {
  if (event.target.type === 'button') {
    switch (event.target.value) {
      case 'C':
        clear()
        break;
      case 'AC':
        clear()
        break;
      case '+/-':
        sign()
        break;
      case '%':
        percentage()
        break;
      case '+':
        add()
        break;
      case '-':
        subtract()
        break;
      case '×':
        multiply()
        break;
      case '÷':
        divide()
        break;
      case '=':
        sum()
        break;
      case '.':
        point()
        break;
      default:
        output(event.target.value)
        break;
    }
  }
})
