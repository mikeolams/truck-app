
<!doctype html>
<html>
<head>
    <title>Construction Company Website Template | WIX</title>
    
   <!-- BEGIN SENTRY -->
   <script src="https://browser.sentry-cdn.com/4.4.2/bundle.min.js" crossorigin="anonymous"></script>
   <script type="text/javascript">
     Sentry.init({
       dsn: 'https://b0d320ce280a492696c6716fc0fd90dd@sentry.io/1366160',
       release: "1.213.0",
       environment: "production"
     });

     Sentry.configureScope((scope) => {
       scope.setUser({
         id: "null-user-id",
         clientId: "0793e06e-2ac8-424c-bf99-4862ab2f5728",
       });
       scope.setExtra("sessionId", "77ad044d-0845-4977-8c88-c12f2605f0ab");
     });

   </script>
   <!-- END SENTRY -->
 
<script type='text/javascript' >window.NREUM||(NREUM={});NREUM.info = {"agent":"","beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"c99d7f1ab0","applicationID":"31527391,90185088","applicationTime":1.873963,"transactionName":"ZFAHNkNYXUBQVEUKXF0aIBpBS1ZAQl1CTHR2YUpNXFhBWFRDWA1UHkEAD0FVUkdUGkcKVkRQF01FXF5DXVZFBkAcDxEHXElfUkVSeAc=","queueTime":0,"ttGuid":"8cbfcaace988e8","agentToken":null}; window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o||n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({1:[function(e,n,t){function r(){}function o(e,n,t){return function(){return i(e,[c.now()].concat(u(arguments)),n?null:this,t),n?void 0:this}}var i=e("handle"),a=e(3),u=e(4),f=e("ee").get("tracer"),c=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,n){s[n]=o(d+n,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,o="function"==typeof n;return i(l+"tracer",[c.now(),e,t],r),function(){if(f.emit((o?"":"no-")+"fn-start",[c.now(),r,o],t),o)try{return n.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],t),e}finally{f.emit("fn-end",[c.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=o(l+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),i("err",[e,c.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){if(!o)return!1;if(e!==o)return!1;if(!n)return!0;if(!i)return!1;for(var t=i.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var u=navigator.userAgent,f=u.match(a);f&&u.indexOf("Chrome")===-1&&u.indexOf("Chromium")===-1&&(o="Safari",i=f[1])}n.exports={agent:o,version:i,match:r}},{}],3:[function(e,n,t){function r(e,n){var t=[],r="",i=0;for(r in e)o.call(e,r)&&(t[i]=n(r,e[r]),i+=1);return t}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],4:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(o<0?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=r},{}],5:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function o(e){function n(e){return e&&e instanceof r?e:e?f(e,u,i):i()}function t(t,r,o,i){if(!d.aborted||i){e&&e(t,r,o);for(var a=n(o),u=v(t),f=u.length,c=0;c<f;c++)u[c].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function l(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||o(t)}function w(e,n){c(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",f=e("gos"),c=e(3),s={},p={},d=n.exports=o();d.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(o.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){o.buffer([e],r),o.emit(e,n,t)}var o=e("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!E++){var e=x.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();c(y,function(n,t){e[n]||(e[n]=t)}),f("mark",["onload",a()+x.offset],null,"api");var t=l.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function o(){"complete"===l.readyState&&i()}function i(){f("mark",["domContent",a()+x.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-x.offset}var u=(new Date).getTime(),f=e("handle"),c=e(3),s=e("ee"),p=e(2),d=window,l=d.document,m="addEventListener",v="attachEvent",g=d.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:g,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1130.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),x=n.exports={offset:u,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),l[m]?(l[m]("DOMContentLoaded",i,!1),d[m]("load",r,!1)):(l[v]("onreadystatechange",o),d[v]("onload",r)),f("mark",["firstbyte",u],null,"api");var E=0,O=e(5)},{}]},{},["loader"]);</script>
    <script type="text/javascript">
        var initialTime = new Date().getTime();
      (function () {
        var appName = 'marketing-template-viewer';
        window.appStartLoadTime = window.performance && window.performance.now();
        window.fedops = window.fedops || {};
        window.fedops.apps = window.fedops.apps || {};
        window.fedops.apps[appName] = { startLoadTime: window.appStartLoadTime };
        try { window.fedops.sessionId = window.localStorage.getItem('fedops.logger.sessionId'); } catch(e) {};
        window.fedops.sessionId = window.fedops.sessionId || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); });
        (new Image()).src = '//frog.wix.com/fed?appName=' + appName + '&src=72&evid=14&session_id=' + window.fedops.sessionId;
      })();
