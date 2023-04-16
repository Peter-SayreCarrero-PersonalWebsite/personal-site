// What exactly do I need to put here?

const whyeven = `Why are we here? Just to suffer? It must be really cool that only you can read this specific message here. Congrats, you inspected this page's element and clicked onto the console.`
console.log(whyeven)

const form = document.querySelector("form")
const submitButton = document.querySelector("submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})