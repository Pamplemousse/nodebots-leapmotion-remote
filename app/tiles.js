var $ = require('jquery')

const tiles = {
  onOff: $('#on-off'),
  up: $('#up'),
  right: $('#right'),
  left: $('#left')
}

function changeBackground (tileName, color) {
  tiles[tileName].css('background-color', color)
}

function toggle (onOffState) {
  tiles['onOff'].html(onOffState)

  if (onOffState === 'on') {
    changeBackground('onOff', 'green')
  } else {
    changeBackground('onOff', 'red')
  }
}

module.exports = {
  changeBackground: changeBackground,
  toggle: toggle
}
