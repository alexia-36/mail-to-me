const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_mied9ei", "template_2shsjvi", params)
    .then(function (response) {
      alert("Succes!" + response.status);
    });
});
