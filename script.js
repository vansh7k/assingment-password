async function crackSHA256Hash() {
  const targetHash = sha256HashView.innerText; // Get the displayed hash
  if (!targetHash || targetHash === "Calculating...") {
    console.log("Hash not available yet!");
    return;
  }

  console.log(`Target SHA256 Hash: ${targetHash}`);
  for (let num = MIN; num <= MAX; num++) {
    const hash = await sha256(num.toString());
    if (hash === targetHash) {
      console.log(`Found match! The original number is: ${num}`);
      resultView.innerHTML = `✅ Found! The number is <strong>${num}</strong>`;
      return;
    }
  }
  
  console.log("No match found!");
  resultView.innerHTML = "❌ No match found!";
}

// Add a button to trigger the brute-force attack
const crackButton = document.createElement("button");
crackButton.innerText = "Crack Hash";
crackButton.addEventListener("click", crackSHA256Hash);
document.body.appendChild(crackButton);
