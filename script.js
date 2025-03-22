function validate(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message ='';
    if(email === ''){
        message = 'pls enter email';
        msgBox.style.color = 'red';
    } else if(pass === ''){
        message = 'Password must be atleast 8 characters';
        msgBox.style.color = 'red';
    } else if(age === ''){
        message = 'age must be between 12 and 50.';
        msgBox.style.color = 'red';
    }
    else{
        message = 'Form submitted successfully';
        msgBox.style.color = 'green';
    } 
    msgBox.innerText = message;}
