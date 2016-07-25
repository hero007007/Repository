// Ionic Starter App
//模块文件
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
//多个依赖，引入其他模块或插件
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  //运行ionic
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
//路由
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })


    // Each tab has its own nav history stack:
    .state('dash', {
      url: '/dash',
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
    })
    //页内跳转页面
    .state('details_1Ctrl',{
      url:'/details_1',
      templateUrl:'templates/details_1.html',
      controller:'details_1Ctrl'
    })
    .state('chats',{
      url:'/chats',
      templateUrl:'templates/tab-chats.html',
      controller:'ChatsCtrl'
    })
    .state('tab.message',{
      url:'/message',
      templateUrl:'templates/message.html',
      controller:'messageCtrl'
    })
    .state('details_2Ctrl',{
      url:'/details_2',
      templateUrl:'templates/details_2.html',
      controller:'details_2Ctrl'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');//默认返回dash页面

});
