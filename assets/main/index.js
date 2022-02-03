System.register("chunks:///_virtual/PopUp.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,o,r,i,a,s,p,l,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,p=e.Node,l=e.Label,c=e.Component}],execute:function(){var u,d,f,g,h,y,v;a._RF.push({},"04e9fYcGexArpMF6IT1EZZs","PopUp",void 0);var m=s.ccclass,N=s.property;e("PopUp",(u=m("PopUp"),d=N({type:p}),f=N({type:p}),u((y=t((h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,o(r(t),"headingNode",y,r(t)),o(r(t),"messageNode",v,r(t)),i(r(t),"parentNode",null),t}n(t,e);var a=t.prototype;return a.start=function(){},a.setText=function(e,t,n){void 0===e&&(e=null),void 0===t&&(t=null),this.parentNode=n,e&&(this.headingNode.getComponent(l).string=e),t&&(this.messageNode.getComponent(l).string=t)},a.closePoP=function(){this.node.active=!1},t}(c)).prototype,"headingNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(h.prototype,"messageNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=h))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/Common.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,i,r,s,c,u,p;return{setters:[function(t){n=t.defineProperty},function(t){o=t.cclegacy,e=t._decorator,i=t.tween,r=t.Vec3,s=t.UITransform,c=t.Sprite,u=t.Intersection2D,p=t.instantiate}],execute:function(){t({collisionCheck:function(t,n){if(null!=t&&null!=n){var o,e;return u.rectRect(null===(o=t.getComponent(s))||void 0===o?void 0:o.getBoundingBoxToWorld(),null===(e=n.getComponent(s))||void 0===e?void 0:e.getBoundingBoxToWorld())}},getScript:function(t,n){if(n){return t.getComponent(n)}},getXposition:function(t){return t.position.x},getYposition:function(t){return t.position.y},nodeHeight:function(t){return t.getComponent(s).height/2},nodeWidth:function(t){return t.getComponent(s).width/2},popClose:function(t,n){i(t).to(n,{scale:new r(0,0,0)}).start()},popOpen:function(t,n){i(t).to(n,{scale:new r(1,1,1)}).start()},setSpriteFrame:function(t,n){t.getComponent(c).spriteFrame=n}}),o._RF.push({},"09414S9BedCerGg82rTy4Df","Common",void 0);e.ccclass,e.property;t("snail",function(){function t(){n(this,"snail",void 0)}return t.prototype.setSnail=function(t){this.snail=t},t}()),t("MyNode",(function(t,o,e){void 0===e&&(e=null),n(this,"myNode",void 0),n(this,"myScript",void 0),n(this,"scoreCount",!1),this.myNode=p(t),e&&(this.myScript=this.myNode.getComponent(e)),o&&o.addChild(this.myNode)}));o._RF.pop()}}}));

System.register("chunks:///_virtual/Hud.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,r,n,i,o,a,c,u,s,l,p,g,h,d,m,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,c=e._decorator,u=e.Node,s=e.Prefab,l=e.Label,p=e.tween,g=e.Vec3,h=e.Component},function(e){d=e.MyNode,m=e.nodeHeight},function(e){f=e.gameManager}],execute:function(){var y,v,S,b,N,P,O,w,I,R,z;a._RF.push({},"201c2UqkexLk7JZcaD57mI3","Hud",void 0);var C=c.ccclass,H=c.property;e("Hud",(y=C("Hud"),v=H({type:u}),S=H({type:s}),b=H({type:u}),N=H({type:u}),y((w=t((O=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n(i(t),"ScoreNode",w,i(t)),n(i(t),"gameOverPrefab",I,i(t)),n(i(t),"tapPlayNode",R,i(t)),n(i(t),"touchRestrict",z,i(t)),o(i(t),"currentScore",0),o(i(t),"gameOverNode",null),t}r(t,e);var a=t.prototype;return a.updateScore=function(){var e="";e=this.currentScore<=9?"Score : 0"+this.currentScore:"Score :"+this.currentScore,this.ScoreNode.getComponent(l).string=e},a.start=function(){this.gameOverNode=new d(this.gameOverPrefab,this.node,"GameOver"),this.gameOverNode.myNode.setPosition(0,m(this.node)+m(this.gameOverNode.myNode),1),this.currentScore=f.getInstance().getCurrentScore(),this.updateScore(),this.touchRestrict.active=!1},a.gameOver=function(){this.touchRestrict.active=!0,this.gameOverNode.myScript.gameOver()},a.tapToplay=function(e){p(this.tapPlayNode).to(.2,{scale:new g(0,0,0)}).call((function(){f.getInstance().setGamePlayActive(!0)})).start()},a.gamePause=function(){if(f.getInstance().getGamePlayActive()){var e=this.gameOverNode.myScript;this.touchRestrict.active=!0,e.gamePaused(this)}},a.update=function(e){this.currentScore!=f.getInstance().getCurrentScore()&&(this.currentScore=f.getInstance().getCurrentScore(),this.updateScore())},t}(h)).prototype,"ScoreNode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(O.prototype,"gameOverPrefab",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(O.prototype,"tapPlayNode",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(O.prototype,"touchRestrict",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=O))||P));a._RF.pop()}}}));

