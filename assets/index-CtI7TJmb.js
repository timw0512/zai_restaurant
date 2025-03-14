import{d as y,g as ze,j as e,I as b,r as _,P as M,u as De}from"./index-B6K4Ryod.js";const Me=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  .home-content {
    margin: 0 auto;
    max-width: var(--max-width-desktop);
  }
  .article-header {
    display: flex;
    justify-content: space-between;
    .article-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 33.6px;
      text-transform: capitalize;
      color: #183354;
    }
  }
  aside {
    width: 330px;
    .aside-title {
      font-weight: 700;
      font-size: 22px;
      line-height: 26.4px;
      text-transform: capitalize;
      color: #183354;
    }
  }
  article {
    flex: 1;
  }
`,Fe="/assets/advertisement05-65Eq_FVj.png",Qe="/assets/advertisement06-C7wruURK.png",Ge="/assets/advertisement07-CJrnuLPs.png",U=[{imageUrl:Fe,url:"http://localhost:5173/",description:"Abc some ads"},{imageUrl:Qe,url:"http://localhost:5173/",description:"Abc some ads"},{imageUrl:Ge,url:"http://localhost:5173/",description:"Abc some ads"}],Ie="/assets/aumation_discount-CCMf46ZK.png";var ee={exports:{}},Ve=ee.exports,ve;function Re(){return ve||(ve=1,function(i,s){(function(p,o){i.exports=o()})(Ve,function(){var p=1e3,o=6e4,A=36e5,T="millisecond",v="second",S="minute",B="hour",x="day",N="week",k="month",we="quarter",z="year",V="date",be="Invalid Date",Be=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Ne=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Ue={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var r=["th","st","nd","rd"],t=l%100;return"["+l+(r[(t-20)%10]||r[t]||r[0])+"]"}},le=function(l,r,t){var n=String(l);return!n||n.length>=r?l:""+Array(r+1-n.length).join(t)+l},Se={s:le,z:function(l){var r=-l.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+le(n,2,"0")+":"+le(a,2,"0")},m:function l(r,t){if(r.date()<t.date())return-l(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,k),c=t-a<0,d=r.clone().add(n+(c?-1:1),k);return+(-(n+(t-a)/(c?a-d:d-a))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M:k,y:z,w:N,d:x,D:V,h:B,m:S,s:v,ms:T,Q:we}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return l===void 0}},$="en",F={};F[$]=Ue;var Te="$isDayjsObject",ce=function(l){return l instanceof W||!(!l||!l[Te])},X=function l(r,t,n){var a;if(!r)return $;if(typeof r=="string"){var c=r.toLowerCase();F[c]&&(a=c),t&&(F[c]=t,a=c);var d=r.split("-");if(!a&&d.length>1)return l(d[0])}else{var g=r.name;F[g]=r,a=g}return!n&&a&&($=a),a||!n&&$},u=function(l,r){if(ce(l))return l.clone();var t=typeof r=="object"?r:{};return t.date=l,t.args=arguments,new W(t)},h=Se;h.l=X,h.i=ce,h.w=function(l,r){return u(l,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var W=function(){function l(t){this.$L=X(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Te]=!0}var r=l.prototype;return r.parse=function(t){this.$d=function(n){var a=n.date,c=n.utc;if(a===null)return new Date(NaN);if(h.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var d=a.match(Be);if(d){var g=d[2]-1||0,m=(d[7]||"0").substring(0,3);return c?new Date(Date.UTC(d[1],g,d[3]||1,d[4]||0,d[5]||0,d[6]||0,m)):new Date(d[1],g,d[3]||1,d[4]||0,d[5]||0,d[6]||0,m)}}return new Date(a)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return h},r.isValid=function(){return this.$d.toString()!==be},r.isSame=function(t,n){var a=u(t);return this.startOf(n)<=a&&a<=this.endOf(n)},r.isAfter=function(t,n){return u(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<u(t)},r.$g=function(t,n,a){return h.u(t)?this[n]:this.set(a,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var a=this,c=!!h.u(n)||n,d=h.p(t),g=function(G,j){var D=h.w(a.$u?Date.UTC(a.$y,j,G):new Date(a.$y,j,G),a);return c?D:D.endOf(x)},m=function(G,j){return h.w(a.toDate()[G].apply(a.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(j)),a)},f=this.$W,w=this.$M,C=this.$D,R="set"+(this.$u?"UTC":"");switch(d){case z:return c?g(1,0):g(31,11);case k:return c?g(1,w):g(0,w+1);case N:var Q=this.$locale().weekStart||0,q=(f<Q?f+7:f)-Q;return g(c?C-q:C+(6-q),w);case x:case V:return m(R+"Hours",0);case B:return m(R+"Minutes",1);case S:return m(R+"Seconds",2);case v:return m(R+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var a,c=h.p(t),d="set"+(this.$u?"UTC":""),g=(a={},a[x]=d+"Date",a[V]=d+"Date",a[k]=d+"Month",a[z]=d+"FullYear",a[B]=d+"Hours",a[S]=d+"Minutes",a[v]=d+"Seconds",a[T]=d+"Milliseconds",a)[c],m=c===x?this.$D+(n-this.$W):n;if(c===k||c===z){var f=this.clone().set(V,1);f.$d[g](m),f.init(),this.$d=f.set(V,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[h.p(t)]()},r.add=function(t,n){var a,c=this;t=Number(t);var d=h.p(n),g=function(w){var C=u(c);return h.w(C.date(C.date()+Math.round(w*t)),c)};if(d===k)return this.set(k,this.$M+t);if(d===z)return this.set(z,this.$y+t);if(d===x)return g(1);if(d===N)return g(7);var m=(a={},a[S]=o,a[B]=A,a[v]=p,a)[d]||1,f=this.$d.getTime()+t*m;return h.w(f,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,a=this.$locale();if(!this.isValid())return a.invalidDate||be;var c=t||"YYYY-MM-DDTHH:mm:ssZ",d=h.z(this),g=this.$H,m=this.$m,f=this.$M,w=a.weekdays,C=a.months,R=a.meridiem,Q=function(j,D,O,Z){return j&&(j[D]||j(n,c))||O[D].slice(0,Z)},q=function(j){return h.s(g%12||12,j,"0")},G=R||function(j,D,O){var Z=j<12?"AM":"PM";return O?Z.toLowerCase():Z};return c.replace(Ne,function(j,D){return D||function(O){switch(O){case"YY":return String(n.$y).slice(-2);case"YYYY":return h.s(n.$y,4,"0");case"M":return f+1;case"MM":return h.s(f+1,2,"0");case"MMM":return Q(a.monthsShort,f,C,3);case"MMMM":return Q(C,f);case"D":return n.$D;case"DD":return h.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return Q(a.weekdaysMin,n.$W,w,2);case"ddd":return Q(a.weekdaysShort,n.$W,w,3);case"dddd":return w[n.$W];case"H":return String(g);case"HH":return h.s(g,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return G(g,m,!0);case"A":return G(g,m,!1);case"m":return String(m);case"mm":return h.s(m,2,"0");case"s":return String(n.$s);case"ss":return h.s(n.$s,2,"0");case"SSS":return h.s(n.$ms,3,"0");case"Z":return d}return null}(j)||d.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,a){var c,d=this,g=h.p(n),m=u(t),f=(m.utcOffset()-this.utcOffset())*o,w=this-m,C=function(){return h.m(d,m)};switch(g){case z:c=C()/12;break;case k:c=C();break;case we:c=C()/3;break;case N:c=(w-f)/6048e5;break;case x:c=(w-f)/864e5;break;case B:c=w/A;break;case S:c=w/o;break;case v:c=w/p;break;default:c=w}return a?c:h.a(c)},r.daysInMonth=function(){return this.endOf(k).$D},r.$locale=function(){return F[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var a=this.clone(),c=X(t,n,!0);return c&&(a.$L=c),a},r.clone=function(){return h.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},l}(),je=W.prototype;return u.prototype=je,[["$ms",T],["$s",v],["$m",S],["$H",B],["$W",x],["$M",k],["$y",z],["$D",V]].forEach(function(l){je[l[1]]=function(r){return this.$g(r,l[0],l[1])}}),u.extend=function(l,r){return l.$i||(l(r,W,u),l.$i=!0),u},u.locale=X,u.isDayjs=ce,u.unix=function(l){return u(1e3*l)},u.en=F[$],u.Ls=F,u.p={},u})}(ee)),ee.exports}var Ye=Re();const ne=ze(Ye),Pe=y.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.89) 16.31%,
      rgba(10, 23, 41, 0) 100%
    );
  }
  .info {
    position: absolute;
    bottom: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
    .category {
      padding: 4px 10px;
      display: flex;
      align-items: center;
      background-color: #f4796c;
      width: fit-content;
      border-radius: 3px;
      span {
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.78px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
    .title {
      font-weight: 700;
      font-size: 28px;
      line-height: 39.2px;
      text-transform: capitalize;
      color: #ffffff;
    }
    .more-info {
      display: flex;
      gap: 15px;
      div {
        display: flex;
        align-items: center;
        gap: 5px;
        span {
          font-family: Inter;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.52px;
          text-transform: uppercase;
          color: #bacce1;
        }
      }
    }
  }
`;function J({item:i,className:s}){const{imageUrl:p,category:o,title:A,author:T,createTime:v}=i;return e.jsxs(Pe,{className:s,children:[e.jsx("img",{src:p,alt:`${o}_${A}_by_${T}`}),e.jsxs("div",{className:"info",children:[e.jsx("div",{type:"button",className:"category",onClick:()=>console.log("Go to category: ",o),children:e.jsx("span",{children:o})}),e.jsx("span",{className:"title text-ellipsis-2",children:A}),e.jsxs("div",{className:"more-info",children:[e.jsxs("div",{className:"author",children:[e.jsx(b,{name:"account",color:"#BACCE1"}),e.jsx("span",{children:"BY"}),e.jsx("span",{children:T})]}),e.jsxs("div",{className:"create-time",children:[e.jsx(b,{name:"calendar"}),e.jsx("span",{children:ne(v).format("DD MMMM, YYYY")})]}),e.jsx("div",{className:"time-pass",children:e.jsx(b,{name:"clock_revert"})})]})]})]})}const ie="/assets/new_1-CMhu3jdd.svg",E="/assets/new_2-j1-6Y0Bc.svg",ae="/assets/new_3-GzUMnfC8.svg",re="/assets/new_4-Cd3xFKGz.svg",Y=[{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:ie},{title:"New Modern Iphone 14pro Max Extrea Revolutionary Features",author:"Admin",createTime:"2024-08-27T10:10:10",category:"mobile",imageUrl:E},{title:"A Guide To Image Optimization On Jamstack Sites",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:ae},{title:"Using Automated Test Results To Improve Accessibility",author:"Admin",createTime:"2024-08-27T10:10:10",category:"News",imageUrl:re},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology"},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology"}],He=y.div`
  width: 100%;
  height: 630px;
  margin: 50px 0;
  .news-content {
    display: flex;
    height: 100%;
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    gap: 20px;
  }
  .latest {
    width: 60%;
    .info {
      padding: 0 40px !important;
    }
  }
  .other {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    .news-item {
      flex: 1;
    }
  }
`;function Ke(){var i;return e.jsx(He,{children:e.jsxs("div",{className:"news-content",children:[e.jsx("div",{className:"latest news-item",children:e.jsx(J,{item:Y==null?void 0:Y[0]})}),e.jsx("div",{className:"other",children:(i=Y==null?void 0:Y.slice(1,4))==null?void 0:i.map((s,p)=>e.jsx("div",{className:"news-item",children:e.jsx(J,{item:s})},`hot_new_${s==null?void 0:s.title}_${p}`))})]})})}const $e=y.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: ${i=>i.size||"100%"};
  }
