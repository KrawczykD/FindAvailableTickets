(this.webpackJsonpsector=this.webpackJsonpsector||[]).push([[0],{29:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(0),i=s.n(a),r=s(10),o=s.n(r),v=s(18),n=s(11);function d(){var e=Object(n.a)(["\n    width:","px;\n    border:1px solid red;\n    margin: 20% auto;\n    padding: 20px;\n\n    display: flex;\n    flex-wrap:wrap;\n\n    & > div{\n        width: 50px;\n        height:50px;\n        border-radius:50px;\n        display: flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    & > div.avielableSeats{\n\n       width:50%;\n       & > div {\n        padding: 5px;\n    }\n    }\n\n    & > div.avielableRows{\n        width:50%;\n        & > div {\n            padding: 5px;\n        }\n     }\n\n"]);return d=function(){return e},e}var l=s(12).a.div(d(),650),j=s(16),p=s(17),u=function(e){for(var t=e.tickets.map((function(e){return Object(c.jsxs)("div",{style:e.active?{backgroundColor:"green"}:{backgroundColor:"red"},children:[Object(c.jsx)(j.a,{icon:p.a}),Object(c.jsx)("div",{children:e.sector+e.seat})]})})),s=[],a=[],i=0;i<e.tickets.length;i++)1==e.tickets[i].active&&e.tickets.length>i+1&&e.tickets[i].sector==e.tickets[i+1].sector&&1==e.tickets[i+1].active&&e.tickets.length>i+2&&e.tickets[i+1].sector==e.tickets[i+2].sector&&1==e.tickets[i+2].active&&(s.push(e.tickets[i]),s.push(e.tickets[i+1]),s.push(e.tickets[i+2]),a.push(e.tickets[i].sector));var r=Object(v.a)(new Set(a));return Object(c.jsxs)(l,{children:[t,Object(c.jsxs)("div",{className:"avielableSeats",children:["Avielable seats : ",s.map((function(e){return Object(c.jsx)("div",{children:e.sector+e.seat})}))]}),Object(c.jsxs)("div",{className:"avielableRows",children:["3 seats avielable in rows : ",r.map((function(e){return Object(c.jsx)("div",{children:e})}))]})]})},b=[{sector:"A",seat:1,active:!1},{sector:"A",seat:2,active:!1},{sector:"A",seat:3,active:!0},{sector:"A",seat:4,active:!1},{sector:"A",seat:5,active:!0},{sector:"A",seat:6,active:!1},{sector:"A",seat:7,active:!0},{sector:"A",seat:8,active:!1},{sector:"A",seat:9,active:!0},{sector:"A",seat:10,active:!1},{sector:"A",seat:11,active:!0},{sector:"A",seat:12,active:!1},{sector:"A",seat:13,active:!0},{sector:"B",seat:1,active:!0},{sector:"B",seat:2,active:!1},{sector:"B",seat:3,active:!0},{sector:"B",seat:4,active:!0},{sector:"B",seat:5,active:!0},{sector:"B",seat:6,active:!0},{sector:"B",seat:7,active:!1},{sector:"B",seat:8,active:!1},{sector:"B",seat:9,active:!0},{sector:"B",seat:10,active:!1},{sector:"B",seat:11,active:!0},{sector:"B",seat:12,active:!1},{sector:"B",seat:13,active:!0},{sector:"C",seat:1,active:!0},{sector:"C",seat:2,active:!0},{sector:"C",seat:3,active:!1},{sector:"C",seat:4,active:!0},{sector:"C",seat:5,active:!1},{sector:"C",seat:6,active:!0},{sector:"C",seat:7,active:!1},{sector:"C",seat:8,active:!1},{sector:"C",seat:9,active:!0},{sector:"C",seat:10,active:!0},{sector:"C",seat:11,active:!0},{sector:"C",seat:12,active:!1},{sector:"C",seat:13,active:!1},{sector:"D",seat:1,active:!1},{sector:"D",seat:2,active:!0},{sector:"D",seat:3,active:!1},{sector:"D",seat:4,active:!0},{sector:"D",seat:5,active:!0},{sector:"D",seat:6,active:!1},{sector:"D",seat:7,active:!1},{sector:"D",seat:8,active:!0},{sector:"D",seat:9,active:!1},{sector:"D",seat:10,active:!0},{sector:"D",seat:11,active:!1},{sector:"D",seat:12,active:!1},{sector:"D",seat:13,active:!0},{sector:"E",seat:1,active:!1},{sector:"E",seat:2,active:!1},{sector:"E",seat:3,active:!1},{sector:"E",seat:4,active:!0},{sector:"E",seat:5,active:!1},{sector:"E",seat:6,active:!1},{sector:"E",seat:7,active:!0},{sector:"E",seat:8,active:!1},{sector:"E",seat:9,active:!0},{sector:"E",seat:10,active:!0},{sector:"E",seat:11,active:!1},{sector:"E",seat:12,active:!0},{sector:"E",seat:13,active:!1},{sector:"F",seat:1,active:!0},{sector:"F",seat:2,active:!1},{sector:"F",seat:3,active:!1},{sector:"F",seat:4,active:!1},{sector:"F",seat:5,active:!1},{sector:"F",seat:6,active:!0},{sector:"F",seat:7,active:!0},{sector:"F",seat:8,active:!1},{sector:"F",seat:9,active:!0},{sector:"F",seat:10,active:!1},{sector:"F",seat:11,active:!1},{sector:"F",seat:12,active:!1},{sector:"F",seat:13,active:!0}];var h=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(u,{tickets:b})})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.990a90a1.chunk.js.map