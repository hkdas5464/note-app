(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),i=n(9),s=n(10),o=n(2),u=n(14),m=n(13),h=n(4),d=(n(26),n(27),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.state={name:""},a}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.name};this.setState({name:""}),this.props.createContact(t)}},{key:"listView",value:function(e,t){var n=this;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10"},c.a.createElement("li",{key:t,className:"list-group-item clearfix"},e.name)),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("button",{onClick:function(e){return n.deleteContact(e,t)},className:"btn btn-danger"},"Remove")))}},{key:"deleteContact",value:function(e,t){e.preventDefault(),this.props.deleteContact(t)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"myname"},"Harendra's  Contacts Application"),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("h3",null,"Add Contact Form"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",onChange:this.handleChange,className:"form-control",value:this.state.name}),c.a.createElement("br",null),c.a.createElement("input",{type:"submit",className:"btn btn-success",value:"ADD"})),c.a.createElement("hr",null),c.a.createElement("ul",{className:"list-group"},this.props.contacts.map((function(t,n){return e.listView(t,n)})))))}}]),n}(a.Component)),p=Object(h.b)((function(e,t){return{contacts:e.contacts}}),(function(e){return{createContact:function(t){return e(function(e){return{type:"CREATE_NEW_CONTACT",contact:e}}(t))},deleteContact:function(t){return e({type:"REMOVE_CONTACT",id:t})}}}))(d),b=n(1),E=n(12),f=Object(b.b)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NEW_CONTACT":return[].concat(Object(E.a)(e),[Object.assign({},t.contact)]);case"REMOVE_CONTACT":return e.filter((function(e,n){return n!==t.id}));default:return e}}});var v,C=Object(b.c)(f,v);l.a.render(c.a.createElement(h.a,{store:C},c.a.createElement(p,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.157d6f27.chunk.js.map