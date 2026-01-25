const root = document.querySelector("#root"); //DOM

//React Element --> ReactDOM -> HTML (Browser)
// const a = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//   },
//   "Unicode",
// );
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "duc-ok",
//     style: {
//       color: "red",
//       backgroundColor: "yellow",
//     },
//     onClick: (e) => {
//       console.log("ahihi", e.target.innerText);
//     },
//   },
//   a,
// );

// const h2 = React.createElement("h2", null, "Học JavaScript");
// const div = React.createElement(React.Fragment, null, h1, h2);
//Fragment --> element (Không tạo node)

//JSX
const title = "Học React không khó";
const text = <p>Hello anh em</p>;
const isLogin = false;
//conditional rendering
const jsx = (
  <div>
    <h2>Hello</h2>
    <h3>{title}</h3>
    {text}
    {isLogin && <h3>Chào bạn 1</h3>}
    {/* {isLogin ? <h3>Chào bạn</h3> : <h4>Mày không có quyền</h4>} */}
    {isLogin || <h3>Chào bạn 2</h3>}
    <button>Click me</button>
  </div>
);

//JSX --> Compiler (Babel) -> React Element --> ReactDOM --> HTML

//Container
const container = ReactDOM.createRoot(root);

container.render(jsx);
