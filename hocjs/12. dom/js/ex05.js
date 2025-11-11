//1. Lắng nghe submit
//2. Chặn hành động mặc định
//3. Lấy giá từng input --> Gán vào biến
//4. log

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameEl = form.querySelector(".username");
  const emailEl = form.querySelector(".email");
  const passwordEl = form.querySelector(".password");
  const confirmPasswordEl = form.querySelector(".confirm-password");
  const username = usernameEl.value;
  const email = emailEl.value;
  const password = passwordEl.value;
  const confirmPassword = confirmPasswordEl.value;
  console.log(username, email, password, confirmPassword);
});
