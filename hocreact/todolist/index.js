const root = document.querySelector("#root");

const container = ReactDOM.createRoot(root);

const TodoList = () => {
  const [value, setValue] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  const [indexEdit, setIndexEdit] = React.useState([]);
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setMsg("Nhập tên công việc");
      return;
    }
    setTodoList([...todoList, { title: value, completed: false }]);
    setValue("");
    setMsg("");
  };
  const handleRemove = (index) => {
    setTodoList(todoList.filter((todo, i) => i !== index));
  };
  const showFormEdit = (index) => {
    if (!indexEdit.find((value) => index === value)) {
      setIndexEdit([...indexEdit, index]);
    }
  };
  const handleChangeEditValue = (e, index) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (index === i) {
          return {
            ...todo,
            title: e.target.value,
          };
        }
        return {
          ...todo,
        };
      }),
    );
  };
  const handleUpdate = (index) => {
    setIndexEdit(indexEdit.filter((value) => index !== value));
  };
  const handleCompleted = (index) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (index === i) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return {
          ...todo,
        };
      }),
    );
  };
  return (
    <div className="bg-[#1a1a40] text-white p-[2rem] mt-[5rem] rounded-[5px]">
      <h1 className="text-[1.75rem] mb-[0.5rem]">Get Things Done !</h1>
      <form className="w-full mb-[2rem]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What is the task today?"
          className="py-[0.5rem] px-[1rem] w-[300px] outline-none border border-[#8758ff]"
          onChange={handleChangeValue}
          value={value}
        />
        <button className="bg-[#8758ff] text-white p-[.55rem]">Add Task</button>
        {msg && <span className="block text-red-600">{msg}</span>}
      </form>

      {todoList.map((todo, index) => (
        <div className="relative" key={index}>
          <div className="flex justify-between items-center rounded-[5px] py-[.75rem] px-[1rem] mb-[1rem] bg-[#8758ff] cursor-pointer">
            <p
              className={todo.completed ? "completed" : ""}
              onClick={() => handleCompleted(index)}
            >
              {todo.title}
            </p>
            <div className="flex gap-2">
              <i
                className="fa-solid fa-pen-to-square cursor-pointer"
                onClick={() => showFormEdit(index)}
              ></i>
              <i
                className="fa-solid fa-trash cursor-pointer"
                onClick={() => handleRemove(index)}
              ></i>
            </div>
          </div>
          {indexEdit.includes(index) && (
            <form
              className="w-full absolute inset-0"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(index);
              }}
            >
              <input
                type="text"
                placeholder="What is the task today?"
                className="py-[.7rem] px-[1rem] w-[300px] outline-none border border-[#8758ff] bg-[#1a1a40]"
                value={todoList[index].title}
                onChange={(e) => handleChangeEditValue(e, index)}
              />
              <button className="bg-[#8758ff] text-white p-[.55rem]">
                Add Task
              </button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
};

const jsx = (
  <>
    <TodoList />
  </>
);

container.render(jsx);
