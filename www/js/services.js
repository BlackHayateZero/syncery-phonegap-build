angular.module('starter.services', [])

//.factory('Chats', function() {
//  // Might use a resource here that returns a JSON array
//
//  // Some fake testing data
//  var chats = [{
//    id: 0,
//    name: 'Ben Sparrow',
//    lastText: 'You on your way?',
//    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//  }, {
//    id: 1,
//    name: 'Max Lynx',
//    lastText: 'Hey, it\'s me',
//    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//  },{
//    id: 2,
//    name: 'Adam Bradleyson',
//    lastText: 'I should buy a boat',
//    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//  }, {
//    id: 3,
//    name: 'Perry Governor',
//    lastText: 'Look at my mukluks!',
//    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
//  }, {
//    id: 4,
//    name: 'Mike Harrington',
//    lastText: 'This is wicked good ice cream.',
//    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
//  }];
//
//  return {
//    all: function() {
//      return chats;
//    },
//    remove: function(chat) {
//      chats.splice(chats.indexOf(chat), 1);
//    },
//    get: function(chatId) {
//      for (var i = 0; i < chats.length; i++) {
//        if (chats[i].id === parseInt(chatId)) {
//          return chats[i];
//        }
//      }
//      return null;
//    }
//  };
//});

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Nader',
    lastText: 'Alles klar?',
    face: 'http://vignette2.wikia.nocookie.net/youtubepoop/images/9/99/ClassicSpongeBob.jpg/revision/latest?cb=20140529204536'
  }, {
    id: 1,
    name: 'Martin',
    lastText: 'Grüß dich',
    face: 'http://upload.wikimedia.org/wikipedia/en/7/7e/Patrick_Star.png'
  },{
    id: 2,
    name: 'Murat',
    lastText: 'Wir sehen uns, ciao!',
    face: 'http://upload.wikimedia.org/wikipedia/en/a/ac/Squidward.png'
  }, {
    id: 3,
    name: 'Sascha',
    lastText: 'Ich muss jetzt gehen',
    face: 'http://img1.wikia.nocookie.net/__cb20110923013524/spongebob/images/9/9e/Plankton-from-spongebob.jpg'
  }, {
    id: 4,
    name: 'Igi',
    lastText: 'ciao!',
    face: 'http://img1.wikia.nocookie.net/__cb20120831132338/spongebob/images/e/e6/Gary-snail-spongebob.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
