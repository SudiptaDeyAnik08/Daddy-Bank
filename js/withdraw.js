const withdraw_Button = document.getElementById('withdraw-btn');

withdraw_Button.addEventListener("click",function(){
    // withdraw area input 
    const withdraw_input_tag = document.getElementById('withdraw-input');
    const withdraw_input_Sting = withdraw_input_tag.value;
    let withdraw_input_value = parseFloat(withdraw_input_Sting);

    // withdraw area output
    const withdraw_output_tag = document.getElementById('withdraw-output');
    const withdraw_output_String = withdraw_output_tag.innerText;
    let withdraw_output_value = parseFloat(withdraw_output_String);

    let total_withdraw_value = withdraw_output_value +  withdraw_input_value;
    


    withdraw_output_tag.innerText = total_withdraw_value;

    //balance arear output
    const balance_output_tag = document.getElementById('balance-output');
    const balance_output_String = balance_output_tag.innerText;
    let balance_output_value = parseFloat(balance_output_String);

    balance_output_value = balance_output_value - withdraw_input_value;

    balance_output_tag.innerText = balance_output_value;


    withdraw_input_tag.value = '';





})

document.getElementById('Logout-btn').addEventListener('click',function(){
    window.location.href = 'index.html';
})