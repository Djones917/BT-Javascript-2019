const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype =  {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log();
  }
}

const Chatroom = function() {
    let users = {}; // list of users
}