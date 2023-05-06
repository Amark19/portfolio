/*! For license information please see main.35f58918.js.LICENSE.txt */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  flex: 1;
  width: 90%;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Ab=e=>{const{floatingCamera:n,scrollElement:r,setFloatingCamera:i}=Fx((e=>e)),a=(0,t.useCallback)((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;null==r||r.scroll({top:t*r.scrollHeight,behavior:"smooth"}),null==e||e.onRequestClose()}),[r,e]);return t.createElement(wb(),Kg({ariaHideApp:!1,closeTimeoutMS:500,style:{overlay:{backgroundColor:"rgba(0,0,0,0.9)",zIndex:1},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderWidth:0,backgroundColor:"rgba(0,0,0,0.0)",height:"80%"}}},e),Sb.map((e=>t.createElement(Mb,{onClick:()=>a(e.position)},e.name))))},{navTitle:Eb}=S_,Cb=Le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  margin-left: 15px;
  height: 50px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,Tb=Le.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  border: 1px none;
  justify-content: center;
  border-right-width: 0px;
  background-color: transparent;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Rb=Le.div`
  color: ${e=>e.theme.colors.primary};
`,Bb=()=>{const[e,n]=(0,t.useState)(!1),{innerWidth:r}=function(){var e=(0,t.useState)((function(){return"undefined"===typeof window?yb:_b()})),n=e[0],r=e[1];function i(){r(_b())}return xb((function(){return"undefined"===typeof window?function(){}:(window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)})}),[]),n}(),[i,a]=(0,t.useState)(r),[o,s]=(0,t.useState)(!0),l=(0,t.useRef)();let u=0;return(0,t.useEffect)((()=>{l.current||(l.current=new Audio("audio/music.mp3"),l.current.loop=!0,document.addEventListener("click",(()=>{u||(u++,l.current.play(),s(!l.current.paused))})))}),[]),(0,t.useEffect)((()=>{a(r)}),[r]),t.createElement(lb.CSSTransitionGroup,{transitionName:"example",transitionAppearTimeout:500,transitionAppear:!0,transitionEnter:!0,transitionLeave:!0},t.createElement(Ab,{isOpen:e,onRequestClose:()=>n(!1)}),t.createElement(Cb,{windowWidth:i},t.createElement(Rb,{onClick:()=>{l.current.paused?l.current.play():l.current.pause(),s(!l.current.paused)}},o?t.createElement(qb,{color:Qy.colors.primary,size:30}):t.createElement(gb,{color:Qy.colors.primary,size:30})),t.createElement("div",null,Eb),t.createElement(Tb,{onClick:()=>n(!0)},t.createElement(vb,{color:Qy.colors.primary,size:30}))))},{relevantStops:Pb}=S_,Lb=Le.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 40px;
  padding: 0px 40px;
  z-index: 19999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 25px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,Ib=Le.button`
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Db=Le.div`
  display: flex;
  justify-content: space-between;
  background-color: ${e=>e.theme.colors.contrast};
  opacity: 0.4;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 50px;
  z-index: 99999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.dark};
  font-size: 29px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};

  &:hover {
    opacity: 1;
  }
`,kb=Le.div`
  position: absolute;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary};
  opacity: 0.2;
  z-index: -1;
  width: ${e=>100*e.progress}%;
`;const zb=function(){const{floatingCamera:e,setFloatingCamera:n,scrollElement:r}=Fx(),[i,a]=(0,t.useState)(0);(0,t.useEffect)((()=>{r&&(r.onscroll=()=>{const{scrollTop:e,scrollHeight:t}=r;a(1.125*e/t)})}),[r]);const o=(0,t.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return null==r?void 0:r.scroll({top:e*r.scrollHeight,behavior:"smooth"})}),[r]);return e?t.createElement(Db,{onClick:()=>n(!1)},t.createElement("div",null),t.createElement("div",null,"Go Back."),t.createElement("div",null)):t.createElement(Lb,null,t.createElement("div",null),t.createElement(Ib,{onClick:()=>{let e=Math.floor(i*Pb.length-.3);i*Pb.length===8&&(e=6),e>=0&&o(Pb[e].position)},className:"controls"},"Prev page"),t.createElement(Ib,{onClick:()=>{let e=Math.ceil(i*Pb.length+.69);e<=Pb.length&&o(Pb[e].position)},className:"controls"},"Next page"),t.createElement("div",null),t.createElement(kb,{progress:i}))};const Ob=function(){return t.createElement(Te,{theme:Qy},t.createElement(Bb,null),t.createElement(zb,null),t.createElement(sb,null))},Fb=e=>{e&&e instanceof Function&&n.e(27).then(n.bind(n,4027)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};r.createRoot(document.getElementById("root")).render(t.createElement(t.StrictMode,null,t.createElement(Ob,null))),Fb()})()})();