`;function de({size:i,ads:s,className:p}){const{imageUrl:o,url:A,description:T}=s;return e.jsx($e,{size:i,onClick:()=>window.open(A,"_blank"),className:p,children:e.jsx("img",{src:o,alt:T})})}const qe="/assets/editor_1-Z-QzS05L.svg",Oe="/assets/editor_2-Bxk7-uwb.svg",Ee="/assets/editor_3-DLIf9zKP.svg",I=[{title:"Using Automated Test Results To Improve",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Mobile",imageUrl:qe},{title:"How To Search For A Developer Job Abroad",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:Oe},{title:"New Smashing Front-End & UX Workshops",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Technology",imageUrl:Ee},{title:"Using Automated Test Results To Improve Accessibility",author:"Admin",createTime:"2024-08-27T10:10:10",category:"News",imageUrl:ie},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:E},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:ae},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:re}],Je=y.div``;function se({item:i,className:s,titleClassName:p}){const{title:o,category:A,imageUrl:T,createTime:v}=i;return e.jsxs(Je,{className:s,children:[e.jsx("img",{src:T,alt:o}),e.jsxs("div",{className:"post-info",children:[e.jsx("span",{className:"post-category",children:A}),e.jsx("span",{className:`${p} post-title`,children:o}),e.jsxs("div",{className:"post-create-time",children:[e.jsx(b,{name:"calendar"}),e.jsx("span",{children:ne(v).format("DD MMMM, YYYY")})]})]})]})}const Xe=y.div`
  .article-header {
    /* padding: 0 15px; */
    margin-bottom: 17px;
    .article-controller {
      display: flex;
      gap: 5px;
      .controller-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        border-radius: 4px;
        border: 1px solid #cfcfcf;
        &.next {
          transform: rotate(-180deg);
        }
      }
    }
  }
  .editor-choice_wrapper {
    margin-top: 30px;
    overflow-x: hidden;
    .editor-choice-list {
      display: flex;
      gap: 30px;
      width: fit-content;
      .editor-choice_item {
        display: flex;
        align-items: center;
        gap: 30px;
        min-width: 410px;
        img {
          width: 160px;
          height: 140px;
          object-fit: cover;
          border-radius: 8px;
        }
        .post-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          .post-category {
            width: fit-content;
            font-family: Inter;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.78px;
            text-transform: uppercase;
            color: #6d757f;
            border: 1px solid #b8c1cd;
            border-radius: 3px;
            padding: 5px 9px 6px 9px;
          }
          .post-title {
            font-weight: 700;
            font-size: 18px;
            line-height: 25.2px;
            text-transform: capitalize;
            color: #183354;
          }
          .post-create-time {
            display: flex;
            gap: 5px;
            span {
              font-family: Inter;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.52px;
              text-transform: uppercase;
              color: #6d757f;
            }
          }
        }
      }
    }
  }
