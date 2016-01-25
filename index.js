module.exports = reviewersEditionStringify

var numbers = require('reviewers-edition-parse/numbers')

function reviewersEditionStringify(argument) {
  return numbers.reduce(
    function(returned, number) {
      return (
        argument.hasOwnProperty(number) ?
          ( returned + argument[number].toString() + number.charAt(0) ) :
          returned ) },
    '') }