System.register("chunks:///_virtual/birdMove.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts"],(function(e){"use strict";var t,n,o,i,s,r,a,c,d,p,u,l;return{setters:[function(e){t=e.inheritsLoose,n=e.defineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,r=e.Sprite,a=e.Animation,c=e.input,d=e.Input,p=e.KeyCode,u=e.Component},function(e){l=e.gameManager}],execute:function(){var g;i._RF.push({},"410d6Cui6xPKbfK80nDdRHf","birdMove",void 0);var h=s.ccclass;s.property,e("birdMove",h("birdMove")(g=function(e){function i(){for(var t,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return t=e.call.apply(e,[this].concat(s))||this,n(o(t),"speed",0),t}t(i,e);var s=i.prototype;return s.onLoad=function(){l.getInstance().getBirdSelected()&&(this.node.getComponent(r).spriteFrame=l.getInstance().getBirdSelected());var e=l.getInstance().getBirdNum(),t=this.node.getComponent(a).clips;null!=e&&(this.node.getComponent(a).defaultClip=t[e-1]),c.on(d.EventType.KEY_DOWN,this.onKeyDown,this),c.on(d.EventType.KEY_PRESSING,this.onKeyDown,this)},s.onKeyDown=function(e){e.keyCode==p.SPACE&&(this.speed=7)},s.update=function(e){if(l.getInstance().getGamePlayActive()){this.speed-=.3;var t=this.node.position.y;this.node.setPosition(0,t+=this.speed,1)}},i}(u))||g);i._RF.pop()}}}));

System.register("chunks:///_virtual/gameIntro.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./MetaMaskManager.ts"],(function(e){"use strict";var t,o,n,i,a,r,c,l,s,u,d,p,g,f,m,y,b,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.defineProperty},function(e){r=e.cclegacy,c=e._decorator,l=e.Node,s=e.Prefab,u=e.JsonAsset,d=e.tween,p=e.Vec3,g=e.Label,f=e.director,m=e.Component},function(e){y=e.MyNode,b=e.nodeHeight},function(e){h=e.MetaMaskManager}],execute:function(){var N,M,v,P,S,w,L,k,A,B,z,I,_,C,F,j,T;r._RF.push({},"44207K1BwRPtbIjej0WHa1q","gameIntro",void 0);var V=c.ccclass,q=c.property;e("gameIntro",(N=V("gameIntro"),M=q({type:l}),v=q({type:l}),P=q({type:l}),S=q({type:s}),w=q({type:s}),L=q({type:s}),k=q(u),N((z=t((B=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,n(i(t),"gamePlayLogo",z,i(t)),n(i(t),"practiceMode",I,i(t)),n(i(t),"connectMetamask",_,i(t)),n(i(t),"popupPrefab",C,i(t)),n(i(t),"loadingPrefab",F,i(t)),n(i(t),"birdSelectionPrefeb",j,i(t)),n(i(t),"contractAbi",T,i(t)),a(i(t),"birdSelectionNode",null),a(i(t),"loadingNode",null),a(i(t),"popupNode",null),a(i(t),"metMaskLoggedin",!1),t}o(t,e);var r=t.prototype;return r.setLoading=function(e){this.loadingNode.myNode.active=e},r.addPrefabs=function(){this.popupNode=new y(this.popupPrefab,this.node,"PopUp"),this.popupNode.myNode.active=!1,this.birdSelectionNode=new y(this.birdSelectionPrefeb,this.node,"BirdSelection"),this.birdSelectionNode.myNode.active=!1,this.loadingNode=new y(this.loadingPrefab,this.node,"LoadingScreen"),this.loadingNode.myNode.active=!1},r.logoAnimation=function(){var e=this;this.gamePlayLogo.setScale(5,5,5),d(this.gamePlayLogo).to(.2,{scale:new p(1,1,1)}).delay(.5).call((function(){e.ButtonVisiblity(1)})).by(.2,{scale:new p(-.2,-.2,-.2),position:new p(0,100,0)}).start()},r.ButtonVisiblity=function(e){d(this.practiceMode).to(.2,{scale:new p(e,e,1)}).start(),d(this.connectMetamask).to(.2,{scale:new p(e,e,1)}).start()},r.instanciateMetamaskManager=function(e){h.getInstance().initiateWeb3()&&h.getInstance().checkWalletStatus((function(e,t){var o=e.code,n=e.message;console.log("code received: "+o+" message: "+n+" response: ",t)})),h.getInstance().initContract(this.contractAbi.json.abi,e)},r.connectToMetaMask=function(e){var t=this;this.loadingNode.myNode.active=!0;var o=this.loadingNode.myScript;if(o.rotate=!0,this.metMaskLoggedin)this.ActivateBirdSelectionScreen();else try{"undefined"!==window.ethereum&&console.log("MetaMask is installed!");window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){var n=e[0];t.connectMetamask.getChildByName("Message").getComponent(g).string="Select Bird",console.log({val:e}),console.log({account:n}),console.log("Login Successfull"),t.popupNode.myScript.setText("Login Successfull !"," Go Ahead :)"),t.popupNode.myNode.active=!0,o.rotate=!1,t.loadingNode.myNode.active=!1,t.metMaskLoggedin=!0,t.instanciateMetamaskManager(n)})).catch((function(e){o.rotate=!1,t.loadingNode.myNode.active=!1,t.popupNode.myScript.setText("Login Failed !"," Please try Again :)"),t.popupNode.myNode.active=!0,console.log({err:e}),console.log("Login Falied")})).finally((function(){console.log("Finally")}))}catch(e){console.log("Error connecting metamask")}},r.startPractiseMode=function(){f.loadScene("GamePlay")},r.ActivateBirdSelectionScreen=function(){var e=this;this.birdSelectionNode.myScript.loadBaseUrl(this);var t=b(this.node)+b(this.gamePlayLogo);d(this.gamePlayLogo).to(.2,{position:new p(0,t,1)}).call((function(){e.ButtonVisiblity(0)})).start()},r.start=function(){this.logoAnimation(),this.addPrefabs()},t}(m)).prototype,"gamePlayLogo",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(B.prototype,"practiceMode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(B.prototype,"connectMetamask",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(B.prototype,"popupPrefab",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(B.prototype,"loadingPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(B.prototype,"birdSelectionPrefeb",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(B.prototype,"contractAbi",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=B))||A));r._RF.pop()}}}));

