//Regular expressions udes for input validation
var regexpName = new RegExp("^[a-zA-z]+$");
var regexpPhone = new RegExp("^[0-9]+$");
var regexpEmail = new RegExp("^\\w+\\.?\\w*@\\w+\\.\\w{2,5}$");



$(".usr_input").keyup(function() {
    var input = this.value;
    var elem_id = this.id;

    var regexp = getRegexp(elem_id); 

    if (regexp.test(input)) {
        $("#"+elem_id).parent().find(".alert").text("yes");
    }
    else {
        $("#"+elem_id).parent().find(".alert").text("no");
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
    };
}