`;function We({className:i}){const s=(I==null?void 0:I.length)-3,[p,o]=_.useState(1),[A,T]=_.useState(!1);_.useEffect(()=>{if(!A){const x=setInterval(()=>{o(N=>N<s?N+1:1)},2e3);return()=>clearInterval(x)}},[A,s]);const v=()=>{T(!0),o(x=>x+1),B()},S=()=>{T(!0),o(x=>x-1),B()},B=()=>{setTimeout(()=>{T(!1)},1e3)};return e.jsxs(Xe,{className:i,children:[e.jsxs("div",{className:"article-header",children:[e.jsx("span",{className:"article-title",children:"Editors Choice"}),e.jsxs("div",{className:"article-controller",children:[e.jsx("button",{type:"button",className:"controller-btn previous",onClick:()=>{p>1&&S()},children:e.jsx(b,{name:"previous"})}),e.jsx("button",{type:"button",className:"controller-btn next",onClick:()=>{p<s&&v()},children:e.jsx(b,{name:"previous"})})]})]}),e.jsx(M,{current:p,total:s}),e.jsx("div",{className:"editor-choice_wrapper hidden-scrollbar",children:e.jsx("div",{className:"editor-choice-list",style:{transform:`translateX(-${(p-1)*440}px)`,transition:"transform 0.3s ease-in-out"},children:I&&(I==null?void 0:I.map((x,N)=>e.jsx(se,{item:x,className:"editor-choice_item",titleClassName:"text-ellipsis-2"},`${x.title}_${N}`)))})})]})}const Ze="/assets/recent_1-DoqXxRrF.png",Le="/assets/recent_2-ixvXWP7T.png",_e="/assets/recent_3-B6IdazfM.png",L="/assets/recent_4-u0qFv8UB.png",P=[{title:"Best Tech Accessor 10 Work From Home Essentials",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Mobile",imageUrl:Ze},{title:"How To Search For A Developer Job Abroad",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:Le},{title:"New Smashing Front-End & UX Workshops",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Technology",imageUrl:_e},{title:"Using Automated Test Results To Improve Accessibility",author:"Admin",createTime:"2024-08-27T10:10:10",category:"News",imageUrl:L},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:L},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:L},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:L}],et=y.button`
  display: flex;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  padding: 11px 18px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  background-color: #fff;
  span {
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    color: #183354;
  }
`;function oe({title:i="View All",onClick:s}){return e.jsxs(et,{type:"button",onClick:s,children:[e.jsx("span",{children:i}),e.jsx(b,{name:"view_all"})]})}const tt=y.div`
  width: 100%;
  .article-title {
    display: inline-block;
    margin-bottom: 17px;
  }
  .article-content {
    display: flex;
    gap: 30px;
    height: 520px;
    .main-content {
      width: 55%;
    }
    .other-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .recent-post_item {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: 18px;
        img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 5px;
        }
        .post-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          .post-category {
            width: fit-content;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.78px;
            text-transform: uppercase;
            border: 1px solid #b8c1cd;
            border-radius: 3px;
            padding: 4px 10px;
            color: #ffffff;
            background-color: #f4796c;
          }
          .post-title {
            font-weight: 700;
            font-size: 18px;
            line-height: 25.2px;
            text-transform: capitalize;
            color: #183354;
          }
          .post-create-time {
            display: flex;
            gap: 5px;
            span {
              font-family: Inter;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.52px;
              text-transform: uppercase;
              color: #6d757f;
            }
          }
        }
      }
    }
  }
