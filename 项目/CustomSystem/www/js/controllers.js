angular.module('starter.controllers', [])
//按钮分页显示
.controller('DashCtrl', function($scope,Request) {

  $scope.items = [
    {name:"最新问题",show:true,color:"red"},
    {name:"已解决问题",show:false,color:"yellow"}
  ];
  $scope.items1 = [
    {name:"",show:false,color1:"black"},
    {name:"实时对话",show:true,color1:"blue1"},
    {name:"智能选股",show:false,color1:"yellow1"}
  ];
  // 分页
  $scope.check = function(item){
    for(var i in $scope.items){
      if(i == item){
        $scope.items[i].show = true;
      }
      else{
        $scope.items[i].show = false;
      }
    }
  };

  $scope.check1 = function(item1){
    for(var i in $scope.items1){
      if(i == item1){
        $scope.items1[i].show = true;
      }
      else{
        $scope.items1[i].show = false;
      }
    }
  };

  $scope.a = false;
  // $scope.b = false;
  $scope.d = false;
  // 最新问题
  $scope.list = [
    {src:"../images/girl1.png",name:"东方不败1",date:"2016-06-01",text:"什么是日线股？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/boy1.png",name:"东方不败2",date:"2016-06-01",text:"如何下载涨停乐？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/girl1.png",name:"东方不败3",date:"2016-06-01",text:"什么是日线股？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/girl1.png",name:"东方不败1",date:"2016-06-01",text:"什么是日线股？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/boy1.png",name:"东方不败2",date:"2016-06-01",text:"如何下载涨停乐？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/girl1.png",name:"东方不败3",date:"2016-06-01",text:"什么是日线股？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/girl1.png",name:"东方不败1",date:"2016-06-01",text:"什么是日线股？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/boy1.png",name:"东方不败2",date:"2016-06-01",text:"如何下载涨停乐？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/girl1.png",name:"东方不败3",date:"2016-06-01",text:"什么是日线股？",css:"style",time:"6月29日 下午13:29"},
    {src:"../images/boy1.png",name:"东方不败4",date:"2016-06-01",text:"什么是日线股？",css:"style",time:"6月29日 下午13:29"}
  ];
  $scope.content = '1';

  // $scope.list1 = [];
  // $scope.text = '';
  // 最新问题点击事件
  $scope.dialog = function(index){
    $scope.a = true ;
    $scope.c = $scope.list[index];
    //输入框值提交
    $scope.list1 = [];
    // $scope.e = $scope.list1[index];
    // $scope.text = '';
    $scope.submit = function() {
      if (this.text=='') {
        $scope.d = true;
      }
      else {
        $scope.list1.push(this.text);
        $scope.d = true;
        this.text = '';
      }
    }
  };


// 获取后台数据
  var c;
  Request.then(function (res) {
    c = res[5].headimgurl;
    console.log(c,typeof c ) ;
    $scope.u = c;
  },function(err){
    //console.log(err);
  });
  $scope.f = false;
  $scope.search1 = function(){
    $scope.f = true;
  };

});



