document.getElementById("dogInput").addEventListener("input", function() {
  const inputValue = this.value;
  const options = document.querySelectorAll("#options option");
  const tailleElement = document.getElementById("taille"); // Get the paragraph

  options.forEach(option => {
      if (option.value === inputValue) {
          console.log("Selected option:", option.value);
          console.log("Taille:", option.getAttribute("data-taille"));
          // Update the <p> content with the selected dog's taille
          tailleElement.textContent = "Taille: " + option.getAttribute("data-taille");
      }
  });
});

// Clear the input when clicking but allow typing
document.getElementById("dogInput").addEventListener("click", function() {
  setTimeout(() => {
      this.value = ""; // Clear the input after click
  }, 0); // Ensures focus is not lost
});