`;function it({className:i}){var s,p;return e.jsxs(tt,{className:i,children:[e.jsxs("div",{className:"article-header",children:[e.jsx("span",{className:"article-title",children:"Recent Posts"}),e.jsx(oe,{})]}),e.jsx(M,{current:1,total:20}),e.jsxs("div",{className:"article-content mt-30",children:[e.jsx("div",{className:"main-content",children:e.jsx(J,{item:P==null?void 0:P[0]})}),e.jsx("div",{className:"other-content",children:(p=(s=P==null?void 0:P.slice(1))==null?void 0:s.splice(0,3))==null?void 0:p.map((o,A)=>e.jsx(se,{item:o,className:"recent-post_item",titleClassName:"text-ellipsis-2"},`${o.title}_${A}`))})]})]})}const pe=[{title:"facebook",icon:"facebook_black",link:"https://facebook.com"},{title:"twitter",icon:"twitter_black",link:"https://twitter.com"},{title:"instagram",icon:"instagram_black",link:"https://instagram.com"},{title:"youtube",icon:"youtube_black",link:"https://youtube.com"},{title:"linkedin",icon:"linkedin_black",link:"https://linkedin.com"},{title:"pinterest",icon:"pinterest_black",link:"https://pinterest.com"}],at=y.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .social-link-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 1 calc(50% - 4px);
      gap: 10px;
      height: 44.5px;
      border-radius: 4px;
      background-color: #e8f1f1;
      .social-title {
        font-family: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 24.5px;
        text-transform: capitalize;
      }
    }
  }
`;function rt(){return e.jsxs(at,{className:"w-100",children:[e.jsx("span",{className:"aside-title",children:"Subscribe & Followers"}),e.jsx(M,{current:1,total:15}),e.jsx("div",{className:"social-link-list mt-30",children:pe==null?void 0:pe.map((i,s)=>e.jsxs("button",{type:"button",className:"social-btn",children:[e.jsx(b,{name:i==null?void 0:i.icon}),e.jsx("span",{className:"social-title",children:i.title})]},`social_${i==null?void 0:i.title}_${s}`))})]})}const nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA5CAYAAACceM1ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYbSURBVHgB7ZrPUiJXFMbPbcRWszFvwBtEniCwSQ1sok8wsBRnKrKbkVTJVMBkp6mJuBx8Aq1KRVLZ4DwBvkHIG7hJMpSBm/N10/QfbgMt3S3IfFVqd8tt+/68fe93zrmCPDo8vdr+IqkXKCG+IkkpWkFJOfgoRf/u317/9qy8d+/8nbAODFD65jF//JA+ayQpqXpykHtnnRvAAGtL19uCxA591pgkybt/er0sRtsaLgxHlgeWvJRSdmkFJYRI8feXo3MeSJtJMKKyeHPaSiV0+tPbiKleM9Wi9x1+7jKnpo0rPsx4f/d379OX2ppujywhxQgOU93FawqgtCJCX9FnUsCCttbXd7WBtIH9R/1LIckxwYkdTaeVgIY+oq/OeVz06R1PSz87PpbSnI345L52kKu6oVHquUOzYdk2CrBqr3NVnpxcU5KmugGg8XJaHDUeQjs6/+3ZraJHp3/sJNZFxwlL476bsMal+d2IvUdTkNyz5jXckIdr+23jZpeeiSqN1kuxPmjz5L2Nc/RVCMr+wH33a6NNumGtlL9eIy3Lh13jghDbGomrt7/cLL25rZh9aDphoa+1/dztpHbatBtXD765SzJ1sqChkSZOj85bx7SkOrrgZ+c+OC511zSZRl+ntZ0KDKru57peaDx0q8sIDbB4Uas6Lhl9Qx9naT8TMMgPWuW89YGWRPwP/uCGJe+CwIJmBgYZ0HobaUZlD11BBZ4823DItKDCs+EZ+R9csK8yrM1eIFhQIGBQtZy9r5depGlAl47LmUWNCpTunZ+9Xsqnq8XgYV9gYJbqr3IF4XDBixgVqNw7nDuenR6pRwODagf5w0WNCvzc+wk/M82huYBBqlAqsS47TxkVqNy7HerMp7mBQYDGg708usAGVwitAydNMcvr3qFJoU5QhQIM4kn0DPGnM0XEasbp1VTuHbAmhTpBFRowCPEnwgtXXi0mg+t171aoEyYsKFRgEMILhBkUY1Sgcu+zhjpBFTowKM6oYNy9Bwt1gioSYJAKGqKCo8ZNJ4yoAPfAvdzuPVpYUGTAIFUoBRO5pW905vFqlnt3lwUR6nxKRwkLihQYhFAq2dOz3Llr69o8Blfl3hHqGHFhMfoKV+TAIECrlV7suUOp4NBgSL3u3YgLOdSJAxYUCzBLCKWY1K11HiQqACwYUhcsott54sLHKFZglcbvp1whzrguzhAVGO5d73ec7n2oTNxJzFiAGSuaYSlcG1265FxBfaICw5DCvfu0Mzxe4+YqrnzcGkUsc5KWV/wquVc0IfZw9CAJuaoUjg2v1mhlsN3IPNe+9oxIy6q425lV+hT/rb2fyku8SirzUSQ/WplO26sJpyPPMKhjfJGrZG+nky274l5548nHRQZMtaIheXdSymecK5rZeT2L3UJ+9wIYbzo5rJU3qCIB9ub9rxnvijYpeWemvfMFFI6NbVY8CvGFYxRWAcbPNqiSmFh5v3/fylAECn0OG652Tbx8Iw1kufY6fzatLQrH/OOaAgr5uErjhoEOsxW88soEtflZCvVS7pJCVKgjzLuiIcUy4FFTfzUd1rxCPs65tWGo0PNxoQFTplg4H/WjOWpi0djWBgo/tRQKMBhSZYolgnzUNKm2NoQJbW5gKkMadYplmqLMxz0amH81OfoUyyyKqkr/KGDWNnXyVJPjSrHMKiu1FGaVPjAwM3m30VFVkxcJliXD44VYpQ8ELKpqchwKq0o/M7DJG2eXQ2FseJ4JmDrTCfe+PLAseav0QaFNBabKdKKaHId7j0pWld46D5L5nQjMCqKD7DJeFqFKn5SJ9CiUQuaXRHta0O4LDEF0IrHWDrrLeJlkVOk9u8SHQbtvulwJzM44jBRZ6f2ppQqlWE0/aC5gA6JtVQ79qUOdqKWs0g8zHVKKlPOzmjMdkhDad3HuU1gk+cWfmtC+tc4ltk+JhPB5zYJvyV52KWsMjtKenhDXAgeVi1Z7vF5ITTkY/EUrKLyGmibccxjzqO/nikaKOklUfCC7bGW2ogJXbmgVJcTYpS4zMiIEg4g9FGWo+e/nILNiZaesxlhWL1qph77cleNl+ZUSFsMkz1neOfx/WZVddCNKc5QAAAAASUVORK5CYII=",st=y.div`
  background-color: #183354;
  padding: 28px 35px 30px;
  .title {
    height: 75px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 800;
      font-size: 24px;
      line-height: 28.8px;
      text-align: center;
      text-transform: capitalize;
      color: #ffffff;
    }
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url(${nt});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      opacity: 0.1;
    }
  }
  .description {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
  }
  .email-input {
    height: 50px;
    width: 100%;
    padding: 16px 18px 16px 20px;
    margin-top: 25px;
    background: #f4796c;
    border-radius: 5px;
    display: flex;
    align-items: center;
    input {
      flex: 1;
      border: none !important;
      color: #ffffff;
      background: transparent;
      &::placeholder {
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
      }
      &:focus-visible,
      &:focus {
        outline: unset;
      }
    }
  }
