System.register("chunks:///_virtual/PopUp.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,r,o,a,c,l,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Node,l=e.Label,p=e.Component}],execute:function(){var s,u,h,d,f,g,v,y,b,N,m;o._RF.push({},"04e9fYcGexArpMF6IT1EZZs","PopUp",void 0);var x=a.ccclass,P=a.property;e("PopUp",(s=x("PopUp"),u=P({type:c}),h=P({type:c}),d=P({type:c}),f=P({type:c}),s((y=t((v=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,n(r(t),"headingNode",y,r(t)),n(r(t),"messageNode",b,r(t)),n(r(t),"TextNode",N,r(t)),n(r(t),"helpScreen",m,r(t)),t}i(t,e);var o=t.prototype;return o.onLoad=function(){this.helpScreen.active=!1},o.setText=function(e,t,i){void 0===e&&(e=null),void 0===t&&(t=null),i?(this.helpScreen.active=!0,this.TextNode.active=!1):(this.helpScreen.active=!1,this.TextNode.active=!0,this.headingNode.getComponent(l).string=e,this.messageNode.getComponent(l).string=t)},o.closePoP=function(){this.helpScreen.active=!1,this.TextNode.active=!1,this.helpScreen.active=!1,this.node.active=!1},t}(p)).prototype,"headingNode",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(v.prototype,"messageNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=t(v.prototype,"TextNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(v.prototype,"helpScreen",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=v))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/Common.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,i,r,c,s,u,p;return{setters:[function(t){n=t.defineProperty},function(t){o=t.cclegacy,e=t._decorator,i=t.tween,r=t.Vec3,c=t.UITransform,s=t.Sprite,u=t.Intersection2D,p=t.instantiate}],execute:function(){t({collisionCheck:function(t,n){if(null!=t&&null!=n){var o,e;return u.rectRect(null===(o=t.getComponent(c))||void 0===o?void 0:o.getBoundingBoxToWorld(),null===(e=n.getComponent(c))||void 0===e?void 0:e.getBoundingBoxToWorld())}},generateRandom:function(t,n){return Math.floor(Math.random()*(t-n+1)+n)},getScript:function(t,n){return t.getComponent(n)},getXposition:function(t){return t.position.x},getYposition:function(t){return t.position.y},nodeHeight:function(t){return t.getComponent(c).height/2},nodeWidth:function(t){return t.getComponent(c).width/2},popClose:function(t,n){i(t).to(n,{scale:new r(0,0,0)}).start()},popOpen:function(t,n){i(t).to(n,{scale:new r(1,1,1)}).start()},setSpriteFrame:function(t,n){t.getComponent(s).spriteFrame=n}}),o._RF.push({},"09414S9BedCerGg82rTy4Df","Common",void 0);e.ccclass,e.property;t("snail",function(){function t(){n(this,"snail",void 0)}return t.prototype.setSnail=function(t){this.snail=t},t}()),t("MyNode",(function(t,o,e){void 0===e&&(e=null),n(this,"myNode",void 0),n(this,"myScript",void 0),n(this,"scoreCount",!1),this.myNode=p(t),e&&(this.myScript=this.myNode.getComponent(e)),o&&o.addChild(this.myNode)}));o._RF.pop()}}}));

System.register("chunks:///_virtual/Hud.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,r,n,i,o,a,c,u,s,l,p,h,g,d,m,f,y,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,c=e._decorator,u=e.Node,s=e.Prefab,l=e.Label,p=e.input,h=e.Input,g=e.tween,d=e.Vec3,m=e.Component},function(e){f=e.MyNode,y=e.nodeHeight},function(e){v=e.gameManager}],execute:function(){var S,b,N,P,O,w,I,R,z,C,H;a._RF.push({},"201c2UqkexLk7JZcaD57mI3","Hud",void 0);var _=c.ccclass,D=c.property;e("Hud",(S=_("Hud"),b=D({type:u}),N=D({type:s}),P=D({type:u}),O=D({type:u}),S((R=t((I=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n(i(t),"ScoreNode",R,i(t)),n(i(t),"gameOverPrefab",z,i(t)),n(i(t),"tapPlayNode",C,i(t)),n(i(t),"touchRestrict",H,i(t)),o(i(t),"currentScore",0),o(i(t),"gameOverNode",null),t}r(t,e);var a=t.prototype;return a.updateScore=function(){var e="";e=this.currentScore<=9?"Score : 0"+this.currentScore:"Score :"+this.currentScore,this.ScoreNode.getComponent(l).string=e},a.start=function(){this.gameOverNode=new f(this.gameOverPrefab,this.node,"GameOver"),this.gameOverNode.myNode.setPosition(0,y(this.node)+y(this.gameOverNode.myNode),1),this.currentScore=v.getInstance().getCurrentScore(),this.updateScore(),this.touchRestrict.active=!1,p.on(h.EventType.KEY_DOWN,this.tapToplay,this)},a.gameOver=function(){this.touchRestrict.active=!0,this.gameOverNode.myScript.gameOver()},a.tapToplay=function(e){v.getInstance().getGamePlayActive()||this.touchRestrict.active||g(this.tapPlayNode).to(.2,{scale:new d(0,0,0)}).call((function(){v.getInstance().setGamePlayActive(!0)})).start()},a.gamePause=function(){var e=this.gameOverNode.myScript;this.touchRestrict.active=!0,e.gamePaused(this)},a.update=function(e){this.currentScore!=v.getInstance().getCurrentScore()&&(this.currentScore=v.getInstance().getCurrentScore(),this.updateScore())},t}(m)).prototype,"ScoreNode",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(I.prototype,"gameOverPrefab",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(I.prototype,"tapPlayNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(I.prototype,"touchRestrict",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=I))||w));a._RF.pop()}}}));

