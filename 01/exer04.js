function experienceLevel(years) {
    if (yearsStuding < 2) {
        console.log("Begginer");
    } else if (yearsStuding >= 2 && yearsStuding < 4) {
        console.log("Intermediate");
    } else if (yearsStuding > 3 && yearsStuding < 7) {
        console.log("Advanced");
    } else {
        console.log("Master")
    }
}
const yearsStuding = 16;
experienceLevel(yearsStuding);

// 0 - 1: Begginer
// 1 - 3: Intermediate
// 3 - 6: Advanced
// 7+: Master