System.register("chunks:///_virtual/backGround.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var r,t,n,i,o,a,c,s,u,d,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,c=e._decorator,s=e.Prefab,u=e.Component},function(e){d=e.MyNode},function(e){l=e.gameManager}],execute:function(){var f,p,b,h,y;a._RF.push({},"4c321fxcSxNZohtmtxdzfBt","backGround",void 0);var g=c.ccclass,m=c.property;e("backGround",(f=g("backGround"),p=m({type:s}),f((y=r((h=function(e){function r(){for(var r,t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return r=e.call.apply(e,[this].concat(a))||this,n(i(r),"BirdPrefab",y,i(r)),o(i(r),"birdNode",null),r}return t(r,e),r.prototype.start=function(){this.birdNode=new d(this.BirdPrefab,this.node,"birdMove"),l.getInstance().setBirdNode(this.birdNode)},r}(u)).prototype,"BirdPrefab",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=h))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/SceneTransition.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,e,o,i,r,s,c,a,u,p;return{setters:[function(n){t=n.inheritsLoose,e=n.defineProperty,o=n.assertThisInitialized},function(n){i=n.cclegacy,r=n._decorator,s=n.game,c=n.tween,a=n.Vec3,u=n.director,p=n.Component}],execute:function(){var d;i._RF.push({},"73434uPzNVE4r6nH2jVVvQr","SceneTransition",void 0);var l=r.ccclass;r.property,n("SceneTransition",l("SceneTransition")(d=function(n){function i(){for(var t,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=n.call.apply(n,[this].concat(r))||this,e(o(t),"xpos",0),t}t(i,n);var r=i.prototype;return r.onLoad=function(){s.addPersistRootNode(this.node),console.log("presistent nod ecreated")},r.endSupport=function(n){},r.changeScene=function(n){this.xpos=this.node.position.x,c(this.node).to(1,{position:new a(0,0,0)},{easing:"cubicInOut"}).start(),u.preloadScene(n,(function(){c(this.node).to(1,{position:new a(this.xpos,0,1)},{easing:"cubicInOut"}).call((function(){u.loadScene(n)})).start()}))},r.start=function(){},i}(p))||d);i._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"983031nyw9FQIJwcEg5FXwu","Constants",void 0);e("LOG_VISIBILITY",{NETWORK:!0,CEHCK:!0,INFO:!0,MISCELLANEOUS:!0,BLOCKCHAIN:!0}),e("MESSAGE_CODE",{META_MASK_NOT_INSTALLED:0,META_MASK_NOT_LOGIN:1,META_MASK_LOGIN:2}),e("MESSAGE",{META_MASK_NOT_INSTALLED:"You don't have metamask installed on your browser, install it from here: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",META_MASK_NOT_LOGIN:"You have to login metamask before proceeding",META_MASK_LOGIN:"Login Successful"});t._RF.pop()}}}));

System.register("chunks:///_virtual/gameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.defineProperty},function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"999482RUq9KfaxUz132pHu+","gameManager",void 0);var r=e("gameManager",function(){function e(){if(t(this,"_gamePlayActive",!1),t(this,"_currentScore",0),t(this,"_birdNode",null),t(this,"_birdSelected",null),t(this,"_birdNum",null),e._instance)throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");e._instance=this}var n=e.prototype;return n.setBirdNum=function(e){this._birdNum=e},n.getBirdNum=function(){return this._birdNum},n.setCurrentScore=function(e){this._currentScore=e},n.setBirdSelected=function(e){this._birdSelected=e},n.getBirdSelected=function(){return this._birdSelected},n.getCurrentScore=function(){return this._currentScore},n.addScore=function(e){this._currentScore=e+this._currentScore},n.setBirdNode=function(e){this._birdNode=e},n.getBirdNode=function(){return this._birdNode},e.getInstance=function(){return e._instance},n.setGamePlayActive=function(e){this._gamePlayActive=e},n.getGamePlayActive=function(){return this._gamePlayActive},e}());t(r,"_instance",new r),n._RF.pop()}}}));

