var $ = require('jquery')

var hands = require('./hands.js')

hands.leftHand$.subscribe(
  function (hand) {
    var onOffTile = $('#on-off')
    onOffTile.html('on')
    onOffTile.css('background-color', 'green')
  }
)

hands.noHands$.subscribe(
  function () {
    var onOffTile = $('#on-off')
    onOffTile.html('off')
    onOffTile.css('background-color', 'red')
  }
)
