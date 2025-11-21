//1. Lắng nghe submit
//2. Chặn hành động mặc định
//3. Lấy giá từng input --> Gán vào biến
//4. log

const form = document.querySelector("form");

const handleForm = () => {
  const usernameEl = form.querySelector(".username");
  const emailEl = form.querySelector(".email");
  const passwordEl = form.querySelector(".password");
  const confirmPasswordEl = form.querySelector(".confirmPassword");
  const username = usernameEl.value;
  const email = emailEl.value;
  const password = passwordEl.value;
  const confirmPassword = confirmPasswordEl.value;
  const errors = {};
  if (!username) {
    errors.username = "Username bắt buộc phải nhập";
  }
  if (!email) {
    errors.email = "Email bắt buộc phải nhập";
  }
  if (!password) {
    errors.password = "Password bắt buộc phải nhập";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Confirm Password bắt buộc phải nhập";
  }
  setError(errors);
};

const setError = (errors) => {
  // console.log(errors);

  //Ý tưởng
  // - Lấy object chứa tất cả lỗi của từng field (errors)
  // - Duyệt qua tất cả span chứa lỗi
  const errorList = document.querySelectorAll(`[class^="error-"]`);
  errorList.forEach((errorEl) => {
    //Reset
    errorEl.innerText = "";
    const errorName = errorEl.classList[0].replace("error-", "");
    const fieldEl = document.querySelector(`.${errorName}`);
    const iconError = document.querySelector(`.icon-${errorName}-error`);
    const iconSuccess = document.querySelector(`.icon-${errorName}-success`);

    fieldEl.classList.remove("border-error");
    iconError.classList.add("hidden");
    iconSuccess.classList.remove("hidden");

    if (errors[errorName]) {
      errorEl.innerText = errors[errorName];
      fieldEl.classList.add("border-error");
      iconError.classList.remove("hidden");
      iconSuccess.classList.add("hidden");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleForm();
});

form.addEventListener("input", handleForm);
