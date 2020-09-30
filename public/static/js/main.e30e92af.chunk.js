(this.webpackJsonpview=this.webpackJsonpview||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/logo.0e8ba943.svg"},111:function(e,t,a){e.exports=a(197)},196:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),r=a.n(l),o=a(69),s=a(12),u=a(9),m=a(205),i=a(204),d=a(206),E=a(208),p=a(49),f=a(14),b=a.n(f),h=a(25),v=a(36),C={DELETE:8,TAB:9,ENTER:13,UP:38,DOWN:40,ZERO:48},O=a(37),g=a(38),j=a(96),A=a.n(j).a.create({baseURL:"/api"}),y=function(){function e(){Object(O.a)(this,e)}return Object(g.a)(e,[{key:"get",value:function(e){return A.get("people?".concat(e))}}]),e}(),N=Object(n.createContext)({products:[],seller:{},customer:{}});function k(e){var t=e.children,a=Object(n.useState)([]),l=Object(u.a)(a,2),r=l[0],o=l[1],s=Object(n.useState)({}),m=Object(u.a)(s,2),i=m[0],d=m[1],E=Object(n.useState)({}),p=Object(u.a)(E,2),f=p[0],b=p[1],h=Object(n.useCallback)((function(e){var t=e.target.value.toUpperCase(),a="";return a=t.match(/^\d+$/)?"id=".concat(t):"razao_social_nome=".concat(t),(new y).get(a)}),[]);return c.a.createElement(N.Provider,{value:{products:r,setProducts:o,seller:i,setSeller:d,customer:f,setCustomer:b,searchPerson:h}},t)}function x(){var e=Object(n.useContext)(N);if(!e)throw new Error("useProducts must be used within an ProductsProvider");return e}var S=function(){function e(){Object(O.a)(this,e)}return Object(g.a)(e,[{key:"get",value:function(e){return A.get("products?".concat(e))}}]),e}(),w=function(){function e(){Object(O.a)(this,e)}return Object(g.a)(e,[{key:"index",value:function(){return A.get("orders")}},{key:"create",value:function(e,t){return A.post("orders",{id:e,quantity:t||1})}}]),e}(),B=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)({fabricante:"",tipo:"",sub_descricao:"",obs:"",medida:"",marca:"",id:""}),l=Object(u.a)(a,2),r=l[0],o=l[1],s=Object(n.useState)(0),m=Object(u.a)(s,2),i=m[0],d=m[1],E=Object(n.useState)([]),f=Object(u.a)(E,2),O=f[0],g=f[1],j=x(),A=j.products,y=j.setProducts,N=Object(n.useCallback)((function(e){o(Object(v.a)({},e.target.name,e.target.value))}),[]),k=Object(n.useCallback)(function(){var t=Object(h.a)(b.a.mark((function t(a){var n,c,l,o,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=Object.entries(r).map((function(e){return e[1].length>0?"".concat(e[0],"=").concat(e[1].toUpperCase()):""})),c=n.filter((function(e){return e})).join("&"),t.next=5,(new S).get(c);case 5:l=t.sent,o=l.data,g(o),Object.keys(o).length&&(s=o[0].id,e.current.querySelector('tbody tr[data-id="'.concat(s,'"]')).focus());case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[r]);var B=Object(n.useCallback)((function(e,t){var a=A.findIndex((function(t){return t.id===e.id}));L(e.id),d(O.findIndex((function(t){return t.id===e.id}))),a<0?(new w).create(e.id,t).then((function(e){y([].concat(Object(p.a)(A),[e.data]))})):window.confirm(function(e){return"O item ".concat(e.tipo," ").concat(e.sub_descricao," ").concat(e.marca," j\xe1 foi adicionado, deseja aumentar a quantidade?")}(e))&&(new w).create(e.id,t).then((function(e){var t=Object(p.a)(A);t[a]=e.data,y(t)}))}),[O,A,y]);function L(t){return e.current.querySelector('tbody tr[data-id="'.concat(t,'"]')).focus(),!0}var F=Object(n.useCallback)((function(a){var n=e.current.querySelectorAll("tbody tr").length,c=i;if(0===n)return function(e){return e.preventDefault(),t.current.focus(),!0}(a);var l=O[c];if(a.keyCode>=48&&a.keyCode<=57||a.keyCode===C.DELETE){a.preventDefault();var r=a.keyCode-C.ZERO,o=a.target.parentElement.parentElement,s=parseInt(o.dataset.id),u=O.map((function(e){return e.id===s&&(a.keyCode===C.DELETE?e.quantity=0:e.quantity=0===parseInt(e.quantity)?r:"".concat(e.quantity).concat(r)),e}));return g(u),!0}switch(a.keyCode!==C.TAB&&L(l.id),a.keyCode){case C.TAB:c++;break;case C.ENTER:var m=a.target.value;B(l,m);break;case C.UP:c>0&&c--;break;case C.DOWN:c+1<O.length&&c++}d(c)}),[B,O,i]);return Object(n.useEffect)((function(){t.current.focus()}),[]),c.a.createElement("div",{className:"page-modal"},c.a.createElement("form",{onSubmit:k},c.a.createElement("div",{className:"form-row pl-1 pb-1"},c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"fabricante"},"Fabricante"),c.a.createElement("input",{type:"text",onChange:N,className:"form-control",name:"fabricante",ref:t})),c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"tipo"},"Tipo"),c.a.createElement("input",{type:"text",onChange:N,className:"form-control",placeholder:"",name:"tipo"})),c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"sub_descricao"},"Sub Descri\xe7\xe3o"),c.a.createElement("input",{type:"text",onChange:N,className:"form-control",name:"sub_descricao"})),c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"obs"},"Aplica\xe7\xe3o"),c.a.createElement("input",{type:"text",onChange:N,className:"form-control",name:"obs"})),c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"medida"},"Medida"),c.a.createElement("input",{type:"text",onChange:N,className:"form-control",name:"medida"})),c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"marca"},"Marca"),c.a.createElement("input",{type:"text",onChange:N,className:"form-control",name:"marca"})),c.a.createElement("div",{className:"col"},c.a.createElement("label",{htmlFor:"id"},"GTIN"),c.a.createElement("input",{type:"text",onChange:N,className:"form-control",name:"id"})),c.a.createElement("div",{className:"col d-flex align-items-end"},c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Buscar")))),c.a.createElement("div",null,c.a.createElement("table",{ref:e,className:"table table-hover",onKeyDown:F,tabIndex:"0"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"CODIGO"),c.a.createElement("th",{scope:"col"},"FABRICANTE"),c.a.createElement("th",{scope:"col"},"MED"),c.a.createElement("th",{scope:"col"},"TIPO"),c.a.createElement("th",{scope:"col"},"SUB"),c.a.createElement("th",{scope:"col"},"OBS"),c.a.createElement("th",{scope:"col"},"MARCA"),c.a.createElement("th",{scope:"col"},"UN"),c.a.createElement("th",{scope:"col"},"QTD"),c.a.createElement("th",{scope:"col"},"RES"),c.a.createElement("th",{scope:"col"},"PROM"),c.a.createElement("th",{scope:"col"},"QTD"),c.a.createElement("th",{scope:"col"},"VENDA"))),c.a.createElement("tbody",null,O.map((function(e,t){return c.a.createElement("tr",{key:e.id,"data-id":e.id,tabIndex:t,className:t===i?"table-success":"table-light"},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.fabricante),c.a.createElement("td",null,e.medida),c.a.createElement("td",null,e.tipo),c.a.createElement("td",null,e.sub_descricao),c.a.createElement("td",null,e.obs),c.a.createElement("td",null,e.marca),c.a.createElement("td",null,e.un),c.a.createElement("td",null,Math.floor(1e3*Math.random())),c.a.createElement("td",null,Math.floor(1e3*Math.random())),c.a.createElement("td",null,e.preco_promocao),c.a.createElement("td",{className:"p-0"},c.a.createElement("input",{type:"text",className:"form-control form-control-sm",onChange:function(){},value:e.quantity})),c.a.createElement("td",{className:"p-0"},c.a.createElement("select",{className:"form-control form-control-sm"},e.preco_venda.map((function(e,t){return c.a.createElement("option",{key:t,value:parseFloat(e.value)},e.label)})))))}))))))},L=a(100),F=a.n(L),D=a(110),I=a(207),T=a(58),q=a(97),R=a.n(q);var _=function(e){var t=e.label,a=e.alt,n=Object(T.a)(e,["label","alt"]);return c.a.createElement("img",Object.assign({src:R.a,className:t,alt:a},n))},U=a(98),P=a.n(U);var G=function(){return c.a.createElement("img",{src:P.a,alt:"Sorting Up"})},Q=a(99),V=a.n(Q);var z=function(){return c.a.createElement("img",{src:V.a,alt:"Sorting Down"})};var M=function(e){return!0===e.display?e.direction?c.a.createElement(G,null):c.a.createElement(z,null):c.a.createElement("span",null)},J=c.a.forwardRef((function(e,t){e.value;var a=e.onClick;return c.a.createElement("span",{ref:t,onClick:a,className:"h-100 px-2"},c.a.createElement(D.a,{style:{marginTop:"-4px"}}))}));var K=function(e){var t=e.focusOnFirstInput,a=x(),l=a.products,r=a.setProducts,o=Object(n.useRef)(null),s=Object(n.useState)(new Date),m=Object(u.a)(s,2),i=m[0],d=m[1],E=Object(n.useState)({name:"id",status:!1}),f=Object(u.a)(E,2),v=f[0],O=f[1],g=Object(n.useState)({registers:{quantity:0,value:0},selected:{quantity:0,value:0}}),j=Object(u.a)(g,2),y=j[0],N=j[1],k=Object(n.useCallback)((function(){(new w).index().then((function(e){var t=e.data;t.map((function(e){return e.obs=e.obs.substr(0,10),e.marca=e.marca.substr(0,5),e.sub_descricao=e.sub_descricao.substr(0,5),e.total_venda.toFixed(2),e.stock=Math.floor(100*Math.random()),e})),r(t)}))}),[r]),S=Object(n.useCallback)((function(e,t){var a=l.map((function(a){return a.id===e&&(a.selected=t),a}));r(a)}),[l,r]),B=Object(n.useCallback)((function(){var e=l.map((function(e){var t=0;return e.preco_venda.forEach((function(e){!0===e.selected&&(t=e.value)})),e.total_venda=e.quantity*t,e}));r(e)}),[l,r]),L=Object(n.useCallback)((function(e){var t=e.target.dataset.sort,a=l;a.sort((function(e,a){return e[t]===a[t]?0:v.status?e[t]<a[t]?-1:1:e[t]>a[t]?-1:1})),O({status:!v.status,name:t}),r(a),B()}),[l,r,v,B]),D=Object(n.useCallback)((function(e,t){var a=e.target.value,n=l.map((function(e){if(e.id===t.id){var n=0;e.preco_venda.forEach((function(e,t){parseFloat(a)===parseFloat(e.value)&&(n=t)})),e.preco_venda.forEach((function(e,t){return e.selected=t===n,e}))}return e}));r(n)}),[l,r]),T=Object(n.useCallback)((function(e,t){var a=l.map((function(a){return a.id===t.id&&(a.quantity=e.target.value),a}));r(a)}),[r,l]),q=Object(n.useCallback)(function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.a)(l),n=l.findIndex((function(e){return e.id===t.id})),a.splice(n,1),r(a),e.next=6,A.delete("/orders/".concat(t.id));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[l,r]);return Object(n.useEffect)((function(){if(k(),t){var e=o.current.querySelector("tbody tr td input[data-type=quantity]");e&&setTimeout((function(){return e.focus()}),500)}}),[t,k]),Object(n.useEffect)((function(){var e=l.reduce((function(e,t){return!0===t.selected?parseInt(e+1):parseInt(e)}),0),t=l.length,a=l.reduce((function(e,t){return!0===t.selected?parseFloat(e+t.total_venda):parseFloat(e)}),0),n=l.reduce((function(e,t){return parseFloat(e+t.total_venda)}),0);N({registers:{quantity:t,value:n.toFixed(2)},selected:{quantity:e,value:a.toFixed(2)}})}),[l]),c.a.createElement("div",null,c.a.createElement("table",{className:"table table-hover table-sm",ref:o,onKeyDown:function(e){var t=e.target.nodeName;switch(e.keyCode){case C.TAB:var a=e.target.parentNode.parentNode,n=a.parentNode.lastChild.dataset.id;if("SELECT"!==t)return!0;if(a.dataset.id===n)return!0;e.preventDefault(),a.nextElementSibling.querySelector("select").focus();break;default:return!0}}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"}),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"id"===v.name,direction:v.status}),c.a.createElement("span",{"data-sort":"id",onClick:L},"#")),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"created_at"===v.name,direction:v.status}),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("span",{"data-sort":"created_at",onClick:L},"DATA"),c.a.createElement(F.a,{selected:i,onChange:function(e){return d(e)},locale:I.a,customInput:c.a.createElement(J,null)}))),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"fabricante"===v.name,direction:v.status}),c.a.createElement("span",{"data-sort":"fabricante",onClick:L},"FABRICANTE")),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"medida"===v.name,direction:v.status}),c.a.createElement("span",{"data-sort":"medida",onClick:L},"MED")),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"tipo"===v.name,direction:v.status}),c.a.createElement("span",{"data-sort":"tipo",onClick:L},"TIPO")),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"sub_descricao"===v.name,direction:v.status}),c.a.createElement("span",{"data-sort":"sub_descricao",onClick:L},"SUB DESC")),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"obs"===v.name,direction:v.status}),c.a.createElement("span",{"data-sort":"obs",onClick:L},"OBS")),c.a.createElement("th",{scope:"col",className:"cursor-pointer"},c.a.createElement(M,{display:"marca"===v.name,direction:v.status}),c.a.createElement("span",{"data-sort":"marca",onClick:L},"MARCA")),c.a.createElement("th",{scope:"col"},"MV"),c.a.createElement("th",{scope:"col"},"UN"),c.a.createElement("th",{scope:"col"},"EST"),c.a.createElement("th",{scope:"col"},"RES"),c.a.createElement("th",{scope:"col"},"QTD"),c.a.createElement("th",{scope:"col"},"VENDA"),c.a.createElement("th",{scope:"col"},"TOTAL"),c.a.createElement("th",{scope:"col"},"Q.U.VDA"),c.a.createElement("th",{scope:"col"},"D.U.VDA"),c.a.createElement("th",{scope:"col"},"V.U.VDA"),c.a.createElement("th",{scope:"col"},"ICONES"))),c.a.createElement("tbody",null,l.map((function(e){return c.a.createElement("tr",{key:e.id,"data-id":e.id},c.a.createElement("td",{className:"d-flex align-items-center"},c.a.createElement(_,{label:"icon L1C2",alt:"Delete Icon",onClick:function(){return q(e)}}),c.a.createElement("input",{type:"checkbox",className:"ml-1",onClick:function(t){S(e.id,t.target.checked)},value:e.selected})),c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.created_at),c.a.createElement("td",null,e.fabricante),c.a.createElement("td",null,e.medida),c.a.createElement("td",null,e.tipo),c.a.createElement("td",null,e.sub_descricao),c.a.createElement("td",null,e.obs),c.a.createElement("td",null,e.marca),c.a.createElement("td",null,e.qtd_multipla_venda),c.a.createElement("td",null,e.un),c.a.createElement("td",null,e.stock),c.a.createElement("td",null,"100"),c.a.createElement("td",null,c.a.createElement("input",{type:"text",onChange:function(t){T(t,e),B()},style:{width:"75px"},"aria-label":"Quantity","data-type":"quantity",className:"form-control form-control-sm",value:e.quantity})),c.a.createElement("td",null,c.a.createElement("select",{className:"form-control form-control-sm",onChange:function(t){D(t,e),B()},style:{width:"120px"}},e.preco_venda.map((function(e,t){return c.a.createElement("option",{key:t,value:parseFloat(e.value)},e.label)})))),c.a.createElement("td",null,e.total_venda.toFixed(2)),c.a.createElement("td",null,e.quantity),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,e.preco_venda.map((function(e){return e.selected?e.value:""}))),c.a.createElement("td",null,c.a.createElement(_,{label:"icon L11C3",alt:"L11C3"}),c.a.createElement(_,{label:"icon L6C4",alt:"L6C4"}),c.a.createElement(_,{label:"icon L7C5",alt:"L7C5"}),c.a.createElement(_,{label:"icon L8C6",alt:"L8C6"}),c.a.createElement(_,{label:"icon L6C2",alt:"L6C2"}),c.a.createElement(_,{label:"icon L1C5",alt:"L1C5"}),c.a.createElement(_,{label:"icon L6C4",alt:"L6C4"}),c.a.createElement(_,{label:"icon L6C4",alt:"L6C4"}),c.a.createElement(_,{label:"icon L7C1",alt:"L7C1"})))}))),c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"text-right",colSpan:"12"},"REGISTROS"),c.a.createElement("td",null,y.registers.quantity),c.a.createElement("td",null,y.registers.value),c.a.createElement("td",{colSpan:"6"},c.a.createElement("button",{type:"button",className:"btn btn-primary"},"Converter em pedido"))),c.a.createElement("tr",null,c.a.createElement("td",{className:"text-right",colSpan:"12"},"SELECIONADOS"),c.a.createElement("td",null,y.selected.quantity),c.a.createElement("td",null,y.selected.value),c.a.createElement("td",{colSpan:"6"},c.a.createElement("button",{type:"button",className:"btn btn-primary"},"Gerar PDF"))))))},W=a(103),H=a.n(W);var X=function(){return c.a.createElement("img",{src:H.a,alt:"Logo",className:"img-fluid logo-height"})},Y=a(104),Z=function(e){var t=e.informeParent,a=void 0===t?function(e){return e}:t,l=Object(n.useState)({fantasia:"",razao_social_nome:""}),r=Object(u.a)(l,2),o=r[0],s=r[1],m=Object(n.useState)([]),i=Object(u.a)(m,2),d=i[0],E=i[1],p=Object(n.useCallback)((function(e){s(Object(v.a)({},e.target.name,e.target.value))}),[]),f=Object(n.useCallback)(function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,c,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=Object.entries(o).map((function(e){return e[1].length>0?"".concat(e[0],"=").concat(e[1].toUpperCase()):""})),n=a.filter((function(e){return e})).join("&"),e.next=5,(new y).get(n);case 5:c=e.sent,l=c.data,E(l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o]);return c.a.createElement("div",{className:"page-modal"},c.a.createElement("div",null,c.a.createElement("form",{onSubmit:f},c.a.createElement("div",{className:"form-row pl-1 pt-1"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Fantasia",name:"fantasia",onChange:p})),c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Razao Social/Nome",name:"razao_social_nome",onChange:p})),c.a.createElement("div",{className:"col"},c.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Buscar"))))),c.a.createElement("div",{className:"overflow-auto max-height-modal-grid"},c.a.createElement("table",{className:"table table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"CODIGO"),c.a.createElement("th",{scope:"col"},"RAZAO SOCIAL"),c.a.createElement("th",{scope:"col"},"FANTASIA"),c.a.createElement("th",{scope:"col"},"CNPJ/CPF"),c.a.createElement("th",{scope:"col"},"IE"),c.a.createElement("th",{scope:"col"},"ENDERECO "),c.a.createElement("th",{scope:"col"},"NUM"),c.a.createElement("th",{scope:"col"},"BAIRRO"),c.a.createElement("th",{scope:"col"},"CIDADE"),c.a.createElement("th",{scope:"col"},"UF"),c.a.createElement("th",{scope:"col"},"TELEFONE"),c.a.createElement("th",{scope:"col"},"CEP"))),c.a.createElement("tbody",null,d.map((function(e){return c.a.createElement("tr",{key:e.id,onClick:function(){return a(e)}},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.razao_social_nome),c.a.createElement("td",null,e.fantasia),c.a.createElement("td",null,e.cnpj_cpf),c.a.createElement("td",null,e.ie),c.a.createElement("td",null,e.endereco),c.a.createElement("td",null,e.num),c.a.createElement("td",null,e.bairro),c.a.createElement("td",null,e.cidade),c.a.createElement("td",null,e.uf),c.a.createElement("td",null,e.telefone),c.a.createElement("td",null,e.cep))}))))))};var $=function(e){var t=e.searchItemButton,a=Object(T.a)(e,["searchItemButton"]),l=x(),r=l.setCustomer,o=l.setSeller,s=l.customer,i=l.searchPerson,E=Object(n.useState)(""),p=Object(u.a)(E,2),f=p[0],v=p[1],C=Object(n.useState)(""),O=Object(u.a)(C,2),g=O[0],j=O[1],A=Object(n.useState)(!1),y=Object(u.a)(A,2),N=y[0],k=y[1],S=Object(n.useCallback)((function(){return k(!1)}),[]),w=Object(n.useCallback)((function(){return k(!0)}),[]),B=Object(n.useCallback)((function(e){v(e.target.value)}),[]),L=Object(n.useCallback)(function(){var e=Object(h.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.target.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,i(a);case 4:1===(n=e.sent).data.length?(r(n.data[0]),n.data[0].interno.status&&(o(Object(Y.a)({},n.data[0].interno)),t.current.focus(),t.current.click())):0===n.data.length?(r({}),k(!1)):k(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,i,r,o]);return Object(n.useEffect)((function(){return v(s.razao_social_nome||""),j(s.id||""),function(){}}),[s,t,v]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{show:N,onHide:S,size:"lg"},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,"Dados para a Busca")),c.a.createElement(m.a.Body,null,c.a.createElement(Z,{informeParent:function(e){r(e),S()}}))),c.a.createElement(d.a.Group,{as:d.a.Col},c.a.createElement(d.a.Label,{className:"mr-2"},"Cliente"),c.a.createElement(d.a.Control,Object.assign({type:"text",placeholder:"Informe o cliente"},a,{onBlur:L,onChange:B,autoFocus:!0}))),c.a.createElement(d.a.Group,{as:d.a.Col,className:"d-flex align-items-end mr-1 ml-1"},c.a.createElement(d.a.Control,{type:"text","data-id":g,"data-target":"customer",value:f,disabled:!0})),c.a.createElement(d.a.Group,{className:"d-flex align-items-end mr-1"},c.a.createElement("span",{onClick:w},c.a.createElement("h3",null,c.a.createElement(_,{label:"icon L5C5",alt:"L5C5"}))),c.a.createElement("h3",null,c.a.createElement(_,{label:"icon L1C5",alt:"L1C5"}))))};var ee=function(e){var t=Object.assign({},e),a=x(),l=a.setSeller,r=a.seller,o=a.searchPerson,s=Object(n.useState)(""),i=Object(u.a)(s,2),E=i[0],p=i[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),C=v[0],O=v[1],g=Object(n.useCallback)((function(){return O(!1)}),[]),j=Object(n.useCallback)((function(){return O(!0)}),[]),A=Object(n.useCallback)((function(e){p(e.target.value)}),[]),y=Object(n.useCallback)(function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o(t);case 4:1===(a=e.sent).data.length?l(a.data[0]):0===a.data.length?(l({}),O(!1)):O(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o,l]);return Object(n.useEffect)((function(){p(r.razao_social_nome||"")}),[r,p]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{show:C,onHide:g,size:"lg"},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,"Dados para a Busca")),c.a.createElement(m.a.Body,null,c.a.createElement(Z,{informeParent:function(e){l(e),g()}}))),c.a.createElement(d.a.Group,{as:d.a.Col},c.a.createElement(d.a.Label,{className:"mr-2"},"Vendedor"),c.a.createElement(d.a.Control,Object.assign({type:"text","data-target":"seller",placeholder:"Informe o vendedor"},t,{onBlur:y,onChange:A,value:E}))),c.a.createElement(d.a.Group,{className:"d-flex align-items-end mr-1"},c.a.createElement("span",{onClick:j},c.a.createElement("h3",null,c.a.createElement(_,{label:"icon L5C5",alt:"L5C5"}))),c.a.createElement("h3",null,c.a.createElement(_,{label:"icon L1C5",alt:"L1C5",title:"Or\xe7amento"})),c.a.createElement("h3",null,c.a.createElement(_,{label:"icon L1C5",alt:"L1C5",title:"Pedido"})),c.a.createElement("h3",null,c.a.createElement(_,{label:"icon L1C5",alt:"L1C5",title:"Composi\xe7\xe3o"}))))};var te=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),p=s[0],f=s[1],b=Object(n.useState)(!1),h=Object(u.a)(b,2),v=h[0],C=h[1],O=Object(n.useCallback)((function(){return f(!0)}),[]),g=Object(n.useCallback)((function(){f(!1),C(!0)}),[]);return Object(n.useEffect)((function(){!function(){var e=document.querySelector("input[data-target=customer]"),t=document.querySelector("input[data-target=seller]");r("Dados para a Busca #".concat(e.dataset.id," ").concat(e.value," / ").concat(t.value))}()})),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{show:p,onHide:g,size:"lg"},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,l)),c.a.createElement(m.a.Body,{className:"pt-1"},c.a.createElement(B,null))),c.a.createElement(i.a,null,c.a.createElement(d.a.Row,{className:"d-flex flex-nowrap"},c.a.createElement($,{searchItemButton:e}),c.a.createElement(ee,null),c.a.createElement(d.a.Group,{className:"d-flex align-items-end mr-1"},c.a.createElement(d.a.Control,{type:"text","data-target":"seller",placeholder:"Pedido"})),c.a.createElement(d.a.Group,{className:"d-flex align-items-end col-md-2"},c.a.createElement(E.a,{ref:e,variant:"primary",onClick:O},"Pesquisar item")),c.a.createElement(d.a.Group,{className:"d-flex align-items-center"},c.a.createElement("span",{className:"d-flex rounded float-right img-fluid"},c.a.createElement(X,null))))),c.a.createElement(K,{focusOnFirstInput:v}))};var ae=function(){return c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:te}))};var ne=function(e){var t=e.children;return c.a.createElement(k,null,t)};a(194),a(195),a(196);var ce=function(){return c.a.createElement(o.a,null,c.a.createElement(ne,null,c.a.createElement(ae,null)))};r.a.render(c.a.createElement(ce,null),document.getElementById("root"))},97:function(e,t,a){e.exports=a.p+"static/media/db_icones.2d3edc98.png"},98:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABe0lEQVQ4jZWST0sCURTFzzzf+EaJoHa2NAI30a5NRKsW/aFd27RvUIFiVhZiA5pgKdTegmpV26BoVR/AjUG1aBOECxXTmWme81plYTNaZ3vP/d17Lhfoor3s6Y6aKKx087icCqn8qUr9SrQ2IE3MjC5YN7cXd38GpHPnu24/i7wNEWr0E0VQadwJ8guQyZ6l6DAL15pmU34x3sWrRqhMOR+UJ2fH5lrXt5f3P/2kc7JrhK1VdN5kD0ZS0lGHKaA863EBIeoBz6aaKERsAenc+a7sd0cqGte8ReNAqeDkq7axFcx7nvVticNqBFjsJ4R0NislLcnq4rAzmhOEAICof8zXKqbmLTUSsfhSGqbpg2n67CB9T5pKdCERC4ttgLvMp9ijFozGQxkA4JaLc8vFOwEAEI2HMt4nI8SqrWkAoACwur9cBXBh12Cn9USw7aV2BspI+a8w0tvSXbYbfB/Q8dO7A5wOaKeeESRI5r83CB8FiwCQjh1feXrM+AQa26a0IiTsMwAAAABJRU5ErkJggg=="},99:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABjElEQVQ4jcWSO0jDUBSGT26SpvWVqIg4a0XBwdFFUBdBdHBwtgjuVTCKwZoUSTpoq4NrJdHJRXcfnRxcnF0cfWCLS15Nm+S6aClpm7p5pgv3+z/+c7kAIaOIWlbeV4/CGCLs8jB/qZum+9nzXF4BANg4XXsKMlSYAJGIBgBwfdJtyYQJ/jKhDWoQg4r/2wCq1aGf03vTBrnkGaek1OVWedcn3fqHVFLqci55xtUEdi95Y48w+YyobrYrI6c13hyJaFY/KtQEGOELTBGgj0dTinS+FQxRDCpSDCrKaS1pDNOCQTixCoNvawJhb/Uk+lIWkQfYGIsIiqQ2SJxuvG4M05LlO53sO+QkPrEFAED+AveF68f5yaWyx1EzziA9vTCx6FNcZK7ieLpP+KY+Su8GwwBNvrKc1ngrzgiAscdiMmbanl7pgKjtOjH2DWfFncR2PU8GBXeFq4f5ySXb66Nnv+J0lzWAOt2SRbEfcCxtJ/gg3yCoX4cAYqpasij2FbLNwm1HPjjfTGe0VBjzDcXknxWVjzUdAAAAAElFTkSuQmCC"}},[[111,1,2]]]);
//# sourceMappingURL=main.e30e92af.chunk.js.map