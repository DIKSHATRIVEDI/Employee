const pinCode = "400 088";
const pinCodePattern = /^[1-9][0-9]{2}\s?[0-9]{3}$/;

if (pinCodePattern.test(pinCode)) {
    console.log("Valid PIN Code");
} else {
    console.log("Invalid PIN Code");
}
