import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export function findAllEnrollments() {
  return Database.enrollments;
}
export function createEnrollment(enrollment) {
  const newEnrollment = { ...enrollment, _id: Date.now().toString() };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}
export function deleteEnrollment(enrollment) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((i) => i.user !== enrollment.user && i.course !== enrollment.course);
}