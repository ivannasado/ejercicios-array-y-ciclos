let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography','Spanish', 'Programming'];
console.log(student1Courses, student2Courses);

const commonCourses = student1Courses.filter((course) => student2Courses.includes(course));

console.log("Common courses: " + commonCourses);