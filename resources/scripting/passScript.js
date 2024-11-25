function generatePassword() {
    const length = document.getElementById("length").value;
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeSymbols = document.getElementById("include-symbols").checked;
  
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let characters = "";
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
  
    if (!characters) {
      alert("Please select at least one character type!");
      return "";
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
  document.getElementById("generate-btn").addEventListener("click", () => {
    const password = generatePassword();
    document.getElementById("password").value = password;
  });
  
  document.getElementById("copy-btn").addEventListener("click", () => {
    const password = document.getElementById("password").value;
    if (!password) {
      alert("No password to copy!");
      return;
    }
    navigator.clipboard.writeText(password)
      .then(() => alert("Password copied to clipboard!"))
      .catch(err => alert("Failed to copy password!"));
  });
  