</script>
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    
    <link type="image/png" href="//www.wix.com/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" href="https://static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css">
    <link rel="stylesheet" href="//static.parastorage.com/services/marketing-template-viewer/1.213.0/app.min.css">

    <meta name="description" content="Build a website as impressive as your constructions with this attractive and professional construction company template. With an area to promote your services and attractive portfolio pages, this is the perfect website template for anyone wishing to showcase their projects and attract clients.  Simply click to begin editing and promote your business online today!">
    <meta name="author" content="Wixpress">
    <meta http-equiv="content-language" content="en"/>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

    <meta property="og:title" content="Construction Company Website Template | WIX"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.wix.com/website-template/view/html/1734"/>
    <meta property="og:image" content="//static.wixstatic.com/media/357e54c82dc9428da783d920e7706156.jpg"/>
    <meta content="Wix" property="og:site_name">
    <meta property="og:description" content="Build a website as impressive as your constructions with this attractive and professional construction company template. With an area to promote your services and attractive portfolio pages, this is the perfect website template for anyone wishing to showcase their projects and attract clients.  Simply click to begin editing and promote your business online today!"/>
    <meta property="fb:admins" content="731184828"/>
    <meta name="fb:app_id" content="236335823061286"/>
    <meta name="google-site-verification" content="QXhlrY-V2PWOmnGUb8no0L-fKzG48uJ5ozW0ukU7Rpo"/>

    <link rel="canonical" href="https://www.wix.com/website-template/view/html/1734"/>

    <link rel="alternate" hreflang="fr" href="https://fr.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="pt" href="https://pt.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="cs" href="https://cs.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="it" href="https://it.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="nl" href="https://nl.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="ko" href="https://ko.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="de" href="https://de.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="ru" href="https://ru.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="sv" href="https://sv.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="tr" href="https://tr.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="da" href="https://da.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="en" href="https://www.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="es" href="https://es.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="hi" href="https://hi.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="ja" href="https://ja.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="no" href="https://no.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="pl" href="https://pl.wix.com/website-template/view/html/1734"/>
    <link rel="alternate" hreflang="x-default" href="https://www.wix.com/website-template/view/html/1734" />