`;function ot(){const[i,s]=_.useState("");return e.jsxs(st,{className:"w-100",children:[e.jsx("div",{className:"title",children:e.jsx("p",{children:"Daily Newsletter"})}),e.jsx("p",{className:"description",children:"Get all the top stories from Blogs to keep track."}),e.jsxs("div",{className:"email-input",children:[e.jsx("input",{type:"email",value:i,onChange:p=>s(p.target.value),placeholder:"Enter your e-mail"}),e.jsx("button",{type:"button",onClick:()=>console.log({email:i}),children:e.jsx(b,{name:"view_all",width:"16px",height:"16px",color:"#fff"})})]})]})}const lt="/assets/category_1-J6wQXEw7.png",ct="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCABQAUoDAREAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAEGBwIEBQMI/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAMEBQIGAQf/2gAMAwEAAhADEAAAAN9ZvpoQAAEIACAgAAAIQ5AAAhAAAQhSHaBxAAAIQFOAAMa7iwSalD4vkOZzPl8621Bod359AEBAACAhSHaBCAAAhACEAMYuY+/5qPsHtAHyPAPynT2djQ3QAIQAAhCkKdkEIUgABxAIQA6dzG3xNS9c+5rc2QdI5n5AqbGfwXgAIQAAgBCnZBAQAAEICEKDD68Pl+T9Z480HT9X579KQ6GHaHegfTeV3D6z5jH5fb2RWvgAQgBSAFOJTsAhAAAAQhCFBi0FXQOF6TFZPm2+7ezdPN82X7pbXzsl9dBlHiae1quiABCAAAFIQ7IIQAAEKDiDiUGvK8WPc96zxtfsy3c67seze83hWpW6WnLsHOzdqVtAACEAAAAB2CAgAAOIKQEIcjWHNHDMa39aun4O5B0ObO2bGBgdyh85JtiRT7Lr3wABCAAAhQdghAAAQgBQcSEhk1Dkw+t+c7Ph6FnaH6PU15ZztjRTaPvYnid8bMin2ZBf+vXIAA4gAEAB2QQgIUhAAUEOJ8oZdT0K2mMK/hOt8/cWnY81x5h1bmF7hmcFvEOLOTzwgADiAAADif/EAEUQAAEDAwIDAgcLCQkAAAAAAAECAwQFBhEAIQcSQRMxEBQiMFFhcSAjQFBXdpGUsrPTCBUyM0KBlbHBNjhDVYKhorTR/9oACAEBAAE/APg2fiW9b7o1g0sT6w+UJWeVppAyt0+gDSOMlyTkB+l8LbrmRF7ofRDeKVj1ENkaPFe+OnB+7PqUj8HR4s3/API3df1GT+DocV+InyM3Z9Qlfg6HE/iR8jV1fw+V+FocS+JPyN3X/DpP4epPG+s22EPXfw5uWhQFKCTLkxHUI/5oSNUirQ67TY1Rp76X4clAW24juI+FHzFvW5Eu7j/S2JzLTwolDfqURDyOdsSe1Q2lRT1x2mfaBrnvtkNKKKE9nskLShTmRlWFqGcdwOe/psNUZVw9q7+eU0rs/J7PxJTmRsc55hvvjGsjWRrI0+pSWHS3+sCSU+3Gqiw5V6PKhTYwlRpLjbDzD7XMlxlToS4kgo3Bb79v3jvHCGE3Q4l3W7GJMKgXHPpsbPRptzCfhx9xww/vEP8AzXe/7LGrklVGKGDAD5ylzm7FgObhOU5z3b6hKcXDjqez2ym0leRg5xvt08FlPXO5WSqqTJjrJCUuNPwlNI3aClLCidiHD2fLtkDIGPBUVuoay1z/AOgZJP7gSB37jUBbjjGXOfO2OcYPcP651w4/tBxT+edU+9+IoD0iLxWrj0R1xqSm1XORba+RQPjkbrqdxbqFoodqdYuGpJhsHdKpLi+Y+gJzudVr8oRd6sCpW1cVQabaYWXGWn3GilSdxzJz1wdHiRdk67TFZuesIaQiLlsTHAPKZbJ2z1J1Ak1ZbErnqUwlLxSCXlbDA1fFbrUClPqTWam1782ApqStJGyuoOmuKd8t1GQoV6tvwmlYWPH3AR7N9U+7KsumMPM3HU3kOICwtctzJB36nXDGWhdzcVY+5dbu6oOK9inSB9g/EVHkohcWK0+4AUC1Hu8Z75cYa4vsza/Ji06FFedYJW4ooSCCrBA9mNR6G2zQXGqXGTT3XY52SktuDGx5iN87HPtGmpdFo1r0GvT2uzlin0xx2QE++LJjsglXp1K4yz0vFdFo4epkpwqaffBBdz6Bkarl8qr1sy5zkYoW08htbCR+goBWokR92X27auzDilFXoHUY1bVSeofZwpy2nI2fe3Sn9XudjrhTvfXF75zy/v3fOjzh0PcH3FWlCBfVffOwFs/zqEQap8lUJSz4t44hWVZRkqGcY+nbVQqSapccl+HFU2ULDLLKhjnWQQQR1AG56a4symWn4keVKZXEb8TQ4lYwUJ8WQAeXYZ9WNWFUaRUaWywKo+ksgcqQpBO3tGrcnU6hRrgbqqnJkWSQlak8jZyoq38ogZxnVIpzrz0lynOB2DzK7IPp8rGds47jjVxiYw4wlYaYUnKst/1zrhQ0sXlxaeKfIXdEwA9CQ858QpSVHABJ1ddINfuq56Yh1DS3LaCVFWelRhqI29I1RrPuOBN5FyYDMRLCGA72qlqKUEcu3LnoNT7Hluy/GVXFEa5e4JQ5gf7avbgfdVy1VcxhiJLgvsRi06ZYQFYYQM8h1Q+DN7UCY261EgJHUJlAap9o3HSqNVlyIVNdTMbQwO1fJ5CQrykkdyh0yCNGxLkpjhkRpNPiI6lUnKT7cjGo9kVqqOSXXp1NlOKQAktychG/qGuFj6TcfFSL+21ds9Z9inCB9jz4+BTqgmkUh6YlJXJJKEDOAgY3Ufp1blRNU4nXLLLhK37YV2g6ZTPib6qNbpdKdisT6hFivSlFLKHnUoLp9CQTvq76vFoNJlTpKgEMpzjqo9ANWrPcl2Hbk9bS3XnqVEcLbKcqUpTKNgNXrfFSo15UiixUdut+oxokoNAFqMF4UoFXes8uTkAAbanzAihPNqP+O2B9C9SXn7xlvpdDiI5XyNZ2CAM/+HS6C9bk9tZeW28hXO2tII2B9OuFrDiLp4szO9ty65yPXlLqyftjUaQiU2Vtk4BKTnoR4R4ceYHux5k+Ccx49AeiKOEOdx9B1blrv0DiHdLz76FoetvDSUdAJ8XXGmu09y/6A0ysyn4jS2X22U85ZKyMZ6DV8XbNqC26G69lilgNjCs9ocbKPsG2uHayOHVoEf5NC+4RqlUWHGkuzWGR2j77zy3DuTz45Tn1AcuuJNQXSrLmy2j5bTzavoS5rg7VKXcVplbTADslpnnWFqCknYqwehz69ca3YzVNpCE4HZLURzkqUsBJ21Tbdi2nCrxKUhydU5s9xQ71qdfWsfQkpGrZqaZEyawVAftpT1J5jk/y+Af/xAAxEQABAwIDBwIDCQAAAAAAAAABAAIDBBEFIWESExQxMkFQUbEiMLJAYnFygZGh0fD/2gAIAQIBAT8A82xhdyXD6rh9Vw+q4fVcPquH1Rpz2KIINj4KDp+RP1eCg6fkT9XgsSkdFh8j2Egi2YNu4TJ66bZEUjifzFTTYlFLadxby5E2OvNRTuMLSTnYeyZJKQfiKwuU747zMaqknaJiXRNc30sE2kpZbObE2x0CqRZ/gsScG4fLf/XICw2klhsXqSbezgSZhq3r21phZ0+n6IODbglU7C+Qi/omVJjf8PZYNi9i2mkOR5aKq6vBYmwvoHgae4UDwYQ4BVLRtkgJjCJCQM7D2Ca95uC1SQzTMG4Ia4EHufYFR1ccTtmdgLu/P+FHWwgB0DbEH8VUG58FU1MUFG6aTpFvcI47hppXwslsXaH1v6Knr6INDTKP2P8AS2mPs9h5gZoAXuSjDHJs3eRYg5d7djlyKkMMvVmonxwkBpsFP1eBmk2RYcysX2jhE4d936goKWaUF0bSQOdhyVBTumkDG91HDbZib6AKWjLG7d8lGciEBsDJB20FUvDSLpjw4XHgJod5mDmsZYW4RKDp9QWCU8goZScgSCL5XssNo2MG/AzcpeZTahzot2UxPuEzMqpeC4kqmzZ9g//EADYRAAIBAwAFCQYGAwAAAAAAAAECAwAEEQUSIVBxExUxQVFhYqGxIiMwMjOBQEJSkcHRcrLw/9oACAEDAQE/AN9yzLEMtXOI/TXOPh865x8PnXOPh865x8PnXOPh86XSI/MtKwYZXcV+feY7vgWBzF99xX/1ft8DR/0zx3Faoj6SjWQAjvGeo1PaWMasXjUD/EVZWtg9udRVbiBkeVQWcbXjqVGMt61NFbBlxGvR2Cpba1ZF92BwFCzlm13jX2QaaIRrWjz7BHfuKFC+kI1H/YyavruOVdVKWDk7c8ls1uurKOI2iTSDDbcnr2k9NNAG1SQTsxUs8cEQdQTjPGtGq4AfoyTn1q4sFSJ3fbjbWjvlbcVocaSQnsP+pqVSJCKhkbkwhNQSRCBRI2zJz+5qZ4gAY2wPtV+whAGtnJOerpqwWUx+6fZ2EVcx3RwsjAA5zj+a0ePZbcWC94oBxs/g1Hbzi5V2XKrw7ONSmV/lU+X91bwPq4YEjJ7O2pEbVwsfp/dXwnwAy4qPloTldlctJJrGQaxI2d1aP+Qjv3DFCZWx0AUYlS+jA7/Q0WRSAxxmtiKXboFRzhYDMw7Ts4mrbTBnmEQXFaXXAUikjD51qe2CjKmtGRsytjtplKnVO4IpDGcikk5TSKcD6Grh0F0nWRs2dWavZznkepathrW371a2cay8uvTgg1pQZVR31GoxQOptqwTEagcauSDL+A//2Q==",dt="/assets/category_3-Cx0X1UfO.png",pt="/assets/category_4-BQc9apa-.png",he=[{title:"Technology",router:"technology",imageUrl:lt},{title:"Mobile",router:"mobile",imageUrl:ct},{title:"Gadget",router:"gadget",imageUrl:dt},{title:"News",router:"news",imageUrl:pt}],ht=y.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .category-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    .category-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 80px;
      padding: 27px 25px;
      border-radius: 6px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .category-title {
        padding: 4px 10px;
        border-radius: 30px;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.78px;
        text-transform: uppercase;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;function gt(){const i=De();return e.jsxs(ht,{className:"w-100",children:[e.jsx("span",{className:"aside-title",children:"Hot Categories"}),e.jsx(M,{current:1,total:15}),e.jsx("div",{className:"category-list mt-30",children:he==null?void 0:he.map((s,p)=>e.jsxs("button",{type:"button",className:"category-btn",style:{backgroundImage:`url(${s==null?void 0:s.imageUrl})`},onClick:()=>i(`/category/${s==null?void 0:s.router}`),children:[e.jsx("p",{className:"category-title",children:s.title}),e.jsx(b,{name:"view_all",width:"16px",height:"16px",color:"#fff"})]},`category_${s==null?void 0:s.title}_${p}`))})]})}const xe="/assets/trending_1-C-jW3SXs.png",ye="/assets/trending_2-jnPYzuev.png",Ae="/assets/trending_3-egUaGo7m.png",te="/assets/trending_4-jT2vfDcG.png",H=[{title:"Iphone Devices Are Going To Incredible Now a days",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",imageUrl:xe},{title:"One-pan baked sausage and lentils",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:ye},{title:"How To Create Advanced Animations With CSS",author:"Admin",createTime:"2024-08-27T10:10:10",category:"News",imageUrl:Ae},{title:"State Of CSS: Influence The Future Of CSS",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Mobile",imageUrl:te},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology"},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology"}],mt=y.div`
  img {
    border-radius: 6px;
  }
  display: flex;
  flex: 1;
  width: 100%;
  gap: 25px;
  .category {
    width: fit-content;
    padding: 4px 10px;
    border-radius: 3px;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.78px;
    text-transform: uppercase;
    color: #ffffff;
    background: #f4796c;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .title {
      font-weight: 700;
      font-size: 28px;
      line-height: 36.4px;
      text-transform: capitalize;
      color: #183354;
    }
    .writen-info {
      display: flex;
      gap: 15px;
      div {
        display: flex;
        align-items: center;
        gap: 5px;
        span {
          font-family: Inter;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.52px;
          text-transform: uppercase;
          color: #6d757f;
        }
      }
    }
  }
  .description {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-transform: capitalize;
    color: #545e69;
  }
