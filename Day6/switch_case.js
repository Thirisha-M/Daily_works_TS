function checkDay(day) {
    switch (day.toLowerCase()) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "It's a weekday.";
        case "saturday":
        case "sunday":
            return "It's the weekend!";
        default:
            return "Invalid day.";
    }
}
console.log(checkDay("Monday"));
console.log(checkDay("Saturday"));
console.log(checkDay("Funday"));
//example 2
function checkGrade(score) {
    switch (true) {
        case score >= 90 && score <= 100:
            return "Grade: A (Excellent)";
        case score >= 80 && score < 90:
            return "Grade: B (Very Good)";
        case score >= 70 && score < 80:
            return "Grade: C (Good)";
        case score >= 60 && score < 70:
            return "Grade: D (Needs Improvement)";
        case score >= 50 && score < 60:
            return "Grade: E (Just Passed)";
        case score >= 0 && score < 50:
            return "Grade: F (Failed)";
        default:
            return "Invalid score. Please enter a number between 0 and 100.";
    }
}
console.log(checkGrade(95));
console.log(checkGrade(85));
console.log(checkGrade(75));
console.log(checkGrade(65));
console.log(checkGrade(55));
