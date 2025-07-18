function togglePassword() {
  const input = document.getElementById("password");
  const eye = document.querySelector(".Eye");
  const eyeSlash = document.querySelector(".Eye-slash");
  if (input.type === "password") {
    input.type = "text";
    eye.style.display = "none";
    eyeSlash.style.display = "block";
  } else {
    input.type = "password";
    eye.style.display = "block";
    eyeSlash.style.display = "none";
  }
}
