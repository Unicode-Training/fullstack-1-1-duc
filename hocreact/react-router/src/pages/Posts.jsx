import { useQuery } from "@tanstack/react-query";
import { instance } from "../libs/axios";
import { Link } from "react-router-dom";
import PostAdd from "../components/PostAdd";
const getPosts = async () => {
  const response = await instance.get(`https://dummyjson.com/posts`);
  return response.data.posts;
};
export default function Posts() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: [],
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
    <div>
      <h1>Posts</h1>
      <PostAdd />
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link to={`/posts/${post.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}
