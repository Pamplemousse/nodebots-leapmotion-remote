# Leap Motion as a remote

Use [Leap Motion](https://www.leapmotion.com/) as a remote to control a robot. Project started for [NodeBots in Wellington](http://nodebots.co.nz/).


## Requirements

  * install the Leap Motion sdk: [https://developer.leapmotion.com/](https://developer.leapmotion.com/)
  * you need web browser supporting Array.observe ([http://caniuse.com/object-observe](http://caniuse.com/object-observe))
  * (optionnal) http server: ```npm install -g http-server```


## Run it

  ```bash
  git clone ssh://git@github.com:Pamplemousse/nodebots-leapmotion-remote.git
  cd nodebots-leapmotion-remote

  # if you use http server
  http-server
  # open index.html in your browser otherwise
  ```
