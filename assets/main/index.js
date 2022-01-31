System.register("chunks:///_virtual/PopUp.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,o,r,i,a,s,p,l,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,p=e.Node,l=e.Label,c=e.Component}],execute:function(){var u,d,f,g,h,y,v;a._RF.push({},"04e9fYcGexArpMF6IT1EZZs","PopUp",void 0);var m=s.ccclass,N=s.property;e("PopUp",(u=m("PopUp"),d=N({type:p}),f=N({type:p}),u((y=t((h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,o(r(t),"headingNode",y,r(t)),o(r(t),"messageNode",v,r(t)),i(r(t),"parentNode",null),t}n(t,e);var a=t.prototype;return a.start=function(){},a.setText=function(e,t,n){void 0===e&&(e=null),void 0===t&&(t=null),this.parentNode=n,e&&(this.headingNode.getComponent(l).string=e),t&&(this.messageNode.getComponent(l).string=t)},a.closePoP=function(){this.node.active=!1},t}(c)).prototype,"headingNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(h.prototype,"messageNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=h))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/Common.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,i,r,s,c,u,p;return{setters:[function(t){n=t.defineProperty},function(t){o=t.cclegacy,e=t._decorator,i=t.tween,r=t.Vec3,s=t.UITransform,c=t.Sprite,u=t.Intersection2D,p=t.instantiate}],execute:function(){t({collisionCheck:function(t,n){if(null!=t&&null!=n){var o,e;return u.rectRect(null===(o=t.getComponent(s))||void 0===o?void 0:o.getBoundingBoxToWorld(),null===(e=n.getComponent(s))||void 0===e?void 0:e.getBoundingBoxToWorld())}},getScript:function(t,n){if(n){return t.getComponent(n)}},getXposition:function(t){return t.position.x},getYposition:function(t){return t.position.y},nodeHeight:function(t){return t.getComponent(s).height/2},nodeWidth:function(t){return t.getComponent(s).width/2},popClose:function(t,n){i(t).to(n,{scale:new r(0,0,0)}).start()},popOpen:function(t,n){i(t).to(n,{scale:new r(1,1,1)}).start()},setSpriteFrame:function(t,n){t.getComponent(c).spriteFrame=n}}),o._RF.push({},"09414S9BedCerGg82rTy4Df","Common",void 0);e.ccclass,e.property;t("snail",function(){function t(){n(this,"snail",void 0)}return t.prototype.setSnail=function(t){this.snail=t},t}()),t("MyNode",(function(t,o,e){void 0===e&&(e=null),n(this,"myNode",void 0),n(this,"myScript",void 0),n(this,"scoreCount",!1),this.myNode=p(t),e&&(this.myScript=this.myNode.getComponent(e)),o&&o.addChild(this.myNode)}));o._RF.pop()}}}));

System.register("chunks:///_virtual/Hud.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var r,t,n,o,i,c,a,u,s,l,d,g,p,m;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.defineProperty},function(e){c=e.cclegacy,a=e._decorator,u=e.Node,s=e.Prefab,l=e.Label,d=e.Component},function(e){g=e.MyNode,p=e.nodeHeight},function(e){m=e.gameManager}],execute:function(){var f,h,v,y,S,b,N;c._RF.push({},"201c2UqkexLk7JZcaD57mI3","Hud",void 0);var O=a.ccclass,P=a.property;e("Hud",(f=O("Hud"),h=P({type:u}),v=P({type:s}),f((b=r((S=function(e){function r(){for(var r,t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return r=e.call.apply(e,[this].concat(c))||this,n(o(r),"ScoreNode",b,o(r)),n(o(r),"gameOverPrefab",N,o(r)),i(o(r),"currentScore",0),i(o(r),"gameOverNode",null),r}t(r,e);var c=r.prototype;return c.updateScore=function(){this.ScoreNode.getComponent(l).string="Score : 0"+this.currentScore},c.start=function(){this.gameOverNode=new g(this.gameOverPrefab,this.node,"GameOver"),this.gameOverNode.myNode.setPosition(0,p(this.node)+p(this.gameOverNode.myNode),1),this.currentScore=m.getInstance().getCurrentScore(),this.updateScore()},c.gameOver=function(){console.log("Called"),this.gameOverNode.myScript.gameOver()},c.update=function(e){this.currentScore!=m.getInstance().getCurrentScore()&&(this.currentScore=m.getInstance().getCurrentScore(),this.updateScore())},r}(d)).prototype,"ScoreNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=r(S.prototype,"gameOverPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=S))||y));c._RF.pop()}}}));

System.register("chunks:///_virtual/birdMove.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts"],(function(e){"use strict";var t,n,o,i,r,s,a,c,d,p,u;return{setters:[function(e){t=e.inheritsLoose,n=e.defineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,r=e._decorator,s=e.Sprite,a=e.input,c=e.Input,d=e.KeyCode,p=e.Component},function(e){u=e.gameManager}],execute:function(){var l;i._RF.push({},"410d6Cui6xPKbfK80nDdRHf","birdMove",void 0);var f=r.ccclass;r.property,e("birdMove",f("birdMove")(l=function(e){function i(){for(var t,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,n(o(t),"speed",0),t}t(i,e);var r=i.prototype;return r.onLoad=function(){u.getInstance().getBirdSelected()&&(this.node.getComponent(s).spriteFrame=u.getInstance().getBirdSelected()),a.on(c.EventType.KEY_DOWN,this.onKeyDown,this)},r.onKeyDown=function(e){e.keyCode==d.SPACE&&(this.speed=2)},r.update=function(e){if(u.getInstance().getGamePlayActive()){this.speed-=.05;var t=this.node.position.y;this.node.setPosition(0,t+=this.speed,1)}},i}(p))||l);i._RF.pop()}}}));

System.register("chunks:///_virtual/gameIntro.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./MetaMaskManager.ts"],(function(e){"use strict";var t,n,o,i,a,r,c,l,s,u,d,g,p,f,b,m,h,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.defineProperty},function(e){r=e.cclegacy,c=e._decorator,l=e.Node,s=e.Prefab,u=e.JsonAsset,d=e.tween,g=e.Vec3,p=e.Label,f=e.director,b=e.Component},function(e){m=e.MyNode,h=e.nodeHeight},function(e){y=e.MetaMaskManager}],execute:function(){var M,v,N,P,w,S,k,L,B,A,z,I,_,C,j,F,V;r._RF.push({},"44207K1BwRPtbIjej0WHa1q","gameIntro",void 0);var q=c.ccclass,D=c.property;e("gameIntro",(M=q("gameIntro"),v=D({type:l}),N=D({type:l}),P=D({type:l}),w=D({type:s}),S=D({type:s}),k=D({type:s}),L=D(u),M((z=t((A=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,o(i(t),"gamePlayLogo",z,i(t)),o(i(t),"practiceMode",I,i(t)),o(i(t),"connectMetamask",_,i(t)),o(i(t),"popupPrefab",C,i(t)),o(i(t),"loadingPrefab",j,i(t)),o(i(t),"birdSelectionPrefeb",F,i(t)),o(i(t),"contractAbi",V,i(t)),a(i(t),"birdSelectionNode",null),a(i(t),"loadingNode",null),a(i(t),"popupNode",null),a(i(t),"metMaskLoggedin",!1),t}n(t,e);var r=t.prototype;return r.setLoading=function(e){this.loadingNode.myNode.active=e},r.addPrefabs=function(){this.popupNode=new m(this.popupPrefab,this.node),this.popupNode.myNode.active=!1,this.birdSelectionNode=new m(this.birdSelectionPrefeb,this.node,"BirdSelection"),this.birdSelectionNode.myNode.active=!1,this.loadingNode=new m(this.loadingPrefab,this.node,"LoadingScreen"),this.loadingNode.myNode.active=!1},r.logoAnimation=function(){var e=this;this.gamePlayLogo.setScale(5,5,5),d(this.gamePlayLogo).to(.2,{scale:new g(1,1,1)}).delay(.5).call((function(){e.ButtonVisiblity(1)})).by(.2,{scale:new g(-.2,-.2,-.2),position:new g(0,100,0)}).start()},r.ButtonVisiblity=function(e){d(this.practiceMode).to(.2,{scale:new g(e,e,1)}).start(),d(this.connectMetamask).to(.2,{scale:new g(e,e,1)}).start()},r.instanciateMetamaskManager=function(e){y.getInstance().initiateWeb3()&&y.getInstance().checkWalletStatus((function(e,t){var n=e.code,o=e.message;console.log("code received: "+n+" message: "+o+" response: ",t)})),y.getInstance().initContract(this.contractAbi.json.abi,e)},r.connectToMetaMask=function(e){var t=this;this.loadingNode.myNode.active=!0;var n=this.loadingNode.myScript;if(n.rotate=!0,this.metMaskLoggedin)this.ActivateBirdSelectionScreen();else try{"undefined"!==window.ethereum&&console.log("MetaMask is installed!");window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){var o=e[0];t.connectMetamask.getChildByName("Message").getComponent(p).string="Select Bird",console.log({val:e}),console.log({account:o}),console.log("Login Successfull"),t.popupNode.myNode.active=!0,n.rotate=!1,t.loadingNode.myNode.active=!1,t.metMaskLoggedin=!0,t.instanciateMetamaskManager(o)})).catch((function(e){console.log({err:e}),console.log("Login Falied")})).finally((function(){console.log("Finally")}))}catch(e){console.log("Error connecting metamask")}},r.startPractiseMode=function(){f.loadScene("GamePlay")},r.ActivateBirdSelectionScreen=function(){var e=this;this.birdSelectionNode.myScript.loadBaseUrl(this);var t=h(this.node)+h(this.gamePlayLogo);d(this.gamePlayLogo).to(.2,{position:new g(0,t,1)}).call((function(){e.ButtonVisiblity(0)})).start()},r.start=function(){this.logoAnimation(),this.addPrefabs()},t}(b)).prototype,"gamePlayLogo",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(A.prototype,"practiceMode",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(A.prototype,"connectMetamask",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(A.prototype,"popupPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(A.prototype,"loadingPrefab",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(A.prototype,"birdSelectionPrefeb",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(A.prototype,"contractAbi",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=A))||B));r._RF.pop()}}}));

System.register("chunks:///_virtual/backGround.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var r,t,n,i,o,a,c,s,u,d,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,c=e._decorator,s=e.Prefab,u=e.Component},function(e){d=e.MyNode},function(e){l=e.gameManager}],execute:function(){var f,p,b,h,y;a._RF.push({},"4c321fxcSxNZohtmtxdzfBt","backGround",void 0);var g=c.ccclass,m=c.property;e("backGround",(f=g("backGround"),p=m({type:s}),f((y=r((h=function(e){function r(){for(var r,t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return r=e.call.apply(e,[this].concat(a))||this,n(i(r),"BirdPrefab",y,i(r)),o(i(r),"birdNode",null),r}return t(r,e),r.prototype.start=function(){this.birdNode=new d(this.BirdPrefab,this.node,"birdMove"),l.getInstance().setBirdNode(this.birdNode)},r}(u)).prototype,"BirdPrefab",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=h))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"983031nyw9FQIJwcEg5FXwu","Constants",void 0);e("LOG_VISIBILITY",{NETWORK:!0,CEHCK:!0,INFO:!0,MISCELLANEOUS:!0,BLOCKCHAIN:!0}),e("MESSAGE_CODE",{META_MASK_NOT_INSTALLED:0,META_MASK_NOT_LOGIN:1,META_MASK_LOGIN:2}),e("MESSAGE",{META_MASK_NOT_INSTALLED:"You don't have metamask installed on your browser, install it from here: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",META_MASK_NOT_LOGIN:"You have to login metamask before proceeding",META_MASK_LOGIN:"Login Successful"});t._RF.pop()}}}));

System.register("chunks:///_virtual/gameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.defineProperty},function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"999482RUq9KfaxUz132pHu+","gameManager",void 0);var r=e("gameManager",function(){function e(){if(t(this,"_gamePlayActive",!1),t(this,"_currentScore",0),t(this,"_birdNode",null),t(this,"_birdSelected",null),e._instance)throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");e._instance=this}var n=e.prototype;return n.setCurrentScore=function(e){this._currentScore=e},n.setBirdSelected=function(e){this._birdSelected=e},n.getBirdSelected=function(){return this._birdSelected},n.getCurrentScore=function(){return this._currentScore},n.addScore=function(e){this._currentScore=e+this._currentScore},n.setBirdNode=function(e){this._birdNode=e},n.getBirdNode=function(){return this._birdNode},e.getInstance=function(){return e._instance},n.setGamePlayActive=function(e){this._gamePlayActive=e},n.getGamePlayActive=function(){return this._gamePlayActive},e}());t(r,"_instance",new r),n._RF.pop()}}}));

System.register("chunks:///_virtual/Obstacles.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,s,o,i,n,d,r,u,l,h,p,c,a,U,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,s=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,n=e.defineProperty},function(e){d=e.cclegacy,r=e._decorator,u=e.Prefab,l=e.CCFloat,h=e.Node,p=e.UITransform,c=e.Intersection2D,a=e.Component},function(e){U=e.MyNode},function(e){m=e.gameManager}],execute:function(){var H,f,y,g,P,N,w,D,b;d._RF.push({},"9c72a5EhxxPnLWq2giZq7FJ","Obstacles",void 0);var C=r.ccclass,v=r.property;e("Obstacles",(H=C("Obstacles"),f=v({type:u}),y=v(l),g=v({type:h}),H((w=t((N=function(e){function t(){for(var t,s=arguments.length,d=new Array(s),r=0;r<s;r++)d[r]=arguments[r];return t=e.call.apply(e,[this].concat(d))||this,o(i(t),"pipePrefab",w,i(t)),o(i(t),"speed",D,i(t)),o(i(t),"hudNode",b,i(t)),n(i(t),"UsedUpHurdle",[]),n(i(t),"UnusedUpHurdle",[]),n(i(t),"UsedDownHurdle",[]),n(i(t),"UnusedDownHurdle",[]),n(i(t),"birdNode",null),n(i(t),"spaceToPass",80),n(i(t),"minPipePos",-100),n(i(t),"maxPipePos",150),n(i(t),"outXpos",0),n(i(t),"schedulerStarted",!1),n(i(t),"hudScript",null),t}s(t,e);var d=t.prototype;return d.start=function(){this.hudScript=this.hudNode.getComponent("Hud"),this.birdNode=m.getInstance().getBirdNode().myNode.getChildByName("Colider"),this.setUpHurdlesNode(this.UnusedUpHurdle,8,1),this.setUpHurdlesNode(this.UnusedDownHurdle,8,-1),this.outXpos=this.node.getComponent(p).width/2+this.pipePrefab.data.width/2,this.startGame()},d.startGame=function(){m.getInstance().setGamePlayActive(!0),this.schedulerStarted=!0,this.randomPosSch(),this.schedule(this.randomPosSch,9)},d.randomPosSch=function(){var e=Math.floor(Math.random()*(this.maxPipePos-this.minPipePos+1)+this.minPipePos);this.lauchHurdle(this.spaceToPass,e)},d.setUpHurdlesNode=function(e,t,s){for(var o=null,i=this.pipePrefab.data.width/2,n=this.node.getComponent(p).width/2,d=0;d<t;d++)(o=new U(this.pipePrefab,this.node)).myNode.setScale(1,s,1),o.myNode.setPosition(i+n,0,1),e.push(o)},d.lauchHurdle=function(e,t){if(this.UnusedUpHurdle.length>=1){var s=this.UnusedUpHurdle.pop(),o=this.UnusedDownHurdle.pop();s.myNode.setPosition(this.outXpos,t+e,1),o.myNode.setPosition(this.outXpos,t-e,1),this.UsedUpHurdle.push(s),this.UsedDownHurdle.push(o)}},d.collisionCheckSupporting=function(e,t){var s,o;return null!=e&&null!=t&&c.rectRect(null===(s=e.getComponent(p))||void 0===s?void 0:s.getBoundingBoxToWorld(),null===(o=t.getComponent(p))||void 0===o?void 0:o.getBoundingBoxToWorld())},d.collisionCheck=function(e,t){return e=e.getChildByName("colider"),t=t.getChildByName("colider"),!(!this.collisionCheckSupporting(e,this.birdNode)&&!this.collisionCheckSupporting(t,this.birdNode))&&(this.unschedule(this.randomPosSch),this.hudScript.gameOver(),m.getInstance().setGamePlayActive(!1),this.flushAllHurdles(),!0)},d.flushAllHurdles=function(){for(;0!=this.UsedDownHurdle.length;)this.UsedDownHurdle[0].scoreCount=!1,this.UsedDownHurdle[0].myNode.setPosition(this.outXpos,0,1),this.UsedUpHurdle[0].myNode.setPosition(this.outXpos,0,1),this.recycleHurdles(0)},d.moveHurdles=function(e){for(var t=0,s=0;s<this.UsedDownHurdle.length&&(t=this.UsedDownHurdle[s].myNode.position.x,this.UsedDownHurdle[s].myNode.setPosition(t-=this.speed,this.UsedDownHurdle[s].myNode.position.y,1),this.UsedUpHurdle[s].myNode.setPosition(t-=this.speed,this.UsedUpHurdle[s].myNode.position.y,1),!this.collisionCheck(this.UsedUpHurdle[s].myNode,this.UsedDownHurdle[s].myNode));s++)this.UsedDownHurdle[s].myNode.position.x<0&&!this.UsedDownHurdle[s].scoreCount&&(this.UsedDownHurdle[s].scoreCount=!0,m.getInstance().addScore(1)),this.UsedDownHurdle[s].myNode.position.x<=-this.outXpos&&this.recycleHurdles(s)},d.recycleHurdles=function(e){this.UsedDownHurdle[e].scoreCount=!1,this.UnusedDownHurdle.push(this.UsedDownHurdle[e]),this.UsedDownHurdle.splice(e,1),this.UnusedUpHurdle.push(this.UsedUpHurdle[e]),this.UsedUpHurdle.splice(e,1)},d.update=function(e){this.UsedUpHurdle.length>=1&&this.moveHurdles(e)},t}(a)).prototype,"pipePrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(N.prototype,"speed",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.05}}),b=t(N.prototype,"hudNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=N))||P));d._RF.pop()}}}));

System.register("chunks:///_virtual/GameOver.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts"],(function(e){"use strict";var t,r,n,o,a,i,c,s,u,l,p,g,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,i=e._decorator,c=e.Node,s=e.tween,u=e.Vec3,l=e.Label,p=e.director,g=e.Component},function(e){f=e.gameManager}],execute:function(){var m,v,d,y,h;a._RF.push({},"a92c6VFHlFCMaOQe99YgVDA","GameOver",void 0);var O=i.ccclass,S=i.property;e("GameOver",(m=O("GameOver"),v=S({type:c}),m((h=t((y=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,n(o(t),"score",h,o(t)),t}r(t,e);var a=t.prototype;return a.gameOver=function(){s(this.node).to(.3,{position:new u(0,0,0)}).start(),this.score.getComponent(l).string="Score : "+f.getInstance().getCurrentScore()},a.restartGame=function(){f.getInstance().setCurrentScore(0),p.loadScene("BirdSelection")},a.start=function(){},t}(g)).prototype,"score",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=y))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/BirdSelection.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts","./MetaMaskManager.ts"],(function(e){"use strict";var t,n,i,o,r,a,s,l,c,d,u,g,h,f,m,p,B,C,b,v,y,S,T,I,w,N;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized,r=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,l=e.Prefab,c=e.Node,d=e.SpriteFrame,u=e.CCFloat,g=e.Button,h=e.assetManager,f=e.Texture2D,m=e.Sprite,p=e.tween,B=e.Vec3,C=e.director,b=e.Label,v=e.UITransform,y=e.instantiate,S=e.Component},function(e){T=e.nodeWidth,I=e.nodeHeight},function(e){w=e.gameManager},function(e){N=e.MetaMaskManager}],execute:function(){var _,M,F,k,L,P,z,U,O,R,A,x,D,H,E,G,J;a._RF.push({},"a9ffaBpJCtKqatfeTkvLXJt","BirdSelection",void 0);var V=s.ccclass,W=s.property;e("BirdSelection",(_=V("BirdSelection"),M=W(l),F=W(c),k=W(c),L=W(c),P=W({type:d}),z=W({type:u}),U=W({type:c}),_((A=t((R=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,i(o(t),"BirdCardPrefab",A,o(t)),i(o(t),"content_node",x,o(t)),i(o(t),"view_node",D,o(t)),i(o(t),"start_node",H,o(t)),i(o(t),"ButtonImages",E,o(t)),i(o(t),"visibility",G,o(t)),i(o(t),"StartButton",J,o(t)),r(o(t),"BirdsCard",[]),r(o(t),"BirdsImages",[]),r(o(t),"BirdsId",[]),r(o(t),"numBirds",4),r(o(t),"baseUrl",null),r(o(t),"loader",null),t}n(t,e);var a=t.prototype;return a.removeSelected=function(){for(var e=0;e<this.BirdsCard.length;e++)this.BirdsCard[e].getComponent(g).normalSprite=this.ButtonImages[1]},a.setImages=function(e){var t,n=this;t=this.baseUrl+"/"+(e+1)+".png",h.loadRemote(t,(function(t,i){var o=new d,r=new f;r.image=i,o.texture=r,n.BirdsCard[e].getChildByName("Bird").getComponent(m).spriteFrame=o}))},a.unlock=function(e){for(var t=0;t<e.length;t++)this.BirdsCard[parseInt(e[t])-1].getChildByName("Lock").active=!1,console.log("Unlocked")},a.unlockplane=function(){for(var e=this,t=function(t){e.BirdsCard[t].getComponent(g).interactable=!0,i=e.BirdsCard[t].getChildByName("text"),o=e.BirdsCard[t].getChildByName("locked"),e.BirdsCard[t].removeChild(i),e.BirdsCard[t].removeChild(o),e.BirdsCard[t].on(c.EventType.TOUCH_START,(function(e){this.removeallBorderImages(),this.BirdsCard[t].getComponent(g).normalSprite=this.border_image}),e)},n=0;n<5;n++){var i,o;t(n)}},a.loadBaseUrl=function(e){var t=this;this.loader=e,console.log("This Loader",e),N.getInstance().baseAddressBirds().then((function(e){t.baseUrl=e,t.getTotalBirdies()})).catch((function(e){console.log("base url error"),console.log(e)}))},a.getTotalBirdies=function(){var e=this;N.getInstance().getTotalBirdies().then((function(t){console.log(t),e.BirdsId=t,e.setCards()})).catch((function(e){console.log("TotalSupply catch"),console.log(e)}))},a.startGame=function(){p(this.StartButton).to(.2,{scale:new B(0,0,0)}).call((function(){C.loadScene("GamePlay")})).start()},a.mintedNFTS=function(){var e=this;N.getInstance().mintedBirdie().then((function(t){e.unlock(t),console.log(" total Birds Minted"),console.log(t)})).catch((function(e){console.log("Error whileFteching Minted Birds"),console.log(e)}))},a.mintNFT=function(e,t){var n=this;console.log("Value",e),N.getInstance().MintNFT(e).then((function(e){t.active=!1,console.log("Nft Minted"),console.log(e),n.loader.setLoading(!1)})).catch((function(e){console.log("Nft Minting Failed"),console.log(e),n.loader.setLoading(!1)}))},a.clickOnNft=function(e){var t=e.target.getChildByName("Lock");t.active?(t.getChildByName("Message").getComponent(b).string="WAITING FOR CONFIRMATION",this.mintNFT(e.target.name,t)):(this.removeSelected(),e.target.getComponent(g).normalSprite=this.ButtonImages[0],w.getInstance().setBirdSelected(e.target.getChildByName("Bird").getComponent(m).spriteFrame),p(this.StartButton).to(.2,{scale:new B(1,1,1)}).start(),console.log("Selected"))},a.setCards=function(){var e=this.BirdCardPrefab.data.width,t=30,n=e*this.numBirds+t*(this.numBirds+1),i=n*(this.visibility/100);this.start_node.getComponent(v).width=i,this.view_node.getComponent(v).width=i,this.content_node.getComponent(v).width=n;for(var o=null,r=0;r<this.numBirds;r++)(o=y(this.BirdCardPrefab)).name=""+(r+1),this.content_node.addChild(o),o.setPosition(-(n/2-T(o))+e*r+t,-I(o),1),t+=30,o.on(c.EventType.TOUCH_START,this.clickOnNft,this),this.BirdsCard.push(o),this.setImages(r);this.node.active=!0,this.loader.setLoading(!1),this.mintedNFTS(),console.log("Setted Log")},a.onLoad=function(){},t}(S)).prototype,"BirdCardPrefab",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(R.prototype,"content_node",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(R.prototype,"view_node",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(R.prototype,"start_node",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(R.prototype,"ButtonImages",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=t(R.prototype,"visibility",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 75}}),J=t(R.prototype,"StartButton",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=R))||O));a._RF.pop()}}}));

System.register("chunks:///_virtual/LoadingScreen.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,r,o,i,c,a,l,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.defineProperty},function(e){c=e.cclegacy,a=e._decorator,l=e.Node,s=e.Component}],execute:function(){var u,p,d,f,g;c._RF.push({},"c84e69IheFOmpoX8ZvfLC1z","LoadingScreen",void 0);var y=a.ccclass,h=a.property;e("LoadingScreen",(u=y("LoadingScreen"),p=h({type:l}),u((g=n((f=function(e){function n(){for(var n,t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return n=e.call.apply(e,[this].concat(c))||this,r(o(n),"loadingIcon",g,o(n)),i(o(n),"rotate",!1),n}return t(n,e),n.prototype.update=function(e){this.rotate&&(this.loadingIcon.angle+=1)},n}(s)).prototype,"loadingIcon",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));c._RF.pop()}}}));

System.register("chunks:///_virtual/MetaMaskManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./web3.min.js","./web3.min.mjs_cjs=&original=.js"],(function(t){"use strict";var n,e,c,s,i,r,a;return{setters:[function(t){n=t.defineProperty,e=t.inheritsLoose,c=t.assertThisInitialized},function(t){s=t.cclegacy,i=t._decorator,r=t.Component},function(t){a=t.default},null],execute:function(){var o,u,l;s._RF.push({},"cccd4GQfkFARqVzt3zb+nef","MetaMaskManager",void 0);var f=i.ccclass;i.property,t("MetaMaskManager",f("MetaMaskManager")((l=u=function(t){function s(){for(var e,s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i))||this,n(c(e),"web3Instance",null),n(c(e),"contract",null),n(c(e),"userAddress",null),n(c(e),"birdsBaseAddress",null),e}e(s,t),s.getInstance=function(){return s._instance||(s._instance=new s),s._instance};var i=s.prototype;return i.initiateWeb3=function(){return this.web3Instance=new a(a.givenProvider||"ws://localhost:8545"),!!this.web3Instance},i.checkWalletStatus=function(t){this.web3Instance.eth.getAccounts((function(n,e){null!=n?t({code:"META_MASK_NOT_INSTALLED",message:"META_MASK_NOT_INSTALLED"},null):0==e.length?t({code:"META_MASK_NOT_LOGIN",message:"META_MASK_NOT_LOGIN"},null):t({code:"META_MASK_LOGIN",message:"META_MASK_LOGIN"},e[0])}))},i.initContract=function(t,n){return this.userAddress=n,this.contract=new this.web3Instance.eth.Contract(JSON.parse(JSON.stringify(t)),"0xD6fAe78F2B58Ec88Df53E124b6883DB59cc4137A"),!!this.contract},i.baseAddressBirds=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getBaseURI().call().then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.getTotalBirdies=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getAllBirdies().call().then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.mintedBirdie=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getMintedBirdie().call({from:t.userAddress}).then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.MintNFT=function(t){var n=this;return new Promise((function(e,c){var s=a.utils.toWei(.01.toString(),"ether");n.contract.methods.mintNFT(t).send({from:n.userAddress,value:s}).then((function(t){e(t)})).catch((function(t){c(t)}))}))},i.start=function(){},s}(r),n(u,"_instance",void 0),o=l))||o);s._RF.pop()}}}));

System.register("chunks:///_virtual/MoveBase.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,o,s,n,r,a,l,c,p,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,s=e.assertThisInitialized,n=e.defineProperty},function(e){r=e.cclegacy,a=e._decorator,l=e.Prefab,c=e.CCFloat,p=e.instantiate,u=e.UITransform,h=e.Component}],execute:function(){var d,f,y,v,b,P,g;r._RF.push({},"fca35lbYMRH6pDuxDKKIL6T","MoveBase",void 0);var B=a.ccclass,N=a.property;e("MoveBase",(d=B("MoveBase"),f=N({type:l}),y=N(c),d((P=t((b=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,o(s(t),"BasePrefab",P,s(t)),o(s(t),"speed",g,s(t)),n(s(t),"startParralax",!1),n(s(t),"tileNodes",[]),t}i(t,e);var r=t.prototype;return r.start=function(){for(var e=null,t=this.BasePrefab.data.width,i=0;i<3;i++)e=p(this.BasePrefab),this.node.addChild(e),e.setPosition(t*i,e.position.y,1),this.tileNodes.push(e)},r.checktoRecycle=function(e,t){var i=0;e.position.x<-e.getComponent(u).width&&(i=0==t?this.tileNodes[2].position.x+e.getComponent(u).width:this.tileNodes[t-1].position.x+e.getComponent(u).width,e.setPosition(i,e.position.y,1))},r.update=function(e){for(var t=0,i=0;i<this.tileNodes.length;i++)t=this.tileNodes[i].position.x,this.tileNodes[i].setPosition(t-this.speed*e,this.tileNodes[i].position.y,1),this.checktoRecycle(this.tileNodes[i],i)},t}(h)).prototype,"BasePrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=t(b.prototype,"speed",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),v=b))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./PopUp.ts","./Common.ts","./gameManager.ts","./Hud.ts","./birdMove.ts","./MetaMaskManager.ts","./gameIntro.ts","./backGround.ts","./Constants.ts","./Obstacles.ts","./GameOver.ts","./BirdSelection.ts","./LoadingScreen.ts","./MoveBase.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});