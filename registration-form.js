const scriptURL = "https://script.google.com/macros/s/AKfycbzUZ0HhWXZVy5jfv9fmThQ-VZBHPzu3VN13GV4-Lfdx3Hs9OBfsieCWaKk1De1AVxiV/exec"
const form = document.forms['Sign-Up-Form' ]

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))

})