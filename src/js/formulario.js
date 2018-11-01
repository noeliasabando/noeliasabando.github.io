function contactame() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let text = document.getElementById("text").value;
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("text").value = "";
  const data = {
    email: email,
    name: name,
    text: text,
  }
  fetch("https://us-central1-portafolio-e4f20.cloudfunctions.net/sendContactMail", {
    method: "POST",
    body: JSON.stringify(data),
  })
}


