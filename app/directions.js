var hands = require('./hands.js')

var forward$ = hands.leftHand$
 .filter(function (hand) {
   return hand.direction[1] < -0.20
 })

var right$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] > 0.20
  })

var left$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] < -0.20
  })

// Ugly, here only for display purposes
var notForward$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[1] > -0.20
  })

var notRight$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] < 0.20
  })

var notLeft$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] > -0.20
  })

module.exports = {
  forward$: forward$,
  right$: right$,
  left$: left$,
  notForward$: notForward$,
  notRight$: notRight$,
  notLeft$: notLeft$
}
