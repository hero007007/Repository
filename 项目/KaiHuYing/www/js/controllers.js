angular.module('starter.controllers', [])
//按钮分页显示
.controller('DashCtrl', function($scope) {
  $scope.titles = "在线开户";
  $scope.items = [
    {name:"在线开户",show:true,color:"blue"},
    {name:"期货开户",show:false,color:"yellow"},
    {name:"精品理财",show:false,color:"red"}
  ];
  $scope.check = function(item){
    for(var i in $scope.items){
      if(i == item){
        $scope.items[i].show = true;
        $scope.titles = $scope.items[i].name;
      }
      else{
        $scope.items[i].show = false;
      }
    }
  }
})
//4个下拉导航栏
.controller('hideCtrl',function($scope){
  $scope.arrow1 = "ion-ios-arrow-down";
  $scope.arrow2 = "ion-ios-arrow-down";
  $scope.arrow3 = "ion-ios-arrow-down";
  $scope.arrow4 = "ion-ios-arrow-down";
  //开关下拉菜单
  $scope.toggle1 = function(){
    $scope.a = !$scope.a;
    if($scope.a){
      $scope.arrow1 = "ion-ios-arrow-up";
      //上下标
    }
    else{
      $scope.arrow1 = "ion-ios-arrow-down";
    }
  };
    $scope.toggle2 = function(){
      $scope.b = !$scope.b;
      if($scope.b){
        $scope.arrow2 = "ion-ios-arrow-up";
      }
      else{
        $scope.arrow2 = "ion-ios-arrow-down";
      }
    };
  $scope.toggle3 = function(){
    $scope.c = !$scope.c;
    if($scope.c){
      $scope.arrow3 = "ion-ios-arrow-up";
    }
    else{
      $scope.arrow3 = "ion-ios-arrow-down";
    }
  };
  $scope.toggle4 = function(){
    $scope.d = !$scope.d;
    if($scope.d){
      $scope.arrow4 = "ion-ios-arrow-up";
    }
    else{
      $scope.arrow4 = "ion-ios-arrow-down";
    }
  };
})
  //.controller('SlideController', function($scope) {
  //  $scope.myActiveSlide = 1;
  //})
  .controller('details_1Ctrl',function($scope,Request1) {
    Request1.then(function (res) {
      //console.log(res);
      //console.log("controller.js---> details_1Ctrl--->res="+JSON.stringify(res) );
      $scope.charsObj = res;
    }, function (err) {
      //console.log(err);
    })
  })

  .controller('details_2Ctrl',function($scope){
  })

  .controller('PostCtrl',function($scope){
  })
  .controller('CommentCtrl',function($scope){
  })
  //.controller('ChatsCtrl', function($scope) {
.controller('ChatsCtrl', function($scope, Chats,Request) {
  Request.then(function(res){
    //console.log(res) ;
    $scope.charsObj = res;
  },function(err){
    //console.log(err) ;
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
;