System.register("chunks:///_virtual/birdMove.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts"],(function(e){"use strict";var t,n,i,o,s,a,r,p,c,l,u,d,g,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.defineProperty,o=e.assertThisInitialized,s=e.initializerDefineProperty},function(e){a=e.cclegacy,r=e._decorator,p=e.AudioClip,c=e.Sprite,l=e.Animation,u=e.input,d=e.Input,g=e.Component},function(e){h=e.gameManager}],execute:function(){var m,y,f,v,C;a._RF.push({},"410d6Cui6xPKbfK80nDdRHf","birdMove",void 0);var I=r.ccclass,P=r.property;e("birdMove",(m=I("birdMove"),y=P(p),m((C=t((v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,i(o(t),"speed",0),s(o(t),"JumpClip",C,o(t)),i(o(t),"gameSound",null),i(o(t),"lastPos",0),t}n(t,e);var a=t.prototype;return a.onLoad=function(){h.getInstance().getBirdSelected()&&(this.node.getComponent(c).spriteFrame=h.getInstance().getBirdSelected());var e=h.getInstance().getBirdNum(),t=this.node.getComponent(l).clips;null!=e&&(this.node.getComponent(l).defaultClip=t[e]),u.on(d.EventType.KEY_DOWN,this.onKeyDown,this),u.on(d.EventType.KEY_PRESSING,this.onKeyDown,this),this.gameSound=h.getInstance().getGameSound()},a.onKeyDown=function(e){this.gameSound&&h.getInstance().getGamePlayActive()&&this.JumpClip.play(),h.getInstance().getGamePlayActive()&&(this.speed=7,this.node.angle=60)},a.update=function(e){if(h.getInstance().getGamePlayActive()){this.speed-=.3,this.speed<-2&&(this.node.angle=-60);var t=this.node.position.y,n=t+=this.speed;this.node.setPosition(0,n,1)}},t}(g)).prototype,"JumpClip",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=v))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/gameIntro.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts","./MetaMaskManager.ts"],(function(e){"use strict";var t,n,o,i,a,r,c,s,l,u,d,p,g,m,h,f,b,y,S,N,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.defineProperty},function(e){r=e.cclegacy,c=e._decorator,s=e.Node,l=e.Prefab,u=e.SpriteFrame,d=e.JsonAsset,p=e.Label,g=e.AudioSource,m=e.Sprite,h=e.tween,f=e.Vec3,b=e.director,y=e.Component},function(e){S=e.MyNode},function(e){N=e.gameManager},function(e){v=e.MetaMaskManager}],execute:function(){var M,w,P,B,k,L,I,C,z,A,F,G,R,_,j,D,T,V,q,x,W,H,U,J,K;r._RF.push({},"44207K1BwRPtbIjej0WHa1q","gameIntro",void 0);var E=c.ccclass,O=c.property;e("gameIntro",(M=E("gameIntro"),w=O({type:s}),P=O({type:s}),B=O({type:s}),k=O({type:l}),L=O({type:l}),I=O({type:l}),C=O(u),z=O({type:s}),A=O({type:s}),F=O({type:s}),G=O(d),M((j=t((_=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,o(i(t),"gamePlayLogo",j,i(t)),o(i(t),"practiceMode",D,i(t)),o(i(t),"connectMetamask",T,i(t)),o(i(t),"popupPrefab",V,i(t)),o(i(t),"loadingPrefab",q,i(t)),o(i(t),"birdSelectionPrefeb",x,i(t)),o(i(t),"SoundButton",W,i(t)),o(i(t),"backButton",H,i(t)),o(i(t),"SoundButtonNode",U,i(t)),o(i(t),"touchRestrict",J,i(t)),o(i(t),"contractAbi",K,i(t)),a(i(t),"birdSelectionNode",null),a(i(t),"loadingNode",null),a(i(t),"popupNode",null),a(i(t),"metMaskLoggedin",!1),t}n(t,e);var r=t.prototype;return r.setLoading=function(e){this.touchRestrict.active=!!e,this.loadingNode.myNode.active=e},r.addPrefabs=function(){this.touchRestrict.active=!1,this.birdSelectionNode=new S(this.birdSelectionPrefeb,this.node,"BirdSelection"),this.birdSelectionNode.myNode.active=!1,this.birdSelectionNode.myScript.setDelegate(this),this.popupNode=new S(this.popupPrefab,this.node.parent,"PopUp"),this.popupNode.myNode.active=!1,this.loadingNode=new S(this.loadingPrefab,this.node,"LoadingScreen"),this.loadingNode.myNode.active=!1,N.getInstance().getLoggedIn()&&(this.connectMetamask.getChildByName("Message").getComponent(p).string="Start")},r.showPopup=function(e,t){this.popupNode.myScript.setText(e,t),this.popupNode.myNode.active=!0},r.gameSoundButton=function(){N.getInstance().getGameSound()?(N.getInstance().setGameSound(!1),this.node.getComponent(g).volume=0,this.SoundButtonNode.getComponent(m).spriteFrame=this.SoundButton[1]):(this.SoundButtonNode.getComponent(m).spriteFrame=this.SoundButton[0],N.getInstance().setGameSound(!0),this.node.getComponent(g).volume=1)},r.setGamesound=function(){N.getInstance().getGameSound()?(this.SoundButtonNode.getComponent(m).spriteFrame=this.SoundButton[0],this.node.getComponent(g).volume=1):(this.node.getComponent(g).volume=0,this.SoundButtonNode.getComponent(m).spriteFrame=this.SoundButton[1])},r.logoAnimation=function(){var e=this;this.gamePlayLogo.active=!0,this.gamePlayLogo.setScale(5,5,5),h(this.gamePlayLogo).to(.2,{scale:new f(1,1,1)}).delay(.5).call((function(){e.ButtonVisiblity(1)})).to(.2,{scale:new f(.8,.8,.8),position:new f(0,100,0)}).start()},r.ButtonVisiblity=function(e){h(this.practiceMode).to(.2,{scale:new f(e,e,1)}).start(),h(this.connectMetamask).to(.2,{scale:new f(e,e,1)}).start()},r.instanciateMetamaskManager=function(e){v.getInstance().initiateWeb3()&&v.getInstance().checkWalletStatus((function(e,t){var n=e.code,o=e.message;console.log("code received: "+n+" message: "+o+" response: ",t)})),v.getInstance().initContract(this.contractAbi.json.abi,e)},r.connectToMetaMask=function(e){var t=this;this.loadingNode.myNode.active=!0;var n=this.loadingNode.myScript;if(n.rotate=!0,N.getInstance().getLoggedIn())this.ActivateBirdSelectionScreen(),this.setLoading(!0);else try{"undefined"!==window.ethereum&&console.log("MetaMask is installed!");window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){var o=e[0];t.connectMetamask.getChildByName("Message").getComponent(p).string="Start",t.showPopup("Login Successfull !",""),n.rotate=!1,t.loadingNode.myNode.active=!1,N.getInstance().setLoggedIn(!0),t.instanciateMetamaskManager(o)})).catch((function(e){n.rotate=!1,t.loadingNode.myNode.active=!1,t.showPopup("Login Failed !"," Please try Again :)"),console.log({err:e}),console.log("Login Falied")})).finally((function(){console.log("Finally")}))}catch(e){this.loadingNode.myNode.active=!1,this.showPopup("Login Failed !"," MetaMask Not installed :)")}},r.clickBackButton=function(){this.backButton.active=!1,this.birdSelectionNode.myNode.active=!1,this.logoAnimation()},r.helpClick=function(){this.popupNode.myScript.setText("","",!0),this.popupNode.myNode.active=!0},r.startPractiseMode=function(){b.loadScene("GamePlay")},r.ActivateBirdSelectionScreen=function(){var e=this;this.backButton.active=!0,this.birdSelectionNode.myScript.loadBaseUrl(this),h(this.gamePlayLogo).to(.2,{scale:new f(5,5,5)}).call((function(){e.gamePlayLogo.active=!1,e.ButtonVisiblity(0)})).start()},r.start=function(){this.logoAnimation(),this.addPrefabs(),this.setGamesound()},t}(y)).prototype,"gamePlayLogo",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(_.prototype,"practiceMode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(_.prototype,"connectMetamask",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(_.prototype,"popupPrefab",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(_.prototype,"loadingPrefab",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(_.prototype,"birdSelectionPrefeb",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=t(_.prototype,"SoundButton",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),H=t(_.prototype,"backButton",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(_.prototype,"SoundButtonNode",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(_.prototype,"touchRestrict",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(_.prototype,"contractAbi",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=_))||R));r._RF.pop()}}}));

