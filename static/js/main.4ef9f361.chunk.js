(this["webpackJsonpsecurity-codes-web"]=this["webpackJsonpsecurity-codes-web"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(10),a=n.n(r),o=(n(15),n(1)),i=n(6),l={NODE_ENV:"production",SECURITY_CODE:"paradigma",FIREBASE:{API_KEY:"AIzaSyARqu1ey6VatbKWjlNc-RWYWw1bMD15xLs",AUTH_DOMAIN:"",PROJECT_ID:"security-codes-web",STORAGE_BUCKET:"security-codes-web.appspot.com",MESSAGING_SENDER_ID:"214165580461",APP_ID:"1:214165580461:web:a4cff7f83e4d71e3827424"}},d=n(0),j=function(e){var t=e.name,n=Object(c.useState)({value:"",error:!1,loading:!1,deleted:!1,confirmed:!1}),r=Object(i.a)(n,2),a=r[0],j=r[1];if(Object(c.useEffect)((function(){a.loading&&setTimeout((function(){a.value===l.SECURITY_CODE?j(Object(o.a)(Object(o.a)({},a),{},{error:!1,loading:!1,confirmed:!0})):j(Object(o.a)(Object(o.a)({},a),{},{error:!0,loading:!1}))}),3e3)}),[a.loading]),a.deleted||a.confirmed){if(a.confirmed){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("p",{children:"Are you sure for this action? Please confirm"}),Object(d.jsx)("button",{type:"button",onClick:function(){j(Object(o.a)(Object(o.a)({},a),{},{confirmed:!1,deleted:!0}))},children:"Yes, delete"}),Object(d.jsx)("button",{type:"button",onClick:function(){j(Object(o.a)(Object(o.a)({},a),{},{confirmed:!1,deleted:!1,value:""}))},children:"No"})]})}return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("p",{children:"Deleted Successfully"}),Object(d.jsx)("button",{type:"button",onClick:function(){j(Object(o.a)(Object(o.a)({},a),{},{confirmed:!1,deleted:!1,value:""}))},children:"Reset"})]})}return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)("h2",{children:["Delete ",t]}),Object(d.jsx)("p",{children:"Please, write the security code."}),a.error&&Object(d.jsx)("p",{children:"The code was wrong"}),a.loading&&Object(d.jsx)("p",{children:"Loading..."}),Object(d.jsx)("input",{placeholder:"Security Code",value:a.value,onChange:function(e){j(Object(o.a)(Object(o.a)({},a),{},{value:e.target.value}))}}),Object(d.jsx)("button",{onClick:function(){j(Object(o.a)(Object(o.a)({},a),{},{error:!1,loading:!0}))},children:"Check"})]})},u=n(4),s=n(5),b=n(8),O=n(7),h=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(d.jsx)("p",{children:"Loading..."})}}]),n}(c.Component),f=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).FAKE_LOADING_TIMER=3e3,c.onClickHandler=function(){c.setState({loading:!0})},c.onChangeHandler=function(e){c.setState({error:!1,value:e.target.value})},c.state={error:!1,loading:!1,value:""},c}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state,n=t.loading,c=t.value;n&&setTimeout((function(){l.SECURITY_CODE===c?e.setState({loading:!1}):e.setState({error:!0,loading:!1})}),this.FAKE_LOADING_TIMER)}},{key:"render",value:function(){var e=this.props.name,t=this.state,n=t.error,c=t.loading,r=t.value;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["Delete ",e]}),Object(d.jsx)("p",{children:"Please, write the security code."}),n&&Object(d.jsx)("p",{children:"The code was wrong"}),c&&Object(d.jsx)(h,{}),Object(d.jsx)("input",{placeholder:"Security Code",value:r,onChange:this.onChangeHandler}),Object(d.jsx)("button",{onClick:this.onClickHandler,children:"Check"})]})}}]),n}(c.Component),E=n(3),p={ERROR:"ERROR",CHECK:"CHECK",CONFIRM:"CONFIRM",CHANGE:"CHANGE",DELETE:"DELETE",RESET:"RESET"},C={value:"",error:!1,loading:!1,deleted:!1,confirmed:!1},g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e={},Object(E.a)(e,p.ERROR,Object(o.a)(Object(o.a)({},t),{},{error:!0,loading:!1})),Object(E.a)(e,p.CHECK,Object(o.a)(Object(o.a)({},t),{},{loading:!0})),Object(E.a)(e,p.CONFIRM,Object(o.a)(Object(o.a)({},t),{},{error:!1,loading:!1,confirmed:!0})),Object(E.a)(e,p.DELETE,Object(o.a)(Object(o.a)({},t),{},{confirmed:!1,deleted:!0})),Object(E.a)(e,p.RESET,Object(o.a)(Object(o.a)({},t),{},{confirmed:!1,deleted:!1,value:""})),Object(E.a)(e,p.CHANGE,Object(o.a)(Object(o.a)({},t),{},{value:n.value})),e},x=function(e,t){return g(e)[t.type]?g(e,t.payload)[t.type]:e},v=function(e){var t=e.name,n=Object(c.useReducer)(x,C),r=Object(i.a)(n,2),a=r[0],o=r[1];if(Object(c.useEffect)((function(){a.loading&&setTimeout((function(){a.value===l.SECURITY_CODE?o({type:p.CONFIRM}):o({type:p.ERROR})}),3e3)}),[a.loading]),a.deleted||a.confirmed){if(a.confirmed){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("p",{children:"Are you sure for this action? Please confirm"}),Object(d.jsx)("button",{type:"button",onClick:function(){o({type:p.DELETE})},children:"Yes, delete"}),Object(d.jsx)("button",{type:"button",onClick:function(){o({type:p.RESET})},children:"No"})]})}return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("p",{children:"Deleted Successfully"}),Object(d.jsx)("button",{type:"button",onClick:function(){o({type:p.RESET})},children:"Reset"})]})}return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)("h2",{children:["Delete ",t]}),Object(d.jsx)("p",{children:"Please, write the security code."}),a.error&&Object(d.jsx)("p",{children:"The code was wrong"}),a.loading&&Object(d.jsx)("p",{children:"Loading..."}),Object(d.jsx)("input",{placeholder:"Security Code",value:a.value,onChange:function(e){o({type:p.CHANGE,payload:{value:e.target.value}})}}),Object(d.jsx)("button",{onClick:function(){o({type:p.CHECK})},children:"Check"})]})};n(17);var m=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{name:"UseState"}),Object(d.jsx)(f,{name:"ClassState"}),Object(d.jsx)(v,{name:"Use Reducer"})]})};a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4ef9f361.chunk.js.map