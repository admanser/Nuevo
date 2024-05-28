// Mostrar u ocultar botón Login
function showLoginButton() {
  var buttonLogin = document.getElementById("login");
  var iconAccount = document.getElementById("icon_account");
  if (buttonLogin.style.display == "none") {
    buttonLogin.style.display = "block";
    iconAccount.style.display = "none";
  } else {
    buttonLogin.style.display = "none";
  }
}

// Mostrar ventana inicio de sesión
function showLogin(event) {
  event.preventDefault();
  var modal = document.getElementById("loginModal");
  if (event.target.closest(".login")) {
    modal.style.display = "block";
  }
}
// Ocultar ventana inicio de sesión
function closeLogin() {
  var modal = document.getElementById("loginModal");
  modal.style.display = "none";
}

// Mostrar u ocultar botón Account
function showIconAccount() {
  var iconAccount = document.getElementById("icon_account");
  if (
    iconAccount.style.display === "none" ||
    iconAccount.style.display === ""
  ) {
    iconAccount.style.display = "block";
  } else {
    iconAccount.style.display = "none";
  }
}

//Dropdown account
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

// Cierra el dropdown si se hace click fuera de él
window.onclick = function (event) {
  if (!event.target.matches(".material-symbols-outlined")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Valida credenciales
function validarCredenciales() {
  var usuario = document.querySelector('input[name="usuario"]').value;
  var contraseña = document.querySelector('input[name="contraseña"]').value;
  if (usuario === "admin" && contraseña === "admin") {
    alert(`Inicio de sesión exitoso 😁`);
    closeLogin();
    showLoginButton();
    showIconAccount();
    return true;
  } else {
    alert(`El usuario y/o contraseña son incorrectos ☹`);
    return false;
  }
}

// Cerrar ventana inicio de sesión
function closeLogin() {
  var modal = document.getElementById("loginModal");
  modal.style.display = "none";
}

// Menu hamburguesa
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.getElementById("menu-icon").addEventListener("click", toggleMenu);