System.register("chunks:///_virtual/backGround.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,r,n,o,i,a,c,u,s,d,l,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.defineProperty},function(e){a=e.cclegacy,c=e._decorator,u=e.Prefab,s=e.AudioSource,d=e.Component},function(e){l=e.MyNode},function(e){p=e.gameManager}],execute:function(){var f,b,g,h,y;a._RF.push({},"4c321fxcSxNZohtmtxdzfBt","backGround",void 0);var m=c.ccclass,v=c.property;e("backGround",(f=m("backGround"),b=v({type:u}),f((y=t((h=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n(o(t),"BirdPrefab",y,o(t)),i(o(t),"birdNode",null),t}return r(t,e),t.prototype.start=function(){this.birdNode=new l(this.BirdPrefab,this.node,"birdMove"),p.getInstance().setBirdNode(this.birdNode),p.getInstance().getGameSound()||(this.node.getComponent(s).volume=0)},t}(d)).prototype,"BirdPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=h))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"983031nyw9FQIJwcEg5FXwu","Constants",void 0);e("LOG_VISIBILITY",{NETWORK:!0,CEHCK:!0,INFO:!0,MISCELLANEOUS:!0,BLOCKCHAIN:!0}),e("MESSAGE_CODE",{META_MASK_NOT_INSTALLED:0,META_MASK_NOT_LOGIN:1,META_MASK_LOGIN:2}),e("MESSAGE",{META_MASK_NOT_INSTALLED:"You don't have metamask installed on your browser, install it from here: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",META_MASK_NOT_LOGIN:"You have to login metamask before proceeding",META_MASK_LOGIN:"Login Successful"});t._RF.pop()}}}));

