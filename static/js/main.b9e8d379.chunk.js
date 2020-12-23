(this["webpackJsonpmy-web-ar"]=this["webpackJsonpmy-web-ar"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o,i,a,l,c,s,d,r,u,m,p,y,b,h,f=n(3),v=n(4),g=n.n(v),x=n(7),w=n.n(x),j=(n(15),n(6)),E=n(0),O=n(8),S=n(9),B=(n(16),n(17),n(18),n(1)),I=n(2),k=function(){function e(){Object(B.a)(this,e)}return Object(I.a)(e,null,[{key:"createButton",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement("button");function o(){var o=null;function i(t){t.addEventListener("end",a),e.xr.setReferenceSpaceType("local"),e.xr.setSession(t),n.textContent="Stop XR",o=t}function a(){o.removeEventListener("end",a),n.textContent="Start XR",o=null}n.style.display="none",n.style.cursor="pointer",n.style.right="20px",n.style.width="100px",n.style.backgroundColor="#fff",n.textContent="Start XR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){null===o?navigator.xr.requestSession("immersive-ar",t).then(i):o.end()}}function i(){n.style.display="",n.style.cursor="auto",n.style.right="20px",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){i(),n.textContent="XR NOT SUPPORTED"}function l(e){e.style.position="absolute",e.style.bottom="20px",e.style.padding="12px 6px",e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background="#fff",e.style.color="#333",e.style.font="normal 13px sans-serif",e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="10001"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then((function(e){e?o():a()})).catch(a),n;var c=document.createElement("a");return!1===window.isSecureContext?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}]),e}(),C=null,z=!1,L=!0,R=function(){var e=Object(v.useState)(1),t=Object(j.a)(e,2),n=t[0],g=(t[1],Object(v.useState)(!0)),x=Object(j.a)(g,2),w=x[0],B=x[1];function I(){c.visible&&(u.position.setFromMatrixPosition(c.matrix),u.visible=!0)}function R(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function D(e){u&&a.remove(u),document.getElementById("loader-model").style.display="block",(new S.a).setPath("3d/").load(e,(function(e){(s=e.scene).traverse((function(e){e.isMesh&&(e.castShadow=!0)}));var t=new E.ab(20,20);t.rotateX(-Math.PI/2);var n=new E.ob({color:0});n.opacity=.5,n.depthWrite=!1,(r=new E.M(t,n)).receiveShadow=!0,(u=new E.q).add(s),u.add(r),a.add(u);var o=new E.d;o.setFromObject(u),o.getCenter(d.target),I(),document.getElementById("loader-model").style.display="none",document.getElementById("ARButton").style.display="block",d.update(),B(!1),M()}))}function N(){requestAnimationFrame(N),!1!==h.ready&&undefined.update(h.domElement),M()}function M(e,t){if(t){var n=l.xr.getReferenceSpace(),o=l.xr.getSession();if(!1===z&&(o.requestReferenceSpace("viewer").then((function(e){o.requestHitTestSource({space:e}).then((function(e){C=e}))})),o.addEventListener("end",(function(){z=!1,C=null,c.visible=!1;var e=new E.d;e.setFromObject(u),e.getCenter(d.target),document.getElementById("place-button").style.display="none",document.getElementById("group-zoom").style.display="none"})),z=!0),C){var s=t.getHitTestResults(C);if(s.length){var r=s[0];document.getElementById("group-zoom").style.display="block",L?(document.getElementById("place-button").style.display="block",document.getElementById("zoom-in-button").style.display="block",document.getElementById("zoom-out-button").style.display="block",c.visible=!0):(document.getElementById("place-button").style.display="none",document.getElementById("zoom-in-button").style.display="none",document.getElementById("zoom-out-button").style.display="none",c.visible=!1),c.matrix.fromArray(r.getPose(n).transform.matrix)}else document.getElementById("place-button").style.display="none",document.getElementById("zoom-in-button").style.display="none",document.getElementById("zoom-out-button").style.display="none",c.visible=!1}}l.render(a,i)}return Object(v.useEffect)((function(){switch(console.log("new update 15"),o=document.getElementById("container"),a=new E.nb,i=new E.Z(70,window.innerWidth/window.innerHeight,.001,200),function(){var e=new E.k(14540253,.5);e.position.set(0,5,-1),e.shadow.camera.left=-3,e.shadow.camera.right=3,e.shadow.camera.top=-3,e.shadow.camera.bottom=3,e.castShadow=!0,a.add(e);var t=new E.a(16777215,.5);a.add(t)}(),(l=new E.Eb({antialias:!0,alpha:!0})).setClearColor(new E.i("lightgrey"),0),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.outputEncoding=E.Fb,l.shadowMap.enabled=!0,l.shadowMap.type=E.Y,1===n&&(l.xr.enabled=!0),o.appendChild(l.domElement),(d=new O.a(i,l.domElement)).addEventListener("change",M),d.minDistance=2,d.maxDistance=10,d.target.set(0,0,0),function(){var e={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"]};e.domOverlay={root:document.getElementById("ui-content")},document.body.appendChild(k.createButton(l,e))}(),(c=new E.M(new E.mb(.015,.02,32).rotateX(-Math.PI/2),new E.N)).matrixAutoUpdate=!1,c.visible=!1,a.add(c),function(){function e(){u&&c&&C&&(u.rotation.y+=b/100)}l.domElement.addEventListener("touchstart",(function(e){e.preventDefault(),m=!0,p=e.touches[0].pageX,y=e.touches[0].pageY}),!1),l.domElement.addEventListener("touchend",(function(e){e.preventDefault(),m=!1}),!1),l.domElement.addEventListener("touchmove",(function(t){t.preventDefault(),m&&(b=t.touches[0].pageX-p,t.touches[0].pageY-y,p=t.touches[0].pageX,y=t.touches[0].pageY,e())}),!1)}(),window.addEventListener("resize",R,!1),document.getElementById("ARButton").addEventListener("click",(function(){u&&(u.visible=!1)})),n){case 0:N();break;case 1:l.setAnimationLoop(M)}}),[]),Object(f.jsxs)("div",{style:{width:"100%",height:"100%",overflow:"hidden"},children:[Object(f.jsxs)("div",{className:"wrap-intro",style:{display:w?"flex":"none"},children:[Object(f.jsx)("p",{children:'Select an item then press "Start XR"'}),Object(f.jsx)("p",{children:"You need to scan the floor until a ring appears on your screen."})]}),Object(f.jsxs)("div",{id:"ui-content",children:[Object(f.jsxs)("div",{id:"mySidenav",className:"sidenav",children:[Object(f.jsx)("a",{href:"#",className:"closebtn",onClick:function(e){e.preventDefault(),document.getElementById("mySidenav").style.width="0"},children:"\xd7"}),Object(f.jsx)("a",{className:"ar-object",href:"#",onClick:function(e){e.preventDefault(),D("old_sofa_free.glb")},children:"Sofa"}),Object(f.jsx)("a",{className:"ar-object",href:"#",onClick:function(e){e.preventDefault(),D("eames_lounge_chair.gltf")},children:"Lounge Chair"}),Object(f.jsx)("a",{className:"ar-object",href:"#",onClick:function(e){e.preventDefault(),D("lamp.glb")},children:"Lamp"}),Object(f.jsx)("a",{className:"ar-object",href:"#",onClick:function(e){e.preventDefault(),D("antique_iron_safe_v2.glb")},children:"Iron Safe"}),Object(f.jsx)("a",{className:"ar-object",href:"#",onClick:function(e){e.preventDefault(),D("vintage_telephone.gltf")},children:"Telephone"}),Object(f.jsx)("a",{className:"ar-object",href:"#",onClick:function(e){e.preventDefault(),D("wooden_chair_low_poly.glb")},children:"Wooden Chair"})]}),Object(f.jsx)("span",{className:"buttonMenu",style:{fontSize:"30px",cursor:"pointer"},onClick:function(e){e.preventDefault(),document.getElementById("mySidenav").style.width="250px"},children:"\u2630"}),Object(f.jsx)("button",{type:"button",id:"place-button",onClick:I,children:"PLACE"}),Object(f.jsxs)("div",{id:"group-zoom",children:[Object(f.jsx)("button",{id:"hide-button",type:"button",onClick:function(){var e=document.getElementById("hide-button");L=!L,e.innerHTML=L?"Hide UI":"Show UI"},children:"Hide UI"}),Object(f.jsx)("button",{id:"zoom-in-button",type:"button",onClick:function(){u&&c.visible&&(u.scale.x+=.1,u.scale.y+=.1,u.scale.z+=.1)},children:"+"}),Object(f.jsx)("button",{id:"zoom-out-button",type:"button",onClick:function(){u&&c.visible&&u.scale.x>.2&&u.scale.y>.2&&u.scale.z>.2&&(u.scale.x-=.1,u.scale.y-=.1,u.scale.z-=.1)},children:"-"})]}),Object(f.jsx)("div",{id:"container",style:{position:"fixed"}}),Object(f.jsx)("div",{id:"loader-model",children:Object(f.jsx)("div",{className:"lds-circle",children:Object(f.jsx)("div",{})})})]})]})};w.a.render(Object(f.jsx)(g.a.Fragment,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b9e8d379.chunk.js.map