(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5594:function(e,t,n){e.exports=n(5989)},5986:function(e,t){},5989:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n.n(r),l=n(327),c=n(30),s=n(31),d=n(33),u=n(32),h=n(34),m=n(10),p=n(44),E=n(185),f=n(2),g=n(25),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={menuEl:null},n.handleMenu=n.handleMenu.bind(Object(m.a)(Object(m.a)(n))),n.handleClose=n.handleClose.bind(Object(m.a)(Object(m.a)(n))),n.handleLogOut=n.handleLogOut.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleMenu",value:function(e){this.setState({menuEl:e.currentTarget})}},{key:"handleClose",value:function(){this.setState({menuEl:null})}},{key:"handleLogOut",value:function(){window.confirm("Est\xe1 seguro de cerrar sesi\xf3n?")&&this.props.onLogOut(),this.handleClose()}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.store,a=e.user,r=this.state.menuEl,i=Boolean(r);return o.a.createElement(f.a,{position:"fixed",style:{zIndex:1201}},o.a.createElement(f.C,{style:{display:"flex",flexDirection:"row"}},o.a.createElement(f.D,{style:{flexGrow:1},variant:"h4",color:"inherit"},t||""),o.a.createElement("div",{style:{display:"block",textAlign:"right"}},o.a.createElement(f.D,{color:"inherit",variant:"button"},(n.titulo||"").toUpperCase()),o.a.createElement(f.D,{color:"inherit",variant:"caption"},a)),o.a.createElement("div",null,o.a.createElement(f.l,{title:n.titulo,"aria-owns":i?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},o.a.createElement(g.a,null)),o.a.createElement(f.r,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleClose},o.a.createElement(f.s,{style:{minWidth:150},autoFocus:!0,onClick:this.handleClose},"Cuenta"),o.a.createElement(f.s,{style:{minWidth:150},onClick:this.handleLogOut},"Salir")))))}}]),t}(o.a.PureComponent),v=function(e){var t=e.STEPS,n=e.current_step;return o.a.createElement(f.k,{variant:"permanent",style:{maxWidth:200}},o.a.createElement("div",{style:{paddingTop:70,width:200}},o.a.createElement(f.n,null,t.map(function(e,t){return o.a.createElement(o.a.Fragment,{key:t},e.addDividerBefore&&o.a.createElement(f.j,null),o.a.createElement(f.o,{component:p.b,to:"/"+e.id,selected:e.id===n,button:!0},o.a.createElement(f.q,null,e.title),o.a.createElement(f.p,null,o.a.createElement(e.Icon,null))))}))))},O=n(28),y=n(125),w=n(189),D=n(326),C=n.n(D),j={lat:-.180653,lng:-78.467834},S=(new Date).toString()+":"+Math.floor(1e5+9e5*Math.random());function k(e){e?window.localStorage.setItem("__",JSON.stringify(e)):window.localStorage.removeItem("__")}function T(){var e=window.localStorage.getItem("__");if(e)return(e=JSON.parse(e)).position||(e.position=j),e}function N(){var e=T();if(!e)throw window.location.reload(),{message:"Necesitas iniciar sesi\xf3n para entrar aqu\xed."};return e.token+"+"+S}var x,R="https://orders.runfoodapp.com",A={ON_ORDERS_CHANGED:[]};function I(e,t){var n={method:"GET",cache:"reload",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}};if(t.headers){for(var a in t.headers)n.headers[a]=t.headers[a];delete t.headers}return fetch(e,Object(O.a)({},n,t)).then(function(e){return e.ok?e.json():e.clone().json().catch(function(){return e.text().then(function(t){throw{message:t,status:e.status,statusText:e.statusText}})}).then(function(t){throw Object(O.a)({},t,{status:e.status,statusText:e.statusText})})}).catch(function(e){if("Failed to fetch"===e.message)throw{message:"Este servicio no se encuentra disponible por el momento. Intentelo m\xe1s tarde.",status:0};throw e.message||(e.message=e.statusText),e})}var _={LogIn:function(e){return I("".concat(R,"/login"),{body:JSON.stringify(e),method:"POST"}).catch(function(e){if(400===e.status)throw Object(O.a)({},e,{message:"Usuario o contrase\xf1a incorrectos."});if(401===e.status)throw Object(O.a)({},e);if(401===e.status)throw Object(O.a)({},e)})},GetOrders:function(e){return I("".concat(R,"/data/").concat(this.storeID,"/order?").concat(new URLSearchParams(e).toString()),{headers:{Authorization:"Basic "+btoa(N())}})},GetOrder:function(e){return I("".concat(R,"/data/").concat(this.storeID,"/order/").concat(e),{headers:{Authorization:"Basic "+btoa(N())}})},OrdersOnRoute:function(e){return I("".concat(R,"/data/").concat(this.storeID,"/order-actions/ON-ROUTE"),{method:"POST",body:JSON.stringify({orders:e}),headers:{Authorization:"Basic "+btoa(N())}})},OrdersDelivered:function(e){return I("".concat(R,"/data/").concat(this.storeID,"/order-actions/DELIVERED"),{method:"POST",body:JSON.stringify({orders:e}),headers:{Authorization:"Basic "+btoa(N())}})},ListenOnOrderChange:function(e){return A.ON_ORDERS_CHANGED.push(e),function(){return A.ON_ORDERS_CHANGED.splice(A.ON_ORDERS_CHANGED.indexOf(e),1)}},START_LISTENING:function(){x=C()(R,{query:{token:btoa(N())}}),console.info("SOCKET CONNECTED"),x.on("ORDERS_CHANGED",function(e){e.origin!==btoa(N())&&A.ON_ORDERS_CHANGED.forEach(function(t){return t(e.payload,!e.deletedAt)})})},STOP_LISTENING:function(){x&&x.disconnect(),console.info("SOCKET DISCONNECTED")}},L=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={data:null,error:null},n.close=n.close.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.GetOrder(this.props.match.params.id).then(function(t){return e.setState({data:t})}).catch(function(t){return e.setState({error:t})})}},{key:"close",value:function(){this.props.history.goBack()}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.error;return t?o.a.createElement(f.g,{open:!0,onClose:this.close},o.a.createElement(f.i,{style:{minWidth:400,height:400}},o.a.createElement(f.D,{style:{textAlign:"center"},variant:"h5"},"ORDEN #",t.numero),o.a.createElement(f.j,{style:{marginTop:10}}),o.a.createElement("div",null,o.a.createElement(f.D,{style:{display:"inline-block"},variant:"body2"},"CLIENTE: "),o.a.createElement(f.D,{style:{display:"inline-block"},variant:"body1"},t.nombre)),o.a.createElement("div",null,o.a.createElement(f.D,{style:{display:"inline-block"},variant:"body2"},"TLF: "),o.a.createElement(f.D,{style:{display:"inline-block"},variant:"body1"},t.telefono)),o.a.createElement("div",null,o.a.createElement(f.D,{style:{display:"inline-block"},variant:"body2"},"DIRECCION: "),o.a.createElement(f.D,{style:{display:"inline-block"},variant:"body1"},t.direccion)),o.a.createElement(f.j,{style:{marginTop:10}}),o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row"}},o.a.createElement(f.D,{style:{flex:1},variant:"h6"},"PRODUCTO"),o.a.createElement(f.D,{variant:"h6"},"CANT")),t.detalle.map(function(e,t){return o.a.createElement(M,Object.assign({},e,{key:t}))}),o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",marginTop:10}},o.a.createElement(f.D,{variant:"h6",style:{flex:1}},"Filas: ",t.detalle.length),o.a.createElement(f.D,{variant:"h6"},t.detalle.reduce(function(e,t){return e+t.cantidad},0))),o.a.createElement(f.j,{style:{marginTop:10}}),o.a.createElement(f.D,null,"PAGO : ",t.FormaPago),o.a.createElement(f.D,null,"NOTAS: ",t.nota),t.facturaConDatos&&o.a.createElement("div",null,o.a.createElement(f.j,null),o.a.createElement(f.D,{variant:"h6"},"DATOS PARA LA FACTURA"),o.a.createElement(f.D,null,t.Identificacion,": ",t.documento),o.a.createElement(f.D,null,o.a.createElement(g.b,null)," ",t.razonSocial),o.a.createElement(f.D,null,o.a.createElement(g.g,null)," ",t.telefono),o.a.createElement(f.D,null,o.a.createElement(g.f,null)," ",t.direccion))),o.a.createElement(f.h,null,o.a.createElement(f.b,{variant:"outlined",color:"secondary",onClick:this.close},"SALIR"))):o.a.createElement(f.g,{open:!0,onClose:this.close},o.a.createElement(f.i,{style:{minWidth:400,height:400}},n?o.a.createElement("div",{style:{textAlign:"center",padding:20}},o.a.createElement(f.D,{variant:"h6"},"Ocurri\xf3 un error"),o.a.createElement(f.D,{variant:"body2"},n.message),o.a.createElement(f.D,{variant:"button"},n.status," ",n.statusText)):o.a.createElement("div",{style:{textAlign:"center",padding:100}},o.a.createElement(f.f,{size:100}),o.a.createElement(f.D,{variant:"h6"},"CARGANDO..."))))}}]),t}(o.a.Component);function M(e){return o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row"}},o.a.createElement("div",{style:{flex:1}},o.a.createElement(f.D,{variant:"subtitle2"},e.descripcion),o.a.createElement(f.D,{variant:"body1"},e.nota)),o.a.createElement(f.D,{variant:"subtitle2"},e.cantidad))}var P=Object(E.g)(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),e.onMounted&&e.onMounted(null,e.estado),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){e.stopPropagation();var t=e.currentTarget.id;this.props.history.push(this.props.match.path+"/"+t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.onSelect,r=t.estado,i=t.now,l=t.timeCol,c=n.filter(function(e){return e.estado===r});return o.a.createElement(f.v,{component:"div",style:{display:"flex",flexDirection:"column",height:"calc(100% - 100px)"}},o.a.createElement(f.y,{component:"div",style:{display:"block"}},o.a.createElement(f.z,{component:"div",style:{width:"20%"}},o.a.createElement(f.x,{component:"div",style:{textAlign:"center"}},o.a.createElement(g.c,null)),o.a.createElement(f.x,{component:"div",style:{width:"20%"}},o.a.createElement(f.D,{variant:"button"},"#")),o.a.createElement(f.x,{component:"div",style:{width:"60%"}},o.a.createElement(f.D,{variant:"button"},"Cliente")),o.a.createElement(f.x,{component:"div",style:{width:"20%"}},o.a.createElement(f.D,{variant:"button"},"Hora")))),o.a.createElement(f.w,{component:"div",style:{flex:1,overflow:"auto",display:"block"}},c.map(function(t){return o.a.createElement(G,Object.assign({onClick:e.handleClick,onCheck:a,timeCol:l,key:t.id},t,{now:i}))})),o.a.createElement(E.b,{component:L,path:"".concat(this.props.match.path,"/:id")}))}}]),t}(o.a.PureComponent)),G=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props;return o.a.createElement(f.z,{tabIndex:0,style:{width:"100%",cursor:"pointer"},onContextMenu:e.onContextMenu,selected:e.selected,hover:!0,id:""+e.id,onClick:e.onClick,component:"div"},o.a.createElement(f.x,{component:"div",padding:"checkbox",style:{width:"20%"}},"deliveredAt"===e.timeCol?o.a.createElement(g.c,null):o.a.createElement(f.e,{checked:e.selected||!1,value:""+e.id,onClick:e.onCheck})),o.a.createElement(f.x,{style:{width:"20%"},component:"div",scope:"row"},e.numero),o.a.createElement(f.x,{style:{width:"60%"},component:"div"},e.nombre),o.a.createElement(f.x,{style:{width:"20%"},component:"div"},new Date(e[e.timeCol]).toLocaleTimeString()))}}]),t}(o.a.PureComponent);var U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={now:(new Date).valueOf(),data:[],loading:!0,goToCenter:null,navigationValue:0},e.onMounted&&e.onMounted(e.stepID),n.handleRightClick=n.handleRightClick.bind(Object(m.a)(Object(m.a)(n))),n.handleSelect=n.handleSelect.bind(Object(m.a)(Object(m.a)(n))),n.handleCurrentLocation=n.handleCurrentLocation.bind(Object(m.a)(Object(m.a)(n))),n.handleNavigation=n.handleNavigation.bind(Object(m.a)(Object(m.a)(n))),n.handleChangeState=n.handleChangeState.bind(Object(m.a)(Object(m.a)(n))),n.__updateRecords=n.__updateRecords.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.GetOrders().then(function(t){e.setState({data:t,loading:!1}),e.REMOVE_LISTENER=_.ListenOnOrderChange(e.__updateRecords)}).catch(function(t){return e.setState({error:t,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.STOP_TIMER&&this.STOP_TIMER(),this.REMOVE_LISTENER&&this.REMOVE_LISTENER()}},{key:"handleRightClick",value:function(e){}},{key:"handleSelect",value:function(e){e.stopPropagation();var t=e.target,n=t.value,a=t.checked;this.setState(function(e){var t=Object(O.a)({},e);t.data=e.data;var o=t.data.find(function(e){return e.id===+n});return o?(o.selected=a,o.selected&&(t.goToCenter={lat:+o.lat,lng:+o.lng}),t):t})}},{key:"handleCurrentLocation",value:function(){this.setState({goToCenter:this.props.store.position})}},{key:"handleNavigation",value:function(e,t){this.setState({navigationValue:t})}},{key:"handleChangeState",value:function(){var e=this,t=this.state,n=t.data,a=t.navigationValue,o=n.filter(function(e){return e.selected&&e.estado===a});if(!o.length)return alert("Seleccione al menos un registro");var r=o.map(function(e){return e.id});return this.setState({loading:!0}),0===a?_.OrdersOnRoute(r).then(this.__updateRecords).catch(function(t){return e.setState({error:t,loading:!1})}):1===a?_.OrdersDelivered(r).then(this.__updateRecords).catch(function(t){return e.setState({error:t,loading:!1})}):(this.setState({loading:!1}),void alert("No se encontro el navigationValue="+a))}},{key:"__updateRecords",value:function(e,t){this.setState(function(n){var a=Object(O.a)({},n,{loading:!1});return a.data=n.data,e.forEach(function(e){var n=a.data.find(function(t){return t.id===e.id});if(n)return a.data[a.data.indexOf(n)]=Object(O.a)({},n,{selected:!1,estado:e.estado});!n&&t&&a.data.push(e)}),a})}},{key:"render",value:function(){var e=this,t=this.state,n=t.now,a=t.loading,r=t.error,i=t.data,l=t.goToCenter,c=t.navigationValue;if(a)return o.a.createElement("div",{style:{width:"100%",textAlign:"center",margin:"auto",paddingTop:100}},o.a.createElement(f.f,{size:70}),o.a.createElement(f.D,{variant:"h4"},"CARGANDO..."));if(r)return o.a.createElement("div",{style:{width:"100%",textAlign:"center",margin:"auto",paddingTop:100}},o.a.createElement(g.d,{size:70}),o.a.createElement(f.D,{variant:"h4"},"Ocurri\xf3 un error"),o.a.createElement(f.D,{variant:"subtitle1"},r.message),o.a.createElement(f.D,{variant:"body1"},r.status," | ",r.statusText," | ",r.code));var s,d=this.props.store&&this.props.store.G_M_K||"",u=i.filter(function(e){return e.selected&&e.estado===c});return o.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100%"}},o.a.createElement("div",{style:{flex:1,overflow:"auto",height:"100%"}},o.a.createElement(f.A,{textColor:"primary",indicatorColor:"primary",style:{width:"100%"},color:"primary",value:c,onChange:this.handleNavigation},o.a.createElement(f.u,{style:{width:"32%"},label:"Pendientes",component:p.b,to:this.props.match.path+"/0"}),o.a.createElement(f.u,{style:{width:"32%"},label:"En Ruta",component:p.b,to:this.props.match.path+"/1"}),o.a.createElement(f.u,{style:{width:"32%"},label:"Entregado",component:p.b,to:this.props.match.path+"/2"})),o.a.createElement(E.d,null,o.a.createElement(E.b,{path:this.props.match.path+"/0",render:function(t){return o.a.createElement(P,Object.assign({onMounted:e.handleNavigation},t,{data:i,timeCol:"createdAt",selections:u,onSelect:e.handleSelect,now:n,estado:0}))}}),o.a.createElement(E.b,{path:this.props.match.path+"/1",render:function(t){return o.a.createElement(P,Object.assign({onMounted:e.handleNavigation},t,{data:i,timeCol:"onRouteAt",selections:u,onSelect:e.handleSelect,estado:1}))}}),o.a.createElement(E.b,{path:this.props.match.path+"/2",render:function(t){return o.a.createElement(P,Object.assign({onMounted:e.handleNavigation},t,{data:i,timeCol:"deliveredAt",selections:u,onSelect:e.handleSelect,estado:2}))}}),o.a.createElement(E.a,{path:this.props.match.path,to:this.props.match.path+"/0"})),2===c?null:o.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingLeft:10,paddingRight:10}},o.a.createElement(f.b,{disabled:!u.length,style:{flex:1},variant:"outlined",color:"primary",onClick:this.handleChangeState},0===(s=c)?"ENVIAR":1===s?"ENTREGADO":s),o.a.createElement(f.b,{variant:"outlined",style:{marginLeft:10},color:"secondary",disabled:!u.length,target:"_blank",href:function(e,t){for(var n=[e],a=0;a<t.length;a++)n.push(t[a]);return 1===n.length?"":"https://www.google.com/maps/dir/ "+n.map(function(e){return[e.lat,e.lng].join(",")}).join("/")}(this.props.store.position,u||[]),component:"a"},"Ruta"))),o.a.createElement("div",{style:{flex:1,overflow:"auto",height:"100%",display:"flex",flexDirection:"column"}},o.a.createElement("div",{style:{flex:1}},o.a.createElement(V,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat(d||"","&v=3.exp&libraries=geometry,drawing,places"),containerElement:o.a.createElement("div",{style:{height:"100%"}}),loadingElement:o.a.createElement("div",{style:{height:"100%"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),selections:u,store:this.props.store,center:l||this.props.store.position}))))}}]),t}(o.a.Component);var V=Object(y.withScriptjs)(Object(y.withGoogleMap)(function(e){return o.a.createElement(y.GoogleMap,Object.assign({},e,{defaultCenter:e.store.position,defaultZoom:15,options:{disableDefaultUI:!0,zoomControl:!0,clickableIcons:!1}}),o.a.createElement(w.MarkerWithLabel,{labelAnchor:new window.google.maps.Point(0,0),position:e.store.position,options:{icon:"./store.png"},labelStyle:{background:"#fff",border:"1px solid #29b6f6",padding:"2px 10px"}},o.a.createElement(f.D,{variant:"body1",color:"inherit"},e.store.titulo.toUpperCase())),e.selections&&e.selections.map(function(e){return o.a.createElement(w.MarkerWithLabel,{key:e.id,labelAnchor:new window.google.maps.Point(0,0),position:{lat:+e.lat,lng:+e.lng},labelStyle:{background:"#fff",border:"1px solid grey",padding:"2px 10px"}},o.a.createElement(f.D,{variant:"button"},e.nombre))}))}));var z=[{id:"orders",title:"Pedidos",Icon:g.e}],B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={current_step:""},n.handleMounted=n.handleMounted.bind(Object(m.a)(Object(m.a)(n))),_.storeID=e.store.nombre,_.START_LISTENING(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.Notification?"granted"===Notification.permission?this.REMOVE_LISTENER=this.__setListener():Notification.requestPermission().then(function(e){"granted"===e?this.REMOVE_LISTENER=this.__setListener():console.log("User blocked notifications.")}).catch(function(e){console.error(e)}):console.log("Browser does not support notifications.")}},{key:"componentWillUnmount",value:function(){this.REMOVE_LISTENER&&this.REMOVE_LISTENER()}},{key:"__setListener",value:function(){_.ListenOnOrderChange(function(e){var t,n=Object(l.a)(e,1)[0];0===n.estado&&(t=new Notification("NUEVO PEDIDO",{body:n.nombre+" - Orden #"+n.numero,icon:"./favicon.ico"})),1===n.estado&&(t=new Notification("LA ORDEN #"+n.numero+" EST\xc1 EN RUTA",{body:n.nombre+" - Orden #"+n.numero,icon:"./favicon.ico"})),2===n.estado&&(t=new Notification("LA ORDEN #"+n.numero+" FUE ENTREGADA",{body:n.nombre+" - Orden #"+n.numero,icon:"./favicon.ico"})),3===n.estado&&(t=new Notification("LA ORDEN #"+n.numero+" FUE CANCELADA",{body:n.nombre+" - Orden #"+n.numero,icon:"./favicon.ico"}),t=null),t&&(t.onclick=function(){window.focus(),window.location.href="#/orders/"+n.estado+"/"+n.id})})}},{key:"handleMounted",value:function(e){this.setState({current_step:e})}},{key:"render",value:function(){var e=this,t=this.state.current_step,n=(t&&z.find(function(e){return e.id===t})).title;return o.a.createElement(p.a,null,o.a.createElement(f.t,{style:{height:"100vh",width:"100%"}},o.a.createElement(b,{user:this.props.user,store:this.props.store,title:n,onLogOut:this.props.onLogOut}),o.a.createElement(v,{STEPS:z,current_step:t}),o.a.createElement("div",{style:{height:"calc(100% - 60px)",width:"calc(100% - 205px)",paddingLeft:205,paddingTop:60,overflow:"hidden"}},o.a.createElement(E.d,null,o.a.createElement(E.b,{path:"/orders",render:function(t){return o.a.createElement(U,Object.assign({},t,{store:e.props.store,onMounted:e.handleMounted,stepID:"orders"}))}}),o.a.createElement(E.b,{exact:!0,path:"/"},o.a.createElement("div",{style:{paddingTop:20,width:"100%",textAlign:"center"}},o.a.createElement(f.D,{variant:"h4"},"BIENVENIDO!"),o.a.createElement(f.D,{variant:"subtitle2"},"RunFood - Take Orders ADMIN")))))))}}]),t}(o.a.Component),W=n(124),F={marginTop:10,marginBottom:10},H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={user:"",pdw:"",showPassword:!1,loading:!1,store:null},n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(Object(m.a)(n))),n.handleTogglePassword=n.handleTogglePassword.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(W.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.loading,o=n.user,r=n.pwd;if(!a){if(!o)return this.setState({error:{message:"Digite el usuario"}});if(!r)return this.setState({error:{message:"Digite la contrase\xf1a"}});this.setState({loading:!0}),_.LogIn({user:o,pwd:r,withStoresInfo:!0}).then(function(e){return t.props.onLogged({user:o,token:e.token,store:e.store})}).catch(function(e){return t.setState({error:e,loading:!1})})}}},{key:"handleTogglePassword",value:function(){this.setState(function(e){var t=Object(O.a)({},e);return t.showPassword=!t.showPassword,t})}},{key:"render",value:function(){var e=this.state,t=e.showPassword,n=e.loading,a=e.error,r=e.user,i=e.pwd;e.stores,e.store;return o.a.createElement("div",{style:{padding:40,overflow:"auto"}},o.a.createElement(f.c,{style:{width:400,margin:"auto"}},o.a.createElement(f.d,{style:{padding:0}},o.a.createElement("form",{onSubmit:this.handleSubmit,style:{padding:20}},o.a.createElement(f.D,{style:{textAlign:"center"},variant:"h5"},"INICIO DE SESION"),o.a.createElement(f.B,{disabled:n,required:!0,style:Object(O.a)({},F),fullWidth:!0,label:"USUARIO",value:r||"",name:"user",onChange:this.handleChange,type:"email",InputProps:{startAdornment:o.a.createElement(f.m,{position:"start"},o.a.createElement(g.a,null))}}),o.a.createElement(f.B,{required:!0,fullWidth:!0,style:Object(O.a)({},F),value:i||"",label:"CONTRASE\xd1A",name:"pwd",onChange:this.handleChange,type:t?"text":"password",InputProps:{endAdornment:o.a.createElement(f.m,{position:"end"},o.a.createElement(f.l,{onClick:this.handleTogglePassword},t?o.a.createElement(g.h,null):o.a.createElement(g.i,null)))}}),a&&o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(f.D,{color:"secondary",variant:"body2"},a.message," ",a.code&&a.code),o.a.createElement(f.D,{color:"secondary",variant:"body1"},a.status," | ",a.statusText)),o.a.createElement(f.b,{type:"submit",fullWidth:!0,style:Object(O.a)({},F),variant:"outlined",disabled:n,color:"primary"},n?o.a.createElement(f.f,{size:20,color:"inherit"}):"ENTRAR")))))}}]),t}(o.a.Component);function J(e){e||(e=T()),i.a.render(o.a.createElement(B,{user:e.user,store:e.store,onLogOut:Z}),document.getElementById("app"))}function q(){i.a.render(o.a.createElement(H,{onLogged:K}),document.getElementById("app"))}function K(e){k(e),J()}function Z(){_.STOP_LISTENING(),k(),q()}T()?J():q()}},[[5594,2,1]]]);
//# sourceMappingURL=main.862f69e2.chunk.js.map