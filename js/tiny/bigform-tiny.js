var pageNav=null;function init(){if(!document.getElementById){return false}if(!document.getElementsByTagName){return false}prepareForm();pageNav=new pageNavigation();if(!location.search.match(/print/)){pageNav.loader()}else{pageNav.setPageClass("print")}}function addLoadEvent(A){var B=window.onload;if(typeof window.onload!="function"){window.onload=A}else{window.onload=function(){B();A()}}}function hasClassName(A,B){var D=A.split(" ");for(var C=0;C<D.length;C++){if(D[C]==B){return true}}return false}function prepareForm(){if(!document.getElementById){return false}var B=document.getElementsByTagName("li");for(var E=0;E<B.length;E++){if(hasClassName(B[E].className,"checkedtextfield")){var F=B[E];var D=B[E].getElementsByTagName("input")[0];var C="checked";var A="unchecked";if(hasClassName(B[E].className,"ejkryss")){C="";A=""}F.className=A;F.onclick=function(){if(F.active==true){D.blur();F.active=false}else{D.focus();F.active=true}};D.onfocus=function(){F.className=C;F.active=false};D.onblur=function(){if(D.value==""){F.className=A;F.active=true}}}}B=null}var pageNavigation=function(){this.onpage=1;this.maxPages=15;this.data=document.location.search;if(!this.data){data="?tx1=asdf&v1=4&v2=2&v3=1"}if("welcome"==document.location.search){document.location.search=""}if(document.getElementsByTagName("textarea")){this.ta=document.getElementsByTagName("textarea")}if(this.ta){this.ta=this.ta[0]}this.logga=function(A){if(this.ta){this.ta.value+=A+"\n"}};this.showanswers=function(){var H=document.forms[0];var G=this.data.split(/[\?&]/);var J="#";for(var F=0;F<G.length;F++){var E=G[F].split(/=/),I=E[0],B=E[1];var A=H.elements[I];if(!A){continue}switch(A.length?"radio":A.type){case"text":case"textarea":if(B){A.value=unescape(B)}break;case"checkbox":A.checked=B;break;case"radio":for(var D=0;D<2;D++){A[D].checked=(B==A[D].value)}break;default:this.logga("not handled: "+A.type);break}}H.disabled=false;var C=document.getElementById("laddar");C.style.display="none"};this.loader=function(){var C=document.forms[0].elements.js;if(C&&C.value){C.value="1"}if("welcome"==document.location.search){document.location.search=""}else{var B=this;var A=function(){B.showanswers()};setTimeout(A,900)}this.showPage(1)};this.jumpPages=function(A){if(A==-1&&1==this.onpage){return }var C=A+this.onpage,B=document.getElementById("page-"+C);if(!B&&1==A){this.showPage(0)}else{this.showPage(C)}};this.showPage=function(D){this.logga("till sida "+D);var C=document.getElementById("page-"+D);if(!C){D=1}for(var A=0;A<=this.maxPages;A++){var B=document.getElementById("page-"+A);if(B&&B.style){B.style.display=(A==D)?"block":"none"}if(!B){break}}this.onpage=D;this.setPageClass("on-page-"+D)};this.setPageClass=function(B){var A=document.getElementsByTagName("body")[0];if(!A){return }if(!A.className){A.className="on-page-1"}var D=A.className;var C=D.replace(/on-page-\w+/,"")+B;A.className=C}};var FancyForm={start:function(B,A){FancyForm.runningInit=1;if($type(B)!="array"){B=$$("input")}if(!A){A=[]}FancyForm.onclasses=($type(A.onClasses)=="object")?A.onClasses:{checkbox:"checked",radio:"selected"};FancyForm.offclasses=($type(A.offClasses)=="object")?A.offClasses:{checkbox:"unchecked",radio:"unselected"};if($type(A.extraClasses)=="object"){FancyForm.extra=A.extraClasses}else{if(A.extraClasses){FancyForm.extra={checkbox:"f_checkbox",radio:"f_radio",on:"f_on",off:"f_off",all:"fancy"}}else{FancyForm.extra={}}}FancyForm.onSelect=$pick(A.onSelect,function(D){});FancyForm.onDeselect=$pick(A.onDeselect,function(D){});var C=[];FancyForm.chks=B.filter(function(D){if($type(D)!="element"){return false}if(D.getTag()=="input"&&(FancyForm.onclasses[D.getProperty("type")])){var E=D.getParent();if(E.getElement("input")==D){E.type=D.getProperty("type");E.inputElement=D;this.push(E)}else{D.addEvent("click",function(F){F.stopPropagation()})}}else{if((D.inputElement=D.getElement("input"))&&(FancyForm.onclasses[(D.type=D.inputElement.getProperty("type"))])){return true}}return false}.bind(C));FancyForm.chks=FancyForm.chks.merge(C);C=null;FancyForm.chks.each(function(D){D.inputElement.setStyle("position","absolute");D.inputElement.setStyle("left","-9999px");D.addEvent("selectStart",function(){});D.name=D.inputElement.getProperty("name");if(D.inputElement.checked){FancyForm.select(D)}else{FancyForm.deselect(D)}D.addEvent("click",function(E){var E=new Event(E);if(D.inputElement.getProperty("disabled")){return }if($type(E.preventDefault)=="function"){E.preventDefault(true)}else{if($type(E.returnValue)=="function"){E.returnValue(true)}}if(!D.hasClass(FancyForm.onclasses[D.type])){FancyForm.select(D)}else{FancyForm.deselect(D)}FancyForm.focusing=1;D.inputElement.focus();FancyForm.focusing=0});D.addEvent("mousedown",function(E){if($type(E.preventDefault)=="function"){E.preventDefault(true)}else{if($type(E.returnValue)=="function"){E.returnValue(true)}}});D.inputElement.addEvent("focus",function(E){if(!FancyForm.focusing){D.setStyle("outline","1px dotted")}});D.inputElement.addEvent("blur",function(E){D.setStyle("outline","0")});if(extraclass=FancyForm.extra[D.type]){D.addClass(extraclass)}if(extraclass=FancyForm.extra.all){D.addClass(extraclass)}});FancyForm.runningInit=0},select:function(A){A.inputElement.checked="checked";A.removeClass(FancyForm.offclasses[A.type]);A.addClass(FancyForm.onclasses[A.type]);if(A.type=="radio"){FancyForm.chks.each(function(B){if(B.name!=A.name||B==A){return }FancyForm.deselect(B)})}if(extraclass=FancyForm.extra.on){A.addClass(extraclass)}if(extraclass=FancyForm.extra.off){A.removeClass(extraclass)}if(!FancyForm.runningInit){FancyForm.onSelect(A)}},deselect:function(A){A.inputElement.checked=false;A.removeClass(FancyForm.onclasses[A.type]);A.addClass(FancyForm.offclasses[A.type]);if(extraclass=FancyForm.extra.off){A.addClass(extraclass)}if(extraclass=FancyForm.extra.on){A.removeClass(extraclass)}if(!FancyForm.runningInit){FancyForm.onDeselect(A)}},all:function(){FancyForm.chks.each(function(A){FancyForm.select(A)})},none:function(){FancyForm.chks.each(function(A){FancyForm.deselect(A)})}};addLoadEvent(FancyForm.start);addLoadEvent(init);