const scriptURL =
    'https://script.google.com/macros/s/AKfycbzBoOoqFVyO2WFwxTI7ur7XQKmB2fvpwQ7ejMvjhUEWbjZp1rmEw2QrRUtw-2qwwAUL/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})