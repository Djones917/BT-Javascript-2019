const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype =  {
  send: function() {
    
  },
  recieve: function() {

  }
}

const Chatroom = function() {
    let users = {}; // list of users
}