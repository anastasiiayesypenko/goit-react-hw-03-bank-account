(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={balance:"Balance_balance__2MQtp",green:"Balance_green__2Goq_",red:"Balance_red__3yItN"}},12:function(e,t,a){e.exports={history:"TransactionHistory_history__29n1Z",type:"TransactionHistory_type__1-0mf"}},21:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__26tfj"}},22:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(3),o=a.n(l),c=a(14),i=a(6),s=a(7),u=a(9),m=a(8),p=a(10),d=a(12),b=a.n(d),h=function(e){var t=e.history;return r.a.createElement("table",{className:b.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Transaction ")," ",r.a.createElement("th",null," Amount ")," ",r.a.createElement("th",null," Date ")," ")," ")," ",r.a.createElement("tbody",null," ",t.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:b.a.type}," ",e.type," ")," ",r.a.createElement("td",null," ","".concat(e.amount," $")," ")," ",r.a.createElement("td",null," ",e.date," ")," ")})," ")," ")},y=a(11),E=a.n(y),f=function(e){var t=e.balance,a=e.history;return r.a.createElement("section",{className:E.a.balance},r.a.createElement("span",null,r.a.createElement("span",{className:E.a.green}," \u2b06 ")," ",a.reduce(function(e,t){return"deposit"===t.type&&(e=Number(e)+Number(t.amount)),e},0)," "," $"," ")," ",r.a.createElement("span",null," ",r.a.createElement("span",{className:E.a.red}," \u2b07 ")," ",a.reduce(function(e,t){return"withdrawal"===t.type&&(e=Number(e)+Number(t.amount)),e},0)," "," $"," ")," ",r.a.createElement("span",null," ","Balance: ",t,".00 $"," ")," ")},_=a(2),N=(a(28),a(13)),O=a.n(N),v=a(4),w=a.n(v),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDepositClick=function(){var e=new Date,t=document.getElementById("input");if(Number(t.value)<=0)_.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:_.b.POSITION.BOTTOM_CENTER});else{var n={id:O()(),type:"deposit",amount:Number(t.value),date:e.toLocaleString()};a.props.onDepositClick(n),t.value=null}},a.handleWithdrawClick=function(){var e=new Date,t=document.getElementById("input");if(Number(t.value)>a.props.balance)_.b.info("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:_.b.POSITION.BOTTOM_CENTER});else if(Number(t.value)<=0)_.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:_.b.POSITION.BOTTOM_CENTER});else{var n={id:O()(),type:"withdrawal",amount:Number(t.value),date:e.toLocaleString()};a.props.onWithdrawalClick(n),t.value=null}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:w.a.controls},r.a.createElement("input",{type:"number",id:"input",className:w.a.input}),r.a.createElement("button",{type:"button",className:w.a.button,onClick:this.handleDepositClick},"Deposit"),r.a.createElement("button",{type:"button",name:"withdrawal",className:w.a.button,onClick:this.handleWithdrawClick},"Withdrawal"),r.a.createElement(_.a,{newestOnTop:!0}))}}]),t}(n.Component),g=a(21),C=a.n(g),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={balance:JSON.parse(localStorage.getItem("balance"))||0,history:JSON.parse(localStorage.getItem("history"))||[]},a.componentDidUpdate=function(){localStorage.setItem("balance",JSON.stringify(a.state.balance)),localStorage.setItem("history",JSON.stringify(a.state.history))},a.addDepositTransaction=function(e){var t=a.state,n=t.history,r=t.balance;a.setState({balance:r+e.amount,history:[].concat(Object(c.a)(n),[e])})},a.addWithdrawalTransaction=function(e){var t=a.state,n=t.history,r=t.balance;a.setState({balance:r-e.amount,history:[].concat(Object(c.a)(n),[e])})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.balance,a=e.history;return r.a.createElement("div",{className:C.a.dashboard},r.a.createElement(T,{balance:t,onDepositClick:this.addDepositTransaction,onWithdrawalClick:this.addWithdrawalTransaction})," ",r.a.createElement(f,{balance:t,history:a})," ",r.a.createElement(h,{history:a})," ")}}]),t}(n.Component),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))},4:function(e,t,a){e.exports={controls:"Controls_controls__1eFFD",button:"Controls_button__3tGS6",input:"Controls_input__lXEtG"}}},[[22,1,2]]]);
//# sourceMappingURL=main.5231cbe3.chunk.js.map