System.register("chunks:///_virtual/gameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.defineProperty},function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"999482RUq9KfaxUz132pHu+","gameManager",void 0);var i=e("gameManager",function(){function e(){if(t(this,"_gamePlayActive",!1),t(this,"_currentScore",0),t(this,"_birdNode",null),t(this,"_birdSelected",null),t(this,"_birdNum",null),t(this,"_gameSound",!0),t(this,"_loggedIn",!1),e._instance)throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");e._instance=this}var n=e.prototype;return n.setBirdNum=function(e){this._birdNum=e},n.getBirdNum=function(){return this._birdNum},n.setLoggedIn=function(e){this._loggedIn=e},n.getLoggedIn=function(){return this._loggedIn},n.getGameSound=function(){return this._gameSound},n.setGameSound=function(e){this._gameSound=e},n.setCurrentScore=function(e){this._currentScore=e},n.setBirdSelected=function(e){this._birdSelected=e},n.getBirdSelected=function(){return this._birdSelected},n.getCurrentScore=function(){return this._currentScore},n.addScore=function(e){this._currentScore=e+this._currentScore},n.setBirdNode=function(e){this._birdNode=e},n.getBirdNode=function(){return this._birdNode},e.getInstance=function(){return e._instance},n.setGamePlayActive=function(e){this._gamePlayActive=e},n.getGamePlayActive=function(){return this._gamePlayActive},e}());t(i,"_instance",new i),n._RF.pop()}}}));

