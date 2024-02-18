function validate(formObj) {
    // put your validation code here
    // it will be a series of if statements
 
    var alertText = "";
    var focusSet = 0;
 
    if (formObj.email.value == "") {
       alertText += alertText + "You must enter a username\n";
       formObj.email.focus();
       focusSet = 1;
    }
 
    if (formObj.password.value == ""){
       alertText += "You must enter a password\n";
       if(focusSet == 0){
          formObj.password.focus();
          focusSet = 1;
       }
    }
    
    if(focusSet==0){
        alert("Successfully Submitted");
        location.href = "dashboard.html";
    } 
    else {
        alert(alertText);
        return false;
    }
} 