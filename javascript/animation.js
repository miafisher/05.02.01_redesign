function myFunction() {
  var element = document.body;
  element.classList.toggle("flag-mode");

  if (document.getElementById("flag").src == "english.svg") {
    document.getElementById("flag").src = "danish.svg";
  } else {
    document.getElementById("flag").src = "english.svg";
  }
}
