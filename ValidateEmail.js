const email = "abc@bridgelabz.co";
const emailPattern = /^abc@bridgelabz\.[a-z]{2,3}$/;

if (emailPattern.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
