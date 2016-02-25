var hands = require('./hands.js')
var tiles = require('./tiles.js')

hands.leftHand$.subscribe(
  function (hand) {
    tiles.toggle('on')
  }
)

hands.noHands$.subscribe(
  function () {
    tiles.toggle('off')
    tiles.changeBackground('onOff', 'red')
    tiles.changeBackground('up', 'lightblue')
    tiles.changeBackground('right', 'lightblue')
    tiles.changeBackground('left', 'lightblue')
  }
)

var forwardDirection$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[1] < -0.20
  })

// Ugly, here only for display purposes
var notForwardDirection$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[1] > -0.20
  })

var rightDirection$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] > 0.20
  })

// Ugly, here only for display purposes
var notRightDirection$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] < 0.20
  })

var leftDirection$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] < -0.20
  })

// Ugly, here only for display purposes
var notLeftDirection$ = hands.leftHand$
  .filter(function (hand) {
    return hand.direction[0] > -0.20
  })

forwardDirection$.subscribe(
  function () {
    tiles.changeBackground('up', 'blue')
  }
)

notForwardDirection$.subscribe(
  function () {
    tiles.changeBackground('up', 'lightblue')
  }
)

rightDirection$.subscribe(
  function () {
    tiles.changeBackground('right', 'blue')
  }
)

notRightDirection$.subscribe(
  function () {
    tiles.changeBackground('right', 'lightblue')
  }
)

leftDirection$.subscribe(
  function () {
    tiles.changeBackground('left', 'blue')
  }
)

notLeftDirection$.subscribe(
  function () {
    tiles.changeBackground('left', 'lightblue')
  }
)
