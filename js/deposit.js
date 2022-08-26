



const deposit_Button = document.getElementById('deposit-btn');

deposit_Button.addEventListener('click',function(){
    const deposit_input_field= document.getElementById('deposit-input');
    const deposit_input_string = deposit_input_field.value;
    const deposit_input_value = parseFloat(deposit_input_string);

    let deposit_output_value = document.getElementById('deposit-output');
    let previous_deposite_String = deposit_output_value.innerText;
    let previous_deposite_value = parseFloat(previous_deposite_String);

    let total_deposit_value =  previous_deposite_value + deposit_input_value;
    
    deposit_output_value.innerText =  total_deposit_value;

   
    
    deposit_input_field.value = '';

    let balance_output_tag = document.getElementById('balance-output');
    let balance_output_String = balance_output_tag.innerText;
    let  balance_output_Value = parseFloat(balance_output_String);

        balance_output_Value = balance_output_Value + deposit_input_value;

        balance_output_tag.innerText = balance_output_Value;
});

 // if(deposit_input_value >= 'a' && deposit_input_value <= 'z' || deposit_input_value>= 'A' && deposit_input_value <= 'Z' || deposit_input_value > balance_output_value || deposit_input_value <= -1){
    //     alert("Wrong Input");
    // }else if(deposit_input_value >= 1 && deposit_input_value <= balance_output_value ) 
    // {
    //     deposit_output_value.innerText = deposit_input_value;
    // }
   