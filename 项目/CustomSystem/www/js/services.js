angular.module('starter.services', [])
  .config(['$httpProvider','$sceDelegateProvider',function ($httpProvider,$sceDelegateProvider) {
    // $httpProvider.defaults.useXDomain = true ;
    delete  $httpProvider.defaults.headers.common['X-Requested-With'] ;
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://wx.qlogo.cn/**'
    ])
  }])
//dash 页面数据调用
  .factory('Request',['$q','$http',function($q,$http){
    var url = "http://192.168.31.51:6002/cs/userBasicInfo" ;
    var q = $q.defer() ;
    $http.get(url).success(function(res){
      // console.log("res = "+ res);
      q.resolve(res) ;
    }).error(function(err){
      q.reject(err) ;
    });
    return q.promise;
  }]);


