(function() {

NTES.ready(delegateClick);

var lofterTextForm, lofterPicForm;

function delegateClick() {
    
    lofterPicForm = document.createElement('form');
    lofterPicForm.setAttribute('action', 'http://www.lofter.com/sharephoto/?act=qbwbfx_20141018_03');
    lofterPicForm.setAttribute('method', 'POST');
    lofterPicForm.setAttribute('target', '_blank');
    lofterPicForm.innerHTML = '<input type="hidden" name="from"><input type="hidden" name="source"><input type="hidden" name="sourceurl"><input type="hidden" name="image"><input type="hidden" name="act"><input type="submit">';
    document.body.appendChild(lofterPicForm);   

    lofterPicForm.style.display = "none";

    lofterTextForm = document.createElement('form');
    lofterTextForm.setAttribute('action', 'http://www.lofter.com/sharetext/?act=qbwbfx_20141018_02');
    lofterTextForm.setAttribute('method', 'POST');
    lofterTextForm.setAttribute('target', '_blank');
    lofterTextForm.style.display = "none";
    lofterTextForm.innerHTML = '<input type="hidden" name="from"><input type="hidden" name="title"><input type="hidden" name="content"><input type="hidden" name="source"><input type="hidden" name="sourceUrl"><input type="hidden" name="act"><input type="submit">';               
    document.body.appendChild(lofterTextForm);  

    lofterTextForm.style.display = "none"; 
    
    if(!window.shareClickDelegated) {

        window.shareClickDelegated = true;

        NTES(document).addEvent('click', function(e) {
            
            var event = e || window.event;
            var target = event.target || event.srcElement;
            
            while(target && target.tagName != 'BODY') {
                
                if(target.className && target.className.indexOf('nt-share-item') != -1) {
                    clickHandler.call(target);
                }
                
                target = target.parentNode;

            }
            
        });          
    }

}

function removeHTMLTag(str) {
    str = str.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,'')
    return str;
}

function getDescObj(objP){
    var str = "";

    for(var i = 0;i<objP.length;i++){
        //第一段不包括图片、图集、视频
        if(objP[i].parentNode.id == "endText"){
            if(objP[i].innerHTML != "" && NTES(objP)[i].className != "f_center"){
                str += removeHTMLTag(objP[i].innerHTML);
            }
            if(str.length > 40){
                break;
            }
        }
    }

    return str;
}

function getDisDesc(){
    var endText = NTES("#endText");
    var end_text = NTES(".end-text");
    var digest = "";

    if(endText){
        var objP = NTES("p",endText);
        digest = getDescObj(objP);
    }

    if(end_text[0] && digest == ""){
        var objp2 = NTES("p",end_text);
        digest = getDescObj(objp2);
    }

    return digest;
}


function clickHandler() {
    
    var item = this;
    var parent = this.parentNode;  
     
    var link = parent.getAttribute("data-url"),
        title = parent.getAttribute("data-title"),
        pic = parent.getAttribute("data-pic"),
        digest = parent.getAttribute("data-digest"),
        source = parent.getAttribute("data-source");

    var linkEncode = encodeURIComponent(link),
        titleEncode = encodeURIComponent(title),
        picEncode = encodeURIComponent(pic),
        digestEncode = encodeURIComponent(digest),
        sourceEncode = encodeURIComponent(source);
        
    var type = item.getAttribute("data-type");
    
    
    var nxkey, ntit, nurl, tjurl, img;


    
    switch (type) {
        
        case "163wb":
        
            window.open("http://t.163.com/article/user/checkLogin.do?link=" + linkEncode + "%23sns_t163&source=" + sourceEncode + "&info=" + titleEncode + linkEncode + "&images=" + picEncode, "_blank");
            
            nxkey = Math.random().toString().substr(2,6);
            ntit = escape(document.title);
            nurl = escape(window.location.protocol.replace(":","") + '://snstj.' + window.location.host + window.location.pathname+'?snstj_t163');
            tjurl='http://analytics.163.com/ntes?_nacc=snstj&_nvid=VISITOR_CLIENT_NO_COOKIE_SUPPORT&_nvtm=0&_nvsf=0&_nvfi=0&_nlag=&_nlmf=0&_nres=&_nscd=&_nstm=0&_nurl='+nurl+'&_ntit='+ntit+'&_nref=&_nfla=&_nssn=&_nxkey='+nxkey+'&_end1';
            img = new Image();
            img.src = tjurl;
            
            break;
            
        case "lofter-text":       
        
                 
            var lofterTextInputs = lofterTextForm.getElementsByTagName('INPUT');
                        
            lofterTextInputs[0].value = item.getAttribute("data-from");
            lofterTextInputs[1].value = title;             
            lofterTextInputs[2].value = digest;
            lofterTextInputs[3].value = source;
            lofterTextInputs[4].value = link+"#sns_lofter";   
           // lofterTextInputs[5].value = item.getAttribute("data-act");
            
            if(!-[1,]&&!window.XMLHttpRequest) {
                setTimeout(function() {
                    lofterTextForm.submit();
                }, 10);
            } else {
                lofterTextForm.submit();
            }

            nxkey = Math.random().toString().substr(2,6);
            ntit = escape(document.title);
            nurl = escape(window.location.protocol.replace(":","") + '://snstj.' + window.location.host + window.location.pathname+'?snstj_lofter');
            tjurl='http://analytics.163.com/ntes?_nacc=snstj&_nvid=VISITOR_CLIENT_NO_COOKIE_SUPPORT&_nvtm=0&_nvsf=0&_nvfi=0&_nlag=&_nlmf=0&_nres=&_nscd=&_nstm=0&_nurl='+nurl+'&_ntit='+ntit+'&_nref=&_nfla=&_nssn=&_nxkey='+nxkey+'&_end1';
            img = new Image();
            img.src = tjurl;
       
            break;
            
        case "lofter-pic":       
        
            
            var lofterPicInputs = lofterPicForm.getElementsByTagName('INPUT');

            lofterPicInputs[0].value = item.getAttribute("data-from");
            lofterPicInputs[1].value = source;             
            lofterPicInputs[2].value = link + "#sns_lofter"; 
            lofterPicInputs[3].value = pic; 
           // lofterPicInputs[4].value = item.getAttribute("data-act");
            
            if(!-[1,]&&!window.XMLHttpRequest) {
                setTimeout(function() {
                    lofterPicForm.submit();
                }, 10);
            } else {
                lofterPicForm.submit();
            }       
            
            nxkey = Math.random().toString().substr(2,6);
            ntit = escape(document.title);
            nurl = escape(window.location.protocol.replace(":","") + '://snstj.' + window.location.host + window.location.pathname+'?snstj_lofter');
            tjurl='http://analytics.163.com/ntes?_nacc=snstj&_nvid=VISITOR_CLIENT_NO_COOKIE_SUPPORT&_nvtm=0&_nvsf=0&_nvfi=0&_nlag=&_nlmf=0&_nres=&_nscd=&_nstm=0&_nurl='+nurl+'&_ntit='+ntit+'&_nref=&_nfla=&_nssn=&_nxkey='+nxkey+'&_end1';
            img = new Image();
            img.src = tjurl;

            break;
            
        case "sinawb":
            window.open("http://v.t.sina.com.cn/share/share.php?title=" + titleEncode + "&appkey=76630026&url=" + linkEncode + "%23sns_weibo&pic=" + picEncode, "_blank");
            
            nxkey = Math.random().toString().substr(2,6);
            ntit = escape(document.title);
            nurl = escape(window.location.protocol.replace(":","") + '://snstj.' + window.location.host + window.location.pathname+'?snstj_weibo');
            tjurl='http://analytics.163.com/ntes?_nacc=snstj&_nvid=VISITOR_CLIENT_NO_COOKIE_SUPPORT&_nvtm=0&_nvsf=0&_nvfi=0&_nlag=&_nlmf=0&_nres=&_nscd=&_nstm=0&_nurl='+nurl+'&_ntit='+ntit+'&_nref=&_nfla=&_nssn=&_nxkey='+nxkey+'&_end1';
            img = new Image();
            img.src = tjurl;
            
            break;
            
        case "renren":
            window.open("http://widget.renren.com/dialog/share?resourceUrl=" + linkEncode + "%23sns_renren&title=" + titleEncode + "&images=" + picEncode, "_blank");
            
            nxkey = Math.random().toString().substr(2,6);
            ntit = escape(document.title);
            nurl = escape(window.location.protocol.replace(":","") + '://snstj.' + window.location.host + window.location.pathname+'?snstj_renren');
            tjurl='http://analytics.163.com/ntes?_nacc=snstj&_nvid=VISITOR_CLIENT_NO_COOKIE_SUPPORT&_nvtm=0&_nvsf=0&_nvfi=0&_nlag=&_nlmf=0&_nres=&_nscd=&_nstm=0&_nurl='+nurl+'&_ntit='+ntit+'&_nref=&_nfla=&_nssn=&_nxkey='+nxkey+'&_end1';
            img = new Image();
            img.src = tjurl;
            
            break;
            
        case "youdao":
            window.open("http://note.youdao.com/memory/?url=" + linkEncode + "%23sns_youdao" + "&title=" + titleEncode, "_blank");
            
            nxkey = Math.random().toString().substr(2,6);
            ntit = escape(document.title);
            nurl = escape(window.location.protocol.replace(":","") + '://snstj.' + window.location.host + window.location.pathname+'?snstj_youdao');
            tjurl='http://analytics.163.com/ntes?_nacc=snstj&_nvid=VISITOR_CLIENT_NO_COOKIE_SUPPORT&_nvtm=0&_nvsf=0&_nvfi=0&_nlag=&_nlmf=0&_nres=&_nscd=&_nstm=0&_nurl='+nurl+'&_ntit='+ntit+'&_nref=&_nfla=&_nssn=&_nxkey='+nxkey+'&_end1';
            img = new Image();
            img.src = tjurl;
            
            break;
            
        case "qzone":
            window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + linkEncode + "%23sns_qzone", "_blank");
            
            nxkey = Math.random().toString().substr(2,6);
            ntit = escape(document.title);
            nurl = escape(window.location.protocol.replace(":","") + '://snstj.' + window.location.host + window.location.pathname+'?snstj_qzone');
            tjurl='http://analytics.163.com/ntes?_nacc=snstj&_nvid=VISITOR_CLIENT_NO_COOKIE_SUPPORT&_nvtm=0&_nvsf=0&_nvfi=0&_nlag=&_nlmf=0&_nres=&_nscd=&_nstm=0&_nurl='+nurl+'&_ntit='+ntit+'&_nref=&_nfla=&_nssn=&_nxkey='+nxkey+'&_end1';
            img = new Image();
            img.src = tjurl;
            
            break;
            
        case "yixin": 
            //如果没有摘要
            if(digest == ""){
                digest = getDisDesc();
            }
    
            YixinShare.open({
                title: title,
                desc: digest,
                image: pic || "http://img1.cache.netease.com/cnews/css13/img/yixin_holder.jpg",
                url: window.location.href+"#sns_yixin",
                source: source
            });

            break;
    }   
}

})();