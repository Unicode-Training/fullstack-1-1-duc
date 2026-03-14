import { memo } from "react";
const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
function Content() {
  console.log(`Content re-render`);
  return (
    <div>
      <h2>{fibonacci(40)}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quidem
        accusamus dignissimos, et repudiandae iusto eius nemo reprehenderit
        praesentium, aut cupiditate dolore dolores ratione laudantium, error
        voluptatem! Architecto, dolore.
      </p>
    </div>
  );
}

export default memo(Content);

//React: HOC (Higher Order Component)
