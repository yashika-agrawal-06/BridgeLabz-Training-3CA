/**
 * Q10. Citizen Eligibility Validator
 * Logic: Evaluates service eligibility by combining age and citizenship status criteria.
 */

const userAge = 19;
const isCitizen = true;

// Multi-branch eligibility logic
if (isCitizen && userAge >= 18) {
    if (userAge >= 18 && userAge <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Eligible for all services.");
    }
} else if (!isCitizen && userAge >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}
