const emailInput = document.getElementById('email')
const errorMessage = document.getElementById("error-message")

emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        errorMessage.style.display = 'block';
    }else{
        errorMessage.style.display = 'none'
    }
})