﻿!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=30)}({30:function(e,t,i){e.exports=i(34)},34:function(e,t,i){"use strict";i.r(t);var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=window,a=r.isNumeric,s=r.isUndefined,c=r.formatCount,u="like",l="share",d="views",p="comment",v={toggle:function(e,t,i,n){var o=this;if(cancelEvent(t),vk.widget&&!vk.id)return window.Widgets.oauth();var r=hasClass(e,"active");addClass(e,"animate"),this.clientUpdate(i,u,r?-1:1,!r),ajax.post("like.php",{act:r?"a_do_unlike":"a_do_like",object:i,hash:n,wall:2,from:this._getReference(i)},{onDone:function(t){o.update(i,t),"wall"===i.substr(0,4)&&cur.onPostLike&&cur.onPostLike(e,i.substr(4),r)},onFail:function(){return toggleClass(e,"active",r),o.clientUpdate(i,u,r?1:-1,r),!1}}),intval(domData(e,"count"))>0?v.showLikes(e,i,{fast:!0}):e.tt&&e.tt.destroy&&e.tt.destroy()},_parseObjectId:function(e){var t=e.match(/^([a-z_]+)([0-9\-_]+)$/),i=o(t,3);return{objectType:i[1],objectId:i[2]}},_getReference:function(e){return cur.pvShown?"photo_viewer":e===cur.wallLayer?"wkview":window.mvcur&&mvcur.mvShown?"videoview":cur.wallType?"feed"===cur.wallType?"news"===cur.section?"feed_"+(cur.subsection?cur.subsection:cur.section):"recommended"===cur.section?"feed_recommended"+("recent"!==cur.subsection?"_"+cur.subsection:""):inArray(cur.section,["friends","groups","videos","photos"])?"feed_"+(cur.subsection?"_"+cur.subsection:""):"feed_"+cur.section:"top"===cur.wallType?"wall_top":"wall_"+(cur.onepost?"one":(cur.wallType||"").indexOf("full_")?"page":"full"):cur.module},share:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(vk.widget&&!vk.id)return window.Widgets.oauth();var i=this._parseObjectId(e),o=i.objectType,r=i.objectId;showBox("like.php",n({act:"publish_box",object:e},t),{stat:["page.js","page.css","wide_dd.js","wide_dd.css","sharebox.js"]}),"wall"===o&&window.Wall&&Wall.triggerAdPostStat(r,"share_post"),cur.RpcMethods&&(cur.RpcMethods.likeFullUpdate=function(t){return v.update(e,window.cleanObj(t))})},clientUpdate:function(e,t,i,n){var o=this._getButtonsByType(e,t);if(o.length){var r=intval(domData(o[0],"count"))+i;this._updateDom(e,t,r,n),this.updateExternalIndex(e,{type:t,count:r,isActive:n})}},update:function(e,t){if(!isNaN(parseInt(t.like_num))){var i=s(t.like_my)?void 0:!!intval(t.like_my);this._updateDom(e,u,t.like_num,i,t.like_title),this.updateExternalIndex(e,{type:u,count:t.like_num,isActive:i})}if(!isNaN(parseInt(t.share_num))){var n=s(t.share_my)?void 0:!!intval(t.share_my);this._updateDom(e,l,t.share_num,n,t.share_title),this.updateExternalIndex(e,{type:l,count:t.share_num})}a(t.views_num)&&this._updateDom(e,d,t.views_num,void 0,t.views_title),a(t.comment_num)&&this._updateDom(e,p,t.comment_num)},updateComments:function(e,t){this.update(e,{comment_num:t})},_updateDom:function(e,t,i,n,o){var r=this._getButtonsByType(e,t),a=t===d,s="";a?s=i:i>0&&(s=vk.widget?c(i):langNumeric(i,"%s",!0)),a||(i=intval(i));for(var p=0;p<r.length;p++){var v=r[p];if(!hasClass(v,"no_counter")){var _=a?r[p]:geByClass1("like_button_count",r[p]);animateCount(_,s,{str:"auto",noWrapWidth:!a,noSpaceIfEmpty:!0}),toggleClass(v,"empty",i<=0),"boolean"==typeof n&&toggleClass(v,"active",n),attr(r[p],"data-count",i),a&&attr(r[p],"title",o||"");var h=r[p].tt;if(h){var f=domByClass(h.container,"_content"),m=domByClass(h.container,"_value"),w=domByClass(h.container,"_title"),y=intval(val(m));val(m,i),o&&val(w,o),isObject(h)&&(h.likeInvalidated=!0),(y!==i&&y<7||!1===o)&&(t===u?v.needReinitLikesTT=!0:t===l&&(v.needReinitShareTT=!0)),inArray(t,[u,l])&&toggleClass(f,"me_hidden",!n),!1===o&&h.destroy&&h.destroy()}}}},_getButtonsByType:function(e,t){return domQuery("._like_"+e+" ._"+t)},showLikes:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(e.postDontShowLikes||vk.widget&&vk.show_external_auth_box)){var n=i.views?{views:1}:i.share?{published:1}:{};i.listId&&(n.list=i.listId);var o=!!geByClass1("share",gpeByClass("like_wrap",e)),r=getComputedStyle(e),a=intval(r.getPropertyValue("padding-left").replace("px","")),s=intval(r.getPropertyValue("padding-top").replace("px","")),c=geByClass1("like_button_icon",e),u=[40-getSize(c)[0]/2-a,10-s],l=i.cl||"";if(i.share)l+="likes_tt_share";else if(l+="likes_tt_like","wpost"===i.from)u[0]=12;else if("widget_community"===i.from)u[0]=6;else if("wcomments"===i.from||"widget_comments"===cur.wallType){u[0]=getSize(e)[0]+16-getSize(c)[0]/2-10}var d=void 0,p=void 0;i.share?(d="needReinitLikesTT",p="resetLikesTTTimer"):(d="needReinitShareTT",p="resetShareTTTimer"),clearTimeout(e[p]),showTooltip(e,{url:"/like.php",params:extend({act:"a_get_stats",object:t,has_share:o?1:""},n),appendEl:bodyNode,slide:15,shift:u,ajaxdt:i.fast?0:100,showdt:i.fast?0:400,hidedt:200,dir:"auto",checkLeft:!0,reverseOffset:80,noZIndex:!0,hasover:!0,tip:{over:function(){v.showLikes(e,t,i)}},typeClass:"like_tt",className:l,onHide:function(){clearTimeout(e[p]),e[d]&&(e[p]=setTimeout(function(){delete e[d],e.tt&&e.tt.destroy&&e.tt.destroy()},200))}})}},showShare:function(e,t,i){v.showLikes(e,t,extend(i,{share:1}))},updateViews:function(e){vk.widget&&vk.show_external_auth_box||ajax.post("like.php",{act:"a_get_stats",object:e,views:1},{cache:1,onDone:function(t,i){var n=ce("div",{innerHTML:i});v._updateDom(e,d,t,void 0,n.innerText||n.textContent)}})},makeTemplate:function(e,t){return(t=extend({object_raw:"",likes_count:"",liked:!1,share_count:"",shared:"",views_count:"",share_opts:{},like_opts:{},class_name:"",like_cont_class:""},t)).like_active=t.liked?"active":"",t.share_active=t.shared?"active":"",t.comment_active="",t.likes_formatted_count=t.likes_count>0?langNumeric(t.likes_count,"%s",!0):"",t.share_formatted_count=t.share_count>0?langNumeric(t.share_count,"%s",!0):"",t.share_opts=this._convertOptsToString(t.share_opts),t.like_opts=this._convertOptsToString(t.like_opts),t.like_class_name=t.likes_count>0?"":"empty",t.share_class_name=t.share_count>0?"":"empty",rs(e,t)},_convertOptsToString:function(e){return JSON.stringify(e).replace(/\"/g,"'")},updateExternalIndex:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this._parseObjectId(e),n=i.objectType,o=i.objectId;switch(n){case"photo":if(!cur.pvShown||!cur.pvCurPhoto||cur.pvCurPhoto.id!==o)return;var r=cur.pvListId,a=cur.pvIndex,s=cur.pvData[r][a];t.type===u?(s.likes=t.count,s.liked=t.isActive,cur.pvCommsLikes[s.id][1]=t.count):t.type===l&&(s.shares=t.count);break;case"video":if(window.mvcur&&mvcur.mvShown&&mvcur.videoRaw===o&&t.type===u){var c=Videoview.getMvData();c.likes=t.count,void 0!==t.isActive&&(c.liked=t.isActive,Videoview.playerOnLiked(t.isActive),Videoview.recache())}}},showLikesList:function(e,t){cur.viewAsBox||hasClass(gpeByClass("like_btn",e),"no_counter")||showWiki({w:"likes/"+clean(t)},!1,!1,{queue:1})},showSharesList:function(e,t){cur.viewAsBox||hasClass(gpeByClass("like_btn",e),"no_counter")||showWiki({w:"shares/"+clean(t)},!1,!1,{queue:1})}};window.Likes=v;try{stManager.done(jsc("web/likes.js"))}catch(e){}}});