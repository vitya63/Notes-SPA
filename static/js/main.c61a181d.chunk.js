(this.webpackJsonpnotes_spa=this.webpackJsonpnotes_spa||[]).push([[0],{126:function(e,t,n){e.exports=n(252)},131:function(e,t,n){},132:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(27),o=n.n(l),r=(n(131),n(132),n(17)),i=n(18),m=n(261),u=n(262),s=n(254),d=function(e){var t=e.notes,n=e.setNoteList,l=e.id,o=e.setId,d=Object(a.useState)(""),f=Object(i.a)(d,2),g=f[0],E=f[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),N=h[0],p=h[1];return c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),N){var a={id:l,noteName:g,noteContent:N,editing:!1,addingComment:!1,viewingComments:!1,comments:[]};n([].concat(Object(r.a)(t),[a])),o(l+1),p(""),E("")}else alert("You must add note content")},className:"create-note-form ui form"},c.a.createElement(m.a,{type:"text",value:g,onChange:function(e){return E(e.target.value)},placeholder:"Note name",required:!0}),c.a.createElement(u.a,{placeholder:"Note content",value:N,onChange:function(e){return p(e.target.value)}}),c.a.createElement(s.a,{type:"submit"},"Add note"))},f=function(e){var t=e.comment;return c.a.createElement("li",{className:"comment"},c.a.createElement("p",{className:"comment__detail"},c.a.createElement("b",null,"Author: "),t.author),c.a.createElement("p",{className:"comment__detail"},c.a.createElement("b",null,"Comment: "),t.content),c.a.createElement("p",{className:"comment__detail"},c.a.createElement("b",null,"Publication date: "),t.date))},g=function(e){var t=e.note,n=e.switchAddingViewingComments,l=e.publishComment,o=Object(a.useState)(""),r=Object(i.a)(o,2),u=r[0],d=r[1],g=Object(a.useState)(""),E=Object(i.a)(g,2),b=E[0],h=E[1],N=c.a.createElement("td",{className:"cell"},c.a.createElement(s.a,{type:"button",style:{width:"48%"},id:t.id,onClick:function(e){return n(e.target.id,"addingComment")}},"Add comment"),c.a.createElement(s.a,{type:"button",style:{width:"48%"},id:t.id,onClick:function(e){t.comments.length?n(e.target.id,"viewingComments"):alert("No comments yet")}},"Show comments"));return t.addingComment?N=c.a.createElement("td",{className:"cell"},c.a.createElement("form",{id:t.id,onSubmit:function(e){e.preventDefault();var t=u.split(" ");if(2===t.length)if(t.every((function(e){return e[0].match(/[A-Z\u0410-\u042f]/)}))){var n=new Date,a=n.getDate(),c=n.getMonth()+1,o=n.getFullYear();a<10&&(a="0".concat(a)),c<10&&(c="0".concat(c));var r="".concat(a,".").concat(c,".").concat(o),i={content:b,author:u,date:r},m=e.target.id;l(m,i)}else alert("Name must start with capital letter");else alert("You must write your full name")}},c.a.createElement(m.a,{type:"text",placeholder:"Your Full Name",value:u,onChange:function(e){d(e.target.value)},style:{width:"30%"},focus:!0,required:!0}),c.a.createElement(m.a,{type:"text",placeholder:"Your comment",value:b,onChange:function(e){return h(e.target.value)},style:{width:"30%"},focus:!0,required:!0}),c.a.createElement(s.a,{type:"submit",style:{width:"19%"}},"Submit"),c.a.createElement(s.a,{type:"button",style:{width:"19%"},onClick:function(){return n(t.id,"addingComment")}},"Cancel"))):t.viewingComments&&(N=c.a.createElement("td",{className:"cell"},c.a.createElement("ul",null,c.a.createElement(s.a,{type:"button",id:t.id,onClick:function(e){return n(e.target.id,"viewingComments")}},"Hide comments"),t.comments.map((function(e){return c.a.createElement(f,{comment:e,key:t.id})}))))),N};var E=function(e){var t=e.note,n=e.notes,l=e.setNoteList,o=Object(a.useState)(t.noteName),u=Object(i.a)(o,2),d=u[0],f=u[1],E=Object(a.useState)(t.noteContent),b=Object(i.a)(E,2),h=b[0],N=b[1],p=function(e){var t=n.findIndex((function(t){return t.id===+e.target.id})),a=Object(r.a)(n);a[t].editing=!0,l(Object(r.a)(a))},v=function(e){if(13===e.which||13===e.keyCode){var t=n.findIndex((function(t){return t.id===+e.target.id})),a=Object(r.a)(n);a[t].noteName=d,a[t].noteContent=h,a[t].editing=!1,l(Object(r.a)(a))}};return c.a.createElement("tr",null,c.a.createElement("td",{className:"cell"},t.id),c.a.createElement("td",{className:"cell",id:t.id,onDoubleClick:p},t.editing?c.a.createElement(m.a,{type:"text",value:d,onChange:function(e){return f(e.target.value)},onKeyPress:v,id:t.id,className:"input-for-editing",focus:!0}):t.noteName),c.a.createElement("td",{className:"cell",id:t.id,onDoubleClick:p},t.editing?c.a.createElement(m.a,{type:"text",value:h,onChange:function(e){return N(e.target.value)},onKeyPress:v,id:t.id,className:"input-for-editing",focus:!0}):t.noteContent),c.a.createElement(g,{note:t,switchAddingViewingComments:function(e,t){var a=n.findIndex((function(t){return t.id===+e})),c=Object(r.a)(n);c[a][t]?c[a][t]=!1:c[a][t]=!0,l(Object(r.a)(c))},publishComment:function(e,t){var a=n.findIndex((function(t){return t.id===+e})),c=Object(r.a)(n);c[a].comments.push(t),c[a].addingComment=!1,l(Object(r.a)(c)),alert("Comment succesfully added!")}}),c.a.createElement("td",{className:"cell"},c.a.createElement(s.a,{style:{width:"100%"},type:"button",onClick:function(){l(Object(r.a)(n).filter((function(e){return e!==t})))}},"Remove note")))},b=function(e){var t=e.notes,n=e.setNoteList,a=c.a.createElement("tr",null,c.a.createElement("th",null,"No notes found"));return t.length>0&&(a=c.a.createElement("tr",null,c.a.createElement("th",{className:"cell"},"Id"),c.a.createElement("th",{className:"cell"},"Note name"),c.a.createElement("th",{className:"cell"},"Note content"),c.a.createElement("th",{className:"cell"},"Comments"),c.a.createElement("th",{className:"cell"},"Delete"))),c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"thead"},a),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement(E,{note:e,key:e.id,setNoteList:n,notes:t})}))))},h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(1),m=Object(i.a)(o,2),u=m[0],s=m[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("noteList")),t=+localStorage.getItem("noteId");e.length>0&&(l(Object(r.a)(e)),s(t))}),[]),Object(a.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("noteList",e),localStorage.setItem("noteId",u)}),[n,u]),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},"Notes"),c.a.createElement(d,{setNoteList:l,notes:n,id:u,setId:s}),c.a.createElement(b,{notes:n,setNoteList:l}))};var N=function(){return c.a.createElement(h,null)};o.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.c61a181d.chunk.js.map