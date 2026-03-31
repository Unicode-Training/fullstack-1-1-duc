import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "../libs/axios";
const createPost = async (newPost) => {
  const response = await instance.post(`https://dummyjson.com/posts/add`, {
    ...newPost,
    userId: 5,
  });
  return response.data;
};
export default function PostAdd() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: () => {
      alert("Thêm không thành công");
    },
  });
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Body</label>
        <textarea
          name="body"
          placeholder="Body..."
          onChange={handleChange}
        ></textarea>
      </div>
      <button>Save</button>
    </form>
  );
}
