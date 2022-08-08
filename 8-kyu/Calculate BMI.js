/*Write function bmi that calculates body mass index (bmi = weight / height2).

    if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */
/*если ИМТ <= 18,5, вернуть "Недостаточный вес"

если ИМТ <= 25,0, вернуть «Нормальный»

если ИМТ <= 30,0 вернуть "Избыточный вес"

если ИМТ > 30, верните «Ожирение». */
function bmi(weight, height) {
    let bmi=weight/height/height;
    return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}


// console.log(bmi(80, 1.80));
