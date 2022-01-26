(this["webpackJsonpreact-trelloclone"]=this["webpackJsonpreact-trelloclone"]||[]).push([[0],{43:function(e,n,t){"use strict";t.r(n);var r,a,o,i,c,d,s,l,b,g,p,u=t(9),j=t(0),f=t.n(j),O=t(14),h=t.n(O),x=t(7),m=t(6),v=t(1),y=t(4),w=t(13),D=t(22),I=t(11),k=t(8),S=Object(I.b)({key:"todos",default:JSON.parse(localStorage.getItem("todoBoards")||JSON.stringify({"To Do":[],Doing:[],Done:[]}))}),q=Object(I.b)({key:"boardState",default:JSON.parse(localStorage.getItem("boards")||JSON.stringify(["To Do","Doing","Done"]))}),H=t(3),C=k.c.div(r||(r=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 10px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.isDragging?"#e4f2ff":e.theme.cardColor}),(function(e){return e.isDragging?"0px 2px 5px rgba(0, 0, 0, 0.05)":"none"})),N=k.c.svg(a||(a=Object(u.a)(["\n  width: 15px;\n  height: 15px;\n  color: rgba(0, 0, 0, 0.1);\n  :hover {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"]))),T=function(e){var n=e.todoText,t=e.todoId,r=e.index,a=e.boardId,o=Object(I.d)(S);function i(){o((function(e){var n=Object(m.a)(e[a]);return n.splice(r,1),Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},a,n))}))}return Object(H.jsx)(w.b,{index:r,draggableId:t+"",children:function(e,t){return Object(H.jsxs)(C,Object(v.a)(Object(v.a)(Object(v.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{isDragging:t.isDragging,children:[n,Object(H.jsx)(N,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-trash fa-w-14 fa-3x",onClick:i,children:Object(H.jsx)("path",{fill:"currentColor",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"})})]}))}})},z=f.a.memo(T),J=k.c.div(o||(o=Object(u.a)(["\n  width: 300px;\n  border-radius: 5px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n"]))),P=k.c.h2(i||(i=Object(u.a)(["\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 10px;\n  padding: 10px;\n  font-size: 18px;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.isDragging?"rgba(0, 0, 0, 0.6)":"transparent"}),(function(e){return e.isDragging?"white":"inherit"})),R=k.c.div(c||(c=Object(u.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease-in-out;\n  padding: 20px;\n"])),(function(e){return e.isDraggingOver?"#dfe6e9":e.isDraggingFromThis?"#b2bec3":"transparent"})),B=k.c.form(d||(d=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0 20px;\n  input {\n    width: 100%;\n    height: 30px;\n    border: none;\n  }\n  button {\n    background: none;\n    border: none;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n"]))),F=function(e){var n=e.todos,t=e.boardId,r=e.index,a=Object(I.d)(S),o=Object(D.a)(),i=o.register,c=o.handleSubmit,d=o.setValue;function s(e){var n=e.todo,r={id:Date.now(),text:n};a((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},t,[].concat(Object(m.a)(e[t]),[r])))})),d("todo","")}return Object(H.jsx)(w.b,{draggableId:t,index:r,children:function(e,r){return Object(H.jsxs)(J,Object(v.a)(Object(v.a)({ref:e.innerRef},e.draggableProps),{},{children:[Object(H.jsx)(P,Object(v.a)(Object(v.a)({},e.dragHandleProps),{},{isDragging:r.isDragging,children:t})),Object(H.jsxs)(B,{onSubmit:c(s),children:[Object(H.jsx)("input",Object(v.a)(Object(v.a)({},i("todo",{required:"Required"})),{},{placeholder:"Write Todo..."})),Object(H.jsx)("button",{children:"Create"})]}),Object(H.jsx)(w.c,{droppableId:t,type:"card",children:function(e,r){return Object(H.jsxs)(R,Object(v.a)(Object(v.a)({ref:e.innerRef},e.droppableProps),{},{isDraggingOver:r.isDraggingOver,isDraggingFromThis:Boolean(r.draggingFromThisWith),children:[n.map((function(e,n){return Object(H.jsx)(z,{todoText:e.text,todoId:e.id,index:n,boardId:t},e.id)})),e.placeholder]}))}})]}))}})},L=f.a.memo(F),M=k.c.div(s||(s=Object(u.a)(["\n  height: 100vh;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 100px;\n  padding-bottom: 50px;\n"]))),A=k.c.form(l||(l=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n"]))),E=k.c.div(b||(b=Object(u.a)(["\n  display: flex;\n  min-width: 100vw;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-left: 10px;\n  gap: 10px;\n  position: relative;\n  background-color: ",";\n"])),(function(e){return e.isDraggingOver?"whiteSmoke":"transparent"})),V=k.c.div(g||(g=Object(u.a)(["\n  margin-top: 50px;\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  svg {\n    color: ",";\n  }\n"])),(function(e){return e.isDraggingOver?"grey":"rgba(0, 0, 0, 0.1)"})),W=k.c.svg(p||(p=Object(u.a)(["\n  width: 50px;\n  height: 50px;\n"]))),G=function(){var e,n=Object(I.c)(S),t=Object(y.a)(n,2),r=t[0],a=t[1],o=Object(I.c)(q),i=Object(y.a)(o,2),c=i[0],d=i[1];Object(j.useEffect)((function(){localStorage.setItem("todoBoards",JSON.stringify(r))}),[r]),Object(j.useEffect)((function(){localStorage.setItem("boards",JSON.stringify(c))}),[c]);var s=Object(D.a)(),l=s.register,b=s.handleSubmit,g=s.setValue,p=s.formState.errors,u=s.setError;return Object(H.jsx)(w.a,{onDragEnd:function(e){var n=e.source,t=e.destination,r=e.type;t&&("board"===r?"trash"===t.droppableId?(a((function(e){var t=Object(v.a)({},e);return delete t[c[n.index]],t})),d((function(e){return e.filter((function(t){return t!==e[n.index]}))}))):d((function(e){var r=Object(m.a)(e),a=r.splice(n.index,1);return r.splice(t.index,0,a[0]),r})):n.droppableId===(null===t||void 0===t?void 0:t.droppableId)?a((function(e){var r=Object(m.a)(e[n.droppableId]),a=r.splice(n.index,1);return r.splice(t.index,0,a[0]),Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},n.droppableId,r))})):a((function(e){var r,a=Object(m.a)(e[n.droppableId]),o=Object(m.a)(e[t.droppableId]),i=a.splice(n.index,1);return o.splice(null===t||void 0===t?void 0:t.index,0,i[0]),Object(v.a)(Object(v.a)({},e),{},(r={},Object(x.a)(r,n.droppableId,a),Object(x.a)(r,t.droppableId,o),r))})))},children:Object(H.jsxs)(M,{children:[Object(H.jsxs)(A,{onSubmit:b((function(e){var n=e.category;n in r?u("category",{message:"Already exist"},{shouldFocus:!0}):(a((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},n,[]))})),d((function(e){return[].concat(Object(m.a)(e),[n])})),g("category",""))})),children:[Object(H.jsx)("label",{htmlFor:"category",children:"New Category"}),Object(H.jsx)("input",Object(v.a)({},l("category",{required:!0,minLength:2}))),Object(H.jsx)("span",{children:null===p||void 0===p||null===(e=p.category)||void 0===e?void 0:e.message}),Object(H.jsx)("button",{children:"Create"})]}),Object(H.jsx)(w.c,{droppableId:"boards",direction:"horizontal",type:"board",children:function(e,n){return Object(H.jsxs)(E,Object(v.a)(Object(v.a)({ref:e.innerRef},e.droppableProps),{},{isDraggingOver:n.isDraggingOver,children:[c.map((function(e,n){return Object(H.jsx)(L,{boardId:e,todos:r[e],index:n},e)})),e.placeholder]}))}}),Object(H.jsx)(w.c,{droppableId:"trash",type:"board",children:function(e,n){return Object(H.jsxs)(V,Object(v.a)(Object(v.a)({ref:e.innerRef},e.droppableProps),{},{isDraggingOver:n.isDraggingOver,children:[Object(H.jsx)(W,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-trash fa-w-14 fa-3x",children:Object(H.jsx)("path",{fill:"currentColor",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"})}),Object(H.jsx)("div",{style:{display:"none"},children:e.placeholder})]}))}})]})})};var K,Q=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(G,{})})},U=Object(k.b)(K||(K=Object(u.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;800&family=Rubik:wght@500&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n* {\n  box-sizing: border-box;\n}\n"])));h.a.render(Object(H.jsx)(f.a.StrictMode,{children:Object(H.jsx)(I.a,{children:Object(H.jsxs)(k.a,{theme:{bgColor:"grey",boardColor:"skyblue",cardColor:"whitesmoke"},children:[Object(H.jsx)(U,{}),Object(H.jsx)(Q,{})]})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.5befa73b.chunk.js.map