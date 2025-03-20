function validateName(name) {
    try {
        // Regex: Starts with a capital letter, followed by at least two more letters
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/;

        if (namePattern.test(name)) {
            console.log(`${name} is a valid name.`);
        } else {
            throw new Error(`${name} is not a valid name.`);
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Test Cases
validateName("John"); //  Valid
validateName("jo");   //  Error
validateName("james"); // Error
validateName("J");    // Error
