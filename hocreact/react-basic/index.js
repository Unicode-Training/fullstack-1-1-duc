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
const isLogin = true;
const users = ["User 1", "User 2", "User 3"];
const todos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
];
/*
<ul>
  <li>Todo 1 <span>Incomplete</span></li>
  <li>Todo 2 <span>Completed</span></li>
  <li>Todo 3 <span>Incomplete</span></li>
</ul>
*/
//conditional rendering
// const handleClick = (e) => {
//   //Tham số mặc định = event object
//   console.log(e);
// };
// const handleRemove = (id) => {
//   console.log(id);
// };
// const doSomething = () => <h3>Hello anh em</h3>;
// const Item = ({ name }) => {
//   return <h3>{name}</h3>;
// };
// const User = () => {
//   //Có các tính năng mà chỉ hoạt động được trong component
//   return (
//     <React.Fragment>
//       <h3>Hello User</h3>
//       <Item name="Đức" />
//       <Item name="An" />
//     </React.Fragment>
//   );
// };
//Functional Component

//State
// - Trạng thái của component
// - Thể hiện dữ liệu cần hiển thị trên JSX
// - Khi state thay đổi --> component sẽ tự động được gọi lại (re-render)
// - Để tạo state trong component, dùng hàm đặc biệt React.useState() (Gọi là Hook)
// - State không được phép thay đổi trực tiếp mà phải thông qua hàm thay đổi của nó

const Message = () => {
  const [message, setMessage] = React.useState("Hello Message");
  const [value, setValue] = React.useState("");
  const handleClick = () => {
    //event handler
    setMessage(`Đức`);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>{message}</h3>
      <input placeholder="Nhập gì đó..." onChange={handleChange} />
      <button onClick={handleClick}>Change Message</button>
      <p>Value: {value}</p>
    </div>
  );
};

const jsx = (
  <div>
    <Message />
    {/* {doSomething()} */}
    {/* <User /> */}
    {/* <h2 className={`title ${isLogin ? "auth" : ""}`}>Hello</h2>
    <h3>{title}</h3>
    {text}
    {isLogin && <h3>Chào bạn 1</h3>} */}
    {/* {isLogin ? <h3>Chào bạn</h3> : <h4>Mày không có quyền</h4>} */}
    {/* {isLogin || <h3>Chào bạn 2</h3>}
    <button onClick={handleClick}>Click me</button>
    {users.map((user, index) => (
      <h3 key={index}>{user}</h3>
    ))}
    <ul>
      {todos.map((value) => (
        <li key={value.id}>
          {value.title}
          <span>{value.completed ? "Completed" : "Incomplete"}</span>
          <button onClick={() => handleRemove(value.id)}>&times;</button>
        </li>
      ))}
    </ul> */}
  </div>
);

//JSX --> Compiler (Babel) -> React Element --> ReactDOM --> HTML

//Container
const container = ReactDOM.createRoot(root);

container.render(jsx);
