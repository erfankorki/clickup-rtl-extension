function makeTextRTL() {
  for (item of document.getElementsByTagName("span")) {
    item.setAttribute("dir", "rtl");
  }
  for (item of document.getElementsByTagName("input")) {
    item.setAttribute("dir", "rtl");
  }
}

const button = document.createElement("button");
button.innerHTML = "MAKE RTL";
button.addEventListener("click", makeTextRTL);

document.body.appendChild(button);
