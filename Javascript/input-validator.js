//--------RegEx------------
//Name: /^[a-zA-z]+$/
//Phone: /^[0-9]+$/
//E-mail: /^\w+\.?\w*@\w+\.\w{2,4}$/

var regexpName = new RegExp("^[a-zA-z]+$");
var regexpPhone = new RegExp("^[0-9]+$");
var regexpEmail = new RegExp("^\w+\.?\w*@\w+\.\w{2,4}$");

$("#alert_first_name").text("yo");

$(".usr_input").keyup(function() {
    var input = this.value;
    var id = this.id;

    var regexp = (id) => {
        var regexp = new RegExp();
    
        switch (id) {
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
    };

    $("#alert_first_name").text("lo");

    if (regexp.test(input)) {
        $("#alert_first_name").text("yes");
    }
    else {
        $("#alert_first_name").text("no");
    }
})