System.register("chunks:///_virtual/Obstacles.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,s,o,i,r,n,d,u,h,l,a,c,p,m,U,y,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,s=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,r=e.defineProperty},function(e){n=e.cclegacy,d=e._decorator,u=e.Prefab,h=e.CCFloat,l=e.Node,a=e.UITransform,c=e.tween,p=e.Vec3,m=e.Component},function(e){U=e.MyNode,y=e.collisionCheck},function(e){f=e.gameManager}],execute:function(){var g,H,N,P,w,b,D,S,W,C,v,x,I;n._RF.push({},"9c72a5EhxxPnLWq2giZq7FJ","Obstacles",void 0);var T=d.ccclass,B=d.property;e("Obstacles",(g=T("Obstacles"),H=B({type:u}),N=B(h),P=B({type:l}),w=B({type:h}),b=B({type:u}),g((W=t((S=function(e){function t(){for(var t,s=arguments.length,n=new Array(s),d=0;d<s;d++)n[d]=arguments[d];return t=e.call.apply(e,[this].concat(n))||this,o(i(t),"pipePrefab",W,i(t)),o(i(t),"speed",C,i(t)),o(i(t),"hudNode",v,i(t)),o(i(t),"TragetScore",x,i(t)),o(i(t),"wormPrefab",I,i(t)),r(i(t),"UsedWorm",[]),r(i(t),"UnusedWorm",[]),r(i(t),"UsedUpHurdle",[]),r(i(t),"UnusedUpHurdle",[]),r(i(t),"UsedDownHurdle",[]),r(i(t),"UnusedDownHurdle",[]),r(i(t),"birdNode",null),r(i(t),"spaceToPass",80),r(i(t),"minPipePos",-100),r(i(t),"maxPipePos",150),r(i(t),"outXpos",0),r(i(t),"schedulerStarted",!1),r(i(t),"hudScript",null),r(i(t),"scheduleTime",1.5),r(i(t),"launchBug",!1),t}s(t,e);var n=t.prototype;return n.start=function(){this.hudScript=this.hudNode.getComponent("Hud"),this.birdNode=f.getInstance().getBirdNode().myNode.getChildByName("Colider"),this.setUpHurdlesNode(this.UnusedUpHurdle,8,1,this.pipePrefab),this.setUpHurdlesNode(this.UnusedDownHurdle,8,-1,this.pipePrefab),this.setUpHurdlesNode(this.UnusedWorm,4,1,this.wormPrefab),this.outXpos=this.node.getComponent(a).width/2+this.pipePrefab.data.width/2},n.startGame=function(){this.schedulerStarted=!0,this.randomPosSch(),this.schedule(this.randomPosSch,this.scheduleTime)},n.randomPosSch=function(){var e=this.generateRandom(this.maxPipePos,this.minPipePos);this.lauchHurdle(this.spaceToPass,e)},n.generateRandom=function(e,t){return Math.floor(Math.random()*(e-t+1)+t)},n.setUpHurdlesNode=function(e,t,s,o){for(var i=null,r=o.data.width/2,n=this.node.getComponent(a).width/2,d=0;d<t;d++)(i=new U(o,this.node)).myNode.setScale(1,s,1),i.myNode.setPosition(r+n,0,1),e.push(i)},n.lauchHurdle=function(e,t){if(this.UnusedUpHurdle.length>=1){var s=this.UnusedUpHurdle.pop(),o=this.UnusedDownHurdle.pop();if(s.myNode.setPosition(this.outXpos,t+e,1),o.myNode.setPosition(this.outXpos,t-e,1),this.UsedUpHurdle.push(s),this.UsedDownHurdle.push(o),this.launchBug){this.launchBug=!1;var i=this.generateRandom(this.maxPipePos,this.minPipePos),r=this.UnusedWorm.pop();r.myNode.setPosition(s.myNode.position.x-150,i,1),r.myNode.setScale(1,1,1),this.UsedWorm.push(r)}}},n.collisionCheck=function(e,t){return e=e.getChildByName("colider"),t=t.getChildByName("colider"),!(!y(e,this.birdNode)&&!y(t,this.birdNode))&&(this.hudScript.gameOver(),f.getInstance().setGamePlayActive(!1),this.flushAllHurdles(),!0)},n.flushAllHurdles=function(){for(;0!=this.UsedDownHurdle.length;)this.UsedDownHurdle[0].scoreCount=!1,this.UsedDownHurdle[0].myNode.setPosition(this.outXpos,0,1),this.UsedUpHurdle[0].myNode.setPosition(this.outXpos,0,1),this.recycleHurdles(0);for(;0!=this.UsedWorm.length;)this.UsedWorm[0].myNode.setPosition(this.outXpos,0,1),this.recycleWorm(0)},n.moveHurdles=function(e){for(var t=0,s=0;s<this.UsedDownHurdle.length&&(t=this.UsedDownHurdle[s].myNode.position.x,this.UsedDownHurdle[s].myNode.setPosition(t-=this.speed,this.UsedDownHurdle[s].myNode.position.y,1),this.UsedUpHurdle[s].myNode.setPosition(t-=this.speed,this.UsedUpHurdle[s].myNode.position.y,1),!this.collisionCheck(this.UsedUpHurdle[s].myNode,this.UsedDownHurdle[s].myNode));s++)this.UsedDownHurdle[s].myNode.position.x<0&&!this.UsedDownHurdle[s].scoreCount&&(this.UsedDownHurdle[s].scoreCount=!0,f.getInstance().addScore(1)),this.UsedDownHurdle[s].myNode.position.x<=-this.outXpos&&this.recycleHurdles(s);for(s=0;s<this.UsedWorm.length;s++)if(t=this.UsedWorm[s].myNode.position.x,this.UsedWorm[s].myNode.setPosition(t-=this.speed,this.UsedWorm[s].myNode.position.y,1),y(this.UsedWorm[s].myNode,this.birdNode)&&(c(this.UsedWorm[s].myNode).to(.1,{scale:new p(1.2,1.2,1)}).to(.1,{scale:new p(0,0,1)}).start(),f.getInstance().addScore(2),this.recycleWorm(s)),this.UsedWorm[s].myNode.position.x<=-this.outXpos){this.recycleWorm(s);break}},n.recycleWorm=function(e){this.UnusedWorm.push(this.UsedWorm[e]),this.UsedWorm.splice(e,1)},n.recycleHurdles=function(e){this.UsedDownHurdle[e].scoreCount=!1,this.UnusedDownHurdle.push(this.UsedDownHurdle[e]),this.UsedDownHurdle.splice(e,1),this.UnusedUpHurdle.push(this.UsedUpHurdle[e]),this.UsedUpHurdle.splice(e,1)},n.update=function(e){this.UsedUpHurdle.length>=1&&this.moveHurdles(e),!f.getInstance().getGamePlayActive()&&this.schedulerStarted&&(this.flushAllHurdles(),this.schedulerStarted=!1,this.unschedule(this.randomPosSch)),f.getInstance().getGamePlayActive()&&!this.schedulerStarted&&this.startGame(),f.getInstance().getCurrentScore()==this.TragetScore&&(this.TragetScore=f.getInstance().getCurrentScore()+10,this.launchBug=!0)},t}(m)).prototype,"pipePrefab",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(S.prototype,"speed",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 6}}),v=t(S.prototype,"hudNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(S.prototype,"TragetScore",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),I=t(S.prototype,"wormPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=S))||D));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameOver.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,n,r,o,i,a,s,c,u,l,p,d,g,m,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,c=e.Node,u=e.tween,l=e.Vec3,p=e.Label,d=e.director,g=e.Component},function(e){m=e.nodeHeight},function(e){f=e.gameManager}],execute:function(){var v,h,y,N,b,w,S,C,G;a._RF.push({},"a92c6VFHlFCMaOQe99YgVDA","GameOver",void 0);var M=s.ccclass,O=s.property;e("GameOver",(v=M("GameOver"),h=O({type:c}),y=O({type:c}),N=O({type:c}),v((S=t((w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,r(o(t),"gameoverNode",S,o(t)),r(o(t),"pauseNode",C,o(t)),r(o(t),"score",G,o(t)),i(o(t),"parentNode",null),t}n(t,e);var a=t.prototype;return a.gameOver=function(){this.gameoverNode.active=!0,this.pauseNode.active=!1,u(this.node).to(.3,{position:new l(0,0,0)}).start(),this.score.getComponent(p).string="Score : "+f.getInstance().getCurrentScore()},a.gamePaused=function(e){this.parentNode=e,this.gameoverNode.active=!1,this.pauseNode.active=!0,u(this.node).to(.3,{position:new l(0,0,0)}).call((function(){d.pause()})).start()},a.gameResume=function(){this.parentNode.touchRestrict.active=!1,u(this.node).to(.2,{position:new l(0,m(this.node)+m(this.node.parent),0)}).start(),d.resume()},a.goToMainMenu=function(){d.resume(),f.getInstance().setGamePlayActive(!1),f.getInstance().setCurrentScore(0),d.loadScene("BirdSelection")},a.restartGame=function(){d.resume(),f.getInstance().setCurrentScore(0),d.loadScene("GamePlay")},a.start=function(){},t}(g)).prototype,"gameoverNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(w.prototype,"pauseNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(w.prototype,"score",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=w))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/BirdSelection.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts","./MetaMaskManager.ts"],(function(t){"use strict";var e,n,i,r,a,o,s,d,l,c,u,h,g,m,f,p,B,C,v,b,y,I,S,T,w,N;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized,a=t.defineProperty},function(t){o=t.cclegacy,s=t._decorator,d=t.Prefab,l=t.Node,c=t.SpriteFrame,u=t.CCFloat,h=t.Button,g=t.assetManager,m=t.Texture2D,f=t.Sprite,p=t.tween,B=t.Vec3,C=t.director,v=t.Label,b=t.UITransform,y=t.instantiate,I=t.Component},function(t){S=t.nodeWidth,T=t.nodeHeight},function(t){w=t.gameManager},function(t){N=t.MetaMaskManager}],execute:function(){var _,F,M,k,L,P,z,O,R,U,A,x,D,H,G,E,J;o._RF.push({},"a9ffaBpJCtKqatfeTkvLXJt","BirdSelection",void 0);var W=s.ccclass,j=s.property;t("BirdSelection",(_=W("BirdSelection"),F=j(d),M=j(l),k=j(l),L=j(l),P=j({type:c}),z=j({type:u}),O=j({type:l}),_((A=e((U=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o))||this,i(r(e),"BirdCardPrefab",A,r(e)),i(r(e),"content_node",x,r(e)),i(r(e),"view_node",D,r(e)),i(r(e),"start_node",H,r(e)),i(r(e),"ButtonImages",G,r(e)),i(r(e),"visibility",E,r(e)),i(r(e),"StartButton",J,r(e)),a(r(e),"BirdsCard",[]),a(r(e),"BirdsImages",[]),a(r(e),"BirdsId",[]),a(r(e),"numBirds",4),a(r(e),"baseUrl",null),a(r(e),"loader",null),e}n(e,t);var o=e.prototype;return o.removeSelected=function(){for(var t=0;t<this.BirdsCard.length;t++)this.BirdsCard[t].getComponent(h).normalSprite=this.ButtonImages[1]},o.setImages=function(t){var e,n=this;e=this.baseUrl+"/"+(t+1)+".png",g.loadRemote(e,(function(e,i){var r=new c,a=new m;a.image=i,r.texture=a,n.BirdsCard[t].getChildByName("Bird").getComponent(f).spriteFrame=r}))},o.unlock=function(t){for(var e=0;e<t.length;e++)this.BirdsCard[parseInt(t[e])-1].getChildByName("Lock").active=!1;this.loader.setLoading(!1)},o.unlockplane=function(){for(var t=this,e=function(e){t.BirdsCard[e].getComponent(h).interactable=!0,i=t.BirdsCard[e].getChildByName("text"),r=t.BirdsCard[e].getChildByName("locked"),t.BirdsCard[e].removeChild(i),t.BirdsCard[e].removeChild(r),t.BirdsCard[e].on(l.EventType.TOUCH_START,(function(t){this.removeallBorderImages(),this.BirdsCard[e].getComponent(h).normalSprite=this.border_image}),t)},n=0;n<5;n++){var i,r;e(n)}},o.loadBaseUrl=function(t){var e=this;this.loader=t,N.getInstance().baseAddressBirds().then((function(t){e.baseUrl=t,e.getTotalBirdies()})).catch((function(t){}))},o.getTotalBirdies=function(){var t=this;N.getInstance().getTotalBirdies().then((function(e){t.BirdsId=e,t.setCards()})).catch((function(t){}))},o.startGame=function(){p(this.StartButton).to(.2,{scale:new B(0,0,0)}).call((function(){C.loadScene("GamePlay")})).start()},o.mintedNFTS=function(){var t=this;N.getInstance().mintedBirdie().then((function(e){t.unlock(e)})).catch((function(t){}))},o.mintNFT=function(t,e){var n=this;N.getInstance().MintNFT(t).then((function(t){e.active=!1,n.loader.setLoading(!1)})).catch((function(t){n.loader.setLoading(!1)}))},o.clickOnNft=function(t){var e=t.target.getChildByName("Lock");e.active?(e.getChildByName("Message").getComponent(v).string="WAITING FOR CONFIRMATION",this.mintNFT(t.target.name,e)):(this.removeSelected(),t.target.getComponent(h).normalSprite=this.ButtonImages[0],w.getInstance().setBirdNum(parseInt(t.target.name)),w.getInstance().setBirdSelected(t.target.getChildByName("Bird").getComponent(f).spriteFrame),p(this.StartButton).to(.2,{scale:new B(1,1,1)}).start())},o.setCards=function(){var t=this.BirdCardPrefab.data.width,e=30,n=t*this.numBirds+e*(this.numBirds+1),i=n*(this.visibility/100);this.start_node.getComponent(b).width=i,this.view_node.getComponent(b).width=i,this.content_node.getComponent(b).width=n;for(var r=null,a=0;a<this.numBirds;a++)(r=y(this.BirdCardPrefab)).name=""+(a+1),this.content_node.addChild(r),r.setPosition(-(n/2-S(r))+t*a+e,-T(r),1),e+=30,r.on(l.EventType.TOUCH_START,this.clickOnNft,this),this.BirdsCard.push(r),this.setImages(a);this.node.active=!0,this.mintedNFTS()},o.onLoad=function(){},e}(I)).prototype,"BirdCardPrefab",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(U.prototype,"content_node",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(U.prototype,"view_node",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(U.prototype,"start_node",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=e(U.prototype,"ButtonImages",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),E=e(U.prototype,"visibility",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 75}}),J=e(U.prototype,"StartButton",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=U))||R));o._RF.pop()}}}));

