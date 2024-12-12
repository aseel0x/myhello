
console.log("Application ready");
document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value.trim();
    
    if (!name || !email || !rating || !comments) {
      alert("Please fill out all fields before submitting.");
      return;
    }
  
    document.getElementById("feedback-form").reset();
    document.getElementById("thank-you-message").classList.remove("hidden");
  });