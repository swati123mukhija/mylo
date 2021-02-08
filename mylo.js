function validateFields() {
    var pincode =
        document.forms["RegForm"]["pincode"];
    var flat =
        document.forms["RegForm"]["flat"];
    var locality =
        document.forms["RegForm"]["locality"];
    var fullName =
        document.forms["RegForm"]["fullName"];
    var phoneNo =
        document.forms["RegForm"]["phoneNo"];


    if (pincode.value == "") {
        var a = document.getElementsByClassName('sme-txt-box');
        a[0].className += " input-validation-error ";
        window.alert("Please enter your pincode.");
        pincode.focus();
        return false;
    } else if (pincode.value.length < 6) {
        window.alert("Please enter your valid pincode");
        pincode.focus();
        return false;
    } else {
        var a = document.getElementsByClassName('sme-txt-box');
        a[0].classList.remove("input-validation-error");

    }

    if (flat.value == "") {
        var a = document.getElementsByClassName('sme-txt-box');
        a[1].className += " input-validation-error ";
        window.alert("Please enter your flat.");
        flat.focus();
        return false;
    } else {
        var a = document.getElementsByClassName('sme-txt-box');
        a[1].classList.remove("input-validation-error");
    }

    if (locality.value == "") {
        var a = document.getElementsByClassName('sme-txt-box');
        a[2].className += " input-validation-error ";
        window.alert(
            "Please enter a valid locality address.");
        locality.focus();
        return false;
    } else {
        var a = document.getElementsByClassName('sme-txt-box');
        a[2].classList.remove("input-validation-error");
    }

    if (fullName.value == "") {
        var a = document.getElementsByClassName('sme-txt-box');
        a[3].className += " input-validation-error ";
        window.alert(
            "Please enter your fullName.");
        fullName.focus();
        return false;
    } else {
        var a = document.getElementsByClassName('sme-txt-box');
        a[3].classList.remove("input-validation-error");
    }

    if (phoneNo.value == "") {
        var a = document.getElementsByClassName('sme-txt-box');
        a[4].className += " input-validation-error ";
        window.alert("Please enter your phoneNo");
        phoneNo.focus();
        return false;
    } else if (phoneNo.value.length < 10) {
        window.alert("Please enter your valid phoneNo");
        phoneNo.focus();
        return false;
    } else {
        var a = document.getElementsByClassName('sme-txt-box');
        a[4].classList.remove("input-validation-error");
    }


    return true;
}



function numberOnly(id) {
    var element = document.getElementById(id);
    var regex = /[^0-9]/gi;
    element.value = element.value.replace(regex, "");
};