//
//  Thousands Separators
//
//  The thousands separators functions of the calculator
//

//
//  Add Thousands Separators
//
//  Adds thousands separators to numbers
//
//  @param input Number
//
function addThousandsSeparators(input) {
  if (input % 1 == 0) {
    var str = input.toString()
    var new_value = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return new_value
  } else {
    return input
  }
}
