const email = "abc@bridgelabz.co";
const emailPattern = /^abc@bridgelabz\.co$/;

if (emailPattern.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
