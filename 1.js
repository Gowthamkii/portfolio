document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
      // Here you can perform any additional validation before sending the form data
      // For simplicity, let's just log the form data and display a confirmation message
  
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
  
      // Clear the form fields
      form.reset();
  
      // Display a confirmation message
      const confirmationMessage = document.createElement("p");
      confirmationMessage.textContent = "Message sent successfully!";
      form.appendChild(confirmationMessage);
    });
  });
  