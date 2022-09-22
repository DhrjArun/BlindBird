var $e=Object.defineProperty,qe=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var Y=(t,a,n)=>a in t?$e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,E=(t,a)=>{for(var n in a||(a={}))ue.call(a,n)&&Y(t,n,a[n]);if(_)for(var n of _(a))ge.call(a,n)&&Y(t,n,a[n]);return t},z=(t,a)=>qe(t,Oe(a));var M=(t,a)=>{var n={};for(var i in t)ue.call(t,i)&&a.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&_)for(var i of _(t))a.indexOf(i)<0&&ge.call(t,i)&&(n[i]=t[i]);return n};var $=(t,a,n)=>(Y(t,typeof a!="symbol"?a+"":a,n),n);import{r as N,R as e,p as He,d as q,u as Ge,f as O,a as X,b as Z,c as Qe,e as je,g as Ke,T as h,B as y,L as he,F as pe,h as ke,i as fe,j as Je,k as F,S as H,G as x,M as Ye,A as ve,l as Xe,m as G,n as Ze,o as et,q as ye,s as V,t as tt,C as ee,v as nt,w as at,x as te,y as it,z as st,D as Ne,I as rt,E as lt,H as ot,J as Ee,K as be,N as ct,O as P,P as Se,Q as dt,U as mt,V as Q,W as ut,X as gt,Y as ht,Z as pt,_ as kt}from"./vendor.faea2154.js";const ft=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};ft();const xe=N.exports.createContext({}),vt=({children:t})=>{const[a,n]=N.exports.useState(null);return e.createElement(xe.Provider,{value:{chatData:a,setChatData:n}},t)},L=()=>e.useContext(xe),T={chats:["chats"],chatsWithUnreadMsg:["chatsWithUnreadMsgs"],chat:t=>["chat",t],messages:t=>["messages",t]};var ne;(function(t){t.After="AFTER",t.Before="BEFORE"})(ne||(ne={}));var j;(function(t){t.FirstPerson="FIRST_PERSON",t.SecondPerson="SECOND_PERSON"})(j||(j={}));const yt={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ChatWithUnreadMsgs"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"chatId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"chatWithUnreadMsgs"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"chatId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"createAt"}},{kind:"Field",name:{kind:"Name",value:"revealGender"}},{kind:"Field",name:{kind:"Name",value:"firstPerson"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tUsername"}},{kind:"Field",name:{kind:"Name",value:"tName"}},{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tPfp"}}]}},{kind:"Field",name:{kind:"Name",value:"secondPerson"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tUsername"}},{kind:"Field",name:{kind:"Name",value:"tName"}},{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tPfp"}}]}},{kind:"Field",name:{kind:"Name",value:"messages"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}]},Nt={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ChatsWithUnreadMsgs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"chatsWithUnreadMsgs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"createAt"}},{kind:"Field",name:{kind:"Name",value:"revealGender"}},{kind:"Field",name:{kind:"Name",value:"messages"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"firstPerson"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tName"}}]}},{kind:"Field",name:{kind:"Name",value:"secondPerson"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tName"}},{kind:"Field",name:{kind:"Name",value:"tUsername"}},{kind:"Field",name:{kind:"Name",value:"tPfp"}}]}}]}}]}}]},Et={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateChat"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"revealGender"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"secondPersonTId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createChat"},arguments:[{kind:"Argument",name:{kind:"Name",value:"revealGender"},value:{kind:"Variable",name:{kind:"Name",value:"revealGender"}}},{kind:"Argument",name:{kind:"Name",value:"secondPersonTId"},value:{kind:"Variable",name:{kind:"Name",value:"secondPersonTId"}}},{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"createAt"}},{kind:"Field",name:{kind:"Name",value:"revealGender"}},{kind:"Field",name:{kind:"Name",value:"firstPerson"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tUsername"}},{kind:"Field",name:{kind:"Name",value:"tName"}},{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tPfp"}}]}},{kind:"Field",name:{kind:"Name",value:"secondPerson"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tUsername"}},{kind:"Field",name:{kind:"Name",value:"tName"}},{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tPfp"}}]}}]}}]}}]},bt={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateMessage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"body"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"chatId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createMessage"},arguments:[{kind:"Argument",name:{kind:"Name",value:"body"},value:{kind:"Variable",name:{kind:"Name",value:"body"}}},{kind:"Argument",name:{kind:"Name",value:"chatId"},value:{kind:"Variable",name:{kind:"Name",value:"chatId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"isSeen"}},{kind:"Field",name:{kind:"Name",value:"body"}},{kind:"Field",name:{kind:"Name",value:"sender"}}]}}]}}]},St={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MarkSeen"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"messageId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"markSeen"},arguments:[{kind:"Argument",name:{kind:"Name",value:"messageId"},value:{kind:"Variable",name:{kind:"Name",value:"messageId"}}}]}]}}]},xt={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Messages"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"chatId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"cursorType"}},type:{kind:"NamedType",name:{kind:"Name",value:"CursorType"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"cursor"}},type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"messages"},arguments:[{kind:"Argument",name:{kind:"Name",value:"chatId"},value:{kind:"Variable",name:{kind:"Name",value:"chatId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"cursorType"},value:{kind:"Variable",name:{kind:"Name",value:"cursorType"}}},{kind:"Argument",name:{kind:"Name",value:"cursor"},value:{kind:"Variable",name:{kind:"Name",value:"cursor"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"isSeen"}},{kind:"Field",name:{kind:"Name",value:"body"}},{kind:"Field",name:{kind:"Name",value:"chatId"}},{kind:"Field",name:{kind:"Name",value:"sender"}}]}}]}}]},Ct={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createAt"}},{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tPfp"}},{kind:"Field",name:{kind:"Name",value:"tUsername"}},{kind:"Field",name:{kind:"Name",value:"tName"}}]}}]}}]},wt={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"User"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"tUsername"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"tUsername"},value:{kind:"Variable",name:{kind:"Name",value:"tUsername"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createAt"}},{kind:"Field",name:{kind:"Name",value:"tId"}},{kind:"Field",name:{kind:"Name",value:"tPfp"}},{kind:"Field",name:{kind:"Name",value:"tUsername"}},{kind:"Field",name:{kind:"Name",value:"tName"}},{kind:"Field",name:{kind:"Name",value:"publicMetrics"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followersCount"}},{kind:"Field",name:{kind:"Name",value:"followingCount"}}]}},{kind:"Field",name:{kind:"Name",value:"isRegistered"}}]}}]}}]},Ft=t=>{const a=t.pages[t.pages.length-1];return a[a.length-1].id},Tt=(t,a)=>He(t,i=>{i||(i={pages:[],pageParams:[]});const l=i.pages.length-1;if(i.pages[l].length<12)i.pages[l].push(a);else{const s={CursorType:Ft(i),cursorType:ne.After};i.pageParams.push(s),i.pages.push([a])}}),W=()=>!1,ae="http://localhost:3100",ie="http://api.blindbird.online",It="ws://localhost:3100",At="ws://api.blindbird.online",Mt=W()?`${ae}/auth/twitter`:`${ie}/auth/twitter`,Rt=W()?`${ae}/graphql`:`${ie}/graphql`,Dt=W()?`${It}/graphql`:`${At}/graphql`,Bt=W()?`${ae}/logout`:`${ie}/logout`,I=new q.GraphQLClient(Rt,{credentials:"include"}),Pt=async(t,a=null)=>{const n=q.gql`
    query ChatFromId($chatId: Float) {
      chat(id: $chatId) {
        id
        createAt
        firstPerson {
          tUsername
          tName
          tId
          tPfp
        }
        secondPerson {
          tId
          tUsername
          tName
          tPfp
        }
      }
    }
  `,i=q.gql`
    query ChatFromSecondPersonTId($secondPersonTId: String) {
      chat(secondPersonTId: $secondPersonTId) {
        id
        name
        createAt
        revealGender
        firstPerson {
          createAt
          tId
          tName
          tUsername
          tPfp
        }
        secondPerson {
          createAt
          tId
          tName
          tUsername
          tPfp
        }
      }
    }
  `;if(t){const{chat:r}=await I.request(n,{chatId:t});return r||null}if(a){const{chat:r}=await I.request(i,{secondPersonTId:a});return r||null}},Lt=async t=>{const{chatWithUnreadMsgs:a}=await I.request(yt,{chatId:t});return a},Ut=async({messageId:t})=>{const{markSeen:a}=await I.request(St,{messageId:t});return a},R=()=>{const t=Ge(),a=()=>t.getQueryData(T.chatsWithUnreadMsg),n=c=>{const m=(a()||[]).findIndex(v=>v.id===c);return m===-1?null:m},i=c=>{const o=a()||[];let m=-1;return{chat:o.find((b,S)=>{if(b.id===c)return m=S,!0}),chatIndex:m}},r=(c,o)=>{const m=n(c);return m==null?!1:(t.setQueryData(T.chatsWithUnreadMsg,v=>{if(!v)return v;if(m!==null||m!==void 0)return O(v,S=>{var A;S[m].messages||(S[m].messages=[]),(A=S[m].messages)==null||A.push(o)})}),!0)},l=c=>{!c||t.setQueryData(T.chatsWithUnreadMsg,o=>o?[c,...o]:[c])};return{getChatsWithUnreadMsg:a,addMsgInMessagesIfExist:(c,o)=>{t.setQueryData(T.messages(c),m=>{if(!!m)return Tt(m,o)})},addMessageInChat:async(c,o)=>{if(!r(c,o)){const v=await Lt(c);v&&l(v)}},removeMsgFromChat:async(c,o)=>{t.setQueriesData(T.chatsWithUnreadMsg,m=>O(m,b=>{var S;!b||(b[c].messages=((S=b[c].messages)==null?void 0:S.filter(A=>A.id!==o))||[])}))},makeMessageToRead:(c,o)=>{t.setQueryData(T.messages(c),m=>{if(!m)return m;O(m,v=>{!v||(v.pages[o[0]][o[1]].isSeen=!0)})})},addNewChat:l,getChatWithIndex:i,getChatIndex:n,updateChat:(c,o)=>{t.setQueriesData(T.chatsWithUnreadMsg,m=>O(m,b=>{if(!b)return;const S=b.findIndex(A=>A.id===c);b[S]=o}))},removeChat:c=>{t.setQueriesData(T.chatsWithUnreadMsg,o=>o&&o.filter(m=>m.id!==c))}}},Ce=()=>X(T.chatsWithUnreadMsg,async()=>{const{chatsWithUnreadMsgs:a}=await I.request(Nt);return a}),zt=t=>{const a=R();return Z(async({chatId:i,body:r})=>{const{createMessage:l}=await I.request(bt,{chatId:i,body:r});return l},{onSuccess:i=>{t&&i&&a.addMsgInMessagesIfExist(t,i)}})},Vt=()=>Z(Ut),Wt=t=>{const a=N.exports.useCallback(async({pageParam:n={}})=>{if(!t)return;const{messages:i}=await I.request(xt,{chatId:t,cursor:n==null?void 0:n.cursor,CursorType:n==null?void 0:n.cursorType});return i==null?void 0:i.reverse()},[t]);return Qe(T.messages(t),a,{getNextPageParam:n=>{var i;return{cursor:(i=n==null?void 0:n.at(-1))==null?void 0:i.id}},getPreviousPageParam:(n=[])=>{var i;if(!(n.length<12))return{cursor:(i=n==null?void 0:n.at(0))==null?void 0:i.id}}})},we=e.createContext({}),D=()=>N.exports.useContext(we),_t=({children:t})=>{const{data:a,isLoading:n,isError:i}=X(["me"],async()=>{const{me:r}=await I.request(Ct);return r},{staleTime:1/0,retry:!1});return e.createElement(we.Provider,{value:{user:a||null,isLoading:n,isError:i}},t)},$t=je({url:Dt,webSocketImpl:Ke.WebSocket}),qt=({onNext:t,onError:a,onComplete:n}={})=>{let i,r=!1;const{user:l}=D(),{addMsgInMessagesIfExist:s,addMessageInChat:u}=R();return N.exports.useEffect(()=>{if(!l)return;const g=$t.subscribe({query:q.gql`
          subscription NewMessage {
            newMessage {
              id
              createdAt
              isSeen
              body
              sender
              chatId
            }
          }
        `},{next:async p=>{var c;const k=(c=p.data)==null?void 0:c.newMessage,C=k==null?void 0:k.chatId;!C||!k||(s(C,k),u(C,k),t&&t(p))},error:p=>{i=p,a&&a(p)},complete:()=>{r=!0,n&&n()}});return()=>{g&&g()}},[l]),{error:i,isComplete:r}},Ot=()=>{const{updateChat:t}=R();return Z(async({secondPersonTId:n,name:i,revealGender:r})=>{const{createChat:l}=await I.request(Et,{secondPersonTId:n,name:i,revealGender:r});return l},{onSuccess:n=>{t(-1,n)}})},Fe=t=>Array.isArray(t)?t:[t],K=e.forwardRef(({children:t,sx:a,align:n},i)=>e.createElement(h,{sx:[r=>({padding:r.spacing.xs,paddingBottom:"0",borderRadius:r.radius.sm,boxShadow:r.shadows.xs,justifySelf:n==="right"?"flex-end":"flex-start",wordWrap:"break-word",maxWidth:"70%",[`@media (max-width: ${r.breakpoints.sm}px)`]:{maxWidth:"85%"}}),...Fe(a)],ref:i},t));K.defaultProps={align:"left"};K.displayName="BubbleBase";const se=e.forwardRef(({children:t,sx:a},n)=>e.createElement(y,{ref:n,sx:i=>E({marginBottom:i.spacing.xs,display:"grid"},a)},t));se.displayName="BubbleBaseContainer";const Te=e.forwardRef((i,n)=>{var r=i,{text:t}=r,a=M(r,["text"]);return t?e.createElement(se,E({ref:n},a),e.createElement(K,{align:"right",sx:l=>({backgroundColor:l.colors.blue[0]})},t,e.createElement(y,{sx:l=>({padding:"0px",margin:"0px",textAlign:"right",color:l.colors.gray[7]}),ref:n},e.createElement(he,{variant:"dots",size:"xs"})))):null});Te.displayName="LoadingChatBubble";const Ie=e.forwardRef(({time:t},a)=>{const n=new Date(t);return e.createElement(h,{size:"xs",align:"right",sx:i=>({paddingBlock:"0.25em",color:i.colors.gray[7]}),ref:a},n.toLocaleString("en-in",{timeStyle:"short",dateStyle:"short",hourCycle:"h24"}))});Ie.displayName="Time";const Ae=e.memo(({message:t,sender:a,chatId:n,chatIndex:i,indices:r})=>{if(!t)return null;const l=N.exports.useRef(null),s=t.sender===a,u=Vt(),{makeMessageToRead:g,removeMsgFromChat:p}=R();return N.exports.useEffect(()=>{let k;if(!t.isSeen&&l.current&&!s){const C=c=>{c[0].isIntersecting&&(g(n,r),p(i,t.id),u.mutate({messageId:t.id}))};k=new IntersectionObserver(C),k.observe(l.current)}else k&&t.isSeen&&l.current&&!s&&k.unobserve(l.current)},[l.current,t]),e.createElement(se,{ref:l},e.createElement(K,{align:s?"right":"left",sx:k=>({backgroundColor:s?k.colors.blue[0]:k.colors.gray[0]})},t.body,e.createElement(Ie,{time:t.createdAt})))});Ae.displayName="MessageBubble";const Me=e.forwardRef((i,n)=>{var r=i,{onSubmit:t}=r,a=M(r,["onSubmit"]);return e.createElement(pe,{initialValues:{message:""},onSubmit:(l,{setSubmitting:s,resetForm:u})=>{t(l.message),s(!1),u()},validate:l=>{const s={};return l.message||(s.message="Required"),s}},({isSubmitting:l})=>e.createElement(ke,null,e.createElement(y,E({ref:n,sx:s=>({display:"flex",borderTop:`1px solid ${s.colors.gray[3]}`,padding:s.spacing.md,gap:"1rem",alignItems:"flex-end"})},a),e.createElement(fe,{className:"message-input",name:"message",as:Je,sx:()=>({flexBasis:"100%"}),autosize:!0,placeholder:"What's in your mind?"}),e.createElement(F,{className:"message-submit-btn",type:"submit",disabled:l,size:"xs"},"Send"))))});Me.displayName="ChatInput";class Ht extends e.Component{constructor(a){super(a);$(this,"scrollArea");$(this,"scrollSnapshot");$(this,"actions",{scrollHeight:()=>{if(this.scrollArea)return this.scrollArea.scrollHeight},scrollTop:()=>{if(this.scrollArea)return this.scrollArea.scrollTop},clientHeight:()=>{if(this.scrollArea)return this.scrollArea.clientHeight},scrolledToBottom:()=>this.scrollArea?this.scrollArea.scrollHeight-this.scrollArea.clientHeight-this.scrollArea.scrollTop<6:!1,scrolledToLoadingThreshold:()=>this.scrollArea?this.scrollArea.scrollTop<=(this.props.loadingThreshold||0):!1,scrollToBottom:(a="auto")=>{this.scrollArea&&this.scrollArea.scrollTo({top:this.scrollArea.scrollHeight,behavior:a})},scrollToMatch:()=>{this.scrollArea&&(this.scrollArea.scrollTop=this.scrollArea.scrollHeight-(this.scrollSnapshot.scrollHeight||0))}});this.scrollAreaRef=this.scrollAreaRef.bind(this),this.onScroll=this.onScroll.bind(this)}scrollAreaRef(a){this.scrollArea=a,this.props.getChatScrollApi&&this.props.getChatScrollApi(z(E({},this.actions),{snapshot:()=>this.scrollSnapshot}))}getSnapshotBeforeUpdate(){return this.scrollSnapshot={scrollHeight:this.actions.scrollHeight(),clientHeight:this.actions.clientHeight(),scrollTop:this.actions.scrollTop(),wasScrollToBottom:this.actions.scrolledToBottom(),wasScrollToLoadingThreshold:this.actions.scrolledToLoadingThreshold()},this.scrollSnapshot}componentDidUpdate(){}onScroll(){this.actions.scrolledToLoadingThreshold()&&this.props.onReachingLoadingThreshold&&this.props.onReachingLoadingThreshold()}render(){const{children:a}=this.props;return e.createElement(H,{viewportRef:this.scrollAreaRef,onScrollPositionChange:this.onScroll,scrollbarSize:10,sx:n=>({paddingInline:n.spacing.md})},a)}}function re(t){return{name:(t==null?void 0:t.firstPerson)?t.secondPerson.tName:t.name?t.name:`unknown #${t.id}`,pfp:(t==null?void 0:t.firstPerson)&&t.secondPerson.tPfp||null}}const Re=e.forwardRef((t,a)=>{const{chatData:n,setChatData:i}=L();if(!n)return null;const{name:r,pfp:l}=re(n.activeChat),s=()=>{i(null)};return e.createElement(y,{component:"header",sx:u=>({borderBottom:`1px solid ${u.colors.gray[3]}`,paddingInline:u.spacing.xs,display:"flex",justifyContent:"space-between",height:"4rem"}),ref:a},e.createElement(x,null,e.createElement(Ye,{largerThan:"md",styles:{display:"none"}},e.createElement(ve,{onClick:s},e.createElement(Xe,null))),e.createElement(G,{radius:"xl",color:"blue",src:l}),e.createElement(h,null,r)))});Re.displayName="ChatMainHeader";const De=a=>{var t=M(a,[]);const n=N.exports.useRef(),i=N.exports.useRef(),{chatData:r,setChatData:l}=L(),{activeChat:s,activeChatIndex:u,type:g}=r||{},[p,k]=N.exports.useState([]),C=(s==null?void 0:s.firstPerson)?j.FirstPerson:j.SecondPerson,{data:c,isLoading:o,fetchPreviousPage:m,isFetchingPreviousPage:v,hasPreviousPage:b}=Wt((s==null?void 0:s.id)||null),{removeChat:S}=R();N.exports.useEffect(()=>{const d=r;return()=>{d&&d.type==="new"&&S(d.activeChat.id)}},[r]),N.exports.useEffect(()=>{var d;o||(d=n.current)==null||d.scrollToBottom()},[s,o]);const A=zt((s==null?void 0:s.id)||1),We=Ot(),_e=async d=>{var f;if(!!s){if((f=n.current)==null||f.scrollToBottom(),k([...p,d]),g==="new"){await We.mutateAsync({name:s.name,secondPersonTId:s.secondPerson.tId,revealGender:s.revealGender},{onSuccess:w=>{l({type:"reg",activeChatIndex:0,activeChat:w}),A.mutate({body:d,chatId:w.id},{onSuccess:()=>{k(p.filter(B=>d!==B))}})}});return}A.mutate({body:d,chatId:s.id},{onSuccess:()=>{k(p.filter(w=>d!==w))}})}};return N.exports.useEffect(()=>{var w,B;const d=i.current,f=n.current;d&&f&&p.length!==d.loadingMsgsLength&&f.snapshot().wasScrollToBottom?f.scrollToBottom("smooth"):d&&f&&(f==null?void 0:f.snapshot().wasScrollToBottom)&&d.lastPageLength!==((w=c==null?void 0:c.pages[(c==null?void 0:c.pages.length)-1])==null?void 0:w.length)||((B=c==null?void 0:c.pages[(c==null?void 0:c.pages.length)-1])==null?void 0:B.length)===1?f==null||f.scrollToBottom("smooth"):d&&f&&d.isFetchingPreviousPage&&b&&f.scrollToMatch()},[c,b,p,i,n]),N.exports.useEffect(()=>{var d,f;i.current={isLoading:o,isFetchingPreviousPage:v,pagesLength:(c==null?void 0:c.pages.length)||0,firstPageLength:((d=c==null?void 0:c.pages[0])==null?void 0:d.length)||0,lastPageLength:((f=c==null?void 0:c.pages[(c==null?void 0:c.pages.length)-1])==null?void 0:f.length)||0,loadingMsgsLength:p.length||0}},[c,o,v,p]),e.createElement(y,E({component:"main",sx:d=>({gridTemplateColumns:"1fr",height:"100%",display:"grid",gridTemplateRows:"max-content 1fr max-content",flexBasis:"100%",borderLeft:`1px solid ${d.colors.gray[4]}`,[`@media (max-width: ${d.breakpoints.md}px)`]:s?{borderLeft:"none"}:{display:"none"}})},t),e.createElement(Re,null),e.createElement(Ht,{getChatScrollApi:d=>{n.current=d},onReachingLoadingThreshold:()=>{b&&m()}},e.createElement(y,{sx:d=>({display:"flex",justifyContent:"center",paddingBlock:d.spacing.lg})},v&&e.createElement(he,{size:"sm"})),s&&(c==null?void 0:c.pages.map((d,f)=>e.createElement(e.Fragment,{key:"msgBody-"+f},d==null?void 0:d.map((w,B)=>e.createElement(Ae,{chatId:s.id,chatIndex:u!=null?u:-1,key:w.id,sender:C,indices:[f,B],message:w}))))),p.map(d=>e.createElement(Te,{key:d,text:d}))),r&&e.createElement(Me,{onSubmit:_e}))};De.displayName="ChatFeed";const Be=e.forwardRef((l,r)=>{var s=l,{chat:t,data:a,isActive:n}=s,i=M(s,["chat","data","isActive"]);var u;return e.createElement(x,z(E({className:"chat-item",position:"apart",sx:g=>({paddingInline:g.spacing.sm,paddingBlock:g.spacing.xs,backgroundColor:n?g.colors.gray[1]:"white",":hover":{backgroundColor:n?g.colors.gray[1]:g.colors.gray[0]}})},i),{ref:r}),e.createElement(x,null,e.createElement(G,{radius:"xl",color:"cyan",src:a.pfp}),e.createElement(h,null,a.name)),(t==null?void 0:t.messages)&&!n&&t.messages.length>0&&e.createElement(Ze,{radius:"md"},(u=t.messages)==null?void 0:u.length))});Be.displayName="AsideItem";const Pe=e.forwardRef((n,a)=>{var t=M(n,[]);const{data:i,isLoading:r,isError:l}=Ce(),{chatData:s,setChatData:u}=L();return r?e.createElement(H,E({},le(t)),"loading"):l?e.createElement(H,E({},le(t)),"error"):e.createElement(H,E({className:"chat-items",viewportRef:a},le(t)),i==null?void 0:i.map((g,p)=>e.createElement(Be,{chat:g,data:re(g),isActive:g.id===(s==null?void 0:s.activeChat.id),key:g.id,onClick:()=>{u({type:"reg",activeChat:g,activeChatIndex:p})}})))}),le=(t={})=>E({scrollbarSize:4,scrollHideDelay:500,offsetScrollbars:!0,type:"hover"},t);Pe.displayName="ChatAside";const oe=i=>{var r=i,{size:t,sx:a}=r,n=M(r,["size","sx"]);const l=N.exports.useMemo(()=>({sm:"28px",md:"44px",lg:"64px"}),[]);return e.createElement(h,z(E({component:et,sx:[()=>({fontSize:l[t||"md"],lineHeight:"1em"}),...Fe(a)],m:"0"},n),{to:"/"}),"\u{1F54A}")},ce=W()?"http://localhost:3000":"http://blindbird.online",Gt="/",J="/t",de="/chat-place",U=e.forwardRef((t,a)=>{const n=ye(),{user:i}=D();if(i)return null;const r=()=>{window.open(Mt+`?continueUrl=${ce}${n.pathname}${n.search}`,"_self")},u=t,{onClick:l}=u,s=M(u,["onClick"]);return e.createElement(F,z(E({onClick:g=>{r(),l&&l(g)}},s),{ref:a}))});U.displayName="RegisterButon";const me=e.forwardRef((t,a)=>{const{user:n}=D();if(!n)return null;const i=()=>{fetch(Bt,{method:"POST",credentials:"include"}).finally(()=>{window.open("/","_self")})};return e.createElement(V,{width:160},e.createElement(V.Target,null,e.createElement(G,E({ref:a,src:n==null?void 0:n.tPfp,radius:"xl"},t),n==null?void 0:n.tName)),e.createElement(V.Dropdown,null,e.createElement(V.Label,null,"@",n.tUsername),e.createElement(V.Item,{onClick:i,icon:e.createElement(tt,{size:12})},"Logout")))});me.displayName="UserAvatar";const Le=e.forwardRef((t,a)=>e.createElement(y,E({component:"header",sx:n=>({border:`1px solid ${n.colors.gray[3]}`,backgroundColor:n.colors.gray[2],paddingBlock:"0.7rem",marginBlock:"0.8rem"}),ref:a},t),e.createElement(ee,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement(oe,{size:"sm"}),e.createElement(U,{size:"sm"},"Register"),e.createElement(me,{size:"sm"}))));Le.displayName="PrimaryHeader";const Ue=e.forwardRef((t,a)=>e.createElement(y,E({component:"header",sx:n=>({paddingInline:n.spacing.sm,borderBottom:`1px solid ${n.colors.gray[2]}`,height:"4rem",display:"grid",alignContent:"center"}),ref:a},t),e.createElement(nt,{radius:"xs",size:"sm",placeholder:"Search"})));Ue.displayName="SidebarHeader";function Qt(){const{chatData:t,setChatData:a}=L();return N.exports.useEffect(()=>()=>{a(null)},[]),e.createElement(y,null,e.createElement(ee,null,e.createElement(Le,null),e.createElement(y,{sx:n=>({display:"flex",border:`1px solid ${n.colors.gray[3]}`,minHeight:"35rem",height:"calc(100vh - 6.2rem)"})},e.createElement(y,{component:"aside",sx:n=>({flexBasis:"26rem",display:"grid",gridTemplateRows:"max-content 1fr",gridTemplateColumns:"1fr",[`@media (max-width: ${n.breakpoints.md}px)`]:t?{display:"none"}:{flexBasis:"100%"}})},e.createElement(Ue,null),e.createElement(Pe,null)),e.createElement(De,null))))}const jt=()=>{const[t,a]=N.exports.useState(null),{chatData:n}=L(),{getChatWithIndex:i}=R();return N.exports.useEffect(()=>{if(t&&t.chatId){if((n==null?void 0:n.activeChat.id)===t.chatId)return;const{chat:r}=i(t.chatId);if(!r)return;const{name:l}=re(r);at({title:`New message from ${l}`,className:"new-msg-notification",message:t.body}),a(null)}},[t]),{newMsg:r=>{a(r)}}},Kt="https://twitter.com/DhrjArun",Jt="https://github.com/DhrjArun",Yt="https://github.com/DhrjArun/BlindBird",ze="https://twitter.com/intent/tweet?text=Hey%2C%20I%20have%20found%20a%20cool%20website%20%40blindbird_on%2C%20where%20you%20can%20have%20a%20chat%20with%20someone%20anonymously.%0A%0ACheck%20it%20out%3A%20https%3A%2F%2Fblindbird.online%0A",Xt="https://twitter.com/intent/tweet?text=Hey%2C%20You%20can%20chat%20with%20me%20anonymously%20using%20%40blindbird_on.%0A%0ACheck%20it%20out%3A%20";function Zt(){const{user:t}=D(),a=te(),[n,i]=N.exports.useState(!1);return e.createElement(ee,{sx:()=>({display:"grid",minHeight:"500px",height:"100vh",gridTemplateRows:"max-content minmax(300px, 1fr) max-content"})},e.createElement(y,{component:"header",sx:{display:"flex",alignItems:"center",justifyContent:"space-between"}},e.createElement(oe,{size:"lg",m:"md"}),e.createElement(x,null,e.createElement(it,{label:"Github Repo"},e.createElement(ve,{component:"a",href:Yt,target:"_blank",radius:"xl",size:"lg",variant:"filled"},e.createElement(st,{size:"16"}))),e.createElement(U,{size:"sm",radius:"xs"},"Register"),e.createElement(me,null))),e.createElement(y,{component:"main",sx:{alignSelf:"center",paddingBottom:"4rem"}},e.createElement(Ne,{align:"center",order:1,sx:()=>({fontSize:"1.5rem",marginBottom:"3rem",letterSpacing:"1px"})},"Send Someone a Secret ",e.createElement("br",null)," Message"),e.createElement(pe,{initialValues:{username:""},validate:r=>{const l={};return r.username||(l.username="Required"),l},onSubmit:(r,{setSubmitting:l})=>{a(`${J}/${r.username}`),l(!1)}},({isSubmitting:r})=>e.createElement(ke,null,e.createElement(fe,{as:rt,sx:l=>({maxWidth:600,margin:"auto",marginBottom:l.spacing.sm}),name:"username",icon:e.createElement(lt,null),size:"lg",placeholder:"Enter the twitter username",rightSectionWidth:100,rightSection:e.createElement(F,{disabled:r,size:"xs",type:"submit",variant:"filled",color:"gray"},"Submit")}))),e.createElement(x,{position:"center",spacing:"xs"},e.createElement(F,{onClick:()=>{a(de)},compact:!0,size:"sm",variant:"subtle"},"Go to Chat"),t&&e.createElement(ot,{timeout:2e4,value:`${ce}${J}/${t==null?void 0:t.tUsername}`},({copied:r,copy:l})=>e.createElement(F,{compact:!0,size:"sm",onClick:l,color:r?"green":"",variant:r?"light":"subtle"},"Copy Blind Link")),e.createElement(F,{component:"a",href:t?Xt+`${ce}${J}/${t==null?void 0:t.tUsername}`:ze,target:"_blank",compact:!0,size:"sm",variant:"subtle"},"Tweet"),e.createElement(Ee,{centered:!0,opened:n,onClose:()=>i(!1),title:"Quick Start Guide"},e.createElement(h,{size:"sm",weight:"bold"},"What is BlindBird? \u{1F54A}"),e.createElement(h,{color:"gray",size:"sm",mb:"md"},"BlindBird is a Anonymous chatting App. In simple words, here you can chat with a person without revealing your identity."),e.createElement(h,{size:"sm",weight:"bold"},"How to Start? \u{1F3AC}"),e.createElement(h,{color:"gray",size:"sm",mb:"md"},"For that you need to register using twitter. You will get your BlindLink after that."),e.createElement(h,{size:"sm",weight:"bold"},"What is Blind Link? \u{1F517}"),e.createElement(h,{color:"gray",size:"sm",mb:"md"},"Blind Link is the URL, by which you can message a person or someone can message you."),e.createElement(h,{size:"sm",weight:"bold"},"Do I store your email? \u{1F4EB}"),e.createElement(h,{color:"gray",size:"sm",mb:"md"},"Nope.")),e.createElement(F,{onClick:()=>{i(!0)},compact:!0,size:"sm",variant:"subtle"},"Quick-Start Guide"),!t&&e.createElement(U,{compact:!0,size:"sm",variant:"subtle"},"Let's go"))),e.createElement(y,{component:"footer",sx:{alignSelf:"flex-end",padding:"2rem"}},e.createElement(h,{align:"center"},"Made with \u2764\uFE0F by Dhiraj"),e.createElement(h,{align:"center"},e.createElement(be,{href:Kt,target:"_blank"},"Twitter"," "),"\xB7",e.createElement(be,{href:Jt,target:"_blank"}," ","Github"))))}const Ve=({children:t})=>{const{user:a}=D(),n=ye(),i=te();return a?e.createElement(e.Fragment,null,t):e.createElement(e.Fragment,null,e.createElement(Ee,{centered:!0,withCloseButton:!1,closeOnClickOutside:!1,onClose:()=>{},opened:!a,size:"sm",sx:{textAlign:"center"}},e.createElement(h,{sx:{fontSize:"38px"}},"\u{1F512}"),e.createElement(h,{size:"md",mb:"sm",underline:!0},"Protected Route"),e.createElement(h,{color:"gray",mb:"lg"},`'${n.pathname}'`," is a Protected Route,",e.createElement("br",null)," you need to register to access it"),e.createElement(x,{position:"center"},e.createElement(F,{size:"xs",compact:!0,color:"gray",onClick:()=>{i(-1)}},"Go Back"),e.createElement(U,{compact:!0,size:"xs"},"Register"))))};Ve.displayName="ProtectedRoute";function en(){var C,c;const{user:t}=D(),{username:a}=ct(),{setChatData:n}=L(),{getChatWithIndex:i}=R(),r=te(),l=async()=>{const{user:o}=await I.request(wt,{tUsername:a});return o},{data:s,isLoading:u,isError:g}=X(["user",a],l,{}),{addNewChat:p}=R(),k=async()=>{if(s){const o=await Pt(null,s.tId);if(o){const{chat:m,chatIndex:v}=i(o.id);n({type:"reg",activeChat:m,activeChatIndex:v})}else{const m={name:"",revealGender:!1,id:-1,firstPerson:t,secondPerson:s,createAt:Date.now().toString()};p(m),n({type:"new",activeChat:m,activeChatIndex:0})}r(de)}};return g?e.createElement(y,{sx:o=>({backgroundColor:o.colors.gray[2],minHeight:"400px",height:"100vh",display:"flex",padding:o.spacing.md})},e.createElement(y,{sx:()=>({display:"grid",justifyItems:"center",backgroundColor:"white",minWidth:"350px",width:"max-content",margin:"auto",paddingBlock:"6.5rem",paddingInline:"2rem"})},e.createElement(h,null,"No Such user ",e.createElement("br",null)," registered"))):e.createElement(y,{sx:o=>({backgroundColor:o.colors.gray[2],minHeight:"700px",height:"100vh",display:"flex",padding:o.spacing.md})},e.createElement(oe,{sx:{position:"fixed",top:"20px",left:"20px"}}),u?e.createElement(y,{sx:()=>({display:"grid",justifyItems:"center",backgroundColor:"white",width:"max-content",margin:"auto",paddingBlock:"6.5rem",paddingInline:"2rem"})},e.createElement(P,{circle:!0,sx:o=>({marginBottom:o.spacing.lg}),height:50}),e.createElement(P,{sx:o=>({width:"7rem",marginBottom:o.spacing.xs}),height:10}),e.createElement(x,{sx:o=>({color:o.colors.gray[6],marginBottom:o.spacing.md})},e.createElement(P,{sx:{width:"7rem"},height:10}),e.createElement(P,{sx:{width:"7rem"},height:10})),e.createElement(x,{sx:o=>({marginTop:o.spacing.md})},e.createElement(P,{width:120,height:40}),e.createElement(P,{width:120,height:40}))):e.createElement(y,{sx:()=>({display:"grid",justifyItems:"center",backgroundColor:"white",width:"max-content",margin:"auto","@media (min-width: 400px)":{minWidth:"300px"},paddingBlock:"4rem",paddingInline:"2rem"})},e.createElement(G,{radius:"xl",src:s==null?void 0:s.tPfp,sx:o=>({marginBottom:o.spacing.lg}),size:"lg"},s==null?void 0:s.tName),e.createElement(Ne,{order:1,sx:o=>({fontSize:o.fontSizes.md,marginBottom:o.spacing.xs})},`@${a}`),e.createElement(x,{sx:o=>({color:o.colors.gray[6],marginBottom:o.spacing.md})},e.createElement(h,null,`${(C=s==null?void 0:s.publicMetrics)==null?void 0:C.followingCount} Following`),e.createElement(h,null,`${(c=s==null?void 0:s.publicMetrics)==null?void 0:c.followersCount} Followers`)),e.createElement(x,{sx:o=>({marginTop:o.spacing.md})},e.createElement(U,null,"Register"),t&&!(s==null?void 0:s.isRegistered)&&e.createElement(F,{component:"a",target:"_blank",href:ze+"%0A%0A@"+(s==null?void 0:s.tUsername)},"Tweet"),e.createElement(F,{disabled:!t||t.tUsername.toLowerCase()===(a==null?void 0:a.toLowerCase())||!(s==null?void 0:s.isRegistered),onClick:k},"Chat")),!t&&e.createElement(x,{mt:"lg",spacing:"xs",sx:o=>({color:o.colors.red})},e.createElement(Se,{size:14}),e.createElement(h,{size:"sm"},"Need to register")),t&&!(s==null?void 0:s.isRegistered)&&e.createElement(x,{mt:"lg",spacing:"xs",sx:o=>({color:o.colors.red})},e.createElement(Se,{size:14}),e.createElement(h,{size:"sm"},`${s==null?void 0:s.tUsername} is not registered`))))}function tn(){Ce();const{newMsg:t}=jt();qt({onNext:i=>{var r;((r=i.data)==null?void 0:r.newMessage)&&t(i.data.newMessage)}});const{isLoading:n}=D();return e.createElement(dt,null,n?e.createElement(e.Fragment,null):e.createElement(y,{className:"App"},e.createElement(mt,null,e.createElement(Q,{path:Gt,element:e.createElement(Zt,null)}),e.createElement(Q,{path:de,element:e.createElement(Ve,null,e.createElement(Qt,null))}),e.createElement(Q,null,e.createElement(Q,{path:`${J}/:username`,element:e.createElement(en,null)})))))}const nn=new ut({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnReconnect:!1,staleTime:1/0}}});gt.render(e.createElement(e.StrictMode,null,e.createElement(ht,{client:nn},e.createElement(_t,null,e.createElement(vt,null,e.createElement(pt,{position:"top-right"},e.createElement(tn,null)),e.createElement(kt,null))))),document.getElementById("root"));
