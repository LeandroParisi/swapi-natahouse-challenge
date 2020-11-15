(this["webpackJsonpswapi-starship-travel-calculations"]=this["webpackJsonpswapi-starship-travel-calculations"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),r=n.n(s),i=n(7),c=n.n(i),p=(n(17),n(18),n(2)),u=n.n(p),o=n(4),l=n(8),d=n(9),h=n(5),j=n(11),b=n(10),f=n(3);function m(){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(u.a.mark((function t(){var e,n,a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],n="https://swapi.dev/api/starships/";case 2:if(!n){t.next=13;break}return t.next=5,fetch(n);case 5:return a=t.sent,t.next=8,a.json();case 8:s=t.sent,e=[].concat(Object(f.a)(e),Object(f.a)(s.results)),n=s.next,t.next=2;break;case 13:return t.abrupt("return",e.filter((function(t){return"unknown"!==t.MGLT})));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){var n=[];return e.forEach((function(e){var a=e.MGLT,s=e.consumables,r=e.name,i=function(t){var e=t.split(" "),n=e[0],a=e[1];return function(t,e){switch(!0){case/year*/.test(e):return 360*t*24;case/month*/.test(e):return 30*t*24;case/week*/.test(e):return 7*t*24;case/day*/.test(e):return 24*t;default:return null}}(n,a)}(s),c={name:r,stops:Math.floor(t/(a*i))};n=[].concat(Object(f.a)(n),[c])})),n}n(20);var x=n.p+"static/media/stop_icon.94599ae2.png";var O=function(){return Object(a.jsx)("footer",{children:Object(a.jsxs)("span",{className:"legend",children:[Object(a.jsx)("b",{children:"Legend:"}),Object(a.jsxs)("div",{className:"legend-inner-container",children:[Object(a.jsx)("img",{src:x,className:"stop-icon",width:"30px",alt:"Stop Icon"}),Object(a.jsx)("p",{children:"Number of necessary stops"})]})]})})},w=n.p+"static/media/starwars-logo.d18a189b.png";var S=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:w,alt:"Logo",width:"150px"}),Object(a.jsx)("h1",{children:"Travel calculator"})]})},y=n.p+"static/media/A-Wing.9432a40f.png",C=n.p+"static/media/arc-170.f39d2f7d.png",E=n.p+"static/media/B-Wing.0b949f36.png",T=n.p+"static/media/calamari-cruiser.81711386.png",k=n.p+"static/media/CR90-Corvette.16836cf6.png",N=n.p+"static/media/death-star.fcb7d72e.png",D=n.p+"static/media/executor.a90243b7.png",I=n.p+"static/media/imperial-shuttle.ad6fa6bd.png",L=n.p+"static/media/millenium-falcon.34f5e94d.png",M=n.p+"static/media/nebulon-B.60b0b24a.png",B=n.p+"static/media/rebel-transport.069eded1.png",F=n.p+"static/media/sentinel-landing-craft.d8dce5be.png",W=n.p+"static/media/slave-1.e86170f8.png",A=n.p+"static/media/Star-destroyer.f1fa4846.png",G=n.p+"static/media/tie-fighter.e3529da2.png",R=n.p+"static/media/X-Wing.0e0c98b3.png",J={"CR90 corvette":k,"Star Destroyer":A,"Sentinel-class landing craft":F,"Death Star":N,"Millennium Falcon":L,"Y-wing":n.p+"static/media/Y-Wing.7595e753.png","X-wing":R,"TIE Advanced x1":G,Executor:D,"Rebel transport":B,"Slave 1":W,"Imperial shuttle":I,"EF76 Nebulon-B escort frigate":M,"Calamari Cruiser":T,"A-wing":y,"B-wing":E,"arc-170":C};var P=function(t){return t.starshipsStops.map((function(t){return Object(a.jsxs)("div",{className:"starship-container",children:[Object(a.jsx)("img",{src:J[t.name],alt:t.name,width:"100px"}),Object(a.jsx)("p",{children:"".concat(t.name)}),Object(a.jsx)("img",{src:x,className:"stop-icon",alt:"Stop icon",width:"50px"}),Object(a.jsx)("span",{children:"".concat(t.stops)})]},t.name)}))},X=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).calculateTravel=t.calculateTravel.bind(Object(h.a)(t)),t.state={starships:[],starshipsStops:null,inputedDistance:"",inputError:"",inputErrorClass:""},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,this.setState({starships:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"calculateTravel",value:function(){var t=this,e=this.state,n=e.inputedDistance,a=e.starships;if(isNaN(parseInt(n))||0===parseInt(n))this.setState({inputError:"Input a valid travel distance",inputErrorClass:"error",starshipsStops:null},(function(){setTimeout((function(){t.setState({inputError:"",inputErrorClass:""})}),4e3)}));else{var s=v(n,a);this.setState({starshipsStops:s})}}},{key:"render",value:function(){var t=this,e=this.state,n=e.inputedDistance,s=e.starshipsStops,r=e.inputError,i=e.inputErrorClass;return Object(a.jsxs)("div",{children:[Object(a.jsx)(S,{}),Object(a.jsxs)("section",{className:"user-input-container",children:[Object(a.jsx)("input",{type:"number",placeholder:"Travel distance (in MGTLs)",value:n,className:i,onChange:function(e){var n=e.target;return t.setState({inputedDistance:n.value})}}),Object(a.jsx)("button",{type:"button",onClick:this.calculateTravel,children:"Calculate necessary stops!"}),r?Object(a.jsx)("p",{children:r}):null]}),Object(a.jsx)("main",{className:"starships-display",children:s?Object(a.jsx)(P,{starshipsStops:s}):null}),s?Object(a.jsx)(O,{}):null]})}}]),n}(r.a.Component);n(21);var Y=function(){return Object(a.jsx)(X,{})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),r(t),i(t)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root")),_()}},[[22,1,2]]]);
//# sourceMappingURL=main.cb78585e.chunk.js.map