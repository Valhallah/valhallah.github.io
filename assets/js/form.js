var formEmail = document.getElementById("formEmail"),
    textArea = document.getElementById("formText"),
    submitBtn = document.getElementById("submitBtn");

textArea.addEventListener("focus", function(e) {
  var targetValue = e.target.value;
  if (targetValue === "What would you like to say?") {
    e.target.value = "";
  }
  return;
});

textArea.addEventListener("blur", function(e) {
  console.log(e)
  var targetValue = e.target.value;
  if (targetValue === "") {
    e.target.value = "What would you like to say?";
  }
  return;
});

function emailConfirm() {
  document.getElementById('goodEmail').style.display = 'block';
  document.getElementById('badEmail').style.display = 'none';
}

function emailReject() {
  document.getElementById('badEmail').style.display = 'block';
  document.getElementById('goodEmail').style.display = 'none';
}
submitBtn.addEventListener("click", function(e) {
  var isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // e.preventDefault();

  if (!isEmail.test(formEmail.value)) {
      emailReject();
  } else {
    // $.ajax({
    //     url: "https://formspree.io/Valynhall@gmail.com",
    //     method: "POST",
    //     data: $(this).serialize(),
    //     dataType: "json"
    // });
    // e.preventDefault();
    emailConfirm();
  }
});
