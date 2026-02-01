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

// const Message = () => {
//   const [message, setMessage] = React.useState("Hello Message");
//   const [value, setValue] = React.useState("");
//   const handleClick = () => {
//     //event handler
//     setMessage(`Đức`);
//   };
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <h3>{message}</h3>
//       <input placeholder="Nhập gì đó..." onChange={handleChange} />
//       <button onClick={handleClick}>Change Message</button>
//       <p>Value: {value}</p>
//     </div>
//   );
// };

const TodoList = () => {
  const [todoList, setTodoList] = React.useState([
    "Item 1",
    "Item 2",
    "Item 3",
  ]);
  const [value, setValue] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setMsg("Vui lòng nhập");
    } else {
      setTodoList([...todoList, value]);
      setMsg("");
      setValue("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleRemove = (index) => {
    /*
    [
      "Item 1",
      "Item 2",  --> index = 1
      "Item 3",
    ]

    setTodoList([
      "Item 1",
      "Item 3",
  ])    
    */

    // const newArr = todoList.filter((todo, i) => i !== index);
    const newArr = [...todoList];
    newArr.splice(index, 1);
    setTodoList(newArr);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemove(index)}>&times;</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên công việc..."
          onChange={handleChange}
          value={value}
        />
        <button>Thêm</button>
      </form>
      {msg && <span style={{ color: "red" }}>{msg}</span>}
    </div>
  );
};

const Items = () => {
  const [items, setItems] = React.useState([
    {
      title: "Item 1",
      detail: "Content 1",
    },
    {
      title: "Item 2",
      detail: "Content 2",
    },
    {
      title: "Item 3",
      detail: "Content 3",
    },
    {
      title: "Item 4",
      detail: "Content 4",
    },
  ]);
  const [currentIndex, setCurrentIndex] = React.useState();
  const handleShow = (index) => {
    if (currentIndex === index) {
      setCurrentIndex(currentIndex === undefined ? index : undefined);
      //Logic toggle
      console.log("Đây là logic toggle vì cùng bấm vào 1 nút");
    } else {
      setCurrentIndex(index);
    }
  };
  console.log(currentIndex);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.title}{" "}
          <button onClick={() => handleShow(index)}>
            {currentIndex === index ? "Hide" : "Show"}
          </button>
          {index === currentIndex && <div>{item.detail}</div>}
        </li>
      ))}
    </ul>
  );
};

const jsx = (
  <div>
    <Items />
  </div>
);

//JSX --> Compiler (Babel) -> React Element --> ReactDOM --> HTML

//Container
const container = ReactDOM.createRoot(root);

container.render(jsx);
