function myFunction() {
  var element = document.body;
  element.classList.toggle("flag-mode");

  if (document.getElementById("flag").src == "danish.svg") {
    document.getElementById("flag").src = "danish.svg";
  } else {
    document.getElementById("flag").src = "usa.svg";

    document.getElementById("flag").src = "usa.svg";
  }
}
