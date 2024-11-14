const parent=document.getElementById("root")
const ele=React.createElement("h1",{},"This is new heading")
const ele1=React.createElement("h2",{},"shopping Cart")
const root=ReactDOM.createRoot(parent);
const it1=React.createElement("li",{},"item-1")
const it2=React.createElement("li",{},"item-2")
const list=React.createElement("ul",{},it1,it2)
//root.render(ele)
root.render([ele,ele1,list])