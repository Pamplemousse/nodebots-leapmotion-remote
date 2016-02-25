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
  }
)
