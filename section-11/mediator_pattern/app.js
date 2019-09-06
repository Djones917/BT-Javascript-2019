// Meadiator Pattern
const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype =  {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}



const Chatroom = function() {
    let users = {}; // list of users

    return {
      register: function(user) {
        users[user.name] = user;
        user.chatroom = this;
      },
      send: function(message, from, to) {
        if(to) {
          // Single user message
          to.recieve(message, from);
        } else {
          // Mass message
          for(key in users) {
            if(users[key] !== from) {
              users[key].recieve(message, from);
            }
          }
        }
      }
    }
}



const derek = new User('Derek');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(derek);
chatroom.register(jeff);
chatroom.register(sarah);

derek.send('Hello, Jeff', jeff);
sarah.send('Hello Derek, how are you?', derek);
jeff.send('Hello Everyone!!!!');


