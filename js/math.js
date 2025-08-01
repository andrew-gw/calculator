//
//  Calculator Math Functions
//
//  The math functions of the calculator
//

//
//  Add
//
//  Adds operand
//
function add() {
  shouldAppend = false

  if (!queuedOperand) queuedOperand = parseFloat(lastOperand)

  applyOperation = () => {
    lastOpElement.innerText = `${ addThousandsSeparators(queuedOperand) } + ${ addThousandsSeparators(lastOperand) }`
    queuedOperand += parseFloat(lastOperand)
  }
}

//
//  Subtract
//
//  Subtracts operand
//
function subtract() {
  shouldAppend = false

  if (!queuedOperand) queuedOperand = lastOperand

  applyOperation = () => {
    lastOpElement.innerText = `${ addThousandsSeparators(queuedOperand) } - ${ addThousandsSeparators(lastOperand) }`
    queuedOperand -= lastOperand
  }
}

//
//  Multiply
//
//  Multiplies operand
//
function multiply() {
  shouldAppend = false

  if (!queuedOperand) queuedOperand = lastOperand

  applyOperation = () => {
    lastOpElement.innerText = `${ addThousandsSeparators(queuedOperand) } × ${ addThousandsSeparators(lastOperand) }`
    queuedOperand *= lastOperand
  }
}

//
//  Divide
//
//  Divides operand
//
function divide() {
  shouldAppend = false

  if (!queuedOperand) queuedOperand = lastOperand

  applyOperation = () => {
    lastOpElement.innerText = `${ addThousandsSeparators(queuedOperand) } ÷ ${ addThousandsSeparators(lastOperand) }`
    queuedOperand /= lastOperand
  }
}

//
//  Sum
//
//  Calculates Sum
//
function sum() {
  shouldAppend = false

  applyOperation()

  isSumming = true

  output(addThousandsSeparators(queuedOperand))

  // Anncounce result to screen readers
  document.getElementById('display').ariaLive = 'polite'
  setTimeout(() => {
    document.getElementById('display').removeAttribute('aria-live')
  }, 1000)

  isSumming = false
  shouldAppend = false
}