System.register("chunks:///_virtual/LoadingScreen.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,r,o,i,c,a,l,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.defineProperty},function(e){c=e.cclegacy,a=e._decorator,l=e.Node,s=e.Component}],execute:function(){var u,p,d,f,g;c._RF.push({},"c84e69IheFOmpoX8ZvfLC1z","LoadingScreen",void 0);var y=a.ccclass,h=a.property;e("LoadingScreen",(u=y("LoadingScreen"),p=h({type:l}),u((g=n((f=function(e){function n(){for(var n,t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return n=e.call.apply(e,[this].concat(c))||this,r(o(n),"loadingIcon",g,o(n)),i(o(n),"rotate",!1),n}return t(n,e),n.prototype.update=function(e){this.rotate&&(this.loadingIcon.angle+=1)},n}(s)).prototype,"loadingIcon",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));c._RF.pop()}}}));

System.register("chunks:///_virtual/MetaMaskManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./web3.min.js","./web3.min.mjs_cjs=&original=.js"],(function(t){"use strict";var n,e,c,s,i,r,a;return{setters:[function(t){n=t.defineProperty,e=t.inheritsLoose,c=t.assertThisInitialized},function(t){s=t.cclegacy,i=t._decorator,r=t.Component},function(t){a=t.default},null],execute:function(){var o,u,l;s._RF.push({},"cccd4GQfkFARqVzt3zb+nef","MetaMaskManager",void 0);var f=i.ccclass;i.property,t("MetaMaskManager",f("MetaMaskManager")((l=u=function(t){function s(){for(var e,s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i))||this,n(c(e),"web3Instance",null),n(c(e),"contract",null),n(c(e),"userAddress",null),n(c(e),"birdsBaseAddress",null),e}e(s,t),s.getInstance=function(){return s._instance||(s._instance=new s),s._instance};var i=s.prototype;return i.initiateWeb3=function(){return this.web3Instance=new a(a.givenProvider||"ws://localhost:8545"),!!this.web3Instance},i.checkWalletStatus=function(t){this.web3Instance.eth.getAccounts((function(n,e){null!=n?t({code:"META_MASK_NOT_INSTALLED",message:"META_MASK_NOT_INSTALLED"},null):0==e.length?t({code:"META_MASK_NOT_LOGIN",message:"META_MASK_NOT_LOGIN"},null):t({code:"META_MASK_LOGIN",message:"META_MASK_LOGIN"},e[0])}))},i.initContract=function(t,n){return this.userAddress=n,this.contract=new this.web3Instance.eth.Contract(JSON.parse(JSON.stringify(t)),"0xD6fAe78F2B58Ec88Df53E124b6883DB59cc4137A"),!!this.contract},i.baseAddressBirds=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getBaseURI().call().then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.getTotalBirdies=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getAllBirdies().call().then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.mintedBirdie=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getMintedBirdie().call({from:t.userAddress}).then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.MintNFT=function(t){var n=this;return new Promise((function(e,c){var s=a.utils.toWei(.01.toString(),"ether");n.contract.methods.mintNFT(t).send({from:n.userAddress,value:s}).then((function(t){e(t)})).catch((function(t){c(t)}))}))},i.start=function(){},s}(r),n(u,"_instance",void 0),o=l))||o);s._RF.pop()}}}));

