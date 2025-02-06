document.getElementById("noButton").addEventListener("click", function() {
    // Change "No" to "Yes"
    this.textContent = "Yes";
    this.style.backgroundColor = "#4caf50";
    this.removeEventListener("click", arguments.callee);
  });
  
  document.getElementById("yesButton").addEventListener("click", function() {
    // Redirect to the roses page
    window.location.href = "roses.html";
  });