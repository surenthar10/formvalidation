function handleEmpty(element) {

    let elementValue = element.value
    if (elementValue == "") {
        console.log('bad');
        element.classList.add("error");
    } else {
        console.log('good');
        element.classList.remove("error");
        element.classList.add("suc");
    }
}

 function onSubmit() {

    //fname start//
    let fnameElement = document.getElementById('fname');
    handleEmpty(fnameElement)

    // middle  start//
    let mnameElement = document.getElementById('mname');
    handleEmpty(mnameElement)

    //last name start//
    let lnameElement = document.getElementById('lname');
    handleEmpty(lnameElement)

    // country //

    let countryElement = document.getElementById('country');
    handleEmpty(countryElement)

    // date of birth //

    let dobElement = document.getElementById('dob');
    handleEmpty(dobElement)

     //gender //

    let gender=document.getElementsByName('gender');
    
    //check any one option is checked //
    if(gender[0].checked || gender[1].checked) {
        console.log( "gender is correct")
        
    }
    else{
        console.log( "gender is wrong")
        gender[0].classList.add("error");
        gender[1].classList.add("error");
    }
    //number start//

    let numberElement = document.getElementById('number');

    numbervalue = numberElement.value
    if (numbervalue.length !== 10) {
        console.log('bad');
        numberElement.classList.add("error");
    } else {
        console.log('good');
        numberElement.classList.remove("error");
        numberElement.classList.add("suc");
    }

    // email start //

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailElement = document.getElementById('email');

    emailvalue = emailElement.value

    //  if(emailvalue==""){
    if (emailvalue.match(mailformat)) {
        console.log('good');
        emailElement.classList.add("suc");
    }

    else {
        console.log('bad');
        emailElement.classList.remove("suc");
        emailElement.classList.add("error");
    }

     // password //

    let pass = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    passwordElement = document.getElementById('password');

    passwordvalue = passwordElement.value
    if (passwordvalue.match(pass)) {
        console.log('good');
        passwordElement.classList.add("suc");
        // c-password star //
        let cpassElement = document.getElementById('cpass');

        cpassvalue = cpassElement.value
        if (cpassvalue.match(passwordvalue)) {
            console.log('good');
            cpassElement.classList.add("suc");
        } else {
            console.log('bad');
            cpassElement.classList.remove("suc");
            cpassElement.classList.add("error");
        }
    } else {
        console.log('bad');
        passwordElement.classList.remove("suc");
        passwordElement.classList.add("error");
    }

   // bio start //

    let bioElement = document.getElementById('bio');

    biovalue = bioElement.value
    if (biovalue.length < 200) {
        console.log('bad');
        bioElement.classList.add("error");
    } else if (biovalue.length > 200) {
        console.log('good');
        bioElement.classList.remove("error");
        bioElement.classList.add("suc");
    }

}
