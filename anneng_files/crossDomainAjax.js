(function(jQuery){
	/*
		原理：使用子域可与父域JS对象互调的方式，先加载当前页面，
		将当前页面的document的domain设置为统一父域（可访问），
		然后以iframe加载代理document，并取得同一域（设置后的）
		的可访问代理对象，再由代理对象访问目标URL实现代理
		要求子域代理document中的js必须设置document.domain与当前
		[parentDomain]所设置的domain一样
	 */
	var $ = jQuery,
		corssDomainMap={};//用来做代理方法映射，key以代理URL为主
	/**
	 * 参数在jQuery中ajax原有的参数基础上加上三个参数：
	 * proxyUrl 目标代理js所在的目标URL
	 * proxyFun 目标代理方法
	 * parentDomain 代理所在的父级/顶级（可执行）域名
	 */
	jQuery.corssDomain=function(opt){
		if(opt.parentDomain && opt.proxyUrl){//如果有代理，说明是需要跨域请求的
			document.domain=opt.parentDomain;
			if(corssDomainMap[opt.proxyUrl]){//如果代理映射中存在这个对象会有两个情况，1、方法已加载，这时直接调用代理方法；
											 //2、方法未加载，这时将将要处理的对象缓存在代理映射中，以便得到代理方法后直接处理
				if(corssDomainMap[opt.proxyUrl].fn!=null){
					corssDomainMap[opt.proxyUrl].fn(opt);
				}else{
					corssDomainMap[opt.proxyUrl].queue.push(opt);
				}
			}else{
				var iframe=$('<iframe/>'),
					setting=opt,
					queue;
				document.domain=opt.parentDomain;
				if(!corssDomainMap[opt.proxyUrl]){
					corssDomainMap[opt.proxyUrl] = {fn:null,queue:[]};//创建代理对象，fn为代理方法，queue为将要处理的对象（这时代理方法还未加载）
				}
				queue=corssDomainMap[opt.proxyUrl].queue;
				$('body').append(iframe);
				iframe.load(function(){
					var winContent=iframe[0].window || iframe[0].contentWindow;
					var fn=winContent[opt.proxyFun]
					corssDomainMap[opt.proxyUrl].fn=winContent[opt.proxyFun];//取得代理方法
					for(var i=0;i<queue.length;i++){//执行等待处理的代理对象
						corssDomainMap[opt.proxyUrl].fn(queue[i]);
					}
				});
				iframe.attr({
					frameborder:0,
					src:opt.proxyUrl
				}).css({display:'block',width:0,height:0});
				queue.push(opt);
			}
		}else{
			opt.data=$.extend(opt.data,{ajax:'ajax'});
			return jQuery.ajax(opt);
		}
	}
})(jQuery);
