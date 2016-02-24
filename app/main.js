var $ = require('jquery')
var _ = require('lodash')
var Rx = require('rx')
var Leap = require('leapjs')

var frames = []

var frameChanges$ = Rx.Observable.ofArrayChanges(frames)

// Let the leap api's infinite loop update the frames array
Leap.loop({ enableGestures: true }, function (frame) {
  frames.push(frame)
})

var lastFrames$ = frameChanges$
  .map(function (frameChange) {
    return _.last(frameChange.object)
  })

var hands$ = lastFrames$
  .filter(function (frame) {
    return !_.isEmpty(frame.hands)
  })
  .map(function (frame) {
    return frame.hands[0]
  })

hands$.subscribe(
  function (hand) {
    console.log(hand)
  }
)
