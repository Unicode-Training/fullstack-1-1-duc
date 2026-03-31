import { useParams } from "react-router-dom";
import { instance } from "../libs/axios";
import { useQuery } from "@tanstack/react-query";
const getPost = async (id) => {
  const response = await instance.get(`https://dummyjson.com/posts/${id}`);
  return response.data;
};
export default function PostDetail() {
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
