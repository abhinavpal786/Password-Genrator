let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let PassBox = document.getElementById("PassBox");
let Uppercase = document.getElementById("Uppercase");
let Lowercase = document.getElementById("Lowercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let copyIcon = document.getElementById("copyIcon");

// showing input slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
  slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener("click", () => {
  PassBox.value = genratePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbol = "`!@#$%^&*";
// Function to genrate Password
function genratePassword() {
  let genPassword = "  "; // To store a password
  let allChars = " ";

  allChars += Lowercase.checked ? lowerChars : "";
  allChars += Uppercase.checked ? upperChars : "";
  allChars += Numbers.checked ? allNumbers : "";
  allChars += Symbols.checked ? allSymbol : "";

  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }

  // for discide the password length using loop condition
  let i = 1;
  while (i <= inputslider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return genPassword;
}
// Use for copyIcons
copyIcon.addEventListener("click", () => {
  if (PassBox.vale != "" || PassBox.vale.lenght >= 1) {
    navigator.clipboard.writeText(PassBox.value);
    copyIcon.innerText = "check"; //for show check inco after copy the password
    copyIcon.title = "Passwword Copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
