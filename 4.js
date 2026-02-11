// Garden Plot Assignment

// Write a function gardenAssignment that takes hours, plantType and returns a qualification status with section assignment.
// The function determines if a gardener qualifies for a dividend warrant (needs 10+ hours) and assigns them to their preferred garden section.

// Conditions:

// If hours >= 10: return "qualified-" + their plant section
// If hours < 10: return "not qualified"
// Parameters:

// hours (number): Hours worked by the gardener
// plantType (string): Either "vegetable" or "flower"
// Returns: Qualification status string. Format: "qualified-vegetable" or "not qualified"

function gardenAssignment(hours, plantType) {
    if (hours >=10){
        return "qualified-" + plantType;
    }else{
        return "not qualified"
    }
}

gardenAssignment(12, "vegetable"); // "qualified-vegetable"
gardenAssignment(8, "flower");     // "not qualified"