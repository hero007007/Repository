angular.module('starter.services', [])
//chats 页面数据调用
  .factory('Request',['$q','$http',function($q,$http){
    var url = "http://192.168.31.181:4000/zones/chats/" ;
    var q = $q.defer() ;
    $http.get(url).success(function(res){
      console.log("res = "+ res);
      q.resolve(res) ;
    }).error(function(err){
      q.reject(err) ;
    })
    return q.promise ;
  }])

//details_1 页面数据调用
  .factory('Request1',['$q','$http',function($q,$http){
    var url = "http://192.168.31.181:4000/zones/detailsno1/" ;
    var q = $q.defer() ;
    $http.get(url).success(function(res){
      console.log("res = "+ res);
      q.resolve(res) ;
    }).error(function(err){
      q.reject(err) ;
    })
    return q.promise ;
  }])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img(0)/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img(0)/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img(0)/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img(0)/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img(0)/mike.png'
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