</head>
<body>
     <!-- Google Tag Manager -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDD5C4" height="0" width="0"
            style="display:none;visibility:hidden"></iframe>
  </noscript>
  <script type="text/javascript">
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MDD5C4');
  </script>
  <!-- End Google Tag Manager -->
    <div id="root"><div data-hooks="app-component" data-reactroot="" data-reactid="1" data-react-checksum="1936103983"><div data-hooks="ToolBar-component" class="_1GEsV" data-reactid="2"><div class="_1k3yn" data-reactid="3"><a data-hooks="logo" href="https://www.wix.com" class="_2UVAQ _1JQgh" data-reactid="4"><span class="_18myF" data-reactid="5">wix.com</span></a><div class="_1k3yn" data-reactid="6"><button data-hooks="desktop-view" class="zy9-w _37uQn" data-reactid="7"><span class="AGc6i" data-reactid="8">show desktop view</span></button><hr class="_3PFGd" data-reactid="9"/><button data-hooks="mobile-view" class="aR03A " data-reactid="10"><span class="AGc6i" data-reactid="11">show mobile view</span></button></div></div><div class="_1k3yn _3yC7e" data-reactid="12"><p data-hooks="tool-bar-title" class="_21v7p" data-reactid="13">Click Edit and create your own amazing website</p><a data-hooks="info-view" class="_1JERd " tabindex="0" role="dialog" href="#" data-reactid="14">Read More</a><a class="_1c4Ff" data-hooks="editor-link" href="https://editor.wix.com/html/editor/web/renderer/new?metaSiteId=44101ac4-b1a9-4fb5-a26e-a0c672703f14&amp;siteId=6739270e-5a40-4e84-8a05-66f8276e161a&amp;editorSessionId=43B6C03A-BCA9-41D0-36D9-EF7D096E461C" target="_blank" tabindex="0" data-reactid="15">Edit this site</a><label data-hooks="price" class="_8r8sw" data-reactid="16"><!-- react-text: 17 -->Price:<!-- /react-text --><!-- react-text: 18 --> <!-- /react-text --><!-- react-text: 19 -->Free<!-- /react-text --></label></div></div><div data-hooks="template-demo-component" class="_1qF-6 " data-reactid="20"><div data-hooks="desktop-view-component" class="_3W_Qh" data-reactid="21"><iframe data-hooks="desktop-iframe" src="https://www.wix.com/demone2/construction-company" width="100%" height="100%" class="_2oDbB" data-reactid="22"></iframe></div></div><div data-hooks="info-pop-up-component" class="moyRL " data-reactid="23"><div class="_3sdF3" data-reactid="24"><button data-hooks="card-close" class="_3nPGC" data-reactid="25"><span class="b6lR7" data-reactid="26">close info popup</span></button><div class="_3G2Wr" data-reactid="27"><h1 data-hooks="card-title" class="_36ndT" data-reactid="28">Construction Company - Website Template</h1><div class="_3C1IB" data-reactid="29"><h3 data-hooks="card-good-for-title" class="_3wC-t" data-reactid="30">Good For:</h3><p data-hooks="card-good-for" class="_25OEI" data-reactid="31">Construction companies, maintenance companies and engineering firms. </p></div><div class="_3C1IB" data-reactid="32"><h3 class="_3wC-t" data-reactid="33">Description:</h3><p data-hooks="card-description" class="_25OEI" data-reactid="34">Build a website as impressive as your constructions with this attractive and professional construction company template. With an area to promote your services and attractive portfolio pages, this is the perfect website template for anyone wishing to showcase their projects and attract clients.  Simply click to begin editing and promote your business online today!</p></div><p class="_25OEI _3C1IB _1favE" data-reactid="35"><span class="_3wC-t" data-reactid="36">Price:</span><!-- react-text: 37 --> <!-- /react-text --><!-- react-text: 38 -->Free<!-- /react-text --></p></div><div class="_8CQO7" data-reactid="39"><a data-hooks="card-editor-url" class="_15Xoe _2VXta" target="_blank" href="https://editor.wix.com/html/editor/web/renderer/new?metaSiteId=44101ac4-b1a9-4fb5-a26e-a0c672703f14&amp;siteId=6739270e-5a40-4e84-8a05-66f8276e161a&amp;editorSessionId=43B6C03A-BCA9-41D0-36D9-EF7D096E461C" data-reactid="40">Edit Now</a></div></div></div></div></div>
    <script>
      window.__BASEURL__ = '/website-template/view/html/';
      window.__INITIAL_I18N__ = {"locale":"en","resources":{"Price":"Price","Edit Template":"","About This Template":"","Description":"","Good For":"","template.viewer.page.title":"{{- title}} Website Template | WIX","template_button_label":"Edit Website","template_seeFeatures_label":"See All Features","template_expand_examples_text":"Great for","template_expand_header":"Template Features","template.viewer.title":"Click Edit and create your own amazing website","template.viewer.edit.button":"Edit this site","template.viewer.read.more":"Read More","template.viewer.back":"Back","template.viewer.info.edit.button":"Edit Now","template.viewer.price":"Price:","template.viewer.info.title":"{{- title}} - Website Template","template.viewer.info.goodFor":"Good For:","template.viewer.info.description":"Description:","template.viewer.info.desktop.only.notice":"Edit this template by going to Wix.com from your desktop, where you can customise any of our beautiful templates.","template.viewer.see.all.templates":"See All Templates","a11y.desktop.button":"show desktop view","a11y.mobile.button":"show mobile view","a11y.close.popup.button":"close info popup","messages_test":"test"}}
      window.__INITIAL_STATE__ = {"view":{"selected":"desktop"},"loading":{"active":false},"template":{"title":"Construction Company","description":"Build a website as impressive as your constructions with this attractive and professional construction company template. With an area to promote your services and attractive portfolio pages, this is the perfect website template for anyone wishing to showcase their projects and attract clients.  Simply click to begin editing and promote your business online today!","image":"357e54c82dc9428da783d920e7706156.jpg","id":"1734","lng":"en","price":"Free","docUrl":"https:\u002F\u002Fwww.wix.com\u002Fdemone2\u002Fconstruction-company","editorUrl":"https:\u002F\u002Feditor.wix.com\u002Fhtml\u002Feditor\u002Fweb\u002Frenderer\u002Fnew?metaSiteId=44101ac4-b1a9-4fb5-a26e-a0c672703f14&siteId=6739270e-5a40-4e84-8a05-66f8276e161a&editorSessionId=43B6C03A-BCA9-41D0-36D9-EF7D096E461C","goodFor":"Construction companies, maintenance companies and engineering firms. ","siteId":"6739270e-5a40-4e84-8a05-66f8276e161a","metaSiteId":"44101ac4-b1a9-4fb5-a26e-a0c672703f14","editorSessionId":"43B6C03A-BCA9-41D0-36D9-EF7D096E461C","url":"https:\u002F\u002Fwww.wix.com\u002Fdemone2\u002Fconstruction-company"},"info":{"show":false},"experiments":{"active":["EnableAnonMainFunnelIntro","ReleaseNotesDesignNavigation","TemplatesGallerySearchToCMS","TemplatesGalleryDatasourceToCMS","TemplateViewerUseNewLightboxDealer","TemplateViewerDatasourceToCMS"]},"originUrl":"https:\u002F\u002Fwww.wix.com\u002Fwebsite\u002Ftemplates","config":{"locale":"en","dealerCmsTranslationsUrl":"\u002F\u002Fstatic.parastorage.com\u002Fservices\u002Fdealer-cms-translations\u002F1.1278.0\u002F","dealerLightboxUrl":"\u002F\u002Fstatic.parastorage.com\u002Fservices\u002Fdealer-lightbox\u002F1.21.0\u002F"}};
      window.__BI__ = {"siteId":"6739270e-5a40-4e84-8a05-66f8276e161a","metaSiteId":"44101ac4-b1a9-4fb5-a26e-a0c672703f14","originUrl":"https:\u002F\u002Fwww.wix.com\u002Fwebsite\u002Ftemplates"};
      window.__BI__.initialTime = initialTime;
      window.__DEVICE__ = 'desktop';
    </script>
    <script src="https://static.parastorage.com/unpkg/react@15.6.2/dist/react.min.js" crossorigin></script>
    <script src="https://static.parastorage.com/unpkg/react-dom@15.6.2/dist/react-dom.min.js" crossorigin></script>
    <script src="https://static.parastorage.com/unpkg/@wix/marketing-cookie-notification@1.0.429/dist/statics/app.bundle.min.js"></script>
    
      
        <script src="//static.parastorage.com/services/dealer-lightbox/1.21.0/dealer-lightbox.bundle.min.js"></script>
      
    

    <script src="//static.parastorage.com/services/marketing-template-viewer/1.213.0/app.bundle.min.js"></script>