`;function ke({newItem:i,titleClassName:s,descriptionClassName:p,className:o}){return e.jsxs(mt,{className:o,children:[e.jsx("img",{src:i==null?void 0:i.imageUrl,alt:i==null?void 0:i.title}),e.jsxs("div",{className:"info",children:[e.jsx("p",{className:"category",children:i==null?void 0:i.category}),e.jsx("p",{className:`title ${s}`,children:i==null?void 0:i.title}),e.jsxs("div",{className:"writen-info",children:[e.jsxs("div",{className:"author",children:[e.jsx(b,{name:"account",color:"#6d757f"}),e.jsx("span",{children:"BY"}),e.jsx("span",{children:i==null?void 0:i.author})]}),e.jsxs("div",{className:"create-time",children:[e.jsx(b,{name:"calendar",color:"#6d757f"}),e.jsx("span",{children:ne(i==null?void 0:i.createTime).format("DD MMMM, YYYY")})]}),e.jsx("div",{className:"time-pass",children:e.jsx(b,{name:"clock_revert",color:"#6d757f"})})]}),e.jsx("p",{className:`description ${p}`,children:i==null?void 0:i.description}),e.jsx(oe,{title:"Read More"})]})]})}const ut=y.div`
  .article-title {
    display: inline-block;
    margin-bottom: 17px;
  }
  .other-trending-list,
  .trending-list {
    display: flex;
    gap: 30px;
  }
  .trending-list {
    flex-direction: column;
    img {
      border-radius: 6px;
    }
    .other-trending {
      display: flex;
      flex: 1;
      .trending-category {
        width: fit-content;
        padding: 4px 10px;
        border-radius: 3px;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.78px;
        text-transform: uppercase;
        color: #ffffff;
        background: #f4796c;
      }
      .trending-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .trending-title {
          font-weight: 700;
          font-size: 28px;
          line-height: 36.4px;
          text-transform: capitalize;
        }
        .trending-writen-info {
          display: flex;
          gap: 15px;
          div {
            display: flex;
            align-items: center;
            gap: 5px;
            span {
              font-family: Inter;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.52px;
              text-transform: uppercase;
              color: #6d757f;
            }
          }
        }
      }
    }
    .other-trending {
      flex-direction: column;
      gap: 14.5px;
      position: relative;
      img {
        height: 200px;
      }
      .trending-category {
        position: absolute;
        top: 20px;
        left: 20px;
      }
      .trending-info {
        gap: 12.5px;
        div {
          display: flex;
          align-items: center;
        }
        .trending-title {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          text-transform: capitalize;
          color: #183354;
        }
      }
    }
  }
  .other-trending-list {
    padding-bottom: 50px;
  }
