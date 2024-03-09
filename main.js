function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// top button
$("#top-button").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// end topbar

// Google tag (gtag.js) 
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-H534MSNVQH');
//end Google tag (gtag.js) 



// -------------------------- form----send mail with api-------------------------------------------------------
const sendButton = document.querySelectorAll('.send-button');

sendButton.forEach(button => {
  button.addEventListener('click', function () {
    const form = this.closest('form');

    const email = form.querySelector('input[name="email"]').value;
    const category = form.querySelector('select[name="category"]').value;
    const subject = form.querySelector('input[name="subject"]').value;
    const question = form.querySelector('textarea[name="question"]').value;
    const word_count = form.querySelector('input[name="word_count"]').value;
    const due_date = form.querySelector('input[name="due_date"]').value;
    const contact = form.querySelector('input[name="contact"]').value;




    // Create a FormData object to send the file
    const formData = new FormData();
    const assignment_attachment = form.querySelector('input[name="assignment_attachment"]').files[0];
    if (assignment_attachment) {
      formData.append('assignment_attachment', assignment_attachment);
    }

    formData.append('email', email);
    formData.append('category', category);
    formData.append('subject', subject);
    formData.append('question', question);
    formData.append('word_count', word_count);
    formData.append('due_date', due_date);
    formData.append('contact', contact);

    // Make a POST request to the email API endpoint
    fetch('https://server.teachercool.com/api/v1/free-assistance', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // alert(data.message); // Display the response from the API
        displayModal('Please enter required field: ' + data.message + ' data');


      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});

// ESSAY MODAL 
function essasy(e) {
  let id=e.id;
  const element=document.getElementById(id)
  let innerText=element.innerHTML;

  let tagetElement=document.getElementById("servicesHeading")
  // console.log(e);
  tagetElement.innerHTML = innerText+" Help Support";
}


// Modal for Alert message
// Function to display the modal with a custom message
function displayModal(message) {
  const modal = document.getElementById('customModal');
  const modalMessage = document.getElementById('modalMessage');
  const closeBtn = document.querySelector('.close');

  modalMessage.textContent = message;
  modal.style.display = 'block';

  // Close the modal when the user clicks on the close button
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  // Close the modal when the user clicks anywhere outside of it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}

// Aos
AOS.init({
  offset: 30,
  duration: 200,
  easing: 'ease-in',
  delay: 10,
});


// ----smpt

function sendEmail(){

  Email.send({
    Host : "smtp.smpt.gmail.com",
    Username : "amity4508@gmail.com",
    Password : "8808466347",
    To : 'amit1001009@gmail.com',
    From : document.getElementById("email").value ,
    Subject : "new contact form enquiry",
    Body : "Name:" + document.getElementById("name").value
    + "<br> Email" + document.getElementById("email").value
    + "<br> Phone No" + document.getElementById("phone").value
    + "<br> Message" + document.getElementById("message").value 
}).then(
  message => alert("Message Sent Succesfully")
);
}

