let outputScreen=document.getElementById("calculate")
function display(num){
    outputScreen.value+=num;
}
function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value)
    }
    catch(err){
        alert("invalid calculation")
    }
}
function Clear(){
    outputScreen.value="";

}
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
function Validate(e) {
        var keyCode = e.keyCode || e.which;
    //Regex for Numbers.
        var regex = /^[0-9]+$/;
 
        //Validate TextBox value against the Regex.
        var isValid = regex.test(String.fromCharCode(keyCode));
        if (!isValid) {
            alert("only numbers are allowed ");
        }
 
        return isValid;
    }