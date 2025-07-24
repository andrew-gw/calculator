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

}


//
//  Divide
//
//  Divides operand
//
function divide() {

}


//
//  Sum
//
//  Calculates Sum
//
function sum() {

}