</body>
</html>




<section style="min-width: 980px; position: absolute; margin-left: 0px; top: 2395px; height: 227px; left: 0px; width: 100%;" data-responsive="true" data-is-screen-width="true" data-col-margin="0" data-row-margin="0" class="strc1" id="comp-igcaoi6c"><div style="position: absolute; top: 0px; width: calc(100% - 0px); height: 100%; overflow: hidden; pointer-events: auto; min-width: 980px; left: 0px; right: 0px; bottom: 0px;" data-page-id="e6zct" data-enable-video="true" data-bg-effect-name="" data-media-type="" data-use-clip-path="" data-needs-clipping="" class="strc1balata" id="comp-igcaoi6cbalata"><div style="position:absolute;width:100%;height:100%;top:0;background-color:transparent" data-background-image="" data-position="absolute" class="bgColor" id="comp-igcaoi6cbalatabgcolor"><div style="width:100%;height:100%;position:absolute;top:0;background-image:;opacity:1" id="comp-igcaoi6cbalatabgcoloroverlay" class="bgColoroverlay"></div></div></div><div style="position:relative;width:calc(100% - 0px);min-width:980px" id="comp-igcaoi6cinlineContent" class="strc1inlineContent"><div style="flex: 980 1 0%; margin-left: 0px; min-width: 980px; margin-top: 0px; margin-bottom: 0px; top: 0px; height: 227px; position: relative;" data-content-width="980" class="strc1" id="mediairc22j4k17"><div style="position: absolute; top: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: auto; left: 0px; right: 0px; bottom: 0px;" data-page-id="e6zct" data-enable-video="true" data-bg-effect-name="" data-media-type="" data-use-clip-path="" data-needs-clipping="" class="strc1balata" id="mediairc22j4k17balata"><div style="position:absolute;width:100%;height:100%;top:0;background-color:rgba(237, 205, 31, 1)" data-background-image="" data-position="absolute" class="bgColor" id="mediairc22j4k17balatabgcolor"><div style="width:100%;height:100%;position:absolute;top:0;background-image:;opacity:1" id="mediairc22j4k17balatabgcoloroverlay" class="bgColoroverlay"></div></div></div><div class="strc1inlineContent" style="width:100%;position:absolute;top:0;bottom:0" id="mediairc22j4k17inlineContent"><style id="mediairc22j4k17-content-area-styles">
    
