(function(e){function t(t){for(var n,l,u=t[0],d=t[1],a=t[2],s=0,f=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&f.push(c[l][0]),c[l]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);i&&i(t);while(f.length)f.shift()();return r.push.apply(r,a||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,u=1;u<o.length;u++){var d=o[u];0!==c[d]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},c={app:0},r=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-todo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var i=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"07c6":function(e,t,o){"use strict";o("a3aa")},"098a":function(e,t,o){},"09d3":function(e,t,o){},"0cb6":function(e,t,o){"use strict";o("a655")},2032:function(e,t,o){"use strict";o("d988")},"32b7":function(e,t,o){"use strict";o("843f")},"35a3":function(e,t,o){"use strict";o("8530")},"3b67":function(e,t,o){},"41ed":function(e,t,o){"use strict";o("098a")},"46ac":function(e,t,o){"use strict";o("3b67")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c=o("2909"),r=(o("7db0"),o("4de4"),o("99af"),o("5502")),l=Object(r["a"])({state:function(){return{todos:[{title:"SOme text",body:"vue is cool",selected:"Очень важно",isEnd:!1,id:1},{title:"Some text 2",body:"vue is cool 2",selected:"Важно",isEnd:!1,id:2},{title:"Some text 3",body:"vue is cool 3",selected:"Очень важно",isEnd:!1,id:3}],filters:{bySelected:"",byIsEnd:""}}},getters:{getTodos:function(e){return e.todos},getTodoById:function(e){return function(t){return e.todos.find((function(e){return e.id===t}))}},getTodosByFilters:function(e){var t=e.todos,o=e.filters,n=o.bySelected,c=o.byIsEnd;return""===n&&""===c?t:""===c?t.filter((function(e){return e.selected===n})):""===n?t.filter((function(e){return e.isEnd===c})):t.filter((function(e){return e.selected===n&&e.isEnd===c}))},getFilters:function(e){return e.filters},sortTodoByParams:function(e){return function(t){return e.todos.filter((function(e){return e[t.field]===t.value}))}}},actions:{},mutations:{setTodo:function(e,t){e.todos=[].concat(Object(c["a"])(e.todos),[t])},deleteTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t}))},toggleTodoField:function(e,t){var o=t.todoId,n=t.field;e.todos.find((function(e){return e.id===o}))[n]=!e.todos.find((function(e){return e.id===o}))[n]},setTodoSelected:function(e,t){var o=t.todoId,n=t.selected;e.todos.find((function(e){return e.id===o})).selected=n},setFilter:function(e,t){var o=t.filterName,n=t.filterValue;e.filters[o]=n,console.log(e.filters,"filter")},clearFilters:function(e){e.filters={bySelected:"",byIsEnd:""}}}}),u={class:"container"};function d(e,t,o,c,r,l){var d=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["e"])("div",u,[Object(n["h"])(d)])}var a={class:"todo-form"},i=Object(n["g"])(" Создать задачу ");function s(e,t,o,c,r,l){var u=Object(n["z"])("my-input"),d=Object(n["z"])("my-textarea"),s=Object(n["z"])("my-option"),f=Object(n["z"])("my-select"),b=Object(n["z"])("my-button"),p=Object(n["z"])("my-form");return Object(n["r"])(),Object(n["e"])("div",a,[Object(n["h"])(p,{class:"todo-form__form",action:"",onSubmit:t[3]||(t[3]=Object(n["F"])((function(){}),["prevent"]))},{default:Object(n["E"])((function(){return[Object(n["h"])(u,{class:"todo-form__input",modelValue:c.title,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.title=e})},null,8,["modelValue"]),Object(n["h"])(d,{class:"todo-form__textarea",modelValue:c.body,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.body=e})},null,8,["modelValue"]),Object(n["h"])(f,{class:"todo-form__select",modelValue:c.selected,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.selected=e})},{default:Object(n["E"])((function(){return[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.options,(function(e,t){return Object(n["r"])(),Object(n["d"])(s,{key:t,label:e.label,class:Object(n["n"])(e.color)},null,8,["label","class"])})),128))]})),_:1},8,["modelValue"]),Object(n["h"])(b,{class:"todo-form__btn",onClick:c.createTodo},{default:Object(n["E"])((function(){return[i]})),_:1},8,["onClick"])]})),_:1})])}function f(e,t,o,c,r,l){var u=Object(n["z"])("todo-item");return Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.props.todos,(function(e){return Object(n["r"])(),Object(n["d"])(u,{todo:e,key:e.id,onRemove:c.deleteTodoById,onPush:c.routerPushById,onToggle:c.toggleIsEndById,onSelect:c.setSelectedById},null,8,["todo","onRemove","onPush","onToggle","onSelect"])})),128)}var b={class:"todo-item__body"},p={class:"todo-item__info"},O={class:"todo-item__title"},m={class:"todo-item__text"},j={class:"todo-item__btns"};function v(e,t,o,c,r,l){var u=Object(n["z"])("my-checkbox"),d=Object(n["z"])("my-option"),a=Object(n["z"])("my-select"),i=Object(n["z"])("my-card");return Object(n["r"])(),Object(n["d"])(i,{class:"todo-item",onClick:t[7]||(t[7]=function(e){return c.routerPush(o.todo.id)})},{default:Object(n["E"])((function(){return[Object(n["f"])("div",b,[Object(n["h"])(u,{class:"todo-item__checkbox",modelValue:o.todo.isEnd,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.todo.isEnd=e}),onChange:t[1]||(t[1]=function(e){return c.toggleIsEnd(o.todo.id)}),onClick:t[2]||(t[2]=Object(n["F"])((function(){}),["stop"]))},null,8,["modelValue"]),Object(n["f"])("div",p,[Object(n["f"])("h3",O,Object(n["B"])(o.todo.title),1),Object(n["f"])("p",m,Object(n["B"])(o.todo.body),1)]),Object(n["f"])("div",j,[Object(n["h"])(a,{class:"todo-item__select",modelValue:o.todo.selected,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.todo.selected=e}),onChange:[t[4]||(t[4]=function(e){return c.setSelected(o.todo.id,o.todo.selected)}),c.setColor],onClick:t[5]||(t[5]=Object(n["F"])((function(){}),["stop"])),ref:"root"},{default:Object(n["E"])((function(){return[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.options,(function(e,t){return Object(n["r"])(),Object(n["d"])(d,{key:t,label:e.label,class:Object(n["n"])(e.color),onClickOnOption:c.setColorForSelect},null,8,["label","class","onClickOnOption"])})),128))]})),_:1},8,["modelValue","onChange"]),Object(n["f"])("i",{class:"fa-solid fa-trash-can todo-item__remove",onClick:t[6]||(t[6]=Object(n["F"])((function(e){return c.deleteTodo(o.todo.id)}),["stop"]))})])])]})),_:1})}var y=function(e){return Object(n["u"])("data-v-5582875a"),e=e(),Object(n["s"])(),e},g={class:"select"},_=["value"],h=y((function(){return Object(n["f"])("option",{value:"",disabled:"",selected:"",style:{display:"none"}},"Выберите из списка",-1)}));function T(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("div",g,[Object(n["f"])("select",{class:Object(n["n"])(["select__body",o.color]),value:o.modelValue,onChange:t[0]||(t[0]=function(){return c.updateValue&&c.updateValue.apply(c,arguments)})},[h,Object(n["y"])(e.$slots,"default",{},void 0,!0)],42,_)])}var V={name:"my-select",props:{modelValue:String,color:String},setup:function(e,t){var o=function(e){t.emit("update:modelValue",e.target.value)};return{updateValue:o}}},I=(o("fc3f"),o("6b0d")),S=o.n(I);const E=S()(V,[["render",T],["__scopeId","data-v-5582875a"]]);var w=E,k={class:"btn"};function x(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("button",k,[Object(n["y"])(e.$slots,"default",{},void 0,!0)])}var C={name:"my-button"};o("07c6");const F=S()(C,[["render",x],["__scopeId","data-v-14f8e654"]]);var M=F,B=["checked","value","input"];function z(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("input",{type:"checkbox",id:"checkbox",class:"checkbox",checked:o.modelValue,value:o.modelValue,input:c.updateValue},null,8,B)}var P={name:"MyCheckbox",props:{modelValue:Boolean},setup:function(e,t){var o=function(e){console.log(e.target.value),t.emit("update:modelValue",e.target.value)};return{updateValue:o}}};o("35a3");const U=S()(P,[["render",z],["__scopeId","data-v-b15e927e"]]);var N=U,R={class:"card"};function $(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("div",R,[Object(n["y"])(e.$slots,"default",{},void 0,!0)])}var A={name:"MyCard"};o("f7c3");const J=S()(A,[["render",$],["__scopeId","data-v-163b10ca"]]);var L=J,q={class:"select__option"};function D(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("option",q,Object(n["B"])(o.label),1)}var W={name:"MyOption",props:{modelValue:String,label:String,color:String,select:Object}};o("9276");const G=S()(W,[["render",D],["__scopeId","data-v-7356f69d"]]);var H=G,K={name:"todos-item",components:{MyOption:H,MyCard:L,MyCheckbox:N,MyButton:M,MySelect:w},props:{todo:{type:Object}},setup:function(e,t){var o=Object(n["w"])(null),c=[{label:"Очень важно",color:"red"},{label:"Важно",color:"yellow"},{label:"Не важно",color:"blue"}],r=function(e){console.log(e)},l=function(e){t.emit("remove",e)},u=function(e){t.emit("push",e)},d=function(e,o){t.emit("select",{todoId:e,selected:o})},a=function(e){console.log("11"),t.emit("toggle",e)},i=function(e){};return{deleteTodo:l,routerPush:u,toggleIsEnd:a,setSelected:d,setColor:i,setColorForSelect:r,root:o,options:c}}};o("41ed");const Q=S()(K,[["render",v],["__scopeId","data-v-0deaf397"]]);var X=Q,Y={name:"todos-list",components:{TodoItem:X},props:{todos:{type:Array}},setup:function(e,t){var o=function(e){t.emit("remove",e)},n=function(e){t.emit("push",e)},c=function(e){t.emit("toggle",e)},r=function(e){t.emit("select",e)};return{props:e,deleteTodoById:o,routerPushById:n,toggleIsEndById:c,setSelectedById:r}}};const Z=S()(Y,[["render",f]]);var ee=Z,te=["value"];function oe(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("textarea",{class:"textarea",placeholder:"Описание",value:o.modelValue,onChange:t[0]||(t[0]=function(){return c.updateValue&&c.updateValue.apply(c,arguments)})},null,40,te)}var ne={name:"my-textarea",props:{modelValue:String},setup:function(e,t){var o=function(e){t.emit("update:modelValue",e.target.value)};return{updateValue:o}}};o("6bab");const ce=S()(ne,[["render",oe],["__scopeId","data-v-357e7624"]]);var re=ce,le=["value"];function ue(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("input",{class:"input",type:"text",placeholder:"Название",value:o.modelValue,onChange:t[0]||(t[0]=function(){return c.updateValue&&c.updateValue.apply(c,arguments)})},null,40,le)}var de={name:"my-input",props:{modelValue:String},setup:function(e,t){var o=function(e){t.emit("update:modelValue",e.target.value)};return{updateValue:o}}};o("0cb6");const ae=S()(de,[["render",ue],["__scopeId","data-v-de9fff58"]]);var ie=ae,se={action:"",class:"form"};function fe(e,t,o,c,r,l){return Object(n["r"])(),Object(n["e"])("form",se,[Object(n["y"])(e.$slots,"default")])}var be={name:"my-form"};const pe=S()(be,[["render",fe]]);var Oe=pe,me={name:"todo-form",components:{MyOption:H,MyForm:Oe,MyButton:M,MyInput:ie,MyTextarea:re,MySelect:w,TodosList:ee},setup:function(e,t){var o=[{label:"Очень важно",color:"red"},{label:"Важно",color:"yellow"},{label:"Не важно",color:"blue"}],c=Object(n["w"])(""),r=Object(n["w"])(""),l=Object(n["w"])(""),u=Object(n["w"])(!1),d=function(){if(""===c.value)throw new Error("Заполните название");if(c.value.length>20)throw new Error("Поле название должно иметь не более 20 символов");if(""===r.value)throw new Error("Заполните описание");if(""===l.value)throw new Error("Выберите важность")},a=function(){try{d(),t.emit("add",{title:c.value,body:r.value,selected:l.value,isEnd:u.value}),c.value="",r.value="",l.value=""}catch(e){alert(e)}};return{title:c,body:r,selected:l,createTodo:a,options:o}}};o("32b7");const je=S()(me,[["render",s],["__scopeId","data-v-28917b24"]]);var ve=je;function ye(e,t,o,c,r,l){var u=Object(n["z"])("todo-form"),d=Object(n["z"])("todo-filter"),a=Object(n["z"])("todos-list");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(u,{onAdd:c.addPost},null,8,["onAdd"]),Object(n["h"])(d,{onClear:c.clearFilters,onFilter:c.filterTodos},null,8,["onClear","onFilter"]),Object(n["h"])(a,{todos:c.todos,onRemove:c.deleteTodo,onPush:c.routerPushByIdTodo,onToggle:c.toggleIsEnd,onSelect:c.setSelect},null,8,["todos","onRemove","onPush","onToggle","onSelect"])],64)}var ge=o("ade3"),_e=o("5530"),he=function(e){return Object(n["u"])("data-v-d26a9b68"),e=e(),Object(n["s"])(),e},Te={class:"filter"},Ve=he((function(){return Object(n["f"])("p",{class:"filter__text"},"Фильтрация по:",-1)})),Ie={class:"filter__body"},Se=he((function(){return Object(n["f"])("option",{value:"false"},"В процессе",-1)})),Ee=he((function(){return Object(n["f"])("option",{value:"true"},"Завершено",-1)})),we=Object(n["g"])(" Отчистить фильтры ");function ke(e,t,o,c,r,l){var u=Object(n["z"])("my-select"),d=Object(n["z"])("my-option"),a=Object(n["z"])("my-button");return Object(n["r"])(),Object(n["e"])("div",Te,[Ve,Object(n["f"])("div",Ie,[Object(n["h"])(u,{class:"filter__select",modelValue:c.opt1,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.opt1=e}),onChange:t[1]||(t[1]=function(e){return c.filterTodos("byIsEnd",JSON.parse(c.opt1))})},{default:Object(n["E"])((function(){return[Se,Ee]})),_:1},8,["modelValue"]),Object(n["h"])(u,{class:"filter__select",modelValue:c.opt2,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.opt2=e}),onChange:t[3]||(t[3]=function(e){return c.filterTodos("bySelected",c.opt2)})},{default:Object(n["E"])((function(){return[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.options,(function(e,t){return Object(n["r"])(),Object(n["d"])(d,{key:t,label:e.label,class:Object(n["n"])(e.color)},null,8,["label","class"])})),128))]})),_:1},8,["modelValue"]),Object(n["h"])(a,{class:"filter__btn btn-clear",onClick:c.clearFilters},{default:Object(n["E"])((function(){return[we]})),_:1},8,["onClick"])])])}var xe={name:"todo-filter",components:{MyOption:H,MyButton:M,MySelect:w},setup:function(e,t){var o=[{label:"Очень важно",color:"red"},{label:"Важно",color:"yellow"},{label:"Не важно",color:"blue"}],c=Object(r["b"])(),l=Object(n["w"])(""),u=Object(n["w"])(""),d=c.getters.getFilters,a=function(){l.value="",u.value="",t.emit("clear")},i=function(e,o){t.emit("filter",{filterName:e,filterValue:o})};return{filters:d,filterTodos:i,clearFilters:a,opt1:l,opt2:u,options:o}}};o("2032");const Ce=S()(xe,[["render",ke],["__scopeId","data-v-d26a9b68"]]);var Fe=Ce,Me=o("6c02"),Be={name:"Main",components:{MyButton:M,TodoFilter:Fe,TodosList:ee,TodoForm:ve},setup:function(e){var t=Object(r["b"])(),o=Object(Me["c"])(),c=Object(Me["d"])(),l=Object(n["b"])((function(){return t.getters.getTodosByFilters})),u=function(e){var o=e.title,n=e.body,c=e.selected,r=e.isEnd;t.commit("setTodo",{title:o,body:n,selected:c,isEnd:r,id:Date.now()})},d=function(e){console.log("deleteWork"),t.commit("deleteTodo",e)},a=function(e){c.push("/todo/".concat(e))},i=function(){t.commit("clearFilters"),c.push("/")},s=function(e){t.commit("toggleTodoField",{todoId:e,field:"isEnd"})},f=function(e){t.commit("setFilter",e),console.log([e.filterName]),c.push({query:Object(_e["a"])(Object(_e["a"])({},o.query),{},Object(ge["a"])({},e.filterName,e.filterValue))})},b=function(e){t.commit("setTodoSelected",e)};return{todos:l,addPost:u,deleteTodo:d,routerPushByIdTodo:a,clearFilters:i,toggleIsEnd:s,filterTodos:f,setSelect:b}}};const ze=S()(Be,[["render",ye]]);var Pe=ze,Ue={components:{Main:Pe,TodoForm:ve,TodosList:ee}};o("5e81");const Ne=S()(Ue,[["render",d]]);var Re=Ne,$e={class:"container__todo"},Ae=Object(n["g"])("Главная");function Je(e,t,o,c,r,l){var u=Object(n["z"])("todos-item"),d=Object(n["z"])("my-button");return Object(n["r"])(),Object(n["e"])("div",$e,[Object(n["h"])(u,{class:"todo__about",todo:c.todo,onRemove:c.deleteTodo,onToggle:c.toggleIsEnd,onSelect:c.setSelect},null,8,["todo","onRemove","onToggle","onSelect"]),Object(n["h"])(d,{onClick:t[0]||(t[0]=function(e){return c.router.push("/")})},{default:Object(n["E"])((function(){return[Ae]})),_:1})])}o("a9e3");var Le={name:"about-todo",components:{TodosItem:X,MyButton:M},setup:function(){var e=Object(r["b"])(),t=Object(Me["c"])(),o=Object(Me["d"])(),n=e.getters.getTodoById(Number(t.params.id)),c=function(t){e.commit("deleteTodo",t),o.push("/")},l=function(t){e.commit("setTodoSelected",t)},u=function(t){e.commit("toggleTodoField",{todoId:t,field:"isEnd"})};return{route:t,router:o,store:e,todo:n,setSelect:l,toggleIsEnd:u,deleteTodo:c}}};o("46ac");const qe=S()(Le,[["render",Je],["__scopeId","data-v-27fafc43"]]);var De=qe,We=[{path:"/",component:Pe},{path:"/todo/:id",component:De}],Ge=Object(Me["a"])({routes:We,history:Object(Me["b"])("/vue-todo/")}),He=Ge;console.log("work");var Ke=Object(n["c"])(Re);Ke.use(He).use(l),Ke.mount("#app")},"5c33":function(e,t,o){},"5e81":function(e,t,o){"use strict";o("cab9")},"6bab":function(e,t,o){"use strict";o("09d3")},"843f":function(e,t,o){},8530:function(e,t,o){},"8a7f":function(e,t,o){},9276:function(e,t,o){"use strict";o("8a7f")},a3aa:function(e,t,o){},a655:function(e,t,o){},cab9:function(e,t,o){},d988:function(e,t,o){},f4d9:function(e,t,o){},f7c3:function(e,t,o){"use strict";o("5c33")},fc3f:function(e,t,o){"use strict";o("f4d9")}});
//# sourceMappingURL=app.4a63f3d3.js.map