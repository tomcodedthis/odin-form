const password = document.querySelector('#password');
const confirmP = document.querySelector('#confirm-p');
const validate = document.querySelectorAll('.validate');

confirmP.addEventListener('input', checkP);
validate.forEach(input => input.addEventListener('input', ifValid))

function checkP() {

    if (confirmP.value == password.value) {
      
        return true
        
    } else {

        return false

    }
}

function ifValid(e) {

    if ((e.target.checkValidity() && e.target != confirmP)|| 
    (checkP() && e.target.checkValidity())) {

        e.target.style.background = 'url(images/check.png)';
        e.target.style.backgroundColor = 'var(--white)';
        e.target.style.backgroundSize = '25px';
        e.target.style.backgroundRepeat = 'no-repeat';
        e.target.style.backgroundPosition = '96% center';

    } else {

        e.target.style.background = 'url(images/cancel.png)';
        e.target.style.backgroundColor = 'var(--white)';
        e.target.style.backgroundSize = '25px';
        e.target.style.backgroundRepeat = 'no-repeat';
        e.target.style.backgroundPosition = '96% center';

    }

}