#comp-igcap5nm {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igcaux6d {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igksbkih {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igcas5ay {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igcaww12 {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igksdo3p {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igcaszkw {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igcaxjng {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igksdxk1 {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igcauc6m {
    margin-left: calc((100% - 980px) * 0.5);
}

#comp-igcaylp6 {
    margin-left: calc((100% - 980px) * 0.5);
}</style><div data-packed="true" style="left: 34px; width: 177px; position: absolute; pointer-events: none; visibility: inherit; top: 45px;" class="txtNew" id="comp-igcap5nm"><h3 style="text-align:center;" class="font_3"><span class="color_11"><span style="font-family:avenir-lt-w01_85-heavy1475544,sans-serif;">2023</span></span></h3>
</div><div data-packed="true" style="left: 42px; width: 161px; position: absolute; pointer-events: none; visibility: inherit; top: 124px;" class="txtNew" id="comp-igcaux6d"><h6 style="text-align:center; line-height:1.1em;" class="font_6"><span style="line-height:1.1em;">Year Established</span></h6>
</div><div data-is-responsive="false" style="left: 244px; width: 5px; position: absolute; visibility: inherit; top: 78px; height: 71px;" class="style-ihwebgif" id="comp-igksbkih"><div id="comp-igksbkihline" class="style-ihwebgifline"></div></div><div data-packed="true" style="left: 279px; width: 177px; position: absolute; pointer-events: none; visibility: inherit; top: 45px;" class="txtNew" id="comp-igcas5ay"><h3 style="text-align:center;" class="font_3"><span class="color_11"><span style="font-family:avenir-lt-w01_85-heavy1475544,sans-serif;">206</span></span></h3>
</div><div data-packed="true" style="left: 279px; width: 177px; position: absolute; pointer-events: none; visibility: inherit; top: 124px;" class="txtNew" id="comp-igcaww12"><h6 style="text-align:center; line-height:1.1em;" class="font_6"><span style="line-height:1.1em;">Projects Completed</span></h6>
</div><div data-is-responsive="false" style="left: 491px; width: 5px; position: absolute; visibility: inherit; top: 78px; height: 71px;" class="style-ihwebgif" id="comp-igksdo3p"><div id="comp-igksdo3pline" class="style-ihwebgifline"></div></div><div data-packed="true" style="left: 534px; width: 176px; position: absolute; pointer-events: none; visibility: inherit; top: 45px;" class="txtNew" id="comp-igcaszkw"><h3 style="text-align:center;" class="font_3"><span class="color_11"><span style="font-family:avenir-lt-w01_85-heavy1475544,sans-serif;">870</span></span></h3>
</div><div data-packed="true" style="left: 534px; width: 176px; position: absolute; pointer-events: none; visibility: inherit; top: 124px;" class="txtNew" id="comp-igcaxjng"><h6 style="text-align:center; line-height:1.1em;" class="font_6"><span style="line-height:1.1em;">Contractors Appointed</span></h6>
</div><div data-is-responsive="false" style="left: 757px; width: 5px; position: absolute; visibility: inherit; top: 78px; height: 71px;" class="style-ihwebgif" id="comp-igksdxk1"><div id="comp-igksdxk1line" class="style-ihwebgifline"></div></div><div data-packed="true" style="left: 770px; width: 177px; position: absolute; pointer-events: none; visibility: inherit; top: 45px;" class="txtNew" id="comp-igcauc6m"><h3 style="text-align:center;" class="font_3"><span class="color_11">26</span></h3>
</div><div data-packed="true" style="left: 800px; width: 117px; position: absolute; pointer-events: none; visibility: inherit; top: 123px;" class="txtNew" id="comp-igcaylp6"><h6 style="text-align:center; line-height:1.1em;" class="font_6"><span style="line-height:1.1em;">Awards Won</span></h6>
</div></div></div></div></section>