`;function ft(){var s,p;const i=H==null?void 0:H[0];return e.jsxs(ut,{children:[e.jsxs("div",{className:"article-header",children:[e.jsx("span",{className:"article-title",children:"Trending News"}),e.jsx(oe,{})]}),e.jsx(M,{current:1,total:15}),e.jsxs("div",{className:"trending-list mt-30",children:[e.jsx(ke,{newItem:i,titleClassName:"text-ellipsis-2",descriptionClassName:"text-ellipsis-4"}),e.jsx("div",{className:"other-trending-list",children:(p=(s=H==null?void 0:H.slice(1))==null?void 0:s.splice(0,3))==null?void 0:p.map((o,A)=>e.jsxs("div",{className:"other-trending",children:[e.jsx("img",{src:o==null?void 0:o.imageUrl,alt:o==null?void 0:o.title}),e.jsx("p",{className:"trending-category",children:o==null?void 0:o.category}),e.jsxs("div",{className:"trending-info",children:[e.jsx("p",{className:"trending-title",children:o==null?void 0:o.title}),e.jsxs("div",{className:"trending-writen-info",children:[e.jsxs("div",{className:"author",children:[e.jsx(b,{width:"16px",height:"16px",name:"account",color:"#6d757f"}),e.jsx("span",{children:"BY"}),e.jsx("span",{children:o==null?void 0:o.author})]}),e.jsxs("div",{className:"create-time",children:[e.jsx(b,{width:"16px",height:"16px",name:"calendar",color:"#6d757f"}),e.jsx("span",{children:ne(o==null?void 0:o.createTime).format("DD MMMM, YYYY")})]})]})]})]},`trending_${o==null?void 0:o.id}_${A}`))})]})]})}const xt="/assets/popular_1-BsHYIZTC.png",yt="/assets/popular_2-Csna1ILK.png",Ce="/assets/popular_3-kGJz05hO.png",ge=[{title:"Influence The Future Of CSS",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",imageUrl:xt},{title:"Best Tech Accessor 10 Work From Home",author:"Admin",createTime:"2024-08-27T10:10:10",category:"News",imageUrl:yt},{title:"The Butter Chocolate Cookies Daily",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Technology",imageUrl:Ce},{title:"State Of CSS: Influence The Future Of CSS",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Mobile",imageUrl:Ce},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology"},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology"}],At=y.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .popular-post-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .popular-post_item {
      display: flex;
      align-items: center;
      gap: 18px;
      img {
        width: 110px;
        height: 110px;
        object-fit: cover;
        border-radius: 5px;
      }
      .post-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        .post-category {
          width: fit-content;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.78px;
          text-transform: uppercase;
          border: 1px solid #b8c1cd;
          border-radius: 3px;
          padding: 4px 10px;
          color: #ffffff;
          background-color: #f4796c;
        }
        .post-title {
          font-weight: 700;
          font-size: 18px;
          line-height: 25.2px;
          text-transform: capitalize;
          color: #183354;
        }
        .post-create-time {
          display: flex;
          gap: 5px;
          span {
            font-family: Inter;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.52px;
            text-transform: uppercase;
            color: #6d757f;
          }
        }
      }
    }
  }
`;function wt(){var i;return e.jsxs(At,{className:"w-100",children:[e.jsx("span",{className:"aside-title",children:"Popular Posts"}),e.jsx(M,{current:1,total:15}),e.jsx("div",{className:"popular-post-list mt-30",children:(i=ge==null?void 0:ge.slice(0,3))==null?void 0:i.map((s,p)=>e.jsx(se,{item:s,className:"popular-post_item",titleClassName:"text-ellipsis-2"},`${s.title}_${p}`))})]})}const me=[{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:ie},{title:"New Modern Iphone 14pro Max Extrea Revolutionary Features",author:"Admin",createTime:"2024-08-27T10:10:10",category:"mobile",imageUrl:E},{title:"A Guide To Image Optimization On Jamstack Sites",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:ae},{title:"Using Automated Test Results To Improve Accessibility",author:"Admin",createTime:"2024-08-27T10:10:10",category:"News",imageUrl:re},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:ie},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:re},{title:"New Modern Iphone 14pro Max Extrea Revolutionary Features",author:"Admin",createTime:"2024-08-27T10:10:10",category:"mobile",imageUrl:E},{title:"A Guide To Image Optimization On Jamstack Sites",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:ae},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:E}],bt=y.div`
  width: 100%;
  height: 570px;
  margin-bottom: 60px;
  overflow: hidden;
  .news-content {
    width: fit-content;
    display: flex;
    gap: 4px;
    overflow-x: visible;
    .news-item {
      width: calc(25vw - 3px);
      height: 570px;
      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        inset: 35px 30px 35px 40px;
      }
    }
  }
`;function Tt(){return e.jsx(bt,{children:e.jsx("div",{className:"news-content",children:me==null?void 0:me.map((i,s)=>e.jsx("div",{className:"news-item",children:e.jsx(J,{item:i})},`new_${i==null?void 0:i.title}_${s}`))})})}const jt="/assets/weekly_1-BzCuK0DO.png",vt="/assets/weekly_2-BqQVZ2gK.png",Ct="/assets/weekly_3-BiVJiqm0.png",ue="/assets/weekly_4-CYHJmbA2.png",fe=[{title:"WordPress Full-Site EditingA Deep Dive Into The",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",imageUrl:jt},{title:"Effective Communication For Everyday Meetings",author:"Admin",createTime:"2024-08-27T10:10:10",category:"news",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",imageUrl:vt},{title:"A Roadmap For Building A Business Chatbot",author:"Admin",createTime:"2024-08-27T10:10:10",category:"gadget",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",imageUrl:Ct},{title:"Easy Fluid Typography With clamp() using Sass Functions",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Mobile",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",imageUrl:ue},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",category:"technology",imageUrl:ue},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",description:"Browned butter and brown sugar area caramelly goodness, crispy edgesick and soft centers rare melty little puddles of chocolate first favorite thing about these browned butter.",category:"technology",imageUrl:ue}],kt=y.div`
  .article-title {
    display: inline-block;
    margin-bottom: 17px;
  }
  .weekly-news-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .weekly-news-item {
      display: flex;
      flex-direction: row-reverse;
      .info {
        padding: 5px 0;
      }
      .category {
        height: 26px;
        display: inline-flex;
        align-items: center;
      }
      .writen-info {
        svg {
          width: 16px;
          height: 16px;
        }
        span {
          display: inline-block;
          line-height: 16px;
        }
      }
    }
  }
