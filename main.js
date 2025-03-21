// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Select modal and all heart elements
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const hearts = document.querySelectorAll(".like-glyph");

// Add event listeners to each heart
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    // Simulate a server request
    mimicServerCall()
      .then(() => {
        // If successful, toggle heart between empty and full
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        // Display error modal
        modalMessage.textContent = error;
        modal.classList.remove("hidden");

        // Hide modal after 3 seconds
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
mimicServerCall()