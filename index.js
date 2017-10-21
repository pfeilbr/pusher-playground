require('dotenv').config();

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});