`;function Bt(){var i;return e.jsxs(kt,{children:[e.jsxs("div",{className:"article-header",children:[e.jsx("span",{className:"article-title",children:"Weekly Best News"}),e.jsx(oe,{})]}),e.jsx(M,{current:1,total:15}),e.jsx("div",{className:"weekly-news-wrapper mt-30",children:(i=fe==null?void 0:fe.slice(0,4))==null?void 0:i.map((s,p)=>e.jsx(ke,{newItem:s,className:"weekly-news-item",titleClassName:"text-ellipsis-2",descriptionClassName:"text-ellipsis-3"},`${s.title}_${p}`))})]})}const K=[{title:"Racing Games Browned ae Cookies Daily Breakfast",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:xe},{title:"Effective For Everyday Meetings",author:"Admin",createTime:"2024-08-27T10:10:10",category:"mobile",imageUrl:te},{title:"The Butter Chocolate Cookies Daily",author:"Admin",createTime:"2024-08-27T10:10:10",category:"News",imageUrl:Ae},{title:"The Anatomy Of Themed Design",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:ye},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:xe},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:ye},{title:"popular Modern Iphone 14pro Max Extrea Revolutionary Features",author:"Admin",createTime:"2024-08-27T10:10:10",category:"mobile",imageUrl:te},{title:"A Guide To Image Optimization On Jamstack Sites",author:"Admin",createTime:"2024-08-27T10:10:10",category:"Gadget",imageUrl:Ae},{title:"Game Changing Virtual Reality Console Technololows Profit To Serve The Community",author:"Admin",createTime:"2024-08-27T10:10:10",category:"technology",imageUrl:te}],Nt=y.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .first-popular-tech {
    height: 364px;
    img {
      height: 364px;
      border-radius: 5px;
    }
    .info {
      justify-content: flex-end;
      inset: 0;
      padding: 0px 25px 30px 30px;
      background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      .category {
        height: 26px;
        span {
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.78px;
          text-transform: uppercase;
        }
      }
      .title {
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        text-transform: capitalize;
      }
      .more-info {
        .author {
          display: none;
        }
        span {
          font-family: Inter;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.52px;
          text-transform: uppercase;
          color: #bacce1;
        }
      }
    }
  }
  .popular-tech-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 25px;
    .popular-tech_item {
      display: flex;
      align-items: center;
      gap: 16px;
      img {
        width: 110px;
        height: 110px;
        object-fit: cover;
        border-radius: 5px;
      }
      .post-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        .post-category {
          height: 24px;
          width: fit-content;
          display: flex;
          align-items: center;
          padding: 0 9px;
          border: 1px solid #b8c1cd;
          border-radius: 3px;
          color: #6d757f;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.78px;
          text-transform: uppercase;
        }
        .post-title {
          font-weight: 700;
          font-size: 18px;
          line-height: 25.2px;
          text-transform: capitalize;
          color: #183354;
        }
        .post-create-time {
          display: flex;
          align-items: center;
          gap: 5px;
          svg g path {
            fill: #6d757f;
          }
          span {
            font-family: Inter;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.52px;
            text-transform: uppercase;
            color: #6d757f;
            padding-top: 1px;
          }
        }
      }
    }
  }
`;function Ut(){var i;return e.jsxs(Nt,{className:"w-100",children:[e.jsx("span",{className:"aside-title",children:"Popular Tech"}),e.jsx(M,{current:1,total:15}),e.jsx(J,{item:K==null?void 0:K[0],className:"first-popular-tech mt-30"}),e.jsx("div",{className:"popular-tech-list",children:(i=K==null?void 0:K.slice(1,4))==null?void 0:i.map((s,p)=>e.jsx(se,{item:s,className:"popular-tech_item",titleClassName:"text-ellipsis-2"},`${s.title}_${p}`))})]})}const zt=()=>e.jsxs(Me,{children:[e.jsx(Ke,{}),e.jsx(de,{size:"75%",ads:U==null?void 0:U[0],className:"home-content"}),e.jsx(We,{className:"home-content mt-30 w-100"}),e.jsxs("div",{className:"d-flex gap-55 home-content w-100",children:[e.jsxs("article",{className:"mt-30 d-flex flex-column gap-50",children:[e.jsx(it,{}),e.jsx(de,{size:"100%",ads:U==null?void 0:U[1]}),e.jsx(ft,{})]}),e.jsxs("aside",{className:"mt-30 d-flex gap-50 flex-column",children:[e.jsx(rt,{}),e.jsx(ot,{}),e.jsx(gt,{}),e.jsx(wt,{})]})]}),e.jsx(de,{size:"100%",ads:U==null?void 0:U[2],className:"home-content my-60"}),e.jsx(Tt,{}),e.jsxs("div",{className:"d-flex gap-55 home-content w-100",children:[e.jsx("article",{className:"mt-30 d-flex flex-column gap-50",children:e.jsx(Bt,{})}),e.jsxs("aside",{className:"mt-30 d-flex gap-50 flex-column",children:[e.jsx("img",{src:Ie,alt:"AumationDiscount"}),e.jsx(Ut,{})]})]})]});export{zt as default};
