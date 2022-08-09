function getGrade (s1, s2, s3) {
    // Code here
    let abs=(s1+s2+s3)/3;
    return abs<=100 && abs>=90 ? "A" :
        abs<90 && abs>=80 ? "B" :
            abs<80 && abs>=70 ? "C" :
                abs<70 && abs>=60 ? "D" : "F";

}
// console.log(getGrade(95,90,93));