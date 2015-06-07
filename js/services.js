angular.module('starter.services', [])

.factory('Views', function() {
   // Some fake testing data
  var views = [{
    id: 0,
    name: 'View One',
    version: 'This is the partial for view 1.'
  }, {
    id: 1,
    name: 'View Two',
    version: 'This is the partial for view 2.'
  }];

  return {
    all: function() {
      return views;
    },
    remove: function(view) {
      views.splice(views.indexOf(view), 1);
    },
    get: function(viewId) {
      for (var i = 0; i < views.length; i++) {
        if (views[i].id === parseInt(viewId)) {
          return views[i];
        }
      }
      return null;
    }
  };
})

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
