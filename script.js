var modal = document.getElementById("registerModal");
var emailFrame = document.getElementById("emailFrame");
function openModal(src) {
  emailFrame.src = src;
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
  emailFrame.width = "650";
}
window.onclick = (event) => {
  if (event.target == modal) {
    closeModal();
  }
};

const email1 = document.getElementById("em-1");
const email2 = document.getElementById("em-2");
const email3 = document.getElementById("em-3");
const email4 = document.getElementById("em-4");
const mobiVer = document.getElementById("mobiVer");

email1.addEventListener("click", () => {
  var src = "welcome.html";
  openModal(src);
});
email2.addEventListener("click", () => {
  var src = "orderrefund.html";
  openModal(src);
});
email3.addEventListener("click", () => {
  var src = "productreviewrequest.html";
  openModal(src);
});
email4.addEventListener("click", () => {
  var src = "orderconfirmation.html";
  openModal(src);
});

mobiVer.addEventListener("click", () => {
  toggleMobile();
});
function toggleMobile() {
  if (emailFrame.width === "650") {
    emailFrame.width = "414";
    mobiVer.innerHTML = "Desktop version";
  } else if (emailFrame.width === "300") {
    emailFrame.width = "650";
    mobiVer.innerHTML = "Mobile version";
  }
}
