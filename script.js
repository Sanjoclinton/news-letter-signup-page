//Constants
const firstPage = document.querySelector('.first-page');
const success = document.querySelector('.success-page');
const form = document.querySelector('form');
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const dismiss = document.querySelector('#dismiss');
const error = document.querySelector('.error');

// events 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateEmail();
    document.querySelector('#email-inner').innerText = email.value;
});

dismiss.addEventListener('click', function() {
    success.classList.toggle('hide');
    firstPage.classList.toggle('hide');
    email.value = "";
});


//Functions

function validateEmail() {
    if( email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ){
        error.classList.add('hide');
        firstPage.classList.toggle('hide');
        success.classList.toggle('hide');
        console.log("matches");
        return true;
    } else {
        error.classList.remove('hide');
        console.log('does not match');
        return false;
    }
};









