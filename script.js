const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;
const form = document.querySelector('.my-form');
const loginInput = form.querySelector('.username');
const passwordInput = form.querySelector('.password');
const confirmPasswordInput = form.querySelector('.confirm-password');
const themeButton = document.getElementById('themeButton');
const toggleButton = document.getElementById("theme-toggle-button");
const themeLink = document.getElementById("theme-css");

toggleButton.addEventListener("click", () => {
    if (themeLink.getAttribute("href").includes("css/style.css")) {
        themeLink.setAttribute("href", "css/darkstyle.css");
    } else {
        themeLink.setAttribute("href", "css/style.css");
    }
});
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const login = loginInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!login || !password || !confirmPassword) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  if (!isValidLogin(login)) {
    alert('Логин может содержать только буквы на латинице и цифры');
    return;
  }

  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
    return;
  }

  if (password !== confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }

  form.submit();
});

function isValidLogin(login) {
  const pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(login);
}

function isValidPassword(password) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
  return pattern.test(password);
}
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}


const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}