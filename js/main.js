//
//  Calculator Main Functions
//
//  The main functions of the calculator
//

const lastOpElement = document.querySelector('#lastOp')

let lastOperand = 0

let shouldAppend = false
let containsDecimal = false
let startingZero = true

let isSumming = false
let applyOperation = () => {}
let queuedOperand = 0


//
//  Output Digit
//
//  Outputs a digit
//
//  @param digit Number
//
function output(digit) {
  if (!shouldAppend && digit == 0) {
    startingZero = true
  }

  if (shouldAppend) {
    if (!isSumming) {
      lastOperand += digit
    }

    if (!containsDecimal) {
      document.querySelector('#display').innerText = addThousandsSeparators(lastOperand)
    } else {
      document.querySelector('#display').innerText += digit
    }
  } else {
    if (!isSumming) {
      lastOperand = digit
    }

    document.querySelector('#display').innerText = `${ digit }`

    containsDecimal = false

    if (digit == 0 && startingZero) {
      shouldAppend = false
    } else {
      shouldAppend = true
    }
  }

  if (shouldAppend) {
    if (document.querySelector('[value=AC]')) {
      document.querySelector('[value=AC]').value = 'C'
    }
  }

  resizeDisplayString()
}

//
//  Append Point
//
//  Appends a point
//
//  @param digit Number
//
function point(digit) {
  if (document.querySelector('[value=AC]')) {
    document.querySelector('[value=AC]').value = 'C'
  }

  if (!shouldAppend) {
    document.querySelector('#display').innerText = `0.`
    lastOperand = '0.'

    containsDecimal = true
    shouldAppend = true

    resizeDisplayString()

    return
  }

  if (containsDecimal) {
    return
  }

  containsDecimal = true

  document.querySelector('#display').innerText += `.`

  lastOperand += '.'

  resizeDisplayString()
}

//
//  Sign
//
//  Toggles sign +/-
//
function sign() {
  shouldAppend = false

  if (!queuedOperand) queuedOperand = lastOperand

  applyOperation = () => {
    queuedOperand *= -1
  }

  applyOperation()
  output(queuedOperand)
}

//
//  Percentage
//
//  Calculates percentage
//
function percentage() {
  shouldAppend = false

  if (!queuedOperand) queuedOperand = lastOperand

  applyOperation = () => {
    lastOpElement.innerText = `${ queuedOperand }%`
    queuedOperand *= 0.01
  }
}

//
//  Clear
//
//  Clears memory
//
function clear() {
  lastOperand = 0
  queuedOperand = 0
  shouldAppend = false
  containsDecimal = false
  startingZero = true
  isSumming = false

  applyOperation = () => {}

  document.querySelector('#display').innerText = `0`

  if (document.querySelector('[value=C]')) {
    document.querySelector('[value=C]').value = 'AC'
  }

  lastOpElement.innerText = ``

  resizeDisplayString()
}
