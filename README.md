# Leap Motion as a remote

Use [Leap Motion](https://www.leapmotion.com/) as a remote to control a robot. Project started for [NodeBots in Wellington](http://nodebots.co.nz/).


## Requirements

  * install the Leap Motion sdk: [https://developer.leapmotion.com/](https://developer.leapmotion.com/)
  * you need web browser supporting Array.observe ([http://caniuse.com/object-observe](http://caniuse.com/object-observe))


## Run it

  ```bash
  git clone ssh://git@github.com:Pamplemousse/nodebots-leapmotion-remote.git
  cd nodebots-leapmotion-remote

  # install node modules
  npm install

  # run the server
  ./node_modules/budo/bin/cmd.js app/main.js:js/bundle.js --live
  ```

Debug info and display are available on <a href="http://localhost:9966" target="_blank">http://localhost:9966</a>.
