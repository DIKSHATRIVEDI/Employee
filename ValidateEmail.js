const email = "abc.xyz@bridgelabz.co.in";
const emailPattern = /^abc(\.[a-z]+)?@bridgelabz\.co(\.[a-z]{2})?$/;

if (emailPattern.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
