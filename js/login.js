const submit_btn = document.getElementById('submit-btn');

submit_btn.addEventListener('click',function(){
    const email = document.getElementById('email').value;

    const pass1 = document.getElementById('pass');
    const pass_value = pass1.value;

    if(email === 'a@gmail.com' && pass_value === '123'){
        alert("login success");
        window.location.href = 'home.html';
    }else{
        alert("Can not login")
    }
    
})