

const scriptURL = 'https://script.google.com/macros/s/AKfycbw2xr1_az77B7LpbERp08E07N1prtJK4P6m-qw6DQoKOo8ND9BvtIBEN8z0-veu0glkhQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Thank You For Subscribing!"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
    })