(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(85)}])},4105:function(t,n,e){"use strict";e.d(n,{f:function(){return o}});var c=e(5394);async function o(t){let{genreCode:n,typeCode:e,prevId:o,prevScore:a,size:r}=t;try{let{data:t}=await c.E.get("/books/genre/".concat(n,"?typeCode=").concat(e).concat(void 0!==o?"&prevId=".concat(o):"").concat(void 0!==a?"&prevScore=".concat(a):"").concat(void 0!==r?"&size=".concat(r):""));return t.data}catch(t){throw t}}},5394:function(t,n,e){"use strict";e.d(n,{E:function(){return a}});var c=e(6154);function o(){{let t=localStorage.getItem("access_token");return"Bearer ".concat(t)}}let a=function(){let t=o(),n=c.Z.create({baseURL:"http://j8d203.p.ssafy.io:8081/api",headers:{"Content-Type":"application/JSON;charset=utf-8",Authorization:t}});return n}();!function(){let t=o();c.Z.create({baseURL:"http://j8d203.p.ssafy.io:8081/api",headers:{"Content-Type":"multipart/form-data",Authorization:t}})}()},85:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return a}});var c=e(4288),o=e(4105);function a(){let t=async()=>{let t=await (0,o.f)({genreCode:10,typeCode:0}).then(t=>t);await console.log(t)};return(0,c.tZ)("div",{children:(0,c.tZ)("button",{onClick:t,children:"test"})})}}},function(t){t.O(0,[154,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);