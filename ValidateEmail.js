const email = "abc.xyz@bridgelabz.co.in";
const emailPattern = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-z]{2})?$/;

if (emailPattern.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
