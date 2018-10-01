//Regular expressions udes for input validation
var regexpName = new RegExp("^[a-zA-z\\s]{1,20}$");
var regexpPhone = new RegExp("^[0-9]{6,20}$");
var regexpEmail = new RegExp("^[\\w\\.\\-\\_]+@\\w+\\.\\w{2,5}$");

var alertName = 
    `Name must:
    <ul>
        <li>not include numbers or special characters</li> 
        <li>be 1-20 characters long</li>
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


$(".usr_input").keyup(function() {
    var input = this.value;
    var elem_id = this.id;

    var regexp = getRegexp(elem_id); 
    var alertString = getAlertString(elem_id);

    if (regexp.test(input)) {
        $("#"+elem_id).parent().find(".alert").show().html("Valid").css("background-color", "rgba(62, 209, 49, 0.548)");
        $(this).attr("data-valid", "true");
    }
    else {
        $("#"+elem_id).parent().find(".alert").show().html(alertString).css("background-color", "rgba(209, 49, 49, 0.548");
        $(this).attr("data-valid", "false");
    }
})

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