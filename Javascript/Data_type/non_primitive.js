const student = {
    fullName: "Krishna Kumar Sah",
    age:30,
    cgpa:3.8,
    isPassed: true,
    subjects: ["Math", "Science", "English"],
};
console.log(student.fullName); // "Krishna Kumar Sah"
console.log(student.age); // 30
console.log(student.cgpa); // 3.8
console.log(student.isPassed); // true
console.log(student.subjects); // ["Math", "Science", "English"]

student.age=student.age+1;
console.log(student.age); // 31
student.age=20;
console.log(student.age); // 20
student.fullName=student.fullName+"sonar";
console.log(student.fullName); // "Krishna Kumar Sahsonar"