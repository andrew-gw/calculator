//
//  Text Resize Functions
//
//  The text resize functions of the calculator
//

//
//  Check Overflow
//
//  Detects element scrolling overflow for shrinking
//
function checkOverflow(element) {
  var originalOverflow = element.style.overflow

  if (!originalOverflow || originalOverflow === 'visible') {
    element.style.overflow = 'hidden'
  }

  var isOverflowing = element.clientWidth < element.scrollWidth

  element.style.overflow = originalOverflow

  return isOverflowing
}

//
//  Resize Display String
//
//  Adds operand
//
function resizeDisplayString() {
  document.querySelector('#display').style.transform = ''
  const isOverflow = checkOverflow(document.querySelector('#display'))

  if (isOverflow) {
    var curOverflow = document.querySelector('#display').style.overflow

    if (!curOverflow || curOverflow === 'visible') {
      document.querySelector('#display').style.overflow = 'hidden'
    }

    document.querySelector('#display').style.transform = `scale(${ document.querySelector('#display').clientWidth / document.querySelector('#display').scrollWidth })`
    document.querySelector('#display').style.overflow = curOverflow
  }
}

window.addEventListener('load', () => {
  resizeDisplayString()
})


window.addEventListener('resize', () => {
  resizeDisplayString()
})

window.addEventListener('orientationchange', () => {
  resizeDisplayString()
})
