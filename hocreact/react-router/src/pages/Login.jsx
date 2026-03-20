import { useSearchParams, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const continueUrl = searchParams.get("continue") ?? "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    //Giả sử đăng nhập thành công
    localStorage.setItem("isLogin", 1);
    navigate(continueUrl);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" placeholder="Email..." />
        </div>
        <div>
          <input type="password" placeholder="Password..." />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

/*
Product Detail -> Middleware -> Order Detail
-> Redirect login -> login success -> Order Detail
*/
