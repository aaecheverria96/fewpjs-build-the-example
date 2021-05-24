// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  const allHearts = document.querySelectorAll(".like-glyph")
  allHearts.forEach(heart => heart.addEventListener("click", handleLike))
  function handleLike(event) { 
    mimicServerCall("SuperFakeURL") 
    .then(rspon => { 
      if (event.target.innerText === FULL_HEART ) { 
        event.target.innerText = EMPTY_HEART 
        event.target.style.color = ""
      } else { 
        event.target.innerText = FULL_HEART 
        event.target.style.color = "red"
      }
      
    }) 
    .catch( error => { 
     const modalMessage = document.querySelector("#modal-message") 
     modalMessage.innerText = error 
     modalMessage.parentElement.classList.remove("hidden") 
     setTimeout(() => modalMessage.parentElement.classList.add("hidden"), 3000  )
    })
  } 



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
