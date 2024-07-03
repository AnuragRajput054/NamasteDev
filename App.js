const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "chile" },
[    React.createElement("div", { id: "div1" }, " "),
    React.createElement("div", { id: "div2" },"India"),
    React.createElement("div", { id: "div3" }, "")
])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
