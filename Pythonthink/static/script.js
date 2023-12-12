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
const lightLink = document.getElementById("theme-css");
const darkLink = document.getElementById("darktheme-css");
var isButton1Enabled = true;

toggleButton.addEventListener("click", () => {
    if (isButton1Enabled) {
        lightLink.disabled = true;
        darkLink.disabled = false;
    } else {
        lightLink.disabled = false;
        darkLink.disabled = true;
    }
    isButton1Enabled = !isButton1Enabled;
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