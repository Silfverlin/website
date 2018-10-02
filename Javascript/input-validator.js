//Regular expressions udes for input validation
var regexpName = new RegExp("^[a-zA-z\\s]{3,20}$");
var regexpPhone = new RegExp("^[0-9]{6,20}$");
var regexpEmail = new RegExp("^[\\w\\.\\-\\_]+@\\w+\\.\\w{2,5}$");

var alertName = 
    `Name must:
    <ul>
        <li>not include numbers or special characters</li> 
        <li>be 3-20 characters long</li>
    </ul>`
var alertPhone = 
    `Phone number must:  
    <ul>
        <li>follow the format '123456789'</li> 
        <li>not include letters or special characters</li> 
        <li>be 6-20 characters long</li>
    </ul>`
var alertEmail = 
    `E-mail must:
    <ul>
        <li>follow the format 'name@mail.com'</li> 
        <li>not include special characters other than following: _ - .</li>
    </ul>`

//Function runs on each key release in the form inputs
$(".usr_input").keyup(function() {
    var input = this.value;
    var elem_id = this.id;

    var regexp = getRegexp(elem_id); 
    var alertString = getAlertString(elem_id);

    //If user input matches the regular expression, the input is
    //marked as valid. Otherwise, it's marked as not valid.
    if (regexp.test(input)) {
        $("#"+elem_id).parent().find(".alert").show().html("Valid").css("background-color", "rgba(62, 209, 49, 0.548)");
        $(this).attr("data-valid", "true");
    }
    else {
        $("#"+elem_id).parent().find(".alert").show().html(alertString).css("background-color", "rgba(209, 49, 49, 0.548");
        $(this).attr("data-valid", "false");
    }

    //Checks if the textarea is empty or consists of only
    //empty spaces
    if (!$.trim($("#textarea").val())) {
        $("#textarea").attr("data-valid", "false");
    }
    else {
        $("#textarea").attr("data-valid", "true");
    }
})

//Returns the corrext regex, depending on user activity 
function getRegexp() {
    {
        var regexp = new RegExp();
        var elem_id = arguments[0];
    
        switch (elem_id) {
            case "input_first_name":
                //fall-through
            case "input_last_name":
                regexp=regexpName;
                break;
            case "input_phone":
                regexp=regexpPhone;
                break;
            case "input_email": {
                regexp=regexpEmail;
                break;
            }
        }
        return regexp;
    }
}

//Selects the relevant alert message, depending
//on user ativity 
function getAlertString() {
    var elem_id = arguments[0];

    switch (elem_id) {
        case "input_first_name":
            //fall-through
        case "input_last_name":
            alertString=alertName;
            break;
        case "input_phone":
            alertString=alertPhone;
            break;
        case "input_email": {
            alertString=alertEmail;
            break;
        }
    }
    return alertString;
}

//Looks through all input fields to determine if they all
//have valid inputs
function getFormReady() {
    $(".usr_input").each(function() {
        console.log(this.getAttribute("data-valid"));
    });
    var formReady = true;
    var inputArr = $(".usr_input");

    for (i = 0; i<inputArr.length; i++) {
        if (inputArr[i].getAttribute("data-valid") == "false") {
            formReady = false;
            return formReady;
        }
    }
    return formReady;
}

//If the form is ready, it gets submitted
//Otherwise, the user gets a notification 
$(".submit").click(function() {
    if (getFormReady()) {
        $("#form").submit();
        alert("Your message has been sent!");
        $("#form")[0].reset();
        $(".alert").hide();
    }
    else {
        alert("Please make sure all fields have been filled properly");
    }
})