const headd = React.createElement("h1", {
    style: {
        color: "#9966cc"
    },
    marginTop: "236pkpx",
    marginBottom: "300px",
    backgroundColor: "yellow",
    width: "400px",
    height: "400px",
    onMouseEnter: ()=>console.log("hovered")
}, "avva");
const over = React.createElement("button", {
    style: {
        color: "red"
    }
}, "thahthaa");
const input = React.createElement("input", {
    type: "text",
    onChange: (event)=>console.log(event.target.value)
});
const saketh = React.createElement("div", null, headd, over, input);
const blood = ReactDOM.createRoot(document.getElementById("saki"));
blood.render(saketh);

//# sourceMappingURL=ndev.6bd02f5a.js.map
