(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5565:function(e,t,a){e.exports=a(5915)},5915:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(34),i=a.n(r),l=a(112),c=a(11),s=a(18),d=a(20),u=a(22),h=a(21),m=a(23),p=a(4),g=a(2),f=a(68),b=a(173),v=a(19),E=function(e){for(var t={detalle:e,base0:0,baseIva:0,subtotal:0,iva:0,servicio:0,descuentoTotal:0,total:0},a=0;a<e.length;a++){var n=e[a];if(n.cantidad>0){var o=n.cantidad*n.pvp;n.pagaIva?t.baseIva=t.baseIva+o:t.base0=t.base0+o}}t.base0=t.base0.round(2);var r=0,i=0;t.baseIva&&(r=12*t.baseIva/100,i=t.baseIva,t.iva=r.round(2)),t.baseIva=t.baseIva.round(2);var l=(r+i).round(2),c=t.baseIva+t.iva;return.01===(c-l).round(2)&&(console.info("Le quito un centavo por diferencia",l,c),t.baseIva=t.baseIva-.01),t.servicio=t.servicio.round(2),t.subtotal=(t.base0+t.baseIva).round(2),t.total=t.subtotal+t.servicio+t.iva+(isNaN(t.propina)?0:t.propina),t.total=t.total.round(2),t},O=0===window.location.href.indexOf("http://localhost")?"http://localhost:10000/data/":"https:"===window.location.protocol?"https://orders-runfoodapp.rj.r.appspot.com/data/":"http://runfoodapp.ddns.net:10000/data/";function y(){for(var e=window.location,t=e.href,a=e.origin,n=t.substring(a.length,t.length).split("/"),o=0;o<n.length;o++)if(0===n[o].indexOf("@"))return n[o].replace(/#/g,"").replace("@","");return""}function C(e,t){return fetch(e,t||{method:"GET",cache:"reload",mode:"cors"}).then(function(e){return e.ok?e.json():e.clone().json().catch(function(){return e.text().then(function(t){throw{message:t,status:e.status,statusText:e.statusText}})}).then(function(t){throw Object(c.a)({},t,{status:e.status,statusText:e.statusText})})}).catch(function(e){if("Failed to fetch"===e.message)throw{message:"Este servicio no se encuentra disponible por el momento. Intentelo m\xe1s tarde.",status:0};throw e.message||(e.message=e.statusText),e})}var x={GetProducts:function(){return C(O+y()+"/product")},GetProduct:function(e){return C(O+y()+"/product/"+e)},SaveOrder:function(e){var t=e.contactData,a=e.direccion,n=e.invoiceData,o=e.items;t||(t={}),a||(a={}),n||(n={});var r=(new Date).valueOf()-e.start_timestamp,i=n.identificacion.length&&n.razonsocial.length,l=E(o),s=Object(c.a)({},t,{nota:e.nota,forma_pago:e.forma_pago,lat:a.position.lat,lng:a.position.lng,direcion:a.direccion,numero_direccion:a.numero,referencia:a.referencia,factura_con_datos:i,documento_factura:n.documento,identificacion_factura:n.identificacion,razonsocial_factura:n.razonsocial,direccion_factura:n.direccion,telefono_factura:n.telefono,email_factura:n.email},l,{taking_order_time:r});return C(O+y()+"/order",{body:JSON.stringify(s),method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}})},GetStoreData:function(){return C(O+y()+"?withgooglemapskey=1")}};function j(e,t){window.localStorage.setItem(e,t),console.log("Preferences."+e+" stored")}function S(e){var t=window.localStorage.getItem(e);try{t=JSON.parse(t)}catch(a){console.warn("Preferences."+e,a)}return"true"===t||"false"===t?"true"===t:(console.log("Preferences."+e+" sent",t),null===t||void 0===t?null:t)}var k=function e(){Object(s.a)(this,e),this.activeStep=0,this.items=[],this.productList=[],this.forma_pago=1,this.nota="",this.contactData={telefono:"",nombre:"",email:""},this.invoiceData={documento:1,identificacion:"",razonsocial:"",telefono:"",direccion:"",email:""},this.direccion={numero:"",referencia:"",position:null},this.start_timestamp=(new Date).valueOf(),this.orderNumber=null,this.loading="data"},w=a(69),I=a(41),D=function(e){function t(e){var a;if(Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={nombre:"",descripcion:"",pvpWithTaxes:0,cantidad:1,imgSrc:"",nota:"",loading:!0},a.handleInput=a.handleInput.bind(Object(p.a)(Object(p.a)(a))),a.handleDone=a.handleDone.bind(Object(p.a)(Object(p.a)(a))),a.handleCantidad=a.handleCantidad.bind(Object(p.a)(Object(p.a)(a))),a.handleExit=a.handleExit.bind(Object(p.a)(Object(p.a)(a))),a.ID=e.match.params.id,e.choosenItems&&e.choosenItems.length){var n=e.choosenItems.find(function(e){return e.id===+a.ID});n&&(a.state=Object(c.a)({},n,{loading:!1}))}return a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.state.loading){var t=this.props.productList;if(t&&t.length){var a=t.find(function(t){return t.id===+e.ID});if(a)return this.setState(Object(c.a)({loading:!1},a))}alert("No se encontr\xf3 el producto en la lista. Recargue la pantalla.")}}},{key:"handleCantidad",value:function(e){var t=e.currentTarget.name;this.setState(function(e){var a=Object(c.a)({},e),n=a.cantidad;return"add"===t&&(n=(n||0)+1),"remove"===t&&(n=n<=0?0:n-1),a.cantidad=n,console.log("Product Details new cantidad ",n),a})}},{key:"handleInput",value:function(e){var t=e.target;this.setState(Object(w.a)({},t.name,t.value))}},{key:"handleDone",value:function(){this.props.onDone(Object(c.a)({},this.state)),this.handleExit()}},{key:"handleExit",value:function(){var e=this.props,t=e.match,a=e.history,n=t.path.substr(0,t.path.indexOf("/view-product/:id"));a.push(n)}},{key:"render",value:function(){console.log("Product Details rendered");var e=this.state;return o.a.createElement(o.a.Fragment,null,e.loading&&o.a.createElement(g.c,{open:!0,classes:{paper:this.props.classes.loadingPaper}},o.a.createElement("div",{style:{marginTop:100,marginBottom:100,textAlign:"center"}},o.a.createElement(g.b,{size:30}),o.a.createElement(g.t,{variant:"h5"},"Cargando..."))),o.a.createElement(g.c,{open:!e.loading,classes:{paper:this.props.classes.dialogPaper}},o.a.createElement(g.e,{style:{padding:0,maxWidth:350,maxHeight:"100%"}},o.a.createElement(g.f,{onClick:this.handleExit,color:"secondary",style:{float:"right",right:10,top:10,position:"absolute"}},o.a.createElement(v.e,null)),o.a.createElement("img",{style:{maxWidth:"100%",maxHeight:"40%"},src:e.imgSrc||"",alt:e.nombre}),o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row"}},o.a.createElement(g.t,{style:{margin:10,flex:1},variant:"title"},e.nombre),o.a.createElement(g.t,{style:{margin:10},variant:"title"},"$ ",e.pvpWithTaxes.toFixed(2))),o.a.createElement(g.t,{style:{margin:10},variant:"body2"},e.descripcion),o.a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:20,marginBottom:20}},o.a.createElement(T,{onClick:this.handleCantidad,name:"add"},o.a.createElement(v.a,null)),o.a.createElement(g.t,{style:{display:"inline-block",marginLeft:20,marginRight:20},variant:"h6"},e.cantidad||0),o.a.createElement(T,{disabled:e.cantidad<=0,onClick:this.handleCantidad,name:"remove"},o.a.createElement(v.p,null))),o.a.createElement("div",{style:{width:"95%",margin:"auto"}},o.a.createElement(g.s,{value:e.nota,inputProps:{maxLength:200},onChange:this.handleInput,name:"nota",color:"default",placeholder:"Ej. Sin Salsa, verduras aparte, etc.",label:"Agrega una nota:",variant:"outlined",multiline:!0,rows:"3",fullWidth:!0}))),o.a.createElement(g.d,null,o.a.createElement(g.a,{type:"button",onClick:this.handleDone,color:"primary",variant:"outlined"},"AGREGAR"))))}}]),t}(o.a.Component),P=Object(I.withStyles)(function(e){return{dialogPaper:{maxWidth:450,maxHeight:"calc(100% - 20px)",marginTop:10,marginBottom:10},loadingPaper:{marginLeft:10,marginRight:10,width:"calc(100% - 20px)",maxWidth:450}}})(Object(b.h)(D));function T(e){var t={height:50,width:50,border:"1px solid gray"};return e.disabled&&delete t.border,o.a.createElement(g.j,{disabled:e.disabled,onClick:e.onClick,name:e.name,style:t},e.children)}var L={root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"}},M=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(u.a)(this,Object(h.a)(t).call(this,e)),e.onMounted&&e.onMounted(e.stepIndex),a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){this.props.history.push(this.props.match.path+"/view-product/"+e.currentTarget.id)}},{key:"render",value:function(){var e=this;console.log("TakeOrder rendered");var t=this.props,a=t.productList,n=t.style,r=t.choosenItems,i=t.match,l=t.onItemChange,s=a.reduce(function(e,t){var a=e.find(function(e){return e.group===t.grupo});return a||(a={group:t.grupo,items:[]},e.push(a)),a.items.push(t),e},[]);return s&&s.length?o.a.createElement("div",{style:Object(c.a)({},n,{textAlign:"left",overflowX:"hidden",overflowY:"auto"})},s.map(function(t,a){return o.a.createElement(_,{key:a,onClick:e.handleClick,style:{marginTop:10,marginBottom:10},title:t.group,items:t.items,choosenItems:r})}),o.a.createElement(b.c,{path:i.path+"/view-product/:id"},o.a.createElement(P,{choosenItems:r||[],onDone:l,productList:a}))):o.a.createElement("div",{style:Object(c.a)({},n,{textAlign:"center"})},o.a.createElement(g.t,{variant:"h6"},"Esta tienda no tiene productos disponibles. Intenta nuevamente despu\xe9s."))}}]),t}(o.a.PureComponent);function _(e){return o.a.createElement("div",{style:Object(c.a)({},e.style)},o.a.createElement(g.t,{variant:"h6",style:{marginLeft:10}},e.title),o.a.createElement(g.g,{cols:2.5,style:L.gridList},e.items.map(function(t){var a=(e.choosenItems||[]).find(function(e){return e.id===t.id});return function(e,t,a){var n={title:e.nombre,actionPosition:"right",subtitle:e.pvpWithTaxes.toFixed(2)};t&&(n.actionIcon=o.a.createElement(g.t,{variant:"body2",style:{color:"#fff",marginRight:5}},"x",t));var r={cursor:"pointer"};t&&(r.border="3px dashed #f50057");return o.a.createElement(g.h,{style:r,key:e.id,onClick:a,id:e.id,color:"inherit"},o.a.createElement("img",{src:e.imgSrc,alt:e.nombre}),o.a.createElement(g.i,n))}(t,a&&a.cantidad,e.onClick)})))}var A=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(u.a)(this,Object(h.a)(t).call(this,e)),e.onMounted&&e.onMounted(e.stepIndex),a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){var t=e.currentTarget.id;this.props.history.push(this.props.match.url+"/view-product/"+t)}},{key:"render",value:function(){var e=this;console.log("ConfirmOrder rendered");var t=this.props;return o.a.createElement("div",{style:{paddingLeft:10,paddingRight:10,overflow:"auto",flex:1}},o.a.createElement(g.k,{style:{marginBottom:10},dense:!0},t.items.map(function(t){return a=t,n=e.handleClick,o.a.createElement(g.l,{key:a.id,button:!0,onClick:n,id:a.id},o.a.createElement(g.n,{primary:a.nombre,secondary:a.nota||""}),o.a.createElement(g.m,null,o.a.createElement(g.t,{style:{margin:0,padding:0},variant:"h6"},"x",a.cantidad)));var a,n}),function(e){var t=E(e);return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.l,null,o.a.createElement(g.n,{primary:o.a.createElement(g.t,{variant:"h5",style:{margin:0,padding:0}},e.length+" ITEMS")}),o.a.createElement(g.m,null,o.a.createElement(g.t,{style:{margin:0,padding:0},variant:"h5"},"$",t.total.toFixed(2)))))}(t.items)),o.a.createElement("div",{style:{width:"100%",textAlign:"center"}},o.a.createElement(g.s,{label:"Agrega una nota a tu pedido",placeholder:"Ej. Sin cubiertos, sin salas extra, etc.",multiline:!0,name:"nota",inputProps:{maxLength:200},value:t.nota,onChange:t.onInputChange,rows:2,style:{width:"95%",margin:"auto",marginBottom:10,marginTop:10}}),o.a.createElement(g.s,{label:"Selecciona tu m\xe9todo de pago",select:!0,value:t.forma_pago,name:"forma_pago",onChange:t.onInputChange,variant:"outlined",style:{width:"95%",margin:"auto",marginBottom:10,marginTop:10},SelectProps:{native:!0}},o.a.createElement("option",{value:1},"Efectivo"),o.a.createElement("option",{value:2},"Tarjeta de Cr\xe9dito/Debito"))),o.a.createElement(b.c,{path:t.match.path+"/view-product/:id"},o.a.createElement(P,{productList:t.productList,choosenItems:t.items||[],onDone:t.onItemChange})))}}]),t}(o.a.PureComponent);var B=function(e,t){if(e||(e=""),3!==(t=+t)){if(1===t){if(13!==e.length)return"N\xfamero de RUC debe tener 13 digitos";if(13===e.length&&"9999999999999"===e)return}return 2===t&&10!==e.length?"N\xfamero de Cedula debe tener 10 digitos":function(e,t,a,n){var o="",r=!1;if(t&&(_=e,""===_||void 0==_||null==_||"undefined"==_))o="",r=!0;else if(function(e){return!isNaN(parseFloat(e))}(e)){e.length<10?o="El numero de Cedula debe tener 10 d\xedgitos":e.length>10&&e.length<13?o="El numero de RUC debe tener 13 d\xedgitos":e.length>13&&(o="El numero tiene m\xe1s de 13 d\xedgitos");var i,l,c,s,d,u,h,m,p,g=0,f=!1,b=!1,v=!1,E=11,O=e.substr(0,1),y=e.substr(1,1),C=e.substr(2,1),x=e.substr(3,1),j=e.substr(4,1),S=e.substr(5,1),k=e.substr(6,1),w=e.substr(7,1),I=e.substr(8,1),D=e.substr(9,1);if(R(O)||(o="El digito 1 no es un n\xfamero"),R(y)||(o="El digito 2 no es un n\xfamero"),R(C)||(o="El digito 3 no es un n\xfamero"),R(x)||(o="El digito 4 no es un n\xfamero"),R(j)||(o="El digito 5 no es un n\xfamero"),R(S)||(o="El digito 6 no es un n\xfamero"),R(k)||(o="El digito 7 no es un n\xfamero"),R(w)||(o="El digito 8 no es un n\xfamero"),R(I)||(o="El digito 9 no es un n\xfamero"),R(D)||(o="El digito 10 no es un n\xfamero"),e.length>10){var P=e.substr(10,1),T=e.substr(10,1),L=e.substr(10,1);P&&!R(P)&&(o="El digito 11 no es un n\xfamero"),T&&!R(T)&&(o="El digito 12 no es un n\xfamero"),L&&!R(L)&&(o="El digito 13 no es un n\xfamero")}7!=C&&8!=C||(o="El tercer d\xedgito ingresado es inv\xe1lido",r=!1),C<6?(v=!0,(i=2*O)>=10&&(i-=9),(l=1*y)>=10&&(l-=9),(c=2*C)>=10&&(c-=9),(s=1*x)>=10&&(s-=9),(d=2*j)>=10&&(d-=9),(u=1*S)>=10&&(u-=9),(h=2*k)>=10&&(h-=9),(m=1*w)>=10&&(m-=9),(p=2*I)>=10&&(p-=9),E=10):6==C?(b=!0,i=3*O,l=2*y,c=7*C,s=6*x,d=5*j,u=4*S,h=3*k,m=2*w,p=0):9==C&&(f=!0,i=4*O,l=3*y,c=2*C,s=7*x,d=6*j,u=5*S,h=4*k,m=3*w,p=2*I);var M=0==(g=(i+l+c+s+d+u+h+m+p)%E)?0:E-g;1==b?(M!=I&&(o="El ruc de la empresa del sector p\xfablico es incorrecto.",r=!1),"0001"!=e.substr(9,4)&&(o="El ruc de la empresa del sector p\xfablico debe terminar con 0001",r=!1)):1==f?(M!=D&&(o="El ruc de la empresa del sector privado es incorrecto.",r=!1),"001"!=e.substr(10,3)&&(o="El ruc de la empresa del sector privado debe terminar con 001",r=!1)):1==v&&(M!=D&&(o="El n\xfamero de c\xe9dula de la persona natural es incorrecto.",r=!1),e.length>10&&"001"!=e.substr(10,3)&&(o="El ruc de la persona natural debe terminar con 001",r=!1)),r=!0}else o="Este campo solo admite numeros";var _;return r&&""==o?(a&&a(),""):(""==o&&(o="La cantidad de digitos no corresponde a Cedula o RUC"),n&&n(o),o)}(e,!1)}};function R(e){return e>="0"&&e<="9"}var N={tel:function(e){if(e){if(e.length<7)return"El n\xfamero de telefono debe tener al menos 7 digitos";for(var t=0;t<e.length;t++)if("+"!==e[t]&&!R(e[t])&&""!==e[t].trim())return"El n\xfamero debe tener uno de estos formatos: '09123456789' o '+5931234567890'"}},email:function(e){if(e){if(e.length<5)return"El email no est\xe1 escrito correctamente";var t=e.split("@");return 2!==t.length?"El email no est\xe1 escrito correctamente":t[1].indexOf(".")>=0?e.trim().indexOf(" ")>=0?"El email no est\xe1 escrito correctamente":e.trim().indexOf("\t")>=0?"El email no est\xe1 escrito correctamente":e.trim().indexOf("\r")>=0?"El email no est\xe1 escrito correctamente":void 0:"El email no est\xe1 escrito correctamente"}}},W={textField:{marginTop:10,marginBottom:10},content:{paddingTop:10,paddingLeft:10,paddingRight:10,paddingBottom:0}},F=function(e){function t(e){var a;if(Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={documento:1,identificacion:"",razonSocial:"",telefono:"",direccion:"",email:""},e.data)for(var n in e.data)e.data.hasOwnProperty(n)&&(a.state[n]=e.data[n]);return a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleExit=a.handleExit.bind(Object(p.a)(Object(p.a)(a))),a.handleDone=a.handleDone.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(w.a)({},a,n))}},{key:"handleExit",value:function(){var e=this.props,t=e.match,a=e.history,n=t.path.substr(0,t.path.indexOf("/invoice-data"));a.push(n)}},{key:"handleDone",value:function(e){e.preventDefault();var t=function(e){var t=e.documento,a=e.identificacion,n=e.razonSocial,o=e.telefono,r=e.direccion,i=e.email,l=a||"",c=n||"",s=o||"",d=r||"",u=i||"",h="";if(l.length||c.length||s.length||d.length||u.length){if(!l.length)return"Agregue el numero de identificacion";if(!c.length)return"Agregue la Razon Social";if(h=B(a,t))return h;if(h=s&&N.tel(s))return h;if(h=u&&N.email(u))return h}}(this.state);t?alert(t):(this.props.onDone&&this.props.onDone(this.state),this.handleExit())}},{key:"render",value:function(){var e=this.state.identificacion?B(this.state.identificacion,this.state.documento):"",t={};e&&(t.error=!0,t.helperText=e);var a=this.state.identificacion&&!(this.state.razonSocial||"").trim()?"Esta campo no puede estar vac\xedo":"",n={},r=N.tel(this.state.telefono);r&&(n.error=!0,n.helperText=r);var i={},l=N.email(this.state.email);l&&(i.error=!0,i.helperText=l);var c=e||a||r||l;return o.a.createElement(g.c,{open:!0},o.a.createElement("form",{onSubmit:this.handleDone},o.a.createElement(g.e,{style:W.content},o.a.createElement(g.s,{value:this.state.documento,name:"documento",onChange:this.handleChange,select:!0,SelectProps:{native:!0},fullWidth:!0,label:"Documento",style:W.textField},o.a.createElement("option",{value:1},"RUC"),o.a.createElement("option",{value:2},"Cedula"),o.a.createElement("option",{value:3},"Pasaporte")),o.a.createElement(g.s,Object.assign({name:"identificacion",inputProps:{maxLength:20},onChange:this.handleChange,label:"# de Identificacion",value:this.state.identificacion||"",style:W.textField,fullWidth:!0},t)),o.a.createElement(g.s,{name:"razonSocial",inputProps:{maxLength:200},onChange:this.handleChange,label:"Razon Social",value:this.state.razonSocial||"",multiline:!0,rows:2,style:W.textField,fullWidth:!0}),o.a.createElement(g.s,Object.assign({name:"telefono",inputProps:{maxLength:50},onChange:this.handleChange,label:"Telefono",value:this.state.telefono||"",style:W.textField,fullWidth:!0},n)),o.a.createElement(g.s,{name:"direccion",inputProps:{maxLength:300},onChange:this.handleChange,label:"Direccion",value:this.state.direccion||"",multiline:!0,rows:3,style:W.textField,fullWidth:!0}),o.a.createElement(g.s,Object.assign({name:"email",inputProps:{maxLength:150},onChange:this.handleChange,label:"Email",value:this.state.email||"",style:W.textField,fullWidth:!0},i))),o.a.createElement(g.d,null,o.a.createElement(g.a,{type:"button",onClick:this.handleExit,color:"secondary",variant:"outlined"},"SALIR"),o.a.createElement(g.a,{disabled:c,type:"submit",color:"primary",variant:"outlined"},"AGREGAR"))))}}]),t}(o.a.PureComponent);var G=Object(I.withStyles)(function(e){return{paper:{maxHeight:"calc(100% - 30px)",marginTop:15,marginBottom:15}}})(F),z={root:{padding:"20px 10px",flex:1},textFiel:{marginTop:10,marginBottom:10}},V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={telefono_error:"",email_error:""},e.onMounted&&e.onMounted(e.stepIndex),a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){this.props.history.push(this.props.match.path+"/invoice-data")}},{key:"render",value:function(){var e=this.props,t=N.tel(e.data.telefono),a={};t&&(a.error=!0,a.helperText=t);var n=N.email(e.data.email),r={};return n&&(r.error=!0,r.helperText=n),o.a.createElement("div",{style:z.root},o.a.createElement(g.s,{autoFocus:!0,label:"Nombre (Nombres y Apellidos)*",fullWidth:!0,inputProps:{maxLength:300},style:z.textField,name:"contactData.nombre",value:e.data.nombre,onChange:e.onInputChange}),o.a.createElement(g.s,Object.assign({label:"Telefono*",fullWidth:!0,inputProps:{maxLength:50,type:"phone"},style:z.textField,name:"contactData.telefono",value:e.data.telefono,onChange:e.onInputChange},a)),o.a.createElement(g.s,Object.assign({label:"Email",fullWidth:!0,inputProps:{maxLength:150,type:"email"},style:z.textField,name:"contactData.email",value:e.data.email,onChange:e.onInputChange},r)),o.a.createElement(g.t,{style:{marginTop:20},variant:"body2"},"NECESITAS FACTURA?"),o.a.createElement("div",{style:{width:"100%",marginBottom:10,textAlign:"center"}},o.a.createElement(g.a,{variant:"outlined",color:"secondary",size:"small",style:{width:"90%",margin:"auto"},onClick:this.handleClick},"Agregar Datos de Facturaci\xf3n")),o.a.createElement(b.c,{path:"".concat(e.match.path,"/invoice-data"),render:function(t){return o.a.createElement(G,Object.assign({},t,{data:e.invoiceData,onDone:e.onInvoiceDataChange}))}}))}}]),t}(o.a.Component),U=a(111),H=a(295),q=a.n(H),J=a(296),Z={},K={fields:{marginTop:10,marginBottom:10}},Y={lat:-.263496,lng:-78.488272},$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1,defaultCenter:{},latLng:null,defaultZoom:12,bounds:null,enableLocationBtn:!1},e.onMounted&&e.onMounted(e.stepIndex),a.handleMapClick=a.handleMapClick.bind(Object(p.a)(Object(p.a)(a))),a.handlePlacesChanged=a.handlePlacesChanged.bind(Object(p.a)(Object(p.a)(a))),a.handleSearchBoxMounted=a.handleSearchBoxMounted.bind(Object(p.a)(Object(p.a)(a))),a.handleMapMounted=a.handleMapMounted.bind(Object(p.a)(Object(p.a)(a))),a.handleBoundsChanged=a.handleBoundsChanged.bind(Object(p.a)(Object(p.a)(a))),a.handleLocationClick=a.handleLocationClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleSearchBoxMounted",value:function(e){Z.searchBox=e}},{key:"handleMapMounted",value:function(e){Z.map=e}},{key:"handleBoundsChanged",value:function(){this.setState({bounds:Z.map.getBounds()})}},{key:"handlePlacesChanged",value:function(){var e=Z.searchBox.getPlaces(),t=new window.google.maps.LatLngBounds;e.forEach(function(e){e.geometry.viewport?t.union(e.geometry.viewport):t.extend(e.geometry.location)});var a=e.map(function(e){return{position:e.geometry.location,name:e.name}}),n=this.state.defaultCenter;a&&a.length&&(n=a[0]),this.setState({center:n.position}),this.props.onPositionChanged({lat:n.position.lat(),lng:n.position.lng(),name:n.name})}},{key:"componentWillMount",value:function(){var e=this,t=this.props.direccion;if(t&&t.position)return this.setState({center:Object(c.a)({},t.position),defaultZoom:20});navigator.geolocation.getCurrentPosition(function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude,name:"Ubicaci\xf3n Actual"};e.setState({defaultCenter:Object(c.a)({},a,{isCurrentLocation:!0}),defaultZoom:20,loading:!1,enableLocationBtn:!0}),e.props.onPositionChanged(a)},function(t){e.setState({loading:!1,defaultCenter:Object(c.a)({},Y),markerName:"",enableLocationBtn:!1})})}},{key:"handleMapClick",value:function(e){this.props.onPositionChanged({lat:e.latLng.lat(),lng:e.latLng.lng(),name:""})}},{key:"handleLocationClick",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude,name:"Ubicaci\xf3n Actual"};e.props.onPositionChanged(a),e.setState({center:a})},function(t){var a={center:Object(c.a)({},e.state.defaultCenter)};a.center.isCurrentLocation&&(delete a.center.isCurrentLocation,e.props.onPositionChanged(a.center)),e.setState(a)})}},{key:"render",value:function(){var e=this.props,t=e.direccion,a=e.onInputChange,n=e.API_KEY,r=this.state,i=r.defaultCenter,l=r.defaultZoom,c=r.center,s=r.bounds,d=r.enableLocationBtn;return o.a.createElement("div",{style:{overflow:"auto",paddingLeft:10,paddingRight:10,flex:1}},o.a.createElement(X,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat(n||"","&v=3.exp&libraries=geometry,drawing,places"),containerElement:o.a.createElement("div",{style:{height:"300px"}}),loadingElement:o.a.createElement("div",{style:{height:"100%"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),onClick:this.handleMapClick,defaultZoom:l,onPlacesChanged:this.handlePlacesChanged,onSearchBoxMounted:this.handleSearchBoxMounted,onMapMounted:this.handleMapMounted,marker:t.position,center:c||i,onBoundsChanged:this.handleBoundsChanged,searchBoxBounds:s,onLocationClick:this.handleLocationClick,enableLocationBtn:d}),o.a.createElement(g.s,{name:"direccion.numero",value:t.numero,onChange:a,inputProps:{maxLength:100},label:"Numero",placeholder:"Ej. Dpto 101, Oficina 304, Manzana 10 Villa 4, etc.",fullWidth:!0,style:K.fields}),o.a.createElement(g.s,{name:"direccion.referencia",value:t.referencia,onChange:a,inputProps:{maxLength:200},label:"Referencia*",placeholder:"Ej. Al lado de la panaderia 'El Pan de Cada Dia'",fullWidth:!0,style:K.fields}))}}]),t}(o.a.PureComponent),X=Object(U.withScriptjs)(Object(U.withGoogleMap)(function(e){var t=window.google;return o.a.createElement(U.GoogleMap,Object.assign({},e,{ref:e.onMapMounted,options:{disableDefaultUI:!0,zoomControl:!0,clickableIcons:!1}}),o.a.createElement(q.a,{bounds:e.searchBoxBounds,onPlacesChanged:e.onPlacesChanged,controlPosition:t.maps.ControlPosition.TOP_LEFT,ref:e.onSearchBoxMounted},o.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"calc(100% - 10px)",margin:5}},o.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),e.stopPropagation()},placeholder:"Busca tu direcci\xf3n aqui",style:{flex:1,boxSizing:"border-box",border:"1px solid transparent",height:40,padding:"0 10px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses"}}),o.a.createElement(g.a,{style:{maxHeight:40,padding:5,minWidth:40,background:"#fff",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)"},variant:"outlined",disabled:!e.enableLocationBtn},o.a.createElement(v.g,null)))),e.marker?o.a.createElement(J.MarkerWithLabel,{x:!0,labelAnchor:new window.google.maps.Point(0,0),position:e.marker,labelStyle:{background:"#fff",border:"1px solid grey",padding:"10px"},labelVisible:Boolean(e.marker.name)},o.a.createElement(g.t,null,e.marker.name)):null)})),Q=a(297),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1},e.onMounted&&e.onMounted(e.stepIndex),a.handleReturnToOrder=a.handleReturnToOrder.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleReturnToOrder",value:function(){this.props.history.push("/1")}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.error,n=Object(Q.a)(e,["loading","error"]);return o.a.createElement("div",{style:{textAlign:"center",overflow:"auto",padding:10}},t?o.a.createElement(te,null):a?o.a.createElement(ae,Object.assign({},a,{onClick:this.handleReturnToOrder})):o.a.createElement(ne,n))}}]),t}(o.a.Component);function te(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.b,{size:50}),o.a.createElement(g.t,{variant:"h6"},"Guardando..."))}function ae(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.t,{variant:"h6",color:"secondary"},"Ocurri\xf3 un problema al guardar tu orden. Regresa al pedido, verifica tu informaci\xf3n e intentalo nuevamente."),o.a.createElement(g.t,{variant:"caption",color:"secondary"},e.code,e.status&&" | "+e.status),e.statusText&&o.a.createElement(g.t,{variant:"caption",color:"secondary"},e.statusText),o.a.createElement(g.a,{onClick:e.onClick,variant:"outlined",color:"primary",fullWidth:!0,style:{marginTop:20}},"REGRESAR AL PEDIDO ",o.a.createElement(v.f,null)))}function ne(e){var t=function(e){var t=e.ws_phone,a=e.ws_msg,n=e.contactData,o=e.orderNumber;if(!t||!a)return"";var r=a.replace(/__NAME__/g,(n||{}).nombre).replace(/__ORDER_NUMER__/g,o);return"https://api.whatsapp.com/send?"+"phone=".concat(t,"&")+"text=".concat(encodeURIComponent(r))}(e);return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.d,{fontSize:"large",style:{margin:20}}),o.a.createElement(g.t,{variant:"h5"},"Tu pedido ha sido recibido!"),o.a.createElement(g.t,{variant:"body2"},"En un momento nos comunicaremos contigo para coordinar la entrega de tu pedido. Mantente pendiente a tu telefono."),o.a.createElement(g.a,{onClick:function(e){return window.location.reload()},style:{margin:10},variant:"contained",color:"primary"},"NUEVO PEDIDO"),t&&o.a.createElement(g.a,{target:"_blank",style:{margin:10},variant:"outlined",color:"secondary",component:"a",href:t},"CHATEA CON NOSOTROS",o.a.createElement("img",{alt:"Whatsapp",src:"./ws.png",style:{height:20,width:20,marginLeft:5}})))}var oe=function(e,t){return function(a){function n(e){var a;Object(s.a)(this,n),(a=Object(u.a)(this,Object(h.a)(n).call(this,e))).state={render:!0};var o=e.onValidate(t);return o>=0&&(e.history.push("/"+o),a.state.render=!1),a}return Object(m.a)(n,a),Object(d.a)(n,[{key:"render",value:function(){return this.state.render?o.a.createElement(e,Object.assign({stepIndex:t},this.props)):null}}]),n}(o.a.Component)},re=oe(M,0),ie=oe(A,1),le=oe(V,2),ce=oe($,3),se=oe(ee,4),de=[{t:"Elige tus productos",icon:v.b,currentIcon:v.q},{t:"Confirma tu pedido",icon:v.o,currentIcon:v.n},{t:"Registra tus datos",icon:v.k,currentIcon:v.j},{t:"Ingresa tu ubicaci\xf3n",icon:v.m,currentIcon:v.l}],ue=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state=new k,a.handleOptionOpened=a.handleOptionOpened.bind(Object(p.a)(Object(p.a)(a))),a.handleItemChange=a.handleItemChange.bind(Object(p.a)(Object(p.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(p.a)(Object(p.a)(a))),a.handleInvoiceDataChange=a.handleInvoiceDataChange.bind(Object(p.a)(Object(p.a)(a))),a.handlePositionChanged=a.handlePositionChanged.bind(Object(p.a)(Object(p.a)(a))),a.handleGuardar=a.handleGuardar.bind(Object(p.a)(Object(p.a)(a))),a.validateStep=a.validateStep.bind(Object(p.a)(Object(p.a)(a))),a.handleValidateStep=a.handleValidateStep.bind(Object(p.a)(Object(p.a)(a))),a.handleNextClick=a.handleNextClick.bind(Object(p.a)(Object(p.a)(a))),a.state.contactData=S("contactData")||a.state.contactData,a.state.invoiceData=S("invoiceData")||a.state.invoiceData,a.state.direccion=S("direccion")||a.state.direccion,a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleValidateStep",value:function(e){if(0!==window.location.href.indexOf("http://localhost")&&this.state.orderNumber){var t=Object(c.a)({},new k,{loading:!1,productList:Object(l.a)(this.state.productList)});return t.contactData=S("contactData")||t.contactData,t.invoiceData=S("invoiceData")||t.invoiceData,t.direccion=S("direccion")||t.direccion,this.setState(t),0}var a=e-1,n=void 0;if(e>=0)for(;a>=0;){this.validateStep(a)&&(n=a),a--}return n}},{key:"validateStep",value:function(e){if((0===e||1===e)&&!this.state.items.length)return"Para continuar seleccione la menos un producto";if(1===e&&!this.state.forma_pago)return"Seleccione el M\xe9todo de Pago";if(2===e&&this.state.contactData){var t=this.state.contactData;if(!t.nombre)return"Agregue un nombre de contacto";if(!t.telefono)return"Agregue un telefono de contacto";var a=N.tel(t.telefono);if(a)return a;if(a=N.email(t.email))return a}if(3===e&&this.state.direccion){var n=this.state.direccion;if(!n.position)return"Confirme su ubicaci\xf3n en el mapa.";if(!n.referencia)return"Agregue la referencia de la direccion de entrega."}}},{key:"componentDidMount",value:function(){var e=this;x.GetStoreData().then(function(t){return e.setState(Object(c.a)({},t))}).then(function(t){return x.GetProducts().then(function(t){return e.setState({productList:t,loading:!1},function(){return console.info("Se han cargado los productos al estado")})})}).catch(function(t){if(console.dir(t),404===t.status)return e.setState({loading:!1,products:[]});e.setState({loading:!1,error:Object(c.a)({},t)})})}},{key:"handleOptionOpened",value:function(e){this.setState({activeStep:e,errGuardar:null})}},{key:"handleInputChange",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(function(e){var t=Object(c.a)({},e);if(a.indexOf(".")>=0){for(var o=a.split("."),r=o.pop(),i=t,l=0;l<o.length;l++)i=i[o[l]];i[r]=n}else t[a]=n;return t})}},{key:"handleItemChange",value:function(e){var t=this.state.items.find(function(t){return t.id===e.id});if(!t&&e.cantidad){var a=Object(l.a)(this.state.items);return a.push(e),this.setState({items:a})}if(t){var n=Object(l.a)(this.state.items),o=n.indexOf(t);e.cantidad?n[o]=e:n.splice(o,1),this.setState({items:n})}}},{key:"handleInvoiceDataChange",value:function(e){this.setState({invoiceData:e}),e?j("invoiceData",JSON.stringify(e)):j("invoiceData")}},{key:"handlePositionChanged",value:function(e){this.setState(function(t){var a=Object(c.a)({},t);return a.direccion=Object(c.a)({},a.direccion),a.direccion.position=e,a})}},{key:"handleNextClick",value:function(){var e=this.state,t=e.contactData,a=e.direccion,n=e.activeStep;2===n&&t&&j("contactData",JSON.stringify(t)),3===n&&a&&j("direccion",JSON.stringify(a))}},{key:"handleGuardar",value:function(e){var t=this;return this.handleOptionOpened(e),this.setState({loading:"guardar",errGuardar:null}),x.SaveOrder(this.state).then(function(e){t.setState({loading:!1,orderNumber:e.numero,errGuardar:null})}).catch(function(e){t.setState({loading:!1,errGuardar:e})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeStep,n=t.productList,r=t.loading,i=t.error,l=t.items,c=t.forma_pago,s=t.nota,d=t.invoiceData,u=t.contactData,h=t.direccion,m=t.errGuardar,p=t.orderNumber,v=t.ws_phone,E=t.ws_msg;return o.a.createElement(f.a,null,o.a.createElement(g.o,{style:{maxHeight:"100%",minHeight:"100%",margin:"auto",maxWidth:700,display:"flex",flexDirection:"column"}},o.a.createElement(g.r,{alternativeLabel:!0,activeStep:a},de.map(function(e,t){return function(e,t,a){var n={};a===t&&(n={icon:o.a.createElement(e.currentIcon,null)});t>a&&(n={icon:o.a.createElement(e.icon,null)});return o.a.createElement(g.p,{key:t},o.a.createElement(g.q,n,e.t))}(e,t,a)})),o.a.createElement("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}},i?o.a.createElement("div",{style:{flex:1,textAlign:"center",padding:20}},o.a.createElement(g.t,{variant:"h6",color:"secondary"},i.message),o.a.createElement(g.a,{fullWidth:!0,style:{marginTop:20,marginBottom:20},onClick:function(e){return window.location.reload()},variant:"outlined",color:"primary"},"REINTENTAR")):"data"===r?o.a.createElement("div",{style:{flex:1,textAlign:"center",padding:20}},o.a.createElement(g.b,{size:40}),o.a.createElement(g.t,{color:"primary",variant:"h6"},"Obteniendo informaci\xf3n de la Tienda...")):o.a.createElement(o.a.Fragment,null,r?o.a.createElement(b.a,{message:"Hay un proceso en progreso, no deberia salir hasta que se complete. Est\xe1 seguro de salir?"}):null,o.a.createElement(b.e,null,o.a.createElement(b.c,{path:"/0",render:function(t){return o.a.createElement(re,Object.assign({},t,{onValidate:e.handleValidateStep,onMounted:e.handleOptionOpened,onItemChange:e.handleItemChange,choosenItems:l,productList:n}))}}),o.a.createElement(b.c,{path:"/1",render:function(t){return o.a.createElement(ie,Object.assign({},t,{productList:n,onValidate:e.handleValidateStep,onMounted:e.handleOptionOpened,onItemChange:e.handleItemChange,onInputChange:e.handleInputChange,items:l,nota:s,forma_pago:c}))}}),o.a.createElement(b.c,{path:"/2",render:function(t){return o.a.createElement(le,Object.assign({},t,{onValidate:e.handleValidateStep,invoiceData:d,data:u,onInputChange:e.handleInputChange,onInvoiceDataChange:e.handleInvoiceDataChange,onMounted:e.handleOptionOpened}))}}),o.a.createElement(b.c,{path:"/3",render:function(t){return o.a.createElement(ce,Object.assign({},t,{onValidate:e.handleValidateStep,API_KEY:e.state.G_M_K,onMounted:e.handleOptionOpened,onPositionChanged:e.handlePositionChanged,direccion:h,onInputChange:e.handleInputChange}))}}),o.a.createElement(b.c,{path:"/4",render:function(t){return o.a.createElement(se,Object.assign({},t,{ws_msg:E,ws_phone:v,contactData:u,orderNumber:p,onValidate:e.handleValidateStep,onMounted:e.handleGuardar,loading:r,error:m,saved:Boolean(p)}))}}),o.a.createElement(b.b,{exact:!0,from:"/",to:"/0"}),o.a.createElement(b.b,{exact:!0,from:"",to:"/0"})),de.length===this.state.activeStep?null:o.a.createElement(he,{onClick:this.handleNextClick,disabled:Boolean(this.validateStep(this.state.activeStep)),activeStep:this.state.activeStep,errMsg:this.validateStep(this.state.activeStep)})))))}}]),t}(o.a.Component),he=Object(b.h)(function(e){return o.a.createElement("div",{style:{width:"calct(100% - 20px)",display:"flex",flexDirection:"row",textAlign:"center",margin:10,minHeight:40}},0===e.activeStep?null:o.a.createElement(g.a,{onClick:function(){e.history.push("/"+(e.activeStep-1))},title:"Regresar",color:"secondary",variant:"outlined"},o.a.createElement(v.c,null)),o.a.createElement(g.a,{onClick:function(){e.errMsg?alert(e.errMsg):e.history.push("/"+(e.activeStep+1));e.onClick()},disabled:e.disabled,color:"primary",type:"button",variant:"outlined",style:{flex:1},size:"large"},"CONTINUAR"))});var me=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={begin:!0},a.begin=function(){if(a.setState({begin:!1}),!navigator.geolocation)return a.setState({error:"Tu navegador no soporta la funci\xf3n de Ubicaci\xf3n."});navigator.geolocation.getCurrentPosition(function(e){window.lat=e.coords.latitude,window.lon=e.coords.longitude,a.props.launch()},function(e){e.code===e.PERMISSION_DENIED?a.setState({error:"No se ha podido establecer tu ubicaci\xf3n. Permitenos acceder a tu ubicaci\xf3n para tener una mejor experiencia.",_error:e.message,code:e.code}):e.code===e.POSITION_UNAVAILABLE?a.setState({error:"Tu navegador no nos permite encontrar tu ubicaci\xf3n.",_error:e.message,code:e.code}):a.setState({error:e.message,code:e.code})})};var n=e.empresa,o=e.error;return n&&(a.state.logoSrc=n.logoSrc,a.state.slogan=n.slogan,a.state.titulo=n.titulo),o&&(404===o.status?(a.state.error="La tienda que buscas no existe. Revisa tu enlace.",a.state._error="Ingresaste a: "+window.location.href):(a.state.error=o.message,a.state.code=o.code||o.status,a.state._error=o.statusText)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.logoSrc,n=t.slogan,r=t.titulo,i=t.error,l=t._error,c=t.begin;return o.a.createElement("div",{style:{width:"calc(100% - 20px)",maxWidth:600,textAlign:"center",paddingTop:30,margin:"auto"}},c?i?o.a.createElement(o.a.Fragment,null,o.a.createElement(g.t,{color:"secondary",variant:"h6"},i),o.a.createElement(g.t,{color:"secondary",variant:"subtitle2"},l)):o.a.createElement(o.a.Fragment,null,a&&o.a.createElement("img",{src:a,style:{maxWidth:"100%",maxHeight:350,marginTop:10,marginBottom:10}}),o.a.createElement(g.t,{variant:"h6"},r||"Cargando..."),n&&o.a.createElement(g.t,{variant:"subtitle2"},n),(r||a)&&o.a.createElement(g.a,{color:"primary",onClick:this.begin,fullWidth:!0,variant:"outlined",style:{marginTop:20}},"EMPECEMOS!")):i?o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(v.h,{fontSize:"large"}),o.a.createElement(g.t,{variant:"body2"},i),o.a.createElement(g.t,{variant:"body1"},l),o.a.createElement(g.a,{style:{marginTop:20,wordWrap:"break-word"},onClick:function(){return e.props.launch()},variant:"outlined",color:"primary"},"ENTRAR DE TODAS FORMAS")):o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(g.t,{variant:"h5"},"Primero necesitamos que nos permitas acceder a tu ubicaci\xf3n"),o.a.createElement(v.i,{fontSize:"large"})))}}]),t}(o.a.Component),pe=function(){return i.a.render(o.a.createElement(ue,null),document.getElementById("app"))};function ge(e,t){i.a.render(o.a.createElement(me,{empresa:e,error:t,launch:pe}),document.getElementById("app"))}x.GetStoreData().then(function(e){return ge(e)}).catch(function(e){return ge(null,e)})}},[[5565,2,1]]]);
//# sourceMappingURL=main.d516e2e8.chunk.js.map