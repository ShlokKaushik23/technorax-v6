// Form Entry to Google stylesheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzRFmI0f-T0Qd0hOUh8Y6gpYc2fHIo_RO3aum2AzWNtos68okc/exec'
            const form = document.forms['google-sheet']

            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for registering for RECKON-O-RAX ! We'll contact you soon"))
                .catch(error => console.error('Error!', error.message))
            });