{/* map */}

<div tabindex="0" title="Google Maps" aria-label="Google Maps" style="left: 20px; width: 940px; position: absolute; top: 199px; height: 365px;" class="gm1" id="comp-ig69hlqz"><div id="comp-ig69hlqzmapContainer" class="gm1mapContainer"><iframe width="100%" height="100%" frameborder="0" allowfullscreen="" scrolling="no" title="Google Maps" aria-label="Google Maps" src="https://static.parastorage.com/services/wix-bolt/1.3109.0/node_modules/wix-santa/static/external/googleMap.html?language=en&amp;defaultLocation=0&amp;showZoom=true&amp;showStreetView=true&amp;showMapType=true&amp;newMap=true"></iframe></div></div>
          


<div data-packed="true" style="left: 143px; width: 694px; position: absolute; pointer-events: none; top: 76px;" class="txtNew" id="comp-ihpx2cmf"><h3 style="line-height:1.1em; text-align:center;" class="font_3"><span class="color_8"><span style="line-height:1.1em;"><span style="letter-spacing:0.05em;">LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE</span></span></span></h3>
</div>


<div style="left: 463px; position: absolute; top: 325px; width: 54px; height: 31px;" title="" data-is-responsive="false" data-display-mode="fill" data-content-padding-horizontal="0" data-content-padding-vertical="0" data-exact-height="31" class="ca1" id="comp-ihpx2cm9"><a style="cursor: pointer; width: 54px; height: 31px;" href="https://www.wix.com/demone2/construction-company" target="_self" data-keep-roots="true" data-anchor="dataItem-iggq277e" id="comp-ihpx2cm9link" class="ca1link"><div style="width: 54px; height: 31px; position: relative; top: 0px; left: 0px;" data-has-bg-scroll-effect="" data-style="" data-image-info="{&quot;imageData&quot;:{&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;dataItem-ihpx2cmb&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;e6zct&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;1.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;&quot;,&quot;uri&quot;:&quot;c19c76_376dc1d20bd348b99c4a732a1d6d7c81.png&quot;,&quot;description&quot;:&quot;&quot;,&quot;width&quot;:63,&quot;height&quot;:36,&quot;alt&quot;:&quot;&quot;,&quot;link&quot;:{&quot;type&quot;:&quot;AnchorLink&quot;,&quot;id&quot;:&quot;dataItem-ihpx2cmb1&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;e6zct&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;1.0&quot;,&quot;isHidden&quot;:false},&quot;anchorName&quot;:&quot;SERVICES&quot;,&quot;pageId&quot;:{&quot;type&quot;:&quot;Page&quot;,&quot;id&quot;:&quot;e6zct&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;1.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;HOME&quot;,&quot;hideTitle&quot;:true,&quot;icon&quot;:&quot;&quot;,&quot;descriptionSEO&quot;:&quot;&quot;,&quot;metaKeywordsSEO&quot;:&quot;&quot;,&quot;pageTitleSEO&quot;:&quot;&quot;,&quot;pageUriSEO&quot;:&quot;home&quot;,&quot;hidePage&quot;:false,&quot;isMobileLandingPage&quot;:false,&quot;underConstruction&quot;:false,&quot;tpaApplicationId&quot;:0,&quot;pageSecurity&quot;:{&quot;requireLogin&quot;:false},&quot;isPopup&quot;:false,&quot;indexable&quot;:true,&quot;isLandingPage&quot;:false,&quot;pageBackgrounds&quot;:{&quot;desktop&quot;:{&quot;custom&quot;:true,&quot;ref&quot;:{&quot;type&quot;:&quot;BackgroundMedia&quot;,&quot;id&quot;:&quot;e6zct_ihwenpcc1_bg&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;1.0&quot;,&quot;isHidden&quot;:false},&quot;mediaRef&quot;:{&quot;type&quot;:&quot;WixVideo&quot;,&quot;id&quot;:&quot;e6zct_desktop_mediaRef&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;1.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;Construction Site&quot;,&quot;videoId&quot;:&quot;video/11062b_4f14b356c1df4854968cf1cc94ca98c5&quot;,&quot;qualities&quot;:[{&quot;quality&quot;:&quot;480p&quot;,&quot;width&quot;:1920,&quot;height&quot;:1080,&quot;formats&quot;:[&quot;mp4&quot;,&quot;webm&quot;]},{&quot;quality&quot;:&quot;720p&quot;,&quot;width&quot;:1920,&quot;height&quot;:1080,&quot;formats&quot;:[&quot;mp4&quot;,&quot;webm&quot;]},{&quot;quality&quot;:&quot;1080p&quot;,&quot;width&quot;:1920,&quot;height&quot;:1080,&quot;formats&quot;:[&quot;mp4&quot;,&quot;webm&quot;]}],&quot;posterImageRef&quot;:{&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;e6zct_desktop_posterImageRef&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;&quot;,&quot;uri&quot;:&quot;11062b_4f14b356c1df4854968cf1cc94ca98c5f000.jpg&quot;,&quot;description&quot;:&quot;public/8e256233-1752-4026-9341-54036e7f875e/d6b6b972-952c-4ab0-b46a-a6c05a0a94a5&quot;,&quot;width&quot;:1920,&quot;height&quot;:1080,&quot;alt&quot;:&quot;&quot;},&quot;opacity&quot;:1,&quot;duration&quot;:24,&quot;loop&quot;:true,&quot;autoplay&quot;:true,&quot;preload&quot;:&quot;auto&quot;,&quot;mute&quot;:true,&quot;artist&quot;:{&quot;id&quot;:&quot;v532003181_h2&quot;,&quot;name&quot;:&quot;getty&quot;}},&quot;color&quot;:&quot;color_11&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;fittingType&quot;:&quot;fill&quot;,&quot;scrollType&quot;:&quot;fixed&quot;,&quot;imageOverlay&quot;:{&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;e6zct_desktop_imageOverlay&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;&quot;,&quot;uri&quot;:&quot;0da768_361994b0f154464682a0aaf9724471cc.png&quot;,&quot;width&quot;:56,&quot;height&quot;:56,&quot;alt&quot;:&quot;&quot;},&quot;colorOverlay&quot;:&quot;&quot;,&quot;colorOverlayOpacity&quot;:0},&quot;isPreset&quot;:true},&quot;mobile&quot;:{&quot;custom&quot;:true,&quot;ref&quot;:{&quot;type&quot;:&quot;BackgroundMedia&quot;,&quot;id&quot;:&quot;e6zct_mobile_bg&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;1.0&quot;,&quot;isHidden&quot;:false},&quot;mediaRef&quot;:{&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;e6zct_mobile_mediaRef&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;Construction&quot;,&quot;uri&quot;:&quot;a9aecfcd0c474899a57da07176a929c4.jpg&quot;,&quot;description&quot;:&quot;public/491df47b-5958-4dc7-9029-37f428755d45/c2a37dfc-36cf-4bfd-b940-55bac7bdc9e6&quot;,&quot;width&quot;:4500,&quot;height&quot;:2564,&quot;alt&quot;:&quot;&quot;,&quot;artist&quot;:{&quot;id&quot;:&quot;&quot;,&quot;name&quot;:&quot;&quot;},&quot;opacity&quot;:0.69},&quot;color&quot;:&quot;{color_25}&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;fittingType&quot;:&quot;legacy_tile&quot;,&quot;scrollType&quot;:&quot;scroll&quot;,&quot;colorOverlay&quot;:&quot;&quot;,&quot;colorOverlayOpacity&quot;:0},&quot;isPreset&quot;:true,&quot;mediaSizing&quot;:&quot;viewport&quot;}},&quot;translationData&quot;:{&quot;uriSEOTranslated&quot;:false}},&quot;anchorDataId&quot;:{&quot;type&quot;:&quot;Anchor&quot;,&quot;id&quot;:&quot;dataItem-iggq277e&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;e6zct&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;1.0&quot;,&quot;isHidden&quot;:false},&quot;name&quot;:&quot;SERVICES&quot;,&quot;compId&quot;:&quot;comp-iggq277c&quot;}}},&quot;displayMode&quot;:&quot;fill&quot;}" class="ca1img" id="comp-ihpx2cm9img"><img id="comp-ihpx2cm9imgimage" style="object-position: 50% 50%; width: 54px; height: 31px; object-fit: cover;" alt="" data-type="image" itemprop="image" src="https://static.wixstatic.com/media/c19c76_376dc1d20bd348b99c4a732a1d6d7c81.png/v1/fill/w_54,h_31,al_c,q_80,usm_0.66_1.00_0.01/c19c76_376dc1d20bd348b99c4a732a1d6d7c81.webp"></div></a></div>