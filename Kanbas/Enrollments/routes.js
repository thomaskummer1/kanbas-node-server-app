import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.send(enrollments);
    });
    app.post("api/enrollments/:course/:user", (req, res) => {
        const { course, user } = req.body;
        const enrollment = {course: course, user: user};
        console.log(enrollment);
        const newEnrollment = dao.createEnrollment();
        res.send(newEnrollment);
    });
    app.delete("/api/enrollments/:enrollment", (req, res) => {
        const { enrollment } = req.params;
        console.log(enrollment);
        const status = dao.deleteEnrollment(enrollment);
        res.send(status);
    });
}