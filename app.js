const inputField = document.querySelector('input'),
button = document.querySelector('button'),
qrDisplay = document.querySelector('#qr-display'),
spinner = '<div class="spinner-border text-danger"></div>';

button.addEventListener('click', generateQR);
inputField.addEventListener('input', () => {
    qrDisplay.innerHTML = '';
});

function generateQR(e) {
    e.preventDefault();
    if(!inputField.value) return XSAlert({
        title: 'Invalid input',
        message: 'Input is empty',
        icon: 'error',
        hideCancelButton: true
    });
    qrDisplay.innerHTML = spinner;
    setTimeout(() => {
        qrDisplay.innerHTML = '';
        try {
            new QRCode(qrDisplay, inputField.value);
        } catch(err) {
            XSAlert({
                title: 'Error',
                message: err,
                icon: 'error',
                hideCancelButton: true
            });
        }
    }, 1000)   
}