System.register("chunks:///_virtual/Obstacles.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,s,o,i,r,n,d,u,h,l,a,c,p,m,U,y,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,s=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,r=e.defineProperty},function(e){n=e.cclegacy,d=e._decorator,u=e.Prefab,h=e.CCFloat,l=e.Node,a=e.UITransform,c=e.tween,p=e.Vec3,m=e.Component},function(e){U=e.MyNode,y=e.collisionCheck},function(e){f=e.gameManager}],execute:function(){var g,H,N,P,w,b,D,S,W,C,v,x,I;n._RF.push({},"9c72a5EhxxPnLWq2giZq7FJ","Obstacles",void 0);var T=d.ccclass,B=d.property;e("Obstacles",(g=T("Obstacles"),H=B({type:u}),N=B(h),P=B({type:l}),w=B({type:h}),b=B({type:u}),g((W=t((S=function(e){function t(){for(var t,s=arguments.length,n=new Array(s),d=0;d<s;d++)n[d]=arguments[d];return t=e.call.apply(e,[this].concat(n))||this,o(i(t),"pipePrefab",W,i(t)),o(i(t),"speed",C,i(t)),o(i(t),"hudNode",v,i(t)),o(i(t),"TragetScore",x,i(t)),o(i(t),"wormPrefab",I,i(t)),r(i(t),"UsedWorm",[]),r(i(t),"UnusedWorm",[]),r(i(t),"UsedUpHurdle",[]),r(i(t),"UnusedUpHurdle",[]),r(i(t),"UsedDownHurdle",[]),r(i(t),"UnusedDownHurdle",[]),r(i(t),"birdNode",null),r(i(t),"spaceToPass",80),r(i(t),"minPipePos",-100),r(i(t),"maxPipePos",150),r(i(t),"outXpos",0),r(i(t),"schedulerStarted",!1),r(i(t),"hudScript",null),r(i(t),"scheduleTime",1.5),r(i(t),"launchBug",!1),t}s(t,e);var n=t.prototype;return n.start=function(){this.hudScript=this.hudNode.getComponent("Hud"),this.birdNode=f.getInstance().getBirdNode().myNode.getChildByName("Colider"),this.setUpHurdlesNode(this.UnusedUpHurdle,8,1,this.pipePrefab),this.setUpHurdlesNode(this.UnusedDownHurdle,8,-1,this.pipePrefab),this.setUpHurdlesNode(this.UnusedWorm,4,1,this.wormPrefab),this.outXpos=this.node.getComponent(a).width/2+this.pipePrefab.data.width/2},n.startGame=function(){this.schedulerStarted=!0,this.randomPosSch(),this.schedule(this.randomPosSch,this.scheduleTime)},n.randomPosSch=function(){var e=this.generateRandom(this.maxPipePos,this.minPipePos);this.lauchHurdle(this.spaceToPass,e)},n.generateRandom=function(e,t){return Math.floor(Math.random()*(e-t+1)+t)},n.setUpHurdlesNode=function(e,t,s,o){for(var i=null,r=o.data.width/2,n=this.node.getComponent(a).width/2,d=0;d<t;d++)(i=new U(o,this.node)).myNode.setScale(1,s,1),i.myNode.setPosition(r+n,0,1),e.push(i)},n.lauchHurdle=function(e,t){if(this.UnusedUpHurdle.length>=1){var s=this.UnusedUpHurdle.pop(),o=this.UnusedDownHurdle.pop();if(s.myNode.setPosition(this.outXpos,t+e,1),o.myNode.setPosition(this.outXpos,t-e,1),this.UsedUpHurdle.push(s),this.UsedDownHurdle.push(o),this.launchBug){this.launchBug=!1;var i=this.generateRandom(this.maxPipePos,this.minPipePos),r=this.UnusedWorm.pop();r.myNode.setPosition(s.myNode.position.x-150,i,1),r.myNode.setScale(1,1,1),this.UsedWorm.push(r)}}},n.collisionCheck=function(e,t){return e=e.getChildByName("colider"),t=t.getChildByName("colider"),!(!y(e,this.birdNode)&&!y(t,this.birdNode))&&(this.hudScript.gameOver(),f.getInstance().setGamePlayActive(!1),this.flushAllHurdles(),!0)},n.flushAllHurdles=function(){for(;0!=this.UsedDownHurdle.length;)this.UsedDownHurdle[0].scoreCount=!1,this.UsedDownHurdle[0].myNode.setPosition(this.outXpos,0,1),this.UsedUpHurdle[0].myNode.setPosition(this.outXpos,0,1),this.recycleHurdles(0);for(;0!=this.UsedWorm.length;)this.UsedWorm[0].myNode.setPosition(this.outXpos,0,1),this.recycleWorm(0)},n.moveHurdles=function(e){for(var t=0,s=0;s<this.UsedDownHurdle.length&&(t=this.UsedDownHurdle[s].myNode.position.x,this.UsedDownHurdle[s].myNode.setPosition(t-=this.speed,this.UsedDownHurdle[s].myNode.position.y,1),this.UsedUpHurdle[s].myNode.setPosition(t-=this.speed,this.UsedUpHurdle[s].myNode.position.y,1),!this.collisionCheck(this.UsedUpHurdle[s].myNode,this.UsedDownHurdle[s].myNode));s++)this.UsedDownHurdle[s].myNode.position.x<0&&!this.UsedDownHurdle[s].scoreCount&&(this.UsedDownHurdle[s].scoreCount=!0,f.getInstance().addScore(1)),this.UsedDownHurdle[s].myNode.position.x<=-this.outXpos&&this.recycleHurdles(s);for(s=0;s<this.UsedWorm.length;s++)if(t=this.UsedWorm[s].myNode.position.x,this.UsedWorm[s].myNode.setPosition(t-=this.speed,this.UsedWorm[s].myNode.position.y,1),y(this.UsedWorm[s].myNode,this.birdNode)&&(c(this.UsedWorm[s].myNode).to(.1,{scale:new p(1.2,1.2,1)}).to(.1,{scale:new p(0,0,1)}).start(),f.getInstance().addScore(2),this.recycleWorm(s)),this.UsedWorm[s].myNode.position.x<=-this.outXpos){this.recycleWorm(s);break}},n.recycleWorm=function(e){this.UnusedWorm.push(this.UsedWorm[e]),this.UsedWorm.splice(e,1)},n.recycleHurdles=function(e){this.UsedDownHurdle[e].scoreCount=!1,this.UnusedDownHurdle.push(this.UsedDownHurdle[e]),this.UsedDownHurdle.splice(e,1),this.UnusedUpHurdle.push(this.UsedUpHurdle[e]),this.UsedUpHurdle.splice(e,1)},n.update=function(e){this.UsedUpHurdle.length>=1&&this.moveHurdles(e),!f.getInstance().getGamePlayActive()&&this.schedulerStarted&&(this.flushAllHurdles(),this.schedulerStarted=!1,this.unschedule(this.randomPosSch)),f.getInstance().getGamePlayActive()&&!this.schedulerStarted&&this.startGame(),f.getInstance().getCurrentScore()==this.TragetScore&&(this.TragetScore=f.getInstance().getCurrentScore()+10,this.launchBug=!0)},t}(m)).prototype,"pipePrefab",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(S.prototype,"speed",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 6}}),v=t(S.prototype,"hudNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(S.prototype,"TragetScore",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),I=t(S.prototype,"wormPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=S))||D));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameOver.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,n,r,o,i,a,s,c,u,l,p,d,g,m,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,c=e.Node,u=e.tween,l=e.Vec3,p=e.Label,d=e.director,g=e.Component},function(e){m=e.nodeHeight},function(e){f=e.gameManager}],execute:function(){var v,h,y,N,b,w,G,S,C;a._RF.push({},"a92c6VFHlFCMaOQe99YgVDA","GameOver",void 0);var P=s.ccclass,I=s.property;e("GameOver",(v=P("GameOver"),h=I({type:c}),y=I({type:c}),N=I({type:c}),v((G=t((w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,r(o(t),"gameoverNode",G,o(t)),r(o(t),"pauseNode",S,o(t)),r(o(t),"score",C,o(t)),i(o(t),"parentNode",null),t}n(t,e);var a=t.prototype;return a.gameOver=function(){this.gameoverNode.active=!0,this.pauseNode.active=!1,u(this.node).to(.3,{position:new l(0,0,0)}).start(),this.score.getComponent(p).string="Score : "+f.getInstance().getCurrentScore()},a.gamePaused=function(e){this.parentNode=e,this.gameoverNode.active=!1,this.pauseNode.active=!0,u(this.node).to(.3,{position:new l(0,0,0)}).call((function(){d.pause()})).start()},a.gameResume=function(){this.parentNode.touchRestrict.active=!1,u(this.node).to(.2,{position:new l(0,m(this.node)+m(this.node.parent),0)}).start(),d.resume()},a.goToMainMenu=function(){d.resume(),f.getInstance().setGamePlayActive(!1),f.getInstance().setCurrentScore(0),d.loadScene("BirdSelection")},a.restartGame=function(){d.resume(),f.getInstance().setGamePlayActive(!1),f.getInstance().setCurrentScore(0),d.loadScene("GamePlay")},a.start=function(){},t}(g)).prototype,"gameoverNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(w.prototype,"pauseNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(w.prototype,"score",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=w))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/BirdSelection.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts","./MetaMaskManager.ts"],(function(t){"use strict";var e,i,n,r,a,s,o,d,l,c,h,u,g,C,f,p,m,B,v,b,y,T,S,w,N,_,I,M;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized,a=t.defineProperty},function(t){s=t.cclegacy,o=t._decorator,d=t.Prefab,l=t.Node,c=t.SpriteFrame,h=t.CCFloat,u=t.assetManager,g=t.Texture2D,C=t.Sprite,f=t.tween,p=t.director,m=t.Vec3,B=t.UITransform,v=t.Button,b=t.Label,y=t.instantiate,T=t.input,S=t.Input,w=t.Component},function(t){N=t.nodeWidth,_=t.nodeHeight},function(t){I=t.gameManager},function(t){M=t.MetaMaskManager}],execute:function(){var L,P,k,F,z,H,U,W,A,D,E,x,O,R,J,Q,j,G,Y;s._RF.push({},"a9ffaBpJCtKqatfeTkvLXJt","BirdSelection",void 0);var V=o.ccclass,q=o.property;t("BirdSelection",(L=V("BirdSelection"),P=q(d),k=q(l),F=q(l),z=q(l),H=q({type:c}),U=q({type:h}),W=q({type:l}),A=q({type:l}),L((x=e((E=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s))||this,n(r(e),"BirdCardPrefab",x,r(e)),n(r(e),"content_node",O,r(e)),n(r(e),"view_node",R,r(e)),n(r(e),"start_node",J,r(e)),n(r(e),"ButtonImages",Q,r(e)),n(r(e),"visibility",j,r(e)),n(r(e),"StartButton",G,r(e)),n(r(e),"messageNode",Y,r(e)),a(r(e),"BirdsCard",[]),a(r(e),"BirdsImages",[]),a(r(e),"BirdsId",[]),a(r(e),"numBirds",4),a(r(e),"baseUrl",null),a(r(e),"loader",null),a(r(e),"selectedCard",0),a(r(e),"isMoving",!1),a(r(e),"delgateNode",null),e}i(e,t);var s=e.prototype;return s.setDelegate=function(t){this.delgateNode=t,console.log("Delegate setted")},s.setImages=function(t){var e=this,i="https://gateway.pinata.cloud/ipfs/QmT7QJcjG6VuppJUbecF9MPrkCLdsmxpZGLQo62r3m3egQ/"+(t+1)+".png";u.loadRemote(i,(function(i,n){var r=new c,a=new g;a.image=n,r.texture=a,e.BirdsCard[t].getChildByName("Bird").getComponent(C).spriteFrame=r}))},s.unlock=function(t){for(var e=0;e<t.length;e++)if(t[e].length>1){var i=t[e].substring(81,82);i>=0&&i<=9&&(this.BirdsCard[parseInt(i)-1].getChildByName("Lock").active=!1)}this.selectedCard=0,this.loader.setLoading(!1),this.setCardToCenter(this.selectedCard)},s.unlockplane=function(){for(var t=this,e=function(e){t.BirdsCard[e].getComponent(v).interactable=!0,n=t.BirdsCard[e].getChildByName("text"),r=t.BirdsCard[e].getChildByName("locked"),t.BirdsCard[e].removeChild(n),t.BirdsCard[e].removeChild(r),t.BirdsCard[e].on(l.EventType.TOUCH_START,(function(t){this.removeallBorderImages(),this.BirdsCard[e].getComponent(v).normalSprite=this.border_image}),t)},i=0;i<5;i++){var n,r;e(i)}},s.loadBaseUrl=function(t){var e=this;this.loader=t,M.getInstance().baseAddressBirds().then((function(t){e.baseUrl=t,e.getTotalBirdies()})).catch((function(t){}))},s.getTotalBirdies=function(){var t=this;M.getInstance().getTotalBirdies().then((function(e){t.BirdsId=e,t.setCards()})).catch((function(t){}))},s.ButtonClick=function(){var t=this.BirdsCard[this.selectedCard].getChildByName("Lock");t.active?(this.loader.setLoading(!0),this.mintNFT(""+(this.selectedCard+1),t)):(I.getInstance().setBirdNum(this.selectedCard),I.getInstance().setBirdSelected(this.BirdsCard[this.selectedCard].getChildByName("Bird").getComponent(C).spriteFrame),f(this.StartButton).call((function(){p.loadScene("GamePlay")})).to(.2,{scale:new m(0,0,0)}).start())},s.mintedNFTS=function(){var t=this;M.getInstance().mintedBirdie().then((function(e){t.unlock(e),t.loader.setLoading(!1)})).catch((function(t){}))},s.mintNFT=function(t,e){var i=this,n=this.baseUrl+"/"+t+".json";M.getInstance().MintNFT(n).then((function(t){e.active=!1,i.loader.setLoading(!1),i.setButton(1,"Start"),i.delgateNode.showPopup("Congratulations ! "," You purchased An NFT")})).catch((function(t){i.loader.setLoading(!1),i.delgateNode.showPopup("Please Try Again ! ","Transaction declined")}))},s.clickOnNft=function(t){var e=parseInt(t.target.name)-1;this.selectedCard!=e&&e>=0&&e<=3&&(this.setScale(this.BirdsCard[this.selectedCard],.8,!1),this.selectedCard=e,this.setCardToCenter(this.selectedCard))},s.setWidthHeight=function(t,e,i){void 0===i&&(i=null),null!=i&&(t.getComponent(B).width=i),t.getComponent(B).height=e},s.setCardToCenter=function(t){var e=this;this.isMoving=!0;var i=this.BirdCardPrefab.data.width,n=1.5*i-i*t;f(this.content_node).to(.2,{position:new m(n,this.content_node.position.y,1)}).call((function(){e.isMoving=!1})).start();var r=this.BirdsCard[t];this.setScale(r,1.2,!0)},s.setScale=function(t,e,i){var n=t.getChildByName("Bird"),r=t.getChildByName("Lock");f(n).to(.4,{scale:new m(e,e,1)}).start(),n.setPosition(0,0,0),i?r.active?this.setButton(1,"MINT"):this.setButton(1,"Start"):(this.setButton(0,""),t.getComponent(v).normalSprite=this.ButtonImages[1])},s.setButton=function(t,e){f(this.StartButton).to(.4,{scale:new m(t,t,1)}).start(),this.messageNode.getComponent(b).string=e},s.setCards=function(){if(4==this.BirdsCard.length)return this.selectedCard=0,this.loader.setLoading(!1),this.setCardToCenter(this.selectedCard),void(this.node.active=!0);var t=this.BirdCardPrefab.data.width,e=this.BirdCardPrefab.data.height,i=t*(this.numBirds+1);N(this.node);this.setWidthHeight(this.start_node,e,2*t),this.setWidthHeight(this.view_node,e,2*t),this.setWidthHeight(this.content_node,e,i),console.log("view Widht ",2*t),console.log("content Widht ",i);for(var n=null,r=-i/2+t,a=0;a<this.numBirds;a++)(n=y(this.BirdCardPrefab)).name=""+(a+1),this.content_node.addChild(n),n.setPosition(r,-_(n),1),r+=t,n.on(l.EventType.TOUCH_START,this.clickOnNft,this),this.BirdsCard.push(n),this.setImages(a);this.node.active=!0,this.mintedNFTS(),T.on(S.EventType.MOUSE_WHEEL,this.mouseScroll,this)},s.mouseScroll=function(t){var e=this.BirdsCard[this.selectedCard];t._scrollY>0&&this.selectedCard<3&&!this.isMoving?(this.setScale(e,.8,!1),this.selectedCard++,this.setCardToCenter(this.selectedCard)):t._scrollY<0&&this.selectedCard>0&&!this.isMoving&&(this.setScale(e,.8,!1),this.selectedCard--,this.setCardToCenter(this.selectedCard))},s.onLoad=function(){},e}(w)).prototype,"BirdCardPrefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(E.prototype,"content_node",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(E.prototype,"view_node",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=e(E.prototype,"start_node",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=e(E.prototype,"ButtonImages",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),j=e(E.prototype,"visibility",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 75}}),G=e(E.prototype,"StartButton",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=e(E.prototype,"messageNode",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=E))||D));s._RF.pop()}}}));

System.register("chunks:///_virtual/LoadingScreen.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,r,o,i,c,a,l,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.defineProperty},function(e){c=e.cclegacy,a=e._decorator,l=e.Node,s=e.Component}],execute:function(){var u,p,d,f,g;c._RF.push({},"c84e69IheFOmpoX8ZvfLC1z","LoadingScreen",void 0);var y=a.ccclass,h=a.property;e("LoadingScreen",(u=y("LoadingScreen"),p=h({type:l}),u((g=n((f=function(e){function n(){for(var n,t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return n=e.call.apply(e,[this].concat(c))||this,r(o(n),"loadingIcon",g,o(n)),i(o(n),"rotate",!1),n}return t(n,e),n.prototype.update=function(e){this.rotate&&(this.loadingIcon.angle+=1)},n}(s)).prototype,"loadingIcon",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));c._RF.pop()}}}));

System.register("chunks:///_virtual/MetaMaskManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./web3.min.js","./web3.min.mjs_cjs=&original=.js"],(function(t){"use strict";var n,e,c,s,i,r,a;return{setters:[function(t){n=t.defineProperty,e=t.inheritsLoose,c=t.assertThisInitialized},function(t){s=t.cclegacy,i=t._decorator,r=t.Component},function(t){a=t.default},null],execute:function(){var o,u,f;s._RF.push({},"cccd4GQfkFARqVzt3zb+nef","MetaMaskManager",void 0);var l=i.ccclass;i.property,t("MetaMaskManager",l("MetaMaskManager")((f=u=function(t){function s(){for(var e,s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i))||this,n(c(e),"web3Instance",null),n(c(e),"contract",null),n(c(e),"userAddress",null),e}e(s,t),s.getInstance=function(){return s._instance||(s._instance=new s),s._instance};var i=s.prototype;return i.getUserAddress=function(){return this.userAddress},i.initiateWeb3=function(){return this.web3Instance=new a(a.givenProvider||"ws://localhost:8545"),!!this.web3Instance},i.checkWalletStatus=function(t){this.web3Instance.eth.getAccounts((function(n,e){null!=n?t({code:"META_MASK_NOT_INSTALLED",message:"META_MASK_NOT_INSTALLED"},null):0==e.length?t({code:"META_MASK_NOT_LOGIN",message:"META_MASK_NOT_LOGIN"},null):t({code:"META_MASK_LOGIN",message:"META_MASK_LOGIN"},e[0])}))},i.setBaseUrl=function(){var t=this;return new Promise((function(n,e){t.contract.methods.setBaseURI("https://gateway.pinata.cloud/ipfs/QmZYjnGHVvnNJ9qpqzD4zkiym4TtG76Tv3cgBthwGgMgBm").call({from:"0x76CAA6eF0c0Cc1f5bb5afA54455fd2A00F6a27f6"}).then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.initContract=function(t,n){return this.userAddress=n,this.contract=new this.web3Instance.eth.Contract(JSON.parse(JSON.stringify(t)),"0x21cf0eC426553c81A87EaeE1200dd159d0d5f684"),!!this.contract},i.getBaseUrl=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getBaseURI().call().then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.baseAddressBirds=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getBaseURI().call().then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.getTotalBirdies=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getAllBirdies().call().then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.mintedBirdie=function(){var t=this;return new Promise((function(n,e){t.contract.methods.getMintedBirdie().call({from:t.userAddress}).then((function(t){n(t)})).catch((function(t){e(t)}))}))},i.MintNFT=function(t){var n=this;return new Promise((function(e,c){var s=a.utils.toWei(.01.toString(),"ether");n.contract.methods.mintNFT(t).send({from:n.userAddress,value:s}).then((function(t){e(t)})).catch((function(t){c(t)}))}))},i.start=function(){},s}(r),n(u,"_instance",void 0),o=f))||o);s._RF.pop()}}}));

System.register("chunks:///_virtual/MoveBase.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Common.ts","./gameManager.ts"],(function(e){"use strict";var t,i,o,n,s,r,a,l,d,c,u,h,p,f,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized,s=e.defineProperty},function(e){r=e.cclegacy,a=e._decorator,l=e.Prefab,d=e.CCFloat,c=e.Node,u=e.instantiate,h=e.UITransform,p=e.Component},function(e){f=e.collisionCheck},function(e){y=e.gameManager}],execute:function(){var g,N,b,m,v,P,B,C,w;r._RF.push({},"fca35lbYMRH6pDuxDKKIL6T","MoveBase",void 0);var M=a.ccclass,x=a.property;e("MoveBase",(g=M("MoveBase"),N=x({type:l}),b=x(d),m=x({type:c}),g((B=t((P=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,o(n(t),"BasePrefab",B,n(t)),o(n(t),"speed",C,n(t)),o(n(t),"hudNode",w,n(t)),s(n(t),"startParralax",!1),s(n(t),"tileNodes",[]),s(n(t),"birdNode",null),t}i(t,e);var r=t.prototype;return r.start=function(){this.birdNode=y.getInstance().getBirdNode().myNode.getChildByName("Colider");for(var e=null,t=this.BasePrefab.data.width,i=0;i<3;i++)e=u(this.BasePrefab),this.node.addChild(e),e.setPosition(t*i,e.position.y,1),this.tileNodes.push(e)},r.checktoRecycle=function(e,t){var i=0;i=0==t?this.tileNodes[2].position.x+e.getComponent(h).width:this.tileNodes[t-1].position.x+e.getComponent(h).width,e.setPosition(i-5,e.position.y,1)},r.update=function(e){if(y.getInstance().getGamePlayActive())for(var t=null,i=0,o=0;o<this.tileNodes.length;o++){if(i=this.tileNodes[o].position.x,this.tileNodes[o].setPosition(i-this.speed*e,this.tileNodes[o].position.y,1),this.tileNodes[o].position.x<-this.BasePrefab.data.width&&this.checktoRecycle(this.tileNodes[o],o),t=this.tileNodes[o].getChildByName("Colider"),f(t,this.birdNode))y.getInstance().setGamePlayActive(!1),this.hudNode.getComponent("Hud").gameOver()}},t}(p)).prototype,"BasePrefab",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(P.prototype,"speed",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 40}}),w=t(P.prototype,"hudNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=P))||v));r._RF.pop()}}}));

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