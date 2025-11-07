function getGradeEvaluation(grade) {
    switch (grade) {
        case "A":
            return "Excellent!";
        case "B":
            return "Good";
        case "C":
            return "Average";
        case "D":
            return "Poor";
        case "F":
            return "Fail";
        default:
            return "Invalid grade";
    }
}