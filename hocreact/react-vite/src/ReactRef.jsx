import { useState, useRef, useEffect } from "react";
import Input from "./components/Input";

export default function ReactRef() {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);
  const inputRef = useRef();
  const handleIncrement = () => {
    setCount(count + 1);
    myRef.current++;
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <Input ref={inputRef} />
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
//Ref: Tham chiếu
// - là Object {current: gia-tri}
// - Tác dụng:
// + Giữ giá trị sau mỗi lần re-render
// + Tham chiếu tới element trả về DOM

// - Đặc điểm
// + Thay đổi trực tiếp
// + Không kích hoạt re-render