System.register("chunks:///_virtual/MoveBase.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,i,o,n,s,r,a,l,d,c,u,h,p,f,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized,s=e.defineProperty},function(e){r=e.cclegacy,a=e._decorator,l=e.Prefab,d=e.CCFloat,c=e.Node,u=e.instantiate,h=e.UITransform,p=e.Component},function(e){f=e.collisionCheck},function(e){y=e.gameManager}],execute:function(){var g,N,b,m,v,P,B,C,w;r._RF.push({},"fca35lbYMRH6pDuxDKKIL6T","MoveBase",void 0);var M=a.ccclass,x=a.property;e("MoveBase",(g=M("MoveBase"),N=x({type:l}),b=x(d),m=x({type:c}),g((B=t((P=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,o(n(t),"BasePrefab",B,n(t)),o(n(t),"speed",C,n(t)),o(n(t),"hudNode",w,n(t)),s(n(t),"startParralax",!1),s(n(t),"tileNodes",[]),s(n(t),"birdNode",null),t}i(t,e);var r=t.prototype;return r.start=function(){this.birdNode=y.getInstance().getBirdNode().myNode.getChildByName("Colider");for(var e=null,t=this.BasePrefab.data.width,i=0;i<3;i++)e=u(this.BasePrefab),this.node.addChild(e),e.setPosition(t*i,e.position.y,1),this.tileNodes.push(e)},r.checktoRecycle=function(e,t){var i=0;i=0==t?this.tileNodes[2].position.x+e.getComponent(h).width:this.tileNodes[t-1].position.x+e.getComponent(h).width,e.setPosition(i-5,e.position.y,1)},r.update=function(e){if(y.getInstance().getGamePlayActive())for(var t=null,i=0,o=0;o<this.tileNodes.length;o++){if(i=this.tileNodes[o].position.x,this.tileNodes[o].setPosition(i-this.speed*e,this.tileNodes[o].position.y,1),this.tileNodes[o].position.x<-this.BasePrefab.data.width&&this.checktoRecycle(this.tileNodes[o],o),t=this.tileNodes[o].getChildByName("Colider"),f(t,this.birdNode))y.getInstance().setGamePlayActive(!1),this.hudNode.getComponent("Hud").gameOver()}},t}(p)).prototype,"BasePrefab",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(P.prototype,"speed",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 40}}),w=t(P.prototype,"hudNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=P))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./PopUp.ts","./Common.ts","./gameManager.ts","./Hud.ts","./birdMove.ts","./MetaMaskManager.ts","./gameIntro.ts","./backGround.ts","./SceneTransition.ts","./Constants.ts","./Obstacles.ts","./GameOver.ts","./BirdSelection.ts","./LoadingScreen.ts","./MoveBase.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

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