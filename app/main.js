var hands = require('./hands.js')
var directions = require('./directions.js')
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

directions.forward$.subscribe(
  function () {
    tiles.changeBackground('up', 'blue')
  }
)

directions.notForward$.subscribe(
  function () {
    tiles.changeBackground('up', 'lightblue')
  }
)

directions.right$.subscribe(
  function () {
    tiles.changeBackground('right', 'blue')
  }
)

directions.notRight$.subscribe(
  function () {
    tiles.changeBackground('right', 'lightblue')
  }
)

directions.left$.subscribe(
  function () {
    tiles.changeBackground('left', 'blue')
  }
)

directions.notLeft$.subscribe(
  function () {
    tiles.changeBackground('left', 'lightblue')
  }
)
