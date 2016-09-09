proxyConfig={
	domain:'',
	proxyFun:''
}
function repairImg(url,m){
	return '/them/images/'+m+'/'+url;
}
$(document).ready(function(){
	var footer=$('footer p'),filterUrl=',/place-order.html,/find-order.html,/change_password.html,/order-list.html,/person-center.html,/person-set.html,',loginStatus;
	footer.first().html('<img src="./images/link.png" style="height:3em"/>');
	$('header img').click(function(){
		location.href='/index.html';
	})
	var copy=$('footer p').last(),
		copyText=copy.text(),
		bg=$('<div class="clearfix" style="background-color: #f18700;height: 3em;position: relative;"><div style="background-color: #000000;height:3em;float:left;width:80%"></div><div style="width:0;height:0;float:left;border:3em solid transparent;border-bottom-color:#f18700;border-left-color:#000;border-top:0;border-right:0;"></div><p style="padding:0;display:block;color:#fff;position: absolute;width: 100%;line-height: 1.5em;"></p></div>');
	copy.before(bg);
	bg.find('p').html('Copyright&nbsp;©&nbsp;2014-2025&nbsp;安能物流.&nbsp;&nbsp;<br/>All rights reserved.&nbsp;&nbsp;沪ICP备10212032号');
	copy.remove();
	$.corssDomain(//取得用户状态
		$.extend({
			url:'/UserSessionHttp/sessionHttpService',
			dataType:'JSON',
			async:false,
			success:function(d){
				if(!d.result){
					$('header em').click(function(){
						location.href='/login.html';
					});
					loginStatus=false;
				}else{
					$('header em').css({'background-image':'url(./images/avatar2.png)',width:'.3em'}).before('<span style="display:block;float:right;line-height:4em;font-size:.2em;padding-right:1em;">'+(d.resultInfo.name==''?d.resultInfo.phone:d.resultInfo.name)+'</span>');
					$('header img').nextAll().click(function(){
						location.href='/person-center.html';
					});
					loginStatus=true;
				}
			}
		},
		proxyConfig)
	);

	$('a').each(function(){
		var t=$(this);
		if(/^http\:\/\/(\w+\.){1,2}\.com.*/.test(t.attr('href'))){
			t.attr('href',t.attr('href').replace(/http\:\/\/(\w+\.){1,2}\.com\//,'/'));
		}
		if(!loginStatus&&filterUrl.indexOf(','+t.attr('href')+',')>-1){
			t.attr('href','/login.html');
		}
	})
});