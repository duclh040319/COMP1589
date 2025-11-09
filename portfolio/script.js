const btnSubmit = document.querySelector(".send__message");
const fullNameInput = document.getElementById('fullName')
const emailInput = document.getElementById('email')
const messageInput =document.getElementById('message')

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Full Name: ${fullNameInput.value} \n Email: ${emailInput.value} \n Message: ${messageInput.